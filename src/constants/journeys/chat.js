// Pure logic for simulated chats (kept out of the component so it can be tested).

// Text the partner says for a `them` turn.
//   them: string | { [person]: string, default } | { replies, fallback }
// For reply pools, the student's own last message picks the reply by keyword.
export function resolveThem(them, person, lastStudentText = '') {
  if (typeof them === 'string') return them
  if (them?.replies) {
    const said = lastStudentText.toLowerCase()
    const pool = them.replies[person] || []
    const hit = pool.find(r => r.match.some(k => said.includes(k.toLowerCase())))
    if (hit) return hit.text
    return them.fallback?.[person] || them.fallback?.default || ''
  }
  return them?.[person] || them?.default || ''
}

// Index of the next `you` turn at or after `from`, or turns.length if none.
export function nextYouTurn(turns, from) {
  let i = from
  while (i < turns.length && !turns[i].you) i++
  return i
}

export const looksLikeQuestion = text => /\?\s*$/.test(text.trim()) || /\?/.test(text)
