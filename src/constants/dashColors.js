// Shared warm palette for the logged-in area (student dashboard + teacher panel).
// Scoped to these two areas only — the marketing landing page has its own local palette.
export const D = {
  cream: '#FBF2E9', canvas: '#F7ECE1',
  surface: '#FFFFFF', surfaceWarm: '#FFF8F1',
  terra: '#A0512F', terraDeep: '#874225', terraSoft: '#F4E2D6',
  moss: '#5D6A40', mossDeep: '#4A5533', mossSoft: '#E7EADB',
  orange: '#DE8A3D', orangeSoft: '#FBEBD6',
  honey: '#E3AE4A', honeySoft: '#FBEED0',
  clay: '#C77358', claySoft: '#F7E0D7',
  sage: '#8AA06B', sageSoft: '#E8EFDC',
  sky: '#6FA3AE', skySoft: '#DFEDEF',
  ink: '#3B2A21', muted: '#93816F', line: '#EBDCCD',
  shadow: '0 1px 2px rgba(59,42,33,.04), 0 8px 24px rgba(59,42,33,.06)',
  shadowLg: '0 2px 6px rgba(59,42,33,.05), 0 18px 44px rgba(59,42,33,.10)',
}

export const serifD = (weight, size, extra = {}) => ({ fontFamily: "'Newsreader',serif", fontWeight: weight, fontSize: size, ...extra })
export const sansD = (weight, size, extra = {}) => ({ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: weight, fontSize: size, ...extra })
