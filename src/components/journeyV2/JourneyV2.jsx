import { useMemo, useState } from 'react'
import Icon from '../Icon'
import ActivityPlayer from './ActivityPlayer'
import { productions, readJson } from './productions'
import { reflectSlot } from './Steps'
import { D, serifD, sansD, tx, card, kicker, btn, note, SKILL_META, L } from './ui'
import { resolveLevel, resolveWeek } from '../../constants/journeys/schema.js'

const T = {
  your:      { pt: 'Sua jornada', en: 'Your journey' },
  level:     { pt: 'Nível', en: 'Level' },
  week:      { pt: 'Semana', en: 'Week' },
  canDo:     { pt: 'Ao final desta semana, você vai conseguir:', en: 'By the end of this week, you will be able to:' },
  order:     { pt: 'Sugestão: siga a ordem — cada atividade prepara a próxima. Mas você pode voltar a qualquer uma quando quiser.', en: 'Tip: follow the order — each activity prepares the next. You can go back to any of them whenever you like.' },
  start:     { pt: 'Começar', en: 'Start' },
  redo:      { pt: 'Rever', en: 'Review' },
  doneTag:   { pt: 'Concluída', en: 'Done' },
  soon:      { pt: 'em preparação', en: 'in preparation' },
  weekDone:  { pt: 'Semana concluída!', en: 'Week complete!' },
  youSaid:   { pt: 'Como você se avaliou:', en: 'How you rated yourself:' },
  arc:       { pt: 'O percurso', en: 'The path' },
  sessions:  { pt: 'sessões de 15–20 min', en: '15–20 min sessions' },
}
const SCALE_LABEL = { notYet: { pt: 'ainda não', en: 'not yet' }, withHelp: { pt: 'com ajuda', en: 'with help' }, yes: { pt: 'sim', en: 'yes' } }

// Journey screen for v2 (situated) journeys. Hosts pass their own progress map
// (jsd_ for private students, cjsd_ for course students) and the student's CEFR.
export default function JourneyV2({ journey, lang, sid, db, upDb, cefr, checked, markDone }) {
  const [weekNo, setWeekNo] = useState(journey.weeks[0].week)
  const [openId, setOpenId] = useState(null)

  const lv = resolveLevel(journey.meta, cefr)
  const rawWeek = journey.weeks.find(w => w.week === weekNo) || journey.weeks[0]
  const week = useMemo(() => resolveWeek(journey.meta, rawWeek, cefr), [journey, rawWeek, cefr])
  const prod = productions(db, upDb, sid, journey.id)
  const minutesOf = t => t.minutes?.[lv.level]

  // buddy chosen in the week (any saveAs ending in -buddy), and their original message
  const buddySlot = week.tasks.flatMap(t => t.steps).find(s => s.saveAs?.endsWith('-buddy'))?.saveAs
  const buddy = buddySlot ? prod.text(buddySlot) : ''
  const buddyMessage = buddy ? week.tasks.flatMap(t => t.steps).filter(s => s.kind === 'engage' && s.input.type === 'messages').flatMap(s => s.input.items).find(m => m.from === buddy)?.text : null

  const doneCount = week.tasks.filter(t => checked[t.id]).length
  const weekDone = doneCount === week.tasks.length
  const total = week.tasks.reduce((n, t) => n + (minutesOf(t) || 0), 0)
  const reflection = readJson(prod.text(reflectSlot(week.week)))

  const openIdx = week.tasks.findIndex(t => t.id === openId)
  if (openIdx >= 0) {
    const act = week.tasks[openIdx]
    const next = week.tasks[openIdx + 1]
    return (
      <ActivityPlayer key={act.id} activity={act} index={openIdx} week={week} journey={journey} lang={lang}
        sid={sid} jid={journey.id} db={db} prod={prod} buddy={buddy} buddyMessage={buddyMessage}
        minutes={minutesOf(act)} isDone={!!checked[act.id]}
        onDone={() => !checked[act.id] && markDone(act.id)}
        onExit={() => setOpenId(null)}
        nextActivity={next} onOpenNext={() => setOpenId(next.id)} />
    )
  }

  return (
    <div data-testid="journey-v2" data-level={lv.level} data-level-status={lv.status}>
      {/* banner */}
      <div style={{ background: `linear-gradient(135deg,${D.moss},${D.mossDeep})`, borderRadius: 22, padding: '26px 30px', color: '#fff', boxShadow: D.shadowLg, marginBottom: 22, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -30, top: -50, width: 170, height: 170, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 54, height: 54, borderRadius: 16, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={journey.icon} size={27} color="#fff" /></div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontSize: 12.5, opacity: 0.8, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{tx(T.your, lang)}</div>
            <h2 style={{ margin: '4px 0 0', ...serifD(500, 27) }}>{tx(journey, lang)}</h2>
            <div style={{ fontSize: 14, opacity: 0.9, marginTop: 4, maxWidth: 560 }}>{tx(journey.meta.setting, lang)}</div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.25)', padding: '7px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
            <Icon name="progress" size={14} color="#fff" />{tx(T.level, lang)} {lv.level}
          </div>
        </div>
      </div>

      {/* path */}
      <div style={{ ...kicker, marginBottom: 10 }}>{tx(T.arc, lang)}</div>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, marginBottom: 22 }}>
        {(journey.outline || journey.weeks).map(o => {
          const available = journey.weeks.some(w => w.week === o.week)
          const active = o.week === week.week
          return (
            <button type="button" key={o.week} disabled={!available} onClick={() => setWeekNo(o.week)}
              style={{ flexShrink: 0, width: 150, textAlign: 'left', fontFamily: 'inherit', cursor: available ? 'pointer' : 'default', padding: '10px 12px', borderRadius: 13, border: `1px solid ${active ? D.moss : D.line}`, background: active ? D.mossSoft : available ? D.surface : D.surfaceWarm, opacity: available ? 1 : 0.65 }}>
              <div style={{ ...sansD(700, 11.5), color: active ? D.mossDeep : D.muted }}>{tx(T.week, lang)} {o.week}{!available && <> · <Icon name="lock" size={10} color={D.muted} /> {tx(T.soon, lang)}</>}</div>
              <div style={{ ...sansD(600, 12.5, { lineHeight: 1.3 }), color: D.ink, marginTop: 3 }}>{tx(o.theme, lang)}</div>
            </button>
          )
        })}
      </div>

      {/* week header */}
      <div style={{ ...card, padding: '22px 24px', marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 12px' }}>
          <h2 style={{ margin: 0, ...serifD(500, 25) }}>{tx(T.week, lang)} {week.week}</h2>
          <span style={{ fontSize: 17, color: D.muted }}>{tx(week.theme, lang)}</span>
          <span style={{ marginLeft: 'auto', fontSize: 13, color: D.muted }}>{doneCount}/{week.tasks.length} · ~{total} {tx(L.minutes, lang)} ({tx(T.sessions, lang)})</span>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, margin: '10px 0 14px' }}>{tx(week.situation, lang)}</p>
        <div style={{ fontSize: 13, fontWeight: 700, color: D.muted, marginBottom: 6 }}>{tx(T.canDo, lang)}</div>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, fontSize: 14.5 }}>{week.canDo.map((c, k) => <li key={k}>{tx(c, lang)}</li>)}</ul>
      </div>

      {weekDone && (
        <div data-testid="week-done" style={{ ...note(D.mossSoft, D.sage), marginBottom: 16, padding: '16px 18px' }}>
          <div style={{ ...serifD(500, 20), color: D.mossDeep, display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="award" size={20} color={D.mossDeep} />{tx(T.weekDone, lang)}</div>
          {reflection?.canDo && <>
            <div style={{ fontSize: 13, fontWeight: 700, color: D.muted, margin: '10px 0 4px' }}>{tx(T.youSaid, lang)}</div>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6 }}>
              {week.canDo.map((c, k) => reflection.canDo[k] && <li key={k}>{tx(c, lang)} — <b>{tx(SCALE_LABEL[reflection.canDo[k]], lang)}</b></li>)}
            </ul>
          </>}
          <p style={{ margin: '10px 0 0', fontSize: 14 }}>{tx(week.tasks[week.tasks.length - 1].bridge, lang)}</p>
        </div>
      )}

      <p style={{ fontSize: 13.5, color: D.muted, margin: '0 0 12px', display: 'flex', gap: 6 }}><Icon name="lightbulb" size={14} color={D.orange} style={{ marginTop: 2 }} />{tx(T.order, lang)}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {week.tasks.map((t, k) => {
          const done = !!checked[t.id]
          return (
            <button type="button" key={t.id} data-testid={`open-${t.id}`} onClick={() => setOpenId(t.id)}
              style={{ ...card, fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer', padding: '18px 20px', display: 'flex', gap: 16, alignItems: 'center', borderColor: done ? D.sage : D.line }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: done ? D.moss : D.terraSoft, color: done ? '#fff' : D.terraDeep, ...sansD(800, 15) }}>
                {done ? <Icon name="check" size={18} color="#fff" /> : k + 1}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ ...sansD(700, 16), color: D.ink }}>{tx(t, lang)}</div>
                <div style={{ fontSize: 13.5, color: D.muted, marginTop: 3, lineHeight: 1.45 }}>{tx(t.purpose, lang)}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8, alignItems: 'center' }}>
                  {t.skills.map(s => SKILL_META[s] && <span key={s} style={{ fontSize: 11.5, fontWeight: 600, color: D.mossDeep, background: D.mossSoft, padding: '2px 8px', borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name={SKILL_META[s].icon} size={11} color={D.mossDeep} />{SKILL_META[s][lang] || SKILL_META[s].en}</span>)}
                  {minutesOf(t) && <span style={{ fontSize: 12, color: D.muted }}>~{minutesOf(t)} {tx(L.minutes, lang)}</span>}
                </div>
              </div>
              <span style={{ ...btn(done ? D.surfaceWarm : D.terra, done ? D.mossDeep : '#fff'), fontSize: 13, padding: '8px 14px', flexShrink: 0 }}>
                {done ? tx(T.redo, lang) : tx(T.start, lang)}<Icon name="next" size={14} color={done ? D.mossDeep : '#fff'} />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
