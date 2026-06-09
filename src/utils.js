export const TEACHER_PASS = import.meta.env.VITE_TEACHER_PASS || 'teacher123'

export const todayStr = () => new Date().toISOString().slice(0, 10)

export const weekDays = () => {
  const t = new Date(), d = t.getDay(), m = new Date(t)
  m.setDate(t.getDate() - ((d + 6) % 7))
  return Array.from({ length: 7 }, (_, i) => {
    const x = new Date(m)
    x.setDate(m.getDate() + i)
    return x.toISOString().slice(0, 10)
  })
}

// SHA-256 hash for passwords — stored as hex, never plain text
export async function hashPassword(plain) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(plain))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

// Compare a plain-text input against a stored value.
// Supports both legacy plain-text and new hashed passwords during migration.
export async function checkPassword(input, stored) {
  if (!stored) return false
  // New format: 64-char hex SHA-256 hash
  if (/^[0-9a-f]{64}$/.test(stored)) {
    const hashed = await hashPassword(input.trim())
    return hashed === stored
  }
  // Legacy: plain text (still works so existing accounts don't break)
  return input.trim() === stored.trim()
}

// Returns a db slice with only the keys that belong to a specific student id.
// Strips sensitive fields (passwords, other students' data) from the client view.
export function studentDbSlice(db, sid) {
  const slice = {}
  const prefix = new RegExp(`_${sid}($|_)`)
  for (const [k, v] of Object.entries(db)) {
    if (prefix.test(k)) slice[k] = v
  }
  return slice
}

// Safe student list — no passwords exposed
export function safeStudents(students) {
  return (students || []).map(({ password, ...rest }) => rest)
}
