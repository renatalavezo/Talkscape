import { B } from './colors'

export const pp = (w, s, lh = 1.3) => ({
  fontFamily: "'Poppins',sans-serif", fontWeight: w, fontSize: s, lineHeight: lh,
})

export const ir = (w, s, lh = 1.5) => ({
  fontFamily: "'Inter',sans-serif", fontWeight: w, fontSize: s, lineHeight: lh,
})

export const S = {
  app: { minHeight: '100vh', background: B.cream, display: 'flex', flexDirection: 'column' },
  card: { background: B.white, borderRadius: 14, padding: 16, border: `1.5px solid ${B.border}` },
  inp: {
    padding: '11px 13px', borderRadius: 9, border: `1.5px solid ${B.border}`,
    fontSize: 14, outline: 'none', fontFamily: "'Inter',sans-serif",
    color: B.dark, background: B.white, width: '100%',
  },
  ta: {
    padding: '10px 12px', borderRadius: 9, border: `1.5px solid ${B.border}`,
    fontSize: 13, fontFamily: "'Inter',sans-serif", color: B.dark,
    resize: 'vertical', outline: 'none', width: '100%',
  },
  btn: bg => ({
    padding: '11px 18px', background: bg, color: '#fff', border: 'none',
    borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
  }),
  chip: {
    border: 'none', borderRadius: 8, padding: '7px 13px',
    fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Poppins',sans-serif",
  },
  pill: (bg, tx) => ({
    display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 9px',
    borderRadius: 20, fontWeight: 700, fontSize: 10, background: bg, color: tx,
    flexShrink: 0, fontFamily: 'Poppins,sans-serif', whiteSpace: 'nowrap',
  }),
  dot: c => ({
    width: 5, height: 5, borderRadius: '50%', background: c,
    flexShrink: 0, display: 'inline-block',
  }),
  navBtn: {
    padding: '7px 12px', background: 'transparent', border: 'none', borderRadius: 7,
    cursor: 'pointer', fontSize: 11, fontWeight: 600,
    fontFamily: "'Poppins','Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif",
    whiteSpace: 'nowrap',
  },
  lbl: {
    fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 11, lineHeight: 1.5,
    color: B.mid, textTransform: 'uppercase', letterSpacing: 0.6,
    display: 'block', marginBottom: 8,
  },
}
