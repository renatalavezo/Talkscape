import Icon from '../Icon'
import { D, serifD, sansD, tx, card, note, SKILL_META } from './ui'
import { resolveLevel, resolveWeek } from '../../constants/journeys/schema.js'
import { getResponse } from '../../constants/journeys/responses.js'
import { readJson } from './productions'
import { reflectSlot } from './Steps'

const STATUS = {
  'in-target': { pt: 'dentro do público da jornada', en: 'within the journey target' },
  extension:   { pt: 'extensão (acima do público principal)', en: 'extension (above the main target)' },
  below:       { pt: 'abaixo do nível previsto — recebe a versão mais simples', en: 'below the supported range — gets the simplest version' },
  above:       { pt: 'acima do nível previsto', en: 'above the supported range' },
  unknown:     { pt: 'nível não definido — usando a versão base', en: 'no level set — using the base version' },
}
const SCALE = { notYet: { pt: 'ainda não', en: 'not yet' }, withHelp: { pt: 'com ajuda', en: 'with help' }, yes: { pt: 'sim', en: 'yes' } }

// Read-only view of a v2 journey for the teacher: which version the student
// gets, progress, and the texts they saved. Editing v2 activities is not part
// of the pilot.
export default function JourneyV2TeacherView({ journey, lang, sid, db, cefr, checked }) {
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

      <div style={{ ...card, padding: '16px 18px', marginBottom: 14 }}>
        <p style={{ ...sansD(700, 13.5), margin: 0 }}>{pt ? 'Versão que a aluna recebe' : 'Version the student gets'}: <span style={{ color: D.moss }}>{lv.level}</span> <span style={{ fontWeight: 400, color: D.muted }}>({pt ? 'CEFR da aluna' : 'student CEFR'}: {cefr || '—'} · {tx(STATUS[lv.status], lang)})</span></p>
        {lv.note && <p data-testid="teacher-level-note" style={{ ...note('#FFF7EC', D.honey), margin: '10px 0 0', fontSize: 13.5 }}>{tx(lv.note, lang)}</p>}
        <p style={{ fontSize: 12.5, color: D.muted, margin: '10px 0 0' }}>{pt ? 'Jornada no formato novo (piloto): as atividades ainda não são editáveis por aqui. Use a pré-visualização da aluna para percorrer a experiência.' : 'New-format journey (pilot): activities are not editable here yet. Use the student preview to walk through it.'}</p>
      </div>

      {journey.weeks.map(raw => {
        const w = resolveWeek(journey.meta, raw, cefr)
        const refl = readJson(saved(reflectSlot(w.week))?.text)
        // one row per saved production, labelled by its activity and audience
        const slots = w.tasks.flatMap(t => t.steps.filter(st => st.saveAs).map(st => ({
          slot: st.saveAs,
          label: st.kind === 'act' ? `${tx(t, lang)} — ${tx(st.audience, lang)}` : `${tx(t, lang)} — ${pt ? 'pessoa escolhida' : 'person chosen'}`,
        })))
        return (
          <div key={w.week} style={{ ...card, padding: '16px 18px', marginBottom: 14 }}>
            <p style={{ ...serifD(500, 18), margin: '0 0 10px' }}>{pt ? 'Semana' : 'Week'} {w.week} · {tx(w.theme, lang)}</p>
            {w.tasks.map((t, k) => (
              <div key={t.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 0', borderTop: k ? `1px solid ${D.line}` : 'none' }}>
                <Icon name={checked[t.id] ? 'checkCircle' : 'circle'} size={16} color={checked[t.id] ? D.moss : D.line} />
                <div style={{ flex: 1 }}>
                  <div style={{ ...sansD(600, 13.5) }}>{k + 1}. {tx(t, lang)}</div>
                  <div style={{ fontSize: 12, color: D.muted }}>{t.skills.map(s => SKILL_META[s]?.[lang] || s).join(' · ')} · ~{t.minutes?.[lv.level]} min · {t.steps.length} {pt ? 'passos' : 'steps'}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <p style={{ ...sansD(700, 12.5), color: D.muted, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: 0.4 }}>{pt ? 'Produções salvas' : 'Saved productions'}</p>
              {slots.map(({ slot, label }) => {
                const r = saved(slot), why = saved(`${slot}-why`)
                return (
                  <div key={slot} style={{ fontSize: 13, marginBottom: 6 }}>
                    <b>{label}</b>: {r ? <span lang="en" style={{ whiteSpace: 'pre-wrap' }}>{r.text}{why ? ` — ${why.text}` : ''}{r.history?.length ? <span style={{ color: D.muted }}> ({r.history.length + 1} {pt ? 'versões' : 'versions'})</span> : null}</span> : <span style={{ color: D.muted }}>—</span>}
                  </div>
                )
              })}
              {refl?.canDo && <div style={{ fontSize: 13 }}><b>{pt ? 'Autoavaliação' : 'Self-assessment'}</b>: {w.canDo.map((c, i) => refl.canDo[i] ? `${tx(c, lang)} — ${tx(SCALE[refl.canDo[i]], lang)}` : null).filter(Boolean).join(' · ')}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
