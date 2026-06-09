import { useState } from 'react'
import { B, CAT, GRADE } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { CEFR_META } from '../constants/cefr'
import { PLAN } from '../constants/plan'
import { STUDY_HABITS, HW_HABITS } from '../constants/habits'
import { todayStr, weekDays, hashPassword } from '../utils'
import Logo from './Logo'
import CalSection from './CalSection'
import Icon from './Icon'
import { JOURNEY_MAP } from '../constants/journeys'
import { JOURNEY_RESOURCES, TYPE_ICON, pickResource, levelHint } from '../constants/journeyResources'

const CEFR_TO_LEVEL = { A1:'beginner', A2:'beginner', B1:'intermediate', B2:'intermediate', C1:'advanced', C2:'advanced' }

export default function StudentApp({ t, lang, setLang, sid, students, db, upDb, isPreview, onBack }) {
  const [tab, setTab]       = useState('dashboard')
  const [activeWeek, setAW] = useState(1)
  const [jSelWeek, setJSelWeek] = useState(1)
  const [newPwd, setNewPwd] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const [showLogout, setShowLogout] = useState(false)

  const student   = students.find(s => s.id === sid) || { name: '?', avatar: '🎒' }
  const lvl       = db[`lv_${sid}`] || 'A1'
  const lvm       = CEFR_META.find(c => c.level === lvl) || CEFR_META[0]
  const plan      = PLAN[lvl] || []
  const dk        = `sd_${sid}`
  const sd        = db[dk] || {}
  const checked   = sd.checked || {}
  const scores    = sd.scores  || {}
  const notes     = sd.notes   || {}
  const errors    = sd.errors  || {}
  const fb        = db[`fb_${sid}`]  || ''
  const hw        = db[`hw_${sid}`]  || []
  const mats      = db[`mat_${sid}`] || []
  const infoGen   = db[`ig_${sid}`]  || ''
  const infoNotes = db[`in_${sid}`]  || ''

  const extraWeeks  = db[`pew_${sid}_${lvl}`] || []
  const allWeekDefs = [...plan.map(w => ({ ...w, base: true })), ...extraWeeks.map(w => ({ ...w, base: false }))]

  const getWT = wn => {
    const ck = `pt_${sid}_${lvl}_w${wn}`
    if (db[ck]?.length) return [...db[ck], ...(db[`ex_${sid}_${lvl}_w${wn}`] || [])]
    return [...(allWeekDefs.find(w => w.week === wn)?.tasks || []), ...(db[`ex_${sid}_${lvl}_w${wn}`] || [])]
  }

  const allTasks = allWeekDefs.flatMap(w => getWT(w.week))
  const done2    = allTasks.filter(tk => checked[tk.id]).length
  const total2   = allTasks.length
  const pct      = total2 ? Math.round(done2 / total2 * 100) : 0
  const wPct     = wn => { const ts = getWT(wn); return ts.length ? Math.round(ts.filter(tk => checked[tk.id]).length / ts.length * 100) : 0 }

  const upS        = patch => upDb({ [dk]: { ...sd, ...patch } })
  const toggleTask = id    => upS({ checked: { ...checked, [id]: !checked[id] } })
  const markError  = (id, wn) => {
    upS({ errors: { ...errors, [id]: true } })
    const ek = `ex_${sid}_${lvl}_w${wn}`
    const existing = db[ek] || []
    const wData = plan.find(w => w.week === wn)
    const newX = (wData?.extras || []).filter(e => !existing.find(x => x.id === e.id))
    if (newX.length) upDb({ [ek]: [...existing, ...newX] })
  }
  const toggleHW = id => upDb({ [`hw_${sid}`]: hw.map(h => h.id === id ? { ...h, done: !h.done } : h) })

  const habK   = `hab_${sid}`
  const habDb  = db[habK] || {}
  const today  = todayStr()
  const todayH = habDb[today] || {}
  const toggleHab = hid => upDb({ [habK]: { ...habDb, [today]: { ...todayH, [hid]: !todayH[hid] } } })
  const days    = weekDays()
  const dayDone = d => { const dh = habDb[d] || {}; return [...STUDY_HABITS, ...HW_HABITS].some(h => dh[h.id]) }
  const streak  = (() => {
    let s = 0, d = new Date()
    while (true) {
      const ds = d.toISOString().slice(0, 10)
      if (!dayDone(ds)) break
      s++; d.setDate(d.getDate() - 1)
    }
    return s
  })()

  const curWeek  = allWeekDefs.find(w => w.week === activeWeek) || allWeekDefs[0]
  const wTasks   = getWT(activeWeek)
  const hasExtra = !!(db[`ex_${sid}_${lvl}_w${activeWeek}`] || []).length

  const jid       = db[`jrn_${sid}`]
  const journey   = jid ? JOURNEY_MAP[jid] : null
  const simpleLevel = CEFR_TO_LEVEL[lvl] || 'beginner'
  const jChecked  = db[`jsd_${sid}`] || {}
  const visited   = db[`resv_${sid}`] || {}
  const markVisited = url => upDb({ [`resv_${sid}`]: { ...visited, [url]: true } })
  const jAllWeeks = journey ? [...(journey.weeks || []), ...(db[`jew_${sid}_${jid}`] || [])] : []
  const jSelW     = jAllWeeks.find(w => w.week === jSelWeek) || jAllWeeks[0]
  const jGetTasks = wn => { const ck = `jt_${sid}_${jid}_w${wn}`; return db[ck]?.length ? db[ck] : (journey?.weeks.find(w => w.week === wn)?.tasks || []) }
  const jTasks    = jSelW ? jGetTasks(jSelW.week) : []
  const jToggle   = (taskId) => upDb({ [`jsd_${sid}`]: { ...jChecked, [taskId]: !jChecked[taskId] } })

  const TABS = [
    ['dashboard', t.tabDash], ['plan', t.stPlanTab], ['hw', t.tabHWst],
    ['habits', t.tabHabits], ['calendar', t.tabCalSt],
    ...(journey ? [['journey', lang === 'pt' ? `${journey.icon} Jornada` : `${journey.icon} Journey`]] : []),
    ['info', t.tabInfoSt],
  ]

  return (
    <div style={S.app}>
      {/* Header */}
      <header style={{ background: B.marrom, height: 52, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <Logo h={32} contrast />
        <div style={{ flexShrink: 0, maxWidth: 100 }}>
          <p style={{ ...pp(600, 11), color: '#fff', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{student.name}</p>
          <span style={{ fontSize: 9, background: lvm.color, color: lvm.text, borderRadius: 20, padding: '1px 6px', fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{lvl} {lvm.icon}</span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', minWidth: 0 }}>
          <div style={{ width: '100%', maxWidth: 110, height: 5, background: 'rgba(255,255,255,0.18)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg,${B.rosa},${B.laranja})`, borderRadius: 99, transition: 'width 0.6s' }} />
          </div>
          <span style={{ ...ir(700, 11), color: B.rosa, flexShrink: 0 }}>{pct}%</span>
        </div>
        <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
          <button style={{ ...S.chip, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 10, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}><Icon name="globe" size={11} color="#fff" />{t.switchLang}</button>
          {isPreview ? (
            <button style={{ ...S.chip, background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 10, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={onBack}><Icon name="back" size={12} color="#fff" />{lang === 'pt' ? 'Voltar' : 'Back'}</button>
          ) : (
            <button style={{ ...S.chip, background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 10, padding: '5px 8px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => setShowLogout(true)}><Icon name="logout" size={12} color="#fff" />{lang === 'pt' ? 'Sair' : 'Logout'}</button>
          )}
        </div>
      </header>

      {showLogout && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }} onClick={() => setShowLogout(false)}>
          <div style={{ background: '#fff', borderRadius: 18, padding: '24px 22px', maxWidth: 320, width: '100%', boxShadow: '0 20px 60px rgba(44,24,16,0.3)' }} onClick={e => e.stopPropagation()}>
            <p style={{ ...pp(700, 16), color: B.dark, marginBottom: 6 }}>{lang === 'pt' ? 'Quer mesmo sair?' : 'Log out?'}</p>
            <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 18 }}>{lang === 'pt' ? 'Seu progresso está salvo. Você pode voltar quando quiser.' : 'Your progress is saved. You can come back any time.'}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.bege), flex: 1, color: B.dark }} onClick={() => setShowLogout(false)}>{lang === 'pt' ? 'Cancelar' : 'Cancel'}</button>
              <button style={{ ...S.btn(B.laranja), flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={onBack}><Icon name="logout" size={14} color="#fff" />{lang === 'pt' ? 'Sair' : 'Log out'}</button>
            </div>
          </div>
        </div>
      )}

      {isPreview && <div style={{ background: '#FEF3C7', padding: '6px 16px', fontSize: 11, color: '#92400E', fontWeight: 600 }}>👁 Teacher Renata — preview</div>}
      {fb && <div style={{ background: B.larBg, borderLeft: `4px solid ${B.laranja}`, padding: '9px 16px', margin: '12px 14px 0', borderRadius: 9, fontSize: 12, color: B.dark }}><strong style={{ color: B.larD }}>{t.teacherFbLabel}</strong> {fb}</div>}

      {/* Nav */}
      <nav style={{ background: B.marrom, display: 'flex', gap: 2, padding: '5px 10px', borderTop: '1px solid rgba(255,255,255,0.07)', overflowX: 'auto', flexShrink: 0 }}>
        {TABS.map(([k, lb]) => (
          <button key={k} style={{ ...S.navBtn, background: tab === k ? B.laranja : 'transparent', color: tab === k ? '#fff' : 'rgba(255,255,255,0.5)' }} onClick={() => setTab(k)}>{lb}</button>
        ))}
      </nav>

      <div style={{ flex: 1, overflowY: 'auto' }}>

        {/* Dashboard tab */}
        {tab === 'dashboard' && (
          <div style={{ padding: '20px 14px', maxWidth: 860, margin: '0 auto' }}>
            {/* Welcome / first step */}
            {!isPreview && !db[`seenWelcome_${sid}`] && (
              <div style={{ background: B.larBg, border: `1.5px solid ${B.laranja}55`, borderRadius: 16, padding: '16px 18px', marginBottom: 16, position: 'relative' }}>
                <button style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => upDb({ [`seenWelcome_${sid}`]: true })}>
                  <Icon name="close" size={16} color={B.light} />
                </button>
                <p style={{ ...pp(700, 15), color: B.dark, marginBottom: 6 }}>👋 {lang === 'pt' ? `Bem-vinda, ${student.name}!` : `Welcome, ${student.name}!`}</p>
                <p style={{ ...ir(400, 13), color: B.mid, lineHeight: 1.6, marginBottom: 12 }}>
                  {lang === 'pt'
                    ? 'Aqui você acompanha seu progresso. Para começar a estudar, vá até a aba Plano e abra a Semana 1.'
                    : 'This is where you track your progress. To start studying, go to the Plan tab and open Week 1.'}
                </p>
                <button style={{ ...S.btn(B.laranja), fontSize: 13, padding: '9px 16px', display: 'inline-flex', alignItems: 'center', gap: 6 }} onClick={() => { setTab('plan'); upDb({ [`seenWelcome_${sid}`]: true }) }}>
                  <Icon name="plan" size={14} color="#fff" />{lang === 'pt' ? 'Ir para o Plano' : 'Go to the Plan'}
                </button>
              </div>
            )}
            {/* Hero */}
            <div style={{ background: `linear-gradient(135deg,${B.marrom},${B.laranja} 60%,${B.rosa})`, borderRadius: 20, padding: '22px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 52, flexShrink: 0 }}>{student.avatar}</span>
              <div style={{ flex: 1, minWidth: 140 }}>
                <p style={{ ...pp(800, 18), color: '#fff', marginBottom: 4 }}>{lang === 'pt' ? `Olá, ${student.name}!` : `Hi, ${student.name}!`}</p>
                <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.75)', marginBottom: 12 }}>{lang === 'pt' ? 'Continue sua jornada com Teacher Renata' : 'Continue your journey with Teacher Renata'}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {[
                    { v: `${pct}%`, l: t.overallLabel },
                    { v: `${done2}/${total2}`, l: t.tasksDone },
                    { v: Object.values(scores).length ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length) + '%' : '—', l: t.avgLabel },
                  ].map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 10, padding: '9px 12px', textAlign: 'center', minWidth: 66 }}>
                      <p style={{ ...pp(800, 16), color: '#fff' }}>{s.v}</p>
                      <p style={{ ...ir(400, 10), color: 'rgba(255,255,255,0.7)' }}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress chart */}
            <div style={{ ...S.card, marginBottom: 20 }}>
              <p style={S.lbl}>📊 {t.progressChart}</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 110, padding: '4px 0 0' }}>
                {allWeekDefs.map((w, i) => {
                  const p = wPct(w.week), sc = scores[`week${w.week}`]
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                      <p style={{ ...ir(600, 9), color: p > 0 ? B.marrom : B.light }}>{p}%</p>
                      <div style={{ width: '100%', height: 90, display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ width: '100%', height: `${Math.max(p / 100 * 90, 3)}px`, background: p === 100 ? `linear-gradient(to top,${B.oliva},${B.olivaD})` : `linear-gradient(to top,${B.laranja},${B.rosa})`, borderRadius: '5px 5px 0 0', transition: 'height 0.6s ease', position: 'relative' }}>
                          {sc > 0 && <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', background: GRADE(sc).c, color: '#fff', borderRadius: 10, padding: '1px 5px', fontSize: 9, fontWeight: 700, fontFamily: 'Poppins,sans-serif', whiteSpace: 'nowrap' }}>{sc}%</div>}
                        </div>
                      </div>
                      <p style={{ ...ir(500, 9), color: B.light }}>{t.week.slice(0, 3)} {w.week}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Can-do statements */}
            <p style={{ ...pp(700, 16), color: B.dark, marginBottom: 14 }}>{t.canDoTitle}</p>
            {CEFR_META.map((c, i) => {
              const lvIdx = CEFR_META.findIndex(x => x.level === lvl)
              const unlocked = i <= lvIdx, isCur = c.level === lvl
              return (
                <div key={c.level} style={{ borderRadius: 14, border: `2px solid ${unlocked ? c.color : B.border}`, background: isCur ? `${c.color}14` : unlocked ? B.white : B.cream, opacity: unlocked ? 1 : 0.45, overflow: 'hidden', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: isCur ? c.color : unlocked ? `${c.color}18` : 'transparent' }}>
                    <span style={{ fontSize: 22 }}>{c.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ ...pp(700, 13), color: isCur ? c.text : B.dark }}>{c.level} — {c.label[lang]}</p>
                      {isCur && <p style={{ ...ir(500, 10), color: isCur ? c.text : B.light, opacity: 0.8, marginTop: 2 }}>{t.currentLevel}</p>}
                    </div>
                    <span style={{ fontSize: 16 }}>{unlocked ? '✅' : '🔒'}</span>
                  </div>
                  {unlocked && (
                    <div style={{ padding: '12px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 6 }}>
                      {c.canDo[lang].map((item, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                          <span style={{ color: c.color, flexShrink: 0, fontSize: 11, marginTop: 1 }}>✦</span>
                          <p style={{ ...ir(400, 12), color: B.dark }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Plan tab */}
        {tab === 'plan' && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Week selector */}
            <div style={{ overflowX: 'auto', padding: '10px 14px 0', background: B.cream, borderBottom: `1px solid ${B.border}`, flexShrink: 0 }}>
              <div style={{ display: 'flex', gap: 8, paddingBottom: 10, minWidth: 'max-content' }}>
                <div style={{ padding: '6px 10px', background: lvm.color, borderRadius: 9, display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                  <span style={{ fontSize: 13 }}>{lvm.icon}</span>
                  <span style={{ ...pp(700, 10), color: lvm.text, whiteSpace: 'nowrap' }}>{lvl}</span>
                </div>
                {allWeekDefs.map(w => {
                  const p = wPct(w.week), act = activeWeek === w.week
                  const hx = !!(db[`ex_${sid}_${lvl}_w${w.week}`] || []).length || !!db[`pt_${sid}_${lvl}_w${w.week}`]
                  return (
                    <button key={w.week} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px 12px', borderRadius: 10, border: `2px solid ${act ? B.marrom : 'transparent'}`, background: act ? B.marrBg : B.white, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0, minWidth: 110 }} onClick={() => setAW(w.week)}>
                      <span style={{ ...ir(600, 9), color: B.light, textTransform: 'uppercase' }}>{t.week} {w.week}{hx ? ' ✏️' : ''}</span>
                      <span style={{ ...ir(600, 10), color: B.dark, marginTop: 1, whiteSpace: 'nowrap' }}>{w.theme[lang].length > 16 ? w.theme[lang].slice(0, 15) + '…' : w.theme[lang]}</span>
                      <div style={{ width: '100%', height: 3, background: B.bege, borderRadius: 99, marginTop: 4, overflow: 'hidden' }}><div style={{ height: '100%', width: `${p}%`, background: p === 100 ? B.oliva : B.marrom, borderRadius: 99 }} /></div>
                      <span style={{ ...pp(700, 9), color: B.marrom, marginTop: 2 }}>{p}%</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ ...pp(700, 15), color: B.dark }}>{t.week} {curWeek?.week}: {curWeek?.theme[lang]}</h2>
                  <p style={{ ...ir(400, 11), color: B.light, marginTop: 2 }}>
                    {wTasks.filter(tk => checked[tk.id]).length} {t.of} {wTasks.length} {t.tasksDone}
                    {hasExtra && <span style={{ color: B.laranja, marginLeft: 8 }}>{t.adaptiveMsg}</span>}
                  </p>
                </div>
                <svg width="48" height="48" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                  <circle cx="24" cy="24" r="19" fill="none" stroke={B.bege} strokeWidth="5" />
                  <circle cx="24" cy="24" r="19" fill="none" stroke={wPct(activeWeek) === 100 ? B.oliva : B.marrom} strokeWidth="5" strokeDasharray={`${wPct(activeWeek) / 100 * 119.4} 119.4`} strokeLinecap="round" transform="rotate(-90 24 24)" style={{ transition: 'stroke-dasharray 0.5s' }} />
                  <text x="24" y="28" textAnchor="middle" fontSize="10" fontWeight="800" fill={B.dark} fontFamily="Poppins,sans-serif">{wPct(activeWeek)}%</text>
                </svg>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
                {wTasks.map(task => {
                  const cm = CAT[task.cat] || CAT.grammar
                  const isDone = !!checked[task.id], hasErr = !!errors[task.id]
                  const basePlanTasks = (PLAN[lvl] || []).flatMap(w => w.tasks)
                  const isEx = !basePlanTasks.find(tk => tk.id === task.id)
                  return (
                    <div key={task.id} style={{ borderRadius: 11, border: `1.5px solid ${isDone ? B.rosaD : isEx ? B.laranja : B.border}`, background: isDone ? B.marrBg : isEx ? B.larBg : B.white, padding: '11px 13px', transition: 'all 0.15s' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => toggleTask(task.id)}>
                        <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${isDone ? B.marrom : B.border}`, background: isDone ? B.marrom : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                          {isDone && <span style={{ color: '#fff', fontSize: 13, fontWeight: 900 }}>✓</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ ...ir(600, 12), color: isDone ? B.mid : B.dark, textDecoration: isDone ? 'line-through' : 'none' }}>
                            {isEx && <span style={{ color: B.larD, fontSize: 10, fontWeight: 700, marginRight: 3 }}>{t.extraTag}</span>}
                            {task.en}
                          </p>
                          <p style={{ ...ir(400, 10), color: B.light, fontStyle: 'italic' }}>{task.pt}</p>
                        </div>
                        <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                      </div>
                      {!isDone && !hasErr && (
                        <button style={{ marginTop: 7, marginLeft: 32, background: 'none', border: `1px solid ${B.rosaD}`, borderRadius: 7, padding: '3px 9px', fontSize: 10, color: B.rosaD, cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => markError(task.id, activeWeek)}>{t.markError}</button>
                      )}
                      {hasErr && !isDone && <p style={{ ...ir(400, 9), color: B.rosaD, marginTop: 4, marginLeft: 32 }}>✏️ Extra tasks added above!</p>}
                    </div>
                  )
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 11 }}>
                <div style={S.card}>
                  <p style={S.lbl}>📝 {t.testScore}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <input type="number" min="0" max="100" style={{ ...S.inp, width: 72, fontSize: 15 }} value={scores[`week${activeWeek}`] || ''} onChange={e => upS({ scores: { ...scores, [`week${activeWeek}`]: Number(e.target.value) } })} placeholder="0–100" />
                    {scores[`week${activeWeek}`] > 0 && <span style={{ ...pp(800, 26), color: GRADE(scores[`week${activeWeek}`]).c }}>{GRADE(scores[`week${activeWeek}`]).l}</span>}
                  </div>
                </div>
                <div style={S.card}>
                  <p style={S.lbl}>💬 {t.notesLabel}</p>
                  <textarea style={S.ta} rows={3} placeholder={t.notesPh} value={notes[`week${activeWeek}`] || ''} onChange={e => upS({ notes: { ...notes, [`week${activeWeek}`]: e.target.value } })} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Homework tab */}
        {tab === 'hw' && (
          <div style={{ padding: '20px 14px', maxWidth: 660, margin: '0 auto' }}>
            <h2 style={{ ...pp(700, 17), color: B.dark, marginBottom: 16 }}>{t.hwLabel}</h2>
            {hw.length === 0 && <div style={{ textAlign: 'center', padding: '40px 0', color: B.light }}><span style={{ fontSize: 40 }}>📝</span><p style={{ ...ir(400, 14), marginTop: 12 }}>{t.noHW}</p></div>}
            {hw.filter(h => !h.done).map(h => {
              const cm = CAT[h.cat] || CAT.grammar
              return (
                <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', background: B.white, borderRadius: 12, border: `1.5px solid ${B.laranja}`, marginBottom: 8, cursor: 'pointer' }} onClick={() => toggleHW(h.id)}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${B.border}`, background: '#fff', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ ...ir(600, 13), color: B.dark }}>{h.en}</p>
                    <p style={{ ...ir(400, 11), color: B.mid, fontStyle: 'italic' }}>{h.pt}</p>
                    {h.due && <p style={{ ...ir(600, 11), color: B.laranja, marginTop: 2 }}>📅 {h.due}</p>}
                  </div>
                  <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                </div>
              )
            })}
            {hw.filter(h => h.done).length > 0 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ ...ir(600, 11), color: B.light, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>✓ {lang === 'pt' ? 'Concluídas' : 'Completed'}</p>
                {hw.filter(h => h.done).map(h => (
                  <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 13px', background: B.cream, borderRadius: 11, border: `1.5px solid ${B.border}`, marginBottom: 5, cursor: 'pointer', opacity: 0.65 }} onClick={() => toggleHW(h.id)}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${B.oliva}`, background: B.oliva, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><span style={{ color: '#fff', fontSize: 12, fontWeight: 900 }}>✓</span></div>
                    <p style={{ ...ir(600, 12), color: B.mid, textDecoration: 'line-through' }}>{h.en}</p>
                  </div>
                ))}
              </div>
            )}
            {mats.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <p style={{ ...pp(600, 13), color: B.dark, marginBottom: 10 }}>📎 {lang === 'pt' ? 'Materiais de Teacher Renata' : 'Materials from Teacher Renata'}</p>
                {mats.map(m => (
                  <div key={m.id} style={{ padding: '11px 13px', background: B.olivaBg, borderRadius: 11, border: `1.5px solid ${B.oliva}`, marginBottom: 7 }}>
                    <p style={{ ...ir(600, 13), color: B.dark }}>{m.title}</p>
                    {m.url && <a href={m.url} target="_blank" rel="noreferrer" style={{ ...ir(400, 12), color: B.laranja, wordBreak: 'break-all' }}>{m.url}</a>}
                    {m.note && <p style={{ ...ir(400, 12), color: B.mid, marginTop: 3 }}>{m.note}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Habits tab */}
        {tab === 'habits' && (
          <div style={{ padding: '20px 14px', maxWidth: 660, margin: '0 auto' }}>
            <div style={{ background: `linear-gradient(135deg,${B.marrom},${B.laranja})`, borderRadius: 16, padding: 18, marginBottom: 18, color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <p style={{ ...ir(600, 12), color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>{lang === 'pt' ? 'Hábitos' : 'Habits'}</p>
                  <p style={{ ...pp(800, 22) }}>{streak > 0 ? `🔥 ${streak} ${t.streakLabel}` : t.noStreak}</p>
                </div>
                <span style={{ fontSize: 34 }}>{streak >= 7 ? '🏆' : streak >= 3 ? '⭐' : '📅'}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 5 }}>
                {days.map((d, i) => {
                  const isDone = dayDone(d), isT = d === today
                  return (
                    <div key={d} style={{ textAlign: 'center' }}>
                      <p style={{ ...ir(500, 9), color: 'rgba(255,255,255,0.6)', marginBottom: 3 }}>{t.dayNames[i]}</p>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: isDone ? B.rosa : isT ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)', border: isT ? '2px solid rgba(255,255,255,0.6)' : '2px solid transparent', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                        {isDone ? '✓' : isT ? '·' : ''}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {[[t.studyH, '📚', STUDY_HABITS, B.marrom], [t.hwH, '📝', HW_HABITS, B.oliva]].map(([title, emoji, habits, color]) => (
              <div key={title} style={{ background: B.white, borderRadius: 14, border: `1.5px solid ${B.border}`, overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ background: color, padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p style={{ ...pp(700, 13), color: '#fff' }}>{emoji} {title}</p>
                  <span style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 20, padding: '2px 11px', fontSize: 11, color: '#fff', fontWeight: 700 }}>{habits.filter(h => !!todayH[h.id]).length}/{habits.length}</span>
                </div>
                {habits.map((h, i) => {
                  const isDone = !!todayH[h.id]
                  return (
                    <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 15px', borderBottom: i < habits.length - 1 ? `1px solid ${B.cream}` : 'none', cursor: 'pointer', background: isDone ? B.cream : B.white }} onClick={() => toggleHab(h.id)}>
                      <span style={{ fontSize: 18 }}>{h.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ ...ir(600, 12), color: isDone ? B.light : B.dark, textDecoration: isDone ? 'line-through' : 'none' }}>{h.en}</p>
                        <p style={{ ...ir(400, 10), color: B.light, fontStyle: 'italic' }}>{h.pt}</p>
                      </div>
                      <div style={{ width: 24, height: 24, borderRadius: 6, border: `2px solid ${isDone ? color : B.border}`, background: isDone ? color : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                        {isDone && <span style={{ color: '#fff', fontSize: 12, fontWeight: 900 }}>✓</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        )}

        {tab === 'calendar' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher={false} sid={sid} />}

        {/* Info tab */}
        {tab === 'info' && (
          <div style={{ padding: '20px 14px', maxWidth: 660, margin: '0 auto' }}>
            <h2 style={{ ...pp(700, 17), color: B.dark, marginBottom: 18 }}>{t.yourInfo}</h2>
            {!infoGen && !infoNotes && mats.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 0', color: B.light }}>
                <span style={{ fontSize: 40 }}>📋</span>
                <p style={{ ...ir(400, 14), marginTop: 12 }}>{t.noInfoYet}</p>
              </div>
            )}
            <div style={{ ...S.card, marginBottom: 14, borderLeft: `4px solid ${B.laranja}` }}>
              <p style={{ ...pp(600, 14), color: B.dark, marginBottom: 12 }}>🔑 {lang === 'pt' ? 'Alterar senha' : 'Change password'}</p>
              <input type="password" style={S.inp} placeholder={lang === 'pt' ? 'Nova senha (mín. 6 caracteres)' : 'New password (min. 6 chars)'}
                value={newPwd} onChange={e => { setNewPwd(e.target.value); setPwdMsg('') }} />
              {pwdMsg && <p style={{ ...ir(600, 12), color: pwdMsg === 'ok' ? B.oliva : '#DC2626', margin: '6px 0' }}>
                {pwdMsg === 'ok' ? (lang === 'pt' ? '✓ Senha alterada com sucesso!' : '✓ Password changed!') : pwdMsg}
              </p>}
              <button style={{ ...S.btn(B.laranja), marginTop: 8 }} onClick={async () => {
                if (newPwd.trim().length < 6) { setPwdMsg(lang === 'pt' ? 'Mínimo 6 caracteres.' : 'Minimum 6 characters.'); return }
                const hashed = await hashPassword(newPwd.trim())
                upDb({ students: students.map(s => s.id === sid ? { ...s, password: hashed } : s) })
                setNewPwd(''); setPwdMsg('ok')
              }}>{lang === 'pt' ? 'Salvar nova senha' : 'Save new password'}</button>
            </div>
            {infoGen && (
              <div style={{ ...S.card, marginBottom: 14 }}>
                <p style={S.lbl}>ℹ️ {t.infoGenLabel}</p>
                <p style={{ ...ir(400, 14), color: B.dark, whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{infoGen}</p>
              </div>
            )}
            {infoNotes && (
              <div style={{ ...S.card, marginBottom: 14, borderLeft: `4px solid ${B.laranja}` }}>
                <p style={S.lbl}>📌 {t.infoNotesLabel}</p>
                <p style={{ ...ir(400, 14), color: B.dark, whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{infoNotes}</p>
              </div>
            )}
          </div>
        )}

        {/* Journey tab */}
        {tab === 'journey' && journey && (
          <div style={{ padding: '4px 0 16px' }}>
            <div style={{ background: journey.color, borderRadius: 14, padding: '14px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 26 }}>{journey.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ ...pp(700, 15), color: '#fff' }}>{lang === 'pt' ? journey.pt : journey.en}</p>
                <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.8)' }}>{lang === 'pt' ? journey.desc.pt : journey.desc.en}</p>
              </div>
              <span style={{ background: 'rgba(255,255,255,0.25)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'Poppins,sans-serif' }}>
                {{ beginner:'🌱 Iniciante', intermediate:'🌿 Intermediário', advanced:'🌳 Avançado' }[simpleLevel]}
              </span>
            </div>

            {/* Week selector */}
            <div style={{ overflowX: 'auto', marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4 }}>
                {jAllWeeks.map(w => {
                  const wt = jGetTasks(w.week); const wpct = wt.length ? Math.round(wt.filter(tk => jChecked[tk.id]).length / wt.length * 100) : 0
                  return (
                    <button key={w.week} onClick={() => setJSelWeek(w.week)}
                      style={{ ...S.chip, background: jSelWeek === w.week ? journey.color : B.bege, color: jSelWeek === w.week ? '#fff' : B.mid, fontSize: 11, padding: '7px 12px', whiteSpace: 'nowrap' }}>
                      {lang === 'pt' ? 'Sem' : 'Wk'} {w.week}{wpct === 100 ? ' ✓' : ` · ${wpct}%`}
                    </button>
                  )
                })}
              </div>
            </div>

            {jSelW && (
              <div style={S.card}>
                <p style={{ ...pp(700, 14), color: B.dark, marginBottom: 14 }}>{lang === 'pt' ? `Semana ${jSelW.week}` : `Week ${jSelW.week}`}: {jSelW.theme[lang] || jSelW.theme.en}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {jTasks.map((task, ti) => {
                    const cm = CAT[task.cat] || CAT.grammar
                    const done = jChecked[task.id]
                    const r = pickResource(JOURNEY_RESOURCES[jid]?.[simpleLevel]?.[jSelWeek], task.cat, ti)
                    const displayText = lang === 'pt'
                      ? (task.variations?.[simpleLevel]?.pt || task.pt)
                      : (task.variations?.[simpleLevel]?.en || task.en)
                    const hint = !task.variations?.[simpleLevel] ? levelHint(simpleLevel, task.cat, lang) : null
                    return (
                      <div key={task.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: done ? B.bege : B.cream, borderRadius: 10, padding: '10px 12px', border: `1.5px solid ${done ? B.oliva + '44' : B.border}`, cursor: 'pointer' }}
                        onClick={() => jToggle(task.id)}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${done ? B.oliva : B.border}`, background: done ? B.oliva : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          {done && <Icon name="check" size={12} color="#fff" />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ ...ir(600, 13), color: done ? B.light : B.dark, textDecoration: done ? 'line-through' : 'none' }}>{displayText}</p>
                          {hint && !done && <p style={{ ...ir(400, 10.5), color: simpleLevel === 'advanced' ? B.oliva : B.laranja, marginTop: 3, fontStyle: 'italic' }}>{simpleLevel === 'advanced' ? '🔺' : '🔹'} {hint}</p>}
                          {task.link && !done && <a href={task.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ ...ir(400, 11), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}><Icon name="link" size={10} color={B.laranja} />{lang === 'pt' ? 'Acessar recurso' : 'Open resource'}</a>}
                          {r && (() => { const v = !!visited[r.url]; return <a href={r.url} target="_blank" rel="noreferrer" onClick={e => { e.stopPropagation(); markVisited(r.url) }} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: v ? '#eef2eb' : B.bege, borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 600, color: v ? B.oliva : B.dark, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', border: `1px solid ${v ? B.oliva + '55' : B.border}`, marginTop: 5 }}>{v ? '✓' : TYPE_ICON[r.type]} {r.label}</a> })()}
                        </div>
                        <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
