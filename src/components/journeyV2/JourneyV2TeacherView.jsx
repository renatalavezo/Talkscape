import { useState } from 'react'
import Icon from '../Icon'
import { D, serifD, sansD, tx, card, note, ghostBtn, SKILL_META } from './ui'
import { resolveLevel, resolveWeek } from '../../constants/journeys/schema.js'
import { getResponse } from '../../constants/journeys/responses.js'
import { readJson } from './productions'
import { reflectSlot } from './Steps'

const STATUS = {
  'in-target': { pt: 'dentro da faixa planejada', en: 'within the planned range' },
  extension:   { pt: 'versão de extensão da jornada', en: "the journey's extension version" },
  below:       { pt: 'abaixo da faixa planejada — recebe a versão mais simples', en: 'below the planned range — gets the simplest version' },
  above:       { pt: 'acima da faixa planejada', en: 'above the planned range' },
  unknown:     { pt: 'CEFR não definido — usando a versão base', en: 'no CEFR set — using the base version' },
}
const SCALE = { notYet: { pt: 'ainda não', en: 'not yet' }, withHelp: { pt: 'com ajuda', en: 'with help' }, yes: { pt: 'sim', en: 'yes' } }

export function rangeLabel(meta, lang) {
  const [tMin, tMax] = meta.levels.target
  const sMax = meta.levels.supported[1]
  const base = `${tMin}–${tMax}`
  if (sMax === tMax) return base
  return lang === 'pt' ? `${base}, com versão de extensão até ${sMax}` : `${base}, with an extension version up to ${sMax}`
}

// Teacher's view of a v2 journey: which version the student gets and why,
// progress, and self-assessment. The student's texts stay hidden unless the
// teacher explicitly opens them — the journey is the student's own space,
// not a monitoring tool. Voice recordings are never saved, so never shown.
export default function JourneyV2TeacherView({ journey, lang, sid, db, cefr, checked }) {
  const [showProd, setShowProd] = useState({})
  const lv = resolveLevel(journey.meta, cefr)
  const pt = lang === 'pt'
  const saved = slot => getResponse(db, sid, journey.id, slot)

  return (
    <div data-testid="journey-v2-teacher">
      <div style={{ background: journey.color, borderRadius: 16, padding: '16px 20px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12, boxShadow: D.shadow }}>
        <Icon name={journey.icon} size={26} color="#fff" />
        <div>
          <p style={{ ...serifD(500, 18), color: '#fff', margin: 0 }}>{tx(journey, lang)}</p>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{tx(journey.desc, lang)}</p>
        </div>
      </div>

      <div style={{ ...card, padding: '16px 18px', marginBottom: 14, fontSize: 13.5, lineHeight: 1.6 }}>
        <div><span style={{ color: D.muted }}>{pt ? 'Versão da jornada' : 'Journey version'}: </span><b>{pt ? 'formato novo (piloto)' : 'new format (pilot)'}</b></div>
        <div data-testid="teacher-range"><span style={{ color: D.muted }}>{pt ? 'Faixa planejada' : 'Planned range'}: </span><b>{rangeLabel(journey.meta, lang)}</b></div>
        <div><span style={{ color: D.muted }}>{pt ? 'CEFR da estudante' : 'Student CEFR'}: </span><b>{cefr || '—'}</b></div>
        <div data-testid="teacher-applied"><span style={{ color: D.muted }}>{pt ? 'Versão aplicada' : 'Version applied'}: </span><b style={{ color: D.moss }}>{lv.level}</b> <span style={{ color: D.muted }}>({tx(STATUS[lv.status], lang)})</span></div>

        {lv.status === 'above' && (
          <div data-testid="teacher-level-note" style={{ ...note('#FFF7EC', D.honey), marginTop: 12 }}>
            <p style={{ margin: 0 }}>{tx(lv.note, lang)}</p>
            <p style={{ margin: '8px 0 0', fontWeight: 600 }}>{pt
              ? 'A decisão é sua: se esta jornada não fizer sentido para esta estudante, atribua outra jornada acima.'
              : 'It is your call: if this journey does not make sense for this student, assign another journey above.'}</p>
          </div>
        )}
        <p style={{ fontSize: 12.5, color: D.muted, margin: '10px 0 0' }}>{pt
          ? 'As atividades do formato novo ainda não são editáveis por aqui. Use a pré-visualização da estudante para percorrer a experiência.'
          : 'New-format activities are not editable here yet. Use the student preview to walk through the experience.'}</p>
      </div>

      {journey.weeks.map(raw => {
        const w = resolveWeek(journey.meta, raw, cefr)
        const refl = readJson(saved(reflectSlot(w.week))?.text)
        const done = w.tasks.filter(t => checked[t.id]).length
        // productions of the week, labelled by activity and audience
        const slots = w.tasks.flatMap(t => t.steps.filter(st => st.saveAs).map(st => ({
          slot: st.saveAs,
          label: st.kind === 'act' ? `${tx(t, lang)} — ${tx(st.audience, lang)}` : `${tx(t, lang)} — ${pt ? 'pessoa escolhida' : 'person chosen'}`,
        })))
        const savedCount = slots.filter(s => saved(s.slot)).length + (refl?.note ? 1 : 0)
        const open = !!showProd[w.week]
        return (
          <div key={w.week} style={{ ...card, padding: '16px 18px', marginBottom: 14 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
              <p style={{ ...serifD(500, 18), margin: 0 }}>{pt ? 'Semana' : 'Week'} {w.week} · {tx(w.theme, lang)}</p>
              <span data-testid="teacher-progress" style={{ fontSize: 13, color: D.muted }}>{done}/{w.tasks.length} {pt ? 'atividades concluídas' : 'activities done'}</span>
            </div>

            {w.tasks.map((t, k) => (
              <div key={t.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 0', borderTop: k ? `1px solid ${D.line}` : 'none' }}>
                <Icon name={checked[t.id] ? 'checkCircle' : 'circle'} size={16} color={checked[t.id] ? D.moss : D.line} />
                <div style={{ flex: 1 }}>
                  <div style={{ ...sansD(600, 13.5) }}>{k + 1}. {tx(t, lang)}</div>
                  <div style={{ fontSize: 12, color: D.muted }}>
                    {t.skills.map(s => SKILL_META[s]?.[lang] || s).join(' · ')} · {pt ? 'versão' : 'version'} {lv.level}{t.minutes?.[lv.level] ? ` · ~${t.minutes[lv.level]} min (${pt ? 'estimativa' : 'estimate'})` : ''}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 12, borderTop: `1px solid ${D.line}`, paddingTop: 12 }}>
              <p style={{ ...sansD(700, 12.5), color: D.muted, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: 0.4 }}>{pt ? 'Autoavaliação da estudante' : "Student's self-assessment"}</p>
              {refl?.canDo
                ? <div data-testid="teacher-selfassessment" style={{ fontSize: 13, lineHeight: 1.6 }}>
                    {w.canDo.map((c, i) => refl.canDo[i] && <div key={i}>{tx(c, lang)} — <b>{tx(SCALE[refl.canDo[i]], lang)}</b></div>)}
                    {refl.helped?.length > 0 && <div style={{ color: D.muted, marginTop: 4 }}>{pt ? 'O que ajudou' : 'What helped'}: <span lang="en">{refl.helped.join(', ')}</span></div>}
                  </div>
                : <p style={{ fontSize: 13, color: D.muted, margin: 0 }}>{pt ? 'Ainda não registrada.' : 'Not recorded yet.'}</p>}
            </div>

            <div style={{ marginTop: 12, borderTop: `1px solid ${D.line}`, paddingTop: 12 }}>
              <p style={{ ...sansD(700, 12.5), color: D.muted, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: 0.4 }}>{pt ? 'Produções' : 'Productions'}</p>
              <p data-testid="teacher-prod-count" style={{ fontSize: 13, margin: 0 }}>{savedCount
                ? (pt ? `A estudante tem ${savedCount} ${savedCount === 1 ? 'produção salva' : 'produções salvas'} nesta semana.` : `The student has ${savedCount} saved production${savedCount === 1 ? '' : 's'} this week.`)
                : (pt ? 'Nenhuma produção salva ainda.' : 'No saved productions yet.')}
                <span style={{ color: D.muted }}> {pt ? 'Gravações de voz nunca são salvas.' : 'Voice recordings are never saved.'}</span></p>
              {savedCount > 0 && (
                <button type="button" data-testid="teacher-prod-toggle" onClick={() => setShowProd(s => ({ ...s, [w.week]: !open }))} style={{ ...ghostBtn, marginTop: 8, fontSize: 12.5 }}>
                  <Icon name={open ? 'close' : 'eye'} size={13} color={D.ink} />{open ? (pt ? 'Ocultar produções' : 'Hide productions') : (pt ? 'Ver produções da aluna' : "See the student's productions")}
                </button>
              )}
              {open && (
                <div data-testid="teacher-prod-list" style={{ ...note(), marginTop: 10, fontSize: 13 }}>
                  {slots.map(({ slot, label: l }) => {
                    const r = saved(slot), why = saved(`${slot}-why`)
                    return r && (
                      <div key={slot} style={{ marginBottom: 8 }}>
                        <b>{l}</b>: <span lang="en" style={{ whiteSpace: 'pre-wrap' }}>{r.text}{why ? ` — ${why.text}` : ''}</span>
                        {r.history?.length > 0 && <span style={{ color: D.muted }}> ({r.history.length + 1} {pt ? 'versões' : 'versions'})</span>}
                      </div>
                    )
                  })}
                  {refl?.note && <div><b>{pt ? 'Anotação da reflexão' : 'Reflection note'}</b>: {refl.note}</div>}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
