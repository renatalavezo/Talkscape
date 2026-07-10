// Shared warm palette for the logged-in area (student dashboard + teacher panel).
// Scoped to these two areas only — the marketing landing page has its own local palette.
export const D = {
  cream: '#F9F1E9', canvas: '#F3E4D2',
  surface: '#FFFFFF', surfaceWarm: '#FCF3E9',
  terra: '#924325', terraDeep: '#6E3119', terraSoft: '#F0DBC9',
  moss: '#2D4A1D', mossDeep: '#1E3313', mossSoft: '#D7E2C9',
  orange: '#E27B1B', orangeSoft: '#FBE3C0',
  honey: '#E27B1B', honeySoft: '#FBE3C0',
  clay: '#924325', claySoft: '#F0DBC9',
  sage: '#2D4A1D', sageSoft: '#D7E2C9',
  sky: '#A6537A', skySoft: '#FBE7EE',
  ink: '#2A1B12', muted: '#8C7460', line: '#E3CBB0',
  shadow: '0 1px 2px rgba(42,27,18,.05), 0 8px 24px rgba(42,27,18,.08)',
  shadowLg: '0 2px 6px rgba(42,27,18,.06), 0 18px 44px rgba(42,27,18,.13)',
}

export const serifD = (weight, size, extra = {}) => ({ fontFamily: "'Newsreader',serif", fontWeight: weight, fontSize: size, ...extra })
export const sansD = (weight, size, extra = {}) => ({ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: weight, fontSize: size, ...extra })
