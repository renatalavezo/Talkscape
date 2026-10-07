// Journeys v2 — "situated" format.
//
// A journey with `format: 'situated'` is organised around real situations of
// language use, not around exercise categories. This file documents the shape
// of the data and resolves level (CEFR) differentiation.
//
// Journey meta
//   { id, format:'situated', baseLevel, levels:{ target:[min,max], supported:[min,max] },
//     aboveRange:{ policy:'cap', why:{en,pt} } }
//   target    = who the journey is designed for (Core: A1–B1)
//   supported = levels that have authored content (Core: A1–B2; B2 = extension)
//   Students outside `supported` are handled by an explicit, justified policy
//   (see resolveLevel) — never by silent inheritance.
//
// Week
//   { week, theme, situation, canDo:[{en,pt}], levelProfile:{ [cefr]: { cefr:[{en,pt}], expect:{en,pt} } }, tasks }
//   levelProfile states, per level, which CEFR descriptors (paraphrased) the
//   week works on and what is expected — content is checked against it.
//
// Activity  (keeps id/en/pt/cat so legacy screens and progress keys still work)
//   id        stable, Firebase-safe (letters, digits, '-'): used as a key in jsd_/cjsd_
//   en, pt    short title shown on the card
//   cat       legacy colour/label only; derived from skills[0]
//   skills    'listening'|'speaking'|'interaction'|'writing'|'reading'
//   moves     planning stages covered: 'enter'|'explore'|'notice'|'try'|'act'|'reflect'
//   minutes   estimated time per level { A1, A2, B1, B2 } — shown to orient the
//             student only. Time is a CONSEQUENCE of a coherent learning path,
//             never a design target: do not add or stretch content to reach a
//             duration, and no check enforces weekly totals.
//   purpose, situation, steps, bridge, levels (overrides — see resolveActivity)
//
// Step kinds (all have `id`, `kind`, and usually `say:{en,pt}` = the instruction,
// shown in the interface language; English material always stays in English)
//   prepare  predict/activate before input. options[] (no right answer), multi?
//   engage   the input. input:{type:'messages', items:[{from,text}]}
//              | {type:'audio', script, lang:'en-GB'|'en-US', rates:[...], rate,
//                 transcript:'after-first'|'always'}   ← browser speech synthesis;
//                 transcript stays available once unlocked; if no English voice
//                 exists, the transcript is shown with a notice (never a dead end)
//              | {type:'text', body} | {type:'resource', url, label, before, while, after}
//            glossary?:[{term, pt}]
//   check    meaning-making with feedback per option. mode:'choice'|'match'|'order'|'open-choice'
//   notice   how language does the action here. examples, parts?, insight, speak?
//   try      supported experimentation. mode:'frame'|'write'|'speak'
//   act      meaningful production. mode:'write'|'frame', audience, checklist,
//            starters?, wordBank?, model? (revealed AFTER the attempt), saveAs?
//   chat     simulated interaction — the student always writes their own turns:
//            turns: [ { them: text | { [person]: text, default } }
//                   | { you: { expects:'answer'|'question'|'any', starters:[partial phrases],
//                              model | models:{[person]}, criteria:[{en,pt}] } }
//                   | { them: { replies:{ [person]: [{ match:[kw], text }] }, fallback:{ [person]|default } } } ]
//            starters are partial phrases offered on request, never full answers to pick.
//            model is shown after sending, as "one possible answer". No right/wrong.
//            Reply pools let the partner react to the student's own question.
//   compare  then-and-now: { before:slot, after:slot, prompts:[{en,pt}], ifMissing:{en,pt} }
//   reflect  canDo self-assessment (notYet|withHelp|yes) + one light prompt.
//
// saveAs/ref slots name student productions (see responses.js). Firebase-safe names.
// Speaking uses MediaRecorder in the browser: record, listen, record again.
// Recordings are a practice tool — they are never saved or sent.

import { CEFR_ORDER } from '../journeyLevels.js'

const idx = lv => CEFR_ORDER.indexOf(lv)

// Which authored level a student gets in a journey, and why.
//   { level, status:'in-target'|'extension'|'below'|'above'|'unknown', note? }
// Above the supported range, the journey's declared policy applies:
//   'cap' → most demanding authored version + a note for the teacher explaining
//           the pedagogical reason (the journey must say why in aboveRange.why).
export function resolveLevel(meta, cefr) {
  const [tMin, tMax] = meta.levels.target
  const [sMin, sMax] = meta.levels.supported
  const i = idx(cefr)
  if (i === -1) return { level: meta.baseLevel, status: 'unknown' }
  if (i < idx(sMin)) return { level: sMin, status: 'below' }
  if (i > idx(sMax)) {
    if (meta.aboveRange?.policy !== 'cap' || !meta.aboveRange?.why) {
      throw new Error(`journey ${meta.id}: no justified policy for ${cefr}`)
    }
    return { level: sMax, status: 'above', note: meta.aboveRange.why }
  }
  if (i >= idx(tMin) && i <= idx(tMax)) return { level: cefr, status: 'in-target' }
  return { level: cefr, status: 'extension' }
}

// Apply one level's overrides to an activity.
// override = { ...fields, steps?: { [stepId]: patch | null }, addSteps?: [{ after, step }] }
function applyOverride(act, ov) {
  if (!ov) return act
  const { steps: stepPatches, addSteps, ...fields } = ov
  let steps = act.steps
  if (stepPatches) {
    steps = steps
      .filter(s => stepPatches[s.id] !== null)
      .map(s => (stepPatches[s.id] ? { ...s, ...stepPatches[s.id] } : s))
  }
  for (const { after, step } of addSteps || []) {
    const i = steps.findIndex(s => s.id === after)
    steps = i === -1 ? [...steps, step] : [...steps.slice(0, i + 1), step, ...steps.slice(i + 1)]
  }
  return { ...act, ...fields, steps }
}

// Resolve an activity for an AUTHORED level (use resolveLevel first).
// Content is written for baseLevel; overrides accumulate moving away from it:
// B2 with base A2 → B1 then B2. A1 → A1 only.
export function resolveActivity(act, level, baseLevel = 'A2') {
  const levels = act.levels || {}
  const target = idx(level), base = idx(baseLevel)
  if (target === -1 || base === -1 || target === base) return act
  const path = target > base
    ? CEFR_ORDER.slice(base + 1, target + 1)
    : CEFR_ORDER.slice(target, base).reverse()
  return path.reduce((a, lv) => applyOverride(a, levels[lv]), act)
}

export function resolveWeek(meta, week, cefr) {
  const r = resolveLevel(meta, cefr)
  return { ...week, level: r, tasks: week.tasks.map(t => resolveActivity(t, r.level, meta.baseLevel)) }
}
