import { useState } from 'react'
import { D, serifD, sansD } from '../constants/dashColors'
import Icon from './Icon'

const TYPE_COLORS = { class: D.terra, test: D.clay, hw: D.honey, holiday: D.sky, other: D.muted }
const TYPE_SOFT   = { class: D.terraSoft, test: D.claySoft, hw: D.honeySoft, holiday: D.skySoft, other: D.surfaceWarm }

export default function CalSection({ t, lang, db, upDb, isTeacher, sid }) {
  const now = new Date()
  const [yr, setYr]           = useState(now.getFullYear())
  const [mo, setMo]           = useState(now.getMonth())
  const [showAdd, setShowAdd] = useState(false)
  const [evT, setEvT]         = useState('')
  const [evD, setEvD]         = useState('')
  const [evTy, setEvTy]       = useState('class')
  const [selDay, setSelDay]   = useState(null)

  const calKey = sid ? `cal_${sid}` : 'cal_global'
  const events = db[calKey] || []
  const dim    = new Date(yr, mo + 1, 0).getDate()
  const fd     = (new Date(yr, mo, 1).getDay() + 6) % 7
  const ms     = `${yr}-${String(mo + 1).padStart(2, '0')}`
  const dayEvs = d => events.filter(e => e.date === `${ms}-${String(d).padStart(2, '0')}`)
  const moEvs  = events.filter(e => e.date.startsWith(ms))
  const today  = new Date()

  const addEv = () => {
    if (!evT.trim() || !evD) return
    upDb({ [calKey]: [...events, { id: `ev${Date.now()}`, title: evT.trim(), date: evD, type: evTy }] })
    setEvT(''); setEvD(''); setShowAdd(false)
  }
  const delEv = id => upDb({ [calKey]: events.filter(e => e.id !== id) })
  const prevM = () => { let m = mo - 1, y = yr; if (m < 0) { m = 11; y-- } setMo(m); setYr(y); setSelDay(null) }
  const nextM = () => { let m = mo + 1, y = yr; if (m > 11) { m = 0; y++ } setMo(m); setYr(y); setSelDay(null) }

  const iconBtn = { width: 34, height: 34, borderRadius: 10, border: `1px solid ${D.line}`, background: D.surfaceWarm, cursor: 'pointer', fontSize: 15, color: D.muted, display: 'flex', alignItems: 'center', justifyContent: 'center' }

  return (
    <div style={{ padding: '20px 16px', maxWidth: 980, margin: '0 auto', fontFamily: "'Hanken Grotesk',sans-serif", color: D.ink }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0, ...serifD(500, 28) }}>{t.calTitle}</h2>
          <div style={{ fontSize: 14.5, color: D.muted, marginTop: 4 }}>{lang === 'pt' ? 'aulas, provas e eventos' : 'classes, tests and events'}</div>
        </div>
        {isTeacher && (
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: D.terra, color: '#fff', border: 'none', ...sansD(700, 14), padding: '12px 18px', borderRadius: 12, cursor: 'pointer', boxShadow: D.shadow }} onClick={() => setShowAdd(v => !v)}>
            <Icon name="add" size={15} color="#fff" />{t.addEvent}
          </button>
        )}
      </div>

      {isTeacher && showAdd && (
        <div style={{ background: D.surface, borderRadius: 16, border: `1px solid ${D.line}`, padding: 18, marginBottom: 16, boxShadow: D.shadow }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <input style={{ flex: 2, padding: '10px 12px', border: `1px solid ${D.line}`, borderRadius: 10, fontFamily: 'inherit', fontSize: 13, background: D.surfaceWarm, color: D.ink }} placeholder={t.evTitlePh} value={evT} onChange={e => setEvT(e.target.value)} />
            <input type="date" style={{ flex: 1, padding: '10px 12px', border: `1px solid ${D.line}`, borderRadius: 10, fontFamily: 'inherit', fontSize: 13, background: D.surfaceWarm, color: D.ink }} value={evD} onChange={e => setEvD(e.target.value)} />
            <select style={{ flex: 1, padding: '10px 12px', border: `1px solid ${D.line}`, borderRadius: 10, fontFamily: 'inherit', fontSize: 13, background: D.surfaceWarm, color: D.ink }} value={evTy} onChange={e => setEvTy(e.target.value)}>
              {Object.entries(t.evTypes).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <button style={{ background: D.moss, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 16px', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, cursor: 'pointer' }} onClick={addEv}>{t.save}</button>
            <button style={{ background: D.surfaceWarm, color: D.muted, border: `1px solid ${D.line}`, borderRadius: 10, padding: '10px 16px', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, cursor: 'pointer' }} onClick={() => setShowAdd(false)}>{t.cancel}</button>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        {/* Calendar grid */}
        <div style={{ background: D.surface, borderRadius: 20, padding: 24, boxShadow: D.shadow, border: `1px solid ${D.line}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{t.monthNames[mo]} {yr}</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={iconBtn} onClick={prevM}>‹</button>
              <button style={iconBtn} onClick={nextM}>›</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, marginBottom: 6 }}>
            {t.dayNames.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: D.muted, padding: '6px 0' }}>{d}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
            {Array.from({ length: fd }, (_, i) => <div key={`e${i}`} style={{ aspectRatio: '1.1' }} />)}
            {Array.from({ length: dim }, (_, i) => {
              const d = i + 1, evs = dayEvs(d)
              const isT = today.getFullYear() === yr && today.getMonth() === mo && today.getDate() === d
              const isSel = selDay === d
              return (
                <div
                  key={d}
                  style={{ aspectRatio: '1.1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 2, padding: '6px 3px', borderRadius: 11, cursor: 'pointer', border: `1px solid ${isSel ? D.terra : isT ? D.terra : D.line}`, background: isT ? D.terra : isSel ? D.terraSoft : D.surfaceWarm, color: isT ? '#fff' : D.ink }}
                  onClick={() => setSelDay(isSel ? null : d)}
                >
                  <span style={{ fontSize: 13, fontWeight: isT ? 700 : 500 }}>{d}</span>
                  {evs.length > 0 && <div style={{ width: 5, height: 5, borderRadius: '50%', background: isT ? '#fff' : (TYPE_COLORS[evs[0].type] || D.muted) }} />}
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Day detail */}
          {selDay && (
            <div style={{ background: D.surface, borderRadius: 16, padding: 18, boxShadow: D.shadow, border: `1px solid ${D.line}` }}>
              <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{selDay} {t.monthNames[mo]}</p>
              {dayEvs(selDay).length === 0
                ? <p style={{ fontSize: 13, color: D.muted }}>{t.noEvents}</p>
                : dayEvs(selDay).map(ev => (
                  <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 11px', background: TYPE_SOFT[ev.type] || D.surfaceWarm, borderRadius: 10, marginBottom: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: TYPE_COLORS[ev.type] || D.muted, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 12.5, fontWeight: 600 }}>{ev.title}</p>
                      <p style={{ fontSize: 11, color: D.muted }}>{t.evTypes[ev.type] || ev.type}</p>
                    </div>
                    {isTeacher && (
                      <button style={{ background: D.claySoft, border: 'none', borderRadius: 7, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => delEv(ev.id)}><Icon name="delete" size={12} color={D.clay} /></button>
                    )}
                  </div>
                ))
              }
            </div>
          )}

          {/* Month list */}
          <div style={{ background: D.surface, borderRadius: 20, padding: 24, boxShadow: D.shadow, border: `1px solid ${D.line}` }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, color: D.muted, textTransform: 'uppercase', marginBottom: 14 }}>
              {lang === 'pt' ? 'Eventos do mês' : 'This month'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {moEvs.length === 0
                ? <p style={{ fontSize: 13, color: D.muted }}>{t.noEvents}</p>
                : moEvs.sort((a, b) => a.date.localeCompare(b.date)).map(ev => (
                  <div key={ev.id} style={{ display: 'flex', gap: 14, padding: 14, borderRadius: 14, background: D.surfaceWarm, border: `1px solid ${D.line}`, alignItems: 'center' }}>
                    <div style={{ width: 46, textAlign: 'center', borderRadius: 11, background: TYPE_SOFT[ev.type] || D.surfaceWarm, color: TYPE_COLORS[ev.type] || D.muted, padding: '7px 0', flexShrink: 0 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.8 }}>{t.monthNames[mo].slice(0, 3).toUpperCase()}</div>
                      <div style={{ ...serifD(500, 18), lineHeight: 1 }}>{ev.date.slice(8)}</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{ev.title}</div>
                      <div style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>{t.evTypes[ev.type] || ev.type}</div>
                    </div>
                    {isTeacher && (
                      <button style={{ background: D.claySoft, border: 'none', borderRadius: 7, padding: '5px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }} onClick={() => delEv(ev.id)}><Icon name="delete" size={12} color={D.clay} /></button>
                    )}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
