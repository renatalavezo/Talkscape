// CEFR level helpers for the Journeys.

export const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

// Legacy 3-band level ↔ CEFR
export const SIMPLE_FROM_CEFR = { A1: 'beginner', A2: 'beginner', B1: 'intermediate', B2: 'intermediate', C1: 'advanced', C2: 'advanced' }
// Used when a course student has only the legacy band and no CEFR set yet
export const CEFR_FROM_SIMPLE = { beginner: 'A2', intermediate: 'B1', advanced: 'C1' }

// CEFR of an online-course student: explicit `cefr` first, then the legacy band, else null.
export function courseStudentCefr(student) {
  if (!student) return null
  if (CEFR_ORDER.includes(student.cefr)) return student.cefr
  return CEFR_FROM_SIMPLE[student.level] || null
}

// Legacy band of an online-course student (used by the v1 journey screens).
export function courseStudentSimpleLevel(student) {
  if (!student) return null
  return student.level || SIMPLE_FROM_CEFR[student.cefr] || null
}
