// Shared look for the v2 journey player — same tokens as the student area.
import { D, serifD, sansD } from '../../constants/dashColors'

export { D, serifD, sansD }

export const tx = (o, lang) => (o ? (o[lang] || o.en || '') : '')

export const card = { background: D.surface, borderRadius: 18, boxShadow: D.shadow, border: `1px solid ${D.line}` }
export const kicker = { fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: D.muted }

export const btn = (bg = D.moss, fg = '#fff') => ({
  fontFamily: 'inherit', fontSize: 14, fontWeight: 700, padding: '11px 20px', borderRadius: 12,
  border: 'none', background: bg, color: fg, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7,
})
export const ghostBtn = {
  fontFamily: 'inherit', fontSize: 13, fontWeight: 600, padding: '8px 14px', borderRadius: 10,
  border: `1px solid ${D.line}`, background: D.surface, color: D.ink, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
}
export const chip = (on, color = D.moss, soft = D.mossSoft) => ({
  fontFamily: 'inherit', fontSize: 13, fontWeight: 600, padding: '7px 13px', borderRadius: 99, cursor: 'pointer',
  border: `1.5px solid ${on ? color : D.line}`, background: on ? soft : D.surface, color: on ? color : D.ink,
  display: 'inline-flex', alignItems: 'center', gap: 6, textAlign: 'left',
})
export const textarea = {
  width: '100%', boxSizing: 'border-box', padding: '12px 14px', borderRadius: 12, border: `1.5px solid ${D.line}`,
  fontFamily: 'inherit', fontSize: 15, lineHeight: 1.55, color: D.ink, background: D.surface, resize: 'vertical', outline: 'none',
}
export const note = (bg = D.surfaceWarm, border = D.line) => ({
  background: bg, border: `1px solid ${border}`, borderRadius: 13, padding: '12px 15px', fontSize: 14, lineHeight: 1.55, color: D.ink,
})

export const SKILL_META = {
  listening:   { icon: 'listening', pt: 'Escuta',    en: 'Listening' },
  speaking:    { icon: 'speaking',  pt: 'Fala',      en: 'Speaking' },
  interaction: { icon: 'feedback',  pt: 'Interação', en: 'Interaction' },
  writing:     { icon: 'writing',   pt: 'Escrita',   en: 'Writing' },
  reading:     { icon: 'reading',   pt: 'Leitura',   en: 'Reading' },
}

export const L = {
  next:      { pt: 'Continuar', en: 'Continue' },
  back:      { pt: 'Voltar', en: 'Back' },
  finish:    { pt: 'Concluir atividade', en: 'Finish activity' },
  step:      { pt: 'Passo', en: 'Step' },
  of:        { pt: 'de', en: 'of' },
  check:     { pt: 'Verificar', en: 'Check' },
  save:      { pt: 'Salvar', en: 'Save' },
  saved:     { pt: 'Salvo', en: 'Saved' },
  example:   { pt: 'Ver um exemplo', en: 'See an example' },
  hideEx:    { pt: 'Esconder exemplo', en: 'Hide example' },
  ideas:     { pt: 'Ideias para começar', en: 'Ideas to start' },
  wordBank:  { pt: 'Banco de palavras', en: 'Word bank' },
  checklist: { pt: 'Antes de terminar, confira:', en: 'Before you finish, check:' },
  minutes:   { pt: 'min', en: 'min' },
}
