import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Icon from './Icon'

const TYPE_COLORS = { class: B.oliva, test: B.marrom, hw: B.laranja, holiday: B.rosa, other: B.light }

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

  return (
    <div style={{ padding: '20px 14px', maxWidth: 780, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 10 }}>
        <h2 style={{ ...pp(700, 17), color: B.dark }}>{t.calTitle}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <button style={{ ...S.chip, background: B.bege, color: B.mid, fontSize: 16 }} onClick={prevM}>‹</button>
          <span style={{ ...pp(600, 13), color: B.dark, minWidth: 140, textAlign: 'center' }}>{t.monthNames[mo]} {yr}</span>
          <button style={{ ...S.chip, background: B.bege, color: B.mid, fontSize: 16 }} onClick={nextM}>›</button>
          {isTeacher && (
            <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '8px 13px' }} onClick={() => setShowAdd(v => !v)}>{t.addEvent}</button>
          )}
        </div>
      </div>

      {isTeacher && showAdd && (
        <div style={{ ...S.card, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            <input style={{ ...S.inp, flex: 2, fontSize: 12 }} placeholder={t.evTitlePh} value={evT} onChange={e => setEvT(e.target.value)} />
            <input type="date" style={{ ...S.inp, flex: 1, fontSize: 12 }} value={evD} onChange={e => setEvD(e.target.value)} />
            <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={evTy} onChange={e => setEvTy(e.target.value)}>
              {Object.entries(t.evTypes).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <button style={{ ...S.btn(B.oliva), fontSize: 12 }} onClick={addEv}>{t.save}</button>
            <button style={{ ...S.btn(B.light), fontSize: 12 }} onClick={() => setShowAdd(false)}>{t.cancel}</button>
          </div>
        </div>
      )}

      {/* Calendar grid */}
      <div style={{ background: B.white, borderRadius: 14, border: `1.5px solid ${B.border}`, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', background: B.marrom }}>
          {t.dayNames.map(d => (
            <div key={d} style={{ padding: '9px 3px', textAlign: 'center', ...ir(700, 11), color: '#fff' }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)' }}>
          {Array.from({ length: fd }, (_, i) => (
            <div key={`e${i}`} style={{ minHeight: 60, background: B.cream, borderRight: `1px solid ${B.bege}`, borderBottom: `1px solid ${B.bege}` }} />
          ))}
          {Array.from({ length: dim }, (_, i) => {
            const d = i + 1, evs = dayEvs(d)
            const isT = today.getFullYear() === yr && today.getMonth() === mo && today.getDate() === d
            const isSel = selDay === d
            return (
              <div
                key={d}
                style={{ minHeight: 60, padding: '5px 4px 3px', borderRight: `1px solid ${B.bege}`, borderBottom: `1px solid ${B.bege}`, background: isSel ? B.bege : isT ? B.marrBg : B.white, cursor: 'pointer' }}
                onClick={() => setSelDay(isSel ? null : d)}
              >
                <div style={{ width: 20, height: 20, borderRadius: 10, background: isT ? B.marrom : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                  <span style={{ ...ir(isT ? 700 : 400, 11), color: isT ? '#fff' : B.mid }}>{d}</span>
                </div>
                {evs.slice(0, 2).map(ev => (
                  <div key={ev.id} style={{ ...ir(600, 8), color: '#fff', background: TYPE_COLORS[ev.type] || B.mid, borderRadius: 3, padding: '1px 4px', marginBottom: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.title}</div>
                ))}
                {evs.length > 2 && <div style={{ ...ir(400, 8), color: B.light }}>+{evs.length - 2}</div>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Day detail */}
      {selDay && (
        <div style={{ ...S.card, marginBottom: 12 }}>
          <p style={{ ...pp(600, 13), color: B.dark, marginBottom: 9 }}>{selDay} {t.monthNames[mo]}</p>
          {dayEvs(selDay).length === 0
            ? <p style={{ ...ir(400, 13), color: B.light }}>{t.noEvents}</p>
            : dayEvs(selDay).map(ev => (
              <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 11px', background: B.cream, borderRadius: 9, marginBottom: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: TYPE_COLORS[ev.type] || B.mid, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <p style={{ ...ir(600, 12), color: B.dark }}>{ev.title}</p>
                  <p style={{ ...ir(400, 11), color: B.light }}>{t.evTypes[ev.type] || ev.type}</p>
                </div>
                {isTeacher && (
                  <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '3px 7px', fontSize: 10, color: '#DC2626', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => delEv(ev.id)}><Icon name="delete" size={11} color="#DC2626" /></button>
                )}
              </div>
            ))
          }
        </div>
      )}

      {/* Month list */}
      <div style={S.card}>
        <p style={{ ...pp(600, 11), color: B.mid, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 9 }}>
          {lang === 'pt' ? 'Eventos do mês' : 'This month'}
        </p>
        {moEvs.length === 0
          ? <p style={{ ...ir(400, 13), color: B.light }}>{t.noEvents}</p>
          : moEvs.sort((a, b) => a.date.localeCompare(b.date)).map(ev => (
            <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '7px 0', borderBottom: `1px solid ${B.cream}` }}>
              <div style={{ width: 7, height: 7, borderRadius: 4, background: TYPE_COLORS[ev.type] || B.mid, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span style={{ ...ir(600, 12), color: B.dark }}>{ev.title}</span>
                <span style={{ ...ir(400, 11), color: B.light, marginLeft: 7 }}>{ev.date.slice(8)} {t.monthNames[mo]}</span>
              </div>
              <span style={{ ...ir(600, 10), background: TYPE_COLORS[ev.type] || B.mid, color: '#fff', borderRadius: 20, padding: '1px 7px' }}>{t.evTypes[ev.type] || ev.type}</span>
              {isTeacher && (
                <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '3px 7px', fontSize: 10, color: '#DC2626', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => delEv(ev.id)}><Icon name="delete" size={11} color="#DC2626" /></button>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}
