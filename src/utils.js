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
