// Pilot journeys in the v2 (situated) format.
// Kept apart from JOURNEYS so the legacy Core and its students are untouched
// and the landing page keeps listing the 9 public journeys.
import { CORE_V2_META, CORE_V2_OUTLINE, CORE_V2_PEOPLE, CORE_V2_WEEK_1 } from './coreV2.js'

export const CORE_PILOT = {
  id: 'core2', icon: 'flag', color: '#4A90E2', format: 'situated', pilot: true,
  en: 'Core English (pilot)', pt: 'Inglês Essencial (piloto)',
  desc: { en: 'Everyday English through real situations — new format', pt: 'Inglês do dia a dia a partir de situações reais — novo formato' },
  meta: CORE_V2_META,
  outline: CORE_V2_OUTLINE,
  people: CORE_V2_PEOPLE,
  // Only week 1 is connected. Weeks 2–12 appear as "in preparation" (from outline).
  weeks: [CORE_V2_WEEK_1],
}

export const PILOT_JOURNEYS = [CORE_PILOT]
