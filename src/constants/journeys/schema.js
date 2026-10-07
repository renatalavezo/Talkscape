// Journeys v2 — "situated" format.
//
// A journey with `format: 'situated'` is organised around real situations of
// language use, not around exercise categories. This file documents the shape
// of the data and resolves level (CEFR) differentiation.
//
// Week
//   { week, theme:{en,pt}, situation:{en,pt}, canDo:[{en,pt}], tasks:[Activity] }
//
// Activity  (keeps id/en/pt/cat so legacy screens and progress keys still work)
//   id        stable id — used by jsd_/cjsd_ progress, never reuse
//   en, pt    short title shown on the card
//   cat       legacy colour/label only; derived from skills[0]
//   skills    competences mobilised: 'listening'|'speaking'|'interaction'|'writing'|'reading'
//   moves     planning stages this activity covers (not shown as a rigid sequence):
//             'enter'|'explore'|'notice'|'try'|'act'|'reflect'
//   purpose   {en,pt} why the student is doing this
//   situation {en,pt} who/where/for whom
//   steps     [Step] — the experience itself
//   bridge    {en,pt} how it prepares what comes next
//   levels    { A1?, B1?, B2?, C1? } overrides on top of the base level (see resolveActivity)
//
// Step kinds (all have `id`, `kind`, and usually `say:{en,pt}` = the instruction)
//   prepare  predict/activate before input. options[] (no right answer), multi?
//   engage   the input. input:{type:'messages', items:[{from,text}]}
//                          | {type:'audio', script, voice?, rate?, transcript:'after'|'toggle'}
//                          | {type:'text', body}
//                          | {type:'resource', url, label, before, while, after}
//            glossary?:[{term, pt}]
//   check    meaning-making with feedback per option, not just right/wrong.
//            mode:'choice'|'multi'|'match'|'order'|'open-choice'
//            options:[{text, ok?, why:{en,pt}}] | pairs:[{left,right}] | items:[...] (order)
//            saveAs? stores the student's choice for later steps (e.g. chosen member)
//   notice   how language does the action here. examples:[{text, mark:[...]}],
//            parts?:[{label:{en,pt}, text}], insight:{en,pt}, speak?:true (TTS playback)
//   try      supported experimentation. mode:'frame'|'write'|'speak'
//            frame?:[...], starters?:[...], wordBank?:[...], model?, selfCheck?:[{en,pt}]
//   act      meaningful production. mode:'write'|'speak'
//            audience:{en,pt}, starters?, wordBank?, model?, checklist:[{en,pt}], saveAs?
//   chat     simulated interaction. with:{ref?, default}, turns:[{them} | {you:{say, suggestions?, model}}]
//   reflect  canDo self-assessment (notYet|withHelp|yes) + light prompt. Never a long questionnaire.
//
// Speaking steps use the browser (MediaRecorder): record, listen, record again.
// Recordings are a practice tool — they are not saved or sent anywhere.

import { CEFR_ORDER } from '../journeyLevels'

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

// Resolve an activity for a student's CEFR level.
// Content is authored for `baseLevel`; overrides are cumulative moving away from it:
// for B2 with base A2 → apply B1 then B2. For A1 → apply A1. C2 behaves like C1.
export function resolveActivity(act, cefr, baseLevel = 'A2') {
  const levels = act.levels || {}
  const target = CEFR_ORDER.indexOf(cefr === 'C2' ? 'C1' : cefr)
  const base = CEFR_ORDER.indexOf(baseLevel)
  if (target === -1 || base === -1 || target === base) return act
  const path = target > base
    ? CEFR_ORDER.slice(base + 1, target + 1)
    : CEFR_ORDER.slice(target, base).reverse()
  return path.reduce((a, lv) => applyOverride(a, levels[lv]), act)
}

export function resolveWeek(week, cefr, baseLevel) {
  return { ...week, tasks: week.tasks.map(t => resolveActivity(t, cefr, baseLevel)) }
}
