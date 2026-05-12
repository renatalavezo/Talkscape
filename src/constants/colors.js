export const B = {
  rosa: '#E8A7B2', rosaD: '#C97080',
  bege: '#E6E2D9', begeD: '#CEC9BE',
  marrom: '#8A3F2C', marrD: '#6B2F1E', marrBg: '#FBF0ED',
  laranja: '#E67A2E', larD: '#C45F18', larBg: '#FEF3E8',
  oliva: '#5C6F4F', olivaD: '#445438', olivaBg: '#EEF2EB',
  cream: '#F7F4EF', white: '#FDFCFA', dark: '#2C1810',
  mid: '#6B4A3E', light: '#9A7A72', border: '#DDD7CE',
}

export const CAT = {
  pronunciation: { bg: '#FFF0E8', tx: B.larD,  dot: B.laranja, pt: 'pronúncia',   en: 'pronunciation' },
  grammar:       { bg: '#F5EFEB', tx: B.marrD,  dot: B.marrom,  pt: 'gramática',   en: 'grammar'       },
  vocab:         { bg: '#EEF2EB', tx: B.olivaD, dot: B.oliva,   pt: 'vocabulário', en: 'vocabulary'    },
  listening:     { bg: '#FDF0F2', tx: B.rosaD,  dot: B.rosa,    pt: 'audição',     en: 'listening'     },
  writing:       { bg: '#FEF3E8', tx: B.larD,   dot: B.laranja, pt: 'escrita',     en: 'writing'       },
  speaking:      { bg: '#EEF2EB', tx: B.olivaD, dot: B.oliva,   pt: 'fala',        en: 'speaking'      },
  reading:       { bg: '#F5EFEB', tx: B.marrD,  dot: B.marrom,  pt: 'leitura',     en: 'reading'       },
}

export const GRADE = s =>
  s >= 90 ? { l: 'A', c: B.oliva }
  : s >= 80 ? { l: 'B', c: B.laranja }
  : s >= 70 ? { l: 'C', c: B.marrom }
  : { l: 'D', c: B.rosaD }
