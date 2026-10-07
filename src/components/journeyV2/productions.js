import { getResponse, responsePatch } from '../../constants/journeys/responses.js'

// Read/write the student's productions for one journey.
// save() chains several slots into ONE upDb patch: separate upDb calls in the
// same tick would each start from the same db and overwrite one another.
export function productions(db, upDb, sid, jid) {
  return {
    get: slot => getResponse(db, sid, jid, slot),
    text: slot => getResponse(db, sid, jid, slot)?.text || '',
    save(entries) {
      let cur = db, patch = null
      for (const [slot, text] of Object.entries(entries)) {
        const p = responsePatch(cur, sid, jid, slot, text)
        if (p) { cur = { ...cur, ...p }; patch = { ...(patch || {}), ...p } }
      }
      if (patch) upDb(patch)
      return !!patch
    },
  }
}

// Reflection answers are stored as JSON text in a production slot.
export function readJson(text) {
  try { return text ? JSON.parse(text) : null } catch { return null }
}
