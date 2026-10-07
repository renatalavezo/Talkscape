// Step kinds and modes the v2 player can render. The player and
// scripts/check-journeys.mjs both read this list, so content that uses a kind
// the player does not support fails the check instead of rendering nothing.
export const STEP_SUPPORT = {
  prepare: [null],
  engage:  ['messages', 'audio', 'text'],   // input.type
  check:   ['choice', 'match', 'order', 'open-choice'],
  notice:  [null],
  try:     ['speak'],
  act:     ['write', 'frame'],
  chat:    [null],
  compare: [null],
  reflect: [null],
}

export function stepVariant(step) {
  if (step.kind === 'engage') return step.input?.type
  if (step.kind === 'check' || step.kind === 'try' || step.kind === 'act') return step.mode
  return null
}

export const isSupportedStep = step =>
  (STEP_SUPPORT[step.kind] || []).includes(stepVariant(step))
