// Structural checks for v2 journeys (run: npm run check:journeys).
// No test framework in the project — plain node + assert.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolveLevel, resolveWeek } from '../src/constants/journeys/schema.js'
import { CORE_V2_META as META, CORE_V2_WEEK_1 as W1, CORE_V2_PEOPLE as PEOPLE, CORE_V2_W12_THEN_AND_NOW as W12 } from '../src/constants/journeys/coreV2.js'
import { responsePatch, getResponse, comparison, responsesKey } from '../src/constants/journeys/responses.js'

// studentDbSlice lives in utils.js, which reads import.meta.env (Vite only);
// evaluate just that function's source so the real code is what gets tested.
const utils = readFileSync(new URL('../src/utils.js', import.meta.url), 'utf8')
const sliceSrc = utils.slice(utils.indexOf('const SHARED_JOURNEY_KEY'), utils.indexOf('// Safe student list'))
const studentDbSlice = new Function(`${sliceSrc.replace('export function', 'function')}; return studentDbSlice`)()

const SAFE = /^[A-Za-z0-9_-]+$/
const KINDS = ['prepare', 'engage', 'check', 'notice', 'try', 'act', 'chat', 'compare', 'reflect']
const AUTHORED = ['A1', 'A2', 'B1', 'B2']
let checks = 0
const ok = (cond, msg) => { checks++; assert.ok(cond, msg) }

// ── levels policy
ok(resolveLevel(META, 'A1').status === 'in-target', 'A1 in target')
ok(resolveLevel(META, 'B1').status === 'in-target', 'B1 in target')
ok(resolveLevel(META, 'B2').status === 'extension', 'B2 is extension')
for (const lv of ['C1', 'C2']) {
  const r = resolveLevel(META, lv)
  ok(r.status === 'above' && r.level === 'B2' && r.note?.pt, `${lv} capped with a stated reason`)
}
ok(resolveLevel(META, undefined).level === META.baseLevel, 'unknown level → base')
assert.throws(() => resolveLevel({ ...META, aboveRange: { policy: 'cap' } }, 'C1'), 'cap without justification must fail')
checks++

// ── week 1 structure, per level
const slots = new Set()
const ids = new Set()
for (const t of W1.tasks) {
  ok(SAFE.test(t.id) && !ids.has(t.id), `id ${t.id} unique + Firebase-safe`); ids.add(t.id)
  for (const lv of AUTHORED) ok(Number.isFinite(t.minutes?.[lv]), `${t.id} minutes ${lv}`)
}
for (const lv of AUTHORED) ok(W1.levelProfile[lv]?.cefr?.length, `levelProfile ${lv}`)

for (const lv of [...AUTHORED, 'C1']) {
  const w = resolveWeek(META, W1, lv)
  for (const t of w.tasks) {
    const sids = t.steps.map(s => s.id)
    ok(new Set(sids).size === sids.length, `${t.id}@${lv} unique step ids`)
    for (const s of t.steps) {
      const where = `${t.id}.${s.id}@${lv}`
      ok(KINDS.includes(s.kind), `${where} kind ${s.kind}`)
      ok(s.say?.en && s.say?.pt, `${where} instruction in both languages`)
      for (const k of ['saveAs', 'ref']) if (s[k]) { ok(SAFE.test(s[k]), `${where} ${k} safe`); if (k === 'saveAs') slots.add(s[k]) }
      if (s.kind === 'check' && s.mode === 'choice') ok(s.questions?.length, `${where} choice has questions`)
      if (s.kind === 'check' && s.mode === 'match') ok(s.pairs?.length, `${where} match has pairs`)
      if (s.kind === 'engage' && s.input.type === 'audio') {
        ok(s.input.rates?.includes(s.input.rate), `${where} default rate offered`)
        ok(['after-first', 'always'].includes(s.input.transcript), `${where} transcript stays reachable`)
      }
      if (s.kind === 'chat') {
        const you = s.turns.filter(x => x.you).map(x => x.you)
        ok(you.some(y => y.expects === 'question'), `${where} student asks at least one own question`)
        for (const y of you) {
          ok(y.starters?.length && y.criteria?.length, `${where} turn has starters + criteria`)
          ok(y.model || y.models, `${where} turn has a possible answer`)
          // starters are partial phrases, not full answers to pick
          ok(y.starters.every(st => /…|\.\.\.|^(Yes|Sure|Thank)/.test(st)), `${where} starters are partial: ${y.starters}`)
          if (y.models) for (const p of Object.keys(PEOPLE)) ok(y.models[p], `${where} model for ${p}`)
        }
        const pools = s.turns.filter(x => x.them?.replies)
        ok(pools.length, `${where} partner reacts to the student's question`)
        for (const p of Object.keys(PEOPLE)) ok(pools[0].them.replies[p]?.length, `${where} reply pool for ${p}`)
      }
    }
  }
  const total = w.tasks.reduce((n, t) => n + t.minutes[w.level.level], 0)
  console.log(`  ${lv} → ${w.level.level} (${w.level.status}): ${w.tasks.map(t => t.steps.length).join('/')} steps, ~${total} min`)
}
ok(slots.has('w1-intro'), 'week 1 saves the introduction')

// ── productions: save, history, first version, isolation, missing text
const A = '1700000000001', B = '1700000000002'
let db = { students: [{ id: A, password: 'h' }] }
const save = (sid, slot, text, at) => { const p = responsePatch(db, sid, 'core', slot, text, at); if (p) db = { ...db, ...p } }
save(A, 'w1-intro', "Hi everyone! I'm Ana.", 1)
save(A, 'w1-intro', "Hi everyone! I'm Ana. I'm a nurse.", 2)      // edit in week 1
save(A, 'w1-intro', "Hi! I'm Ana, a nurse from Recife.", 3)        // redo later
save(B, 'w1-intro', "Hello, I'm Bruno.", 1)
ok(responsePatch(db, A, 'core', 'w1-intro', '   ') === null, 'empty text not saved')
ok(responsePatch(db, A, 'core', 'w1-intro', "Hi! I'm Ana, a nurse from Recife.") === null, 'unchanged text not saved')
ok(getResponse(db, A, 'core', 'w1-intro').history.length === 2, 'history kept')
ok(getResponse(db, A, 'core', 'w1-intro').first.text === "Hi everyone! I'm Ana.", 'first version never overwritten')
save(A, 'w12-intro', "Hi everyone! I'm Ana — I've been here for three months…", 9)
const cmp = comparison(db, A, 'core', 'w1-intro', 'w12-intro')
ok(!cmp.missingBefore && cmp.before.text === "Hi everyone! I'm Ana." && cmp.after.at === 9, 'week 12 compares with the first week-1 text')
const C = '1700000000003'
const none = comparison(db, C, 'core', 'w1-intro', 'w12-intro')
ok(none.missingBefore && none.before === null, 'missing week-1 text is reported, not crashing')
ok(W12.steps.find(s => s.kind === 'compare').ifMissing?.pt, 'week 12 has an ifMissing path')
const sliceA = studentDbSlice(db, A)
ok(sliceA[responsesKey(A, 'core')] && !sliceA[responsesKey(B, 'core')], 'student A sees only own productions')
ok(!JSON.stringify(sliceA).includes('Bruno') && !sliceA.students, "no other student's data in slice")
assert.throws(() => responsePatch(db, A, 'core', 'w1.intro', 'x'), 'dots rejected (Firebase keys)'); checks++
ok(responsePatch(db, A, 'core', 'w1-x', 'y'.repeat(5000))[responsesKey(A, 'core')]['w1-x'].text.length === 2000, 'long text capped')

console.log(`check-journeys: ${checks} checks passed`)
