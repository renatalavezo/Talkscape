// Student productions in v2 journeys (texts the student writes and may revisit).
//
// Storage: one key per student per journey → `jrsp_${sid}_${jid}`
//   { [slot]: { text, at, first: { text, at }, history?: [{ text, at }] } }
//
// - The key contains the student id, so studentDbSlice() only ever hands a
//   student their own productions (same rule as jsd_/lv_/etc.).
// - `first` is written once and never overwritten: week 12 compares against
//   what the student really wrote at the start, even if they redo week 1 later.
// - Only short texts are kept (whole db is saved as one object).
// - Audio recordings are NEVER stored — speaking is a practice tool.

export const MAX_TEXT = 2000
export const MAX_HISTORY = 3

// Firebase keys may not contain . # $ [ ] /
const SAFE = /^[A-Za-z0-9_-]+$/

export const responsesKey = (sid, jid) => `jrsp_${sid}_${jid}`

export function getResponse(db, sid, jid, slot) {
  return db?.[responsesKey(sid, jid)]?.[slot] || null
}

// Returns the upDb patch for saving `text` into `slot`, or null if nothing to save.
export function responsePatch(db, sid, jid, slot, text, now = Date.now()) {
  if (!sid || !SAFE.test(String(sid)) || !SAFE.test(jid) || !SAFE.test(slot)) {
    throw new Error(`invalid response key: ${sid}/${jid}/${slot}`)
  }
  const clean = String(text ?? '').slice(0, MAX_TEXT)
  if (!clean.trim()) return null
  const key = responsesKey(sid, jid)
  const all = db?.[key] || {}
  const prev = all[slot]
  if (prev && prev.text === clean) return null
  const entry = prev
    ? {
        text: clean, at: now,
        first: prev.first || { text: prev.text, at: prev.at },
        history: [{ text: prev.text, at: prev.at }, ...(prev.history || [])].slice(0, MAX_HISTORY),
      }
    : { text: clean, at: now, first: { text: clean, at: now } }
  return { [key]: { ...all, [slot]: entry } }
}

// Data for a "then and now" comparison. `before` uses the FIRST version ever saved.
// When the earlier text does not exist, `missingBefore` is true and the activity
// shows its `ifMissing` path instead of an empty comparison.
export function comparison(db, sid, jid, beforeSlot, afterSlot) {
  const b = getResponse(db, sid, jid, beforeSlot)
  const a = getResponse(db, sid, jid, afterSlot)
  const before = b ? (b.first || { text: b.text, at: b.at }) : null
  return { before, after: a ? { text: a.text, at: a.at } : null, missingBefore: !before }
}
