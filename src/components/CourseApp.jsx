import { useState } from 'react'
import { CAT } from '../constants/colors'
import { D, serifD, sansD } from '../constants/dashColors'
import { hashPassword } from '../utils'
import { JOURNEY_MAP } from '../constants/journeys'
import { JOURNEY_RESOURCES, TYPE_ICON, pickResource, levelHint } from '../constants/journeyResources'
import { DEFAULT_ACTIVITIES } from '../constants/defaultActivities'
import Avatar from './Avatar'
import AvatarBuilder from './AvatarBuilder'
import Icon from './Icon'
import Logo from './Logo'
import ActivityModal from './ActivityModal'

const ORANGE_DEEP = '#B8630F'

// New-palette accent per task category: [strong, soft]
const CAT_COLOR = {
  speaking:      [D.terra, D.terraSoft],
  vocab:         [D.moss, D.sageSoft],
  writing:       [D.clay, D.claySoft],
  listening:     [D.sky, D.skySoft],
  reading:       [D.mossDeep, D.mossSoft],
  grammar:       [D.terraDeep, D.terraSoft],
  pronunciation: [D.orange, D.orangeSoft],
}
const WEEK_COLORS = [D.terra, D.sky, D.moss, D.clay, D.orange, D.sage]
const LEVEL_LABEL = {
  beginner:     { pt: 'Iniciante',     en: 'Beginner' },
  intermediate: { pt: 'Intermediário', en: 'Intermediate' },
  advanced:     { pt: 'Avançado',      en: 'Advanced' },
}

export default function CourseApp({ lang, sid, courseStudents, db, upDb, onLogout }) {
  const [tab, setTab] = useState('journey')
  const [selWeek, setSelWeek] = useState(null)
  const [selJid, setSelJid] = useState(null)
  const [question, setQuestion] = useState('')
  const [sent, setSent] = useState(false)
  const [newPwd, setNewPwd] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const [showLogout, setShowLogout] = useState(false)
  const [actModal, setActModal] = useState(null)

  const pt = lang === 'pt'
  const student = courseStudents.find(s => s.id === sid)
  if (!student) return null

  const myAvatar = db[`avatar_${sid}`] || student.avatar || 'Lily'
  const firstName = student.name.split(' ')[0]

  const jids = student.jids || (student.jid ? [student.jid] : [])
  const jid = selJid && jids.includes(selJid) ? selJid : jids[0] || null
  const journey = jid ? JOURNEY_MAP[jid] : null
  const checked = db[`cjsd_${sid}`] || {}
  const habits = db[`chab_${sid}`] || {}
  const visited = db[`resv_${sid}`] || {}
  const markVisited = url => upDb({ [`resv_${sid}`]: { ...visited, [url]: true } })
  const today = new Date().toISOString().slice(0, 10)
  const todayHabits = habits[today] || {}
  const questions = db[`cq_${sid}`] || []

  const HABIT_LIST = [
    { id: 'listened', icon: 'volume',   pt: 'Ouvi inglês hoje',      en: 'Listened to English' },
    { id: 'read',     icon: 'bookOpen', pt: 'Li algo em inglês',     en: 'Read something in English' },
    { id: 'practiced',icon: 'mic',      pt: 'Pratiquei speaking',    en: 'Practiced speaking' },
    { id: 'reviewed', icon: 'repeat',   pt: 'Revisei o conteúdo',    en: 'Reviewed content' },
  ]

  const getJTasks = (jid, wn) => {
    const ck = `cjt_${sid}_${jid}_w${wn}`
    if (db[ck]) return db[ck]
    const bk = `jBase_${jid}_w${wn}`
    if (db[bk]) return db[bk]
    return JOURNEY_MAP[jid]?.weeks.find(w => w.week === wn)?.tasks || []
  }

  const allWeeks = journey ? [...(journey.weeks || [])] : []
  const totalTasks = allWeeks.flatMap(w => getJTasks(jid, w.week))
  const doneTasks = totalTasks.filter(tk => checked[tk.id])
  const pct = totalTasks.length ? Math.round(doneTasks.length / totalTasks.length * 100) : 0

  const journeyName = journey ? (pt ? journey.pt : journey.en) : (pt ? 'Nenhuma jornada' : 'No journey')
  const todayLabel = new Date().toLocaleDateString(pt ? 'pt-BR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })
  const catColor = c => CAT_COLOR[c] || [D.muted, D.surfaceWarm]

  // Shared style bits (new visual language)
  const card = { background: D.surface, borderRadius: 18, boxShadow: D.shadow, border: `1px solid ${D.line}` }
  const kicker = { fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: D.muted }
  const checkBox = (on, color) => ({ alignSelf: 'flex-start', width: 25, height: 25, borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: `2px solid ${on ? color : D.line}`, background: on ? color : 'transparent', transition: 'all .15s', padding: 0 })
  const inp = { width: '100%', padding: '12px 14px', border: `1px solid ${D.line}`, borderRadius: 11, fontFamily: 'inherit', fontSize: 14, background: D.surfaceWarm, color: D.ink, boxSizing: 'border-box' }

  const TABS = [
    ['journey', 'map',      pt ? 'Jornada' : 'Journey'],
    ['habits',  'habits',   pt ? 'Hábitos' : 'Habits'],
    ['doubts',  'feedback', pt ? 'Dúvidas' : 'Doubts'],
    ['perfil',  'user',     pt ? 'Perfil'  : 'Profile'],
  ]
  const goTab = k => { setTab(k); window.scrollTo({ top: 0 }) }

  return (
    <div style={{ minHeight: '100vh', background: D.canvas, fontFamily: "'Hanken Grotesk',sans-serif", color: D.ink, WebkitFontSmoothing: 'antialiased' }}>

      {actModal && (
        <ActivityModal
          acts={actModal.acts}
          lang={lang}
          taskText={actModal.taskText}
          context={actModal.context}
          taskId={actModal.taskId}
          sid={sid}
          upDb={upDb}
          onClose={() => setActModal(null)}
        />
      )}

      {showLogout && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(42,27,18,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }} onClick={() => setShowLogout(false)}>
          <div style={{ background: D.surface, borderRadius: 18, padding: '24px 22px', maxWidth: 320, width: '100%', boxShadow: D.shadowLg }} onClick={e => e.stopPropagation()}>
            <p style={{ ...sansD(700, 16), color: D.ink, margin: '0 0 6px' }}>{pt ? 'Quer mesmo sair?' : 'Log out?'}</p>
            <p style={{ ...sansD(400, 13.5, { lineHeight: 1.5 }), color: D.muted, margin: '0 0 18px' }}>{pt ? 'Seu progresso está salvo. Você pode voltar quando quiser.' : 'Your progress is saved. You can come back any time.'}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ flex: 1, padding: '11px 0', borderRadius: 11, border: `1px solid ${D.line}`, background: D.surfaceWarm, color: D.ink, fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => setShowLogout(false)}>{pt ? 'Cancelar' : 'Cancel'}</button>
              <button style={{ flex: 1, padding: '11px 0', borderRadius: 11, border: 'none', background: D.orange, color: '#fff', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={onLogout}><Icon name="logout" size={14} color="#fff" />{pt ? 'Sair' : 'Log out'}</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <header style={{ background: `linear-gradient(150deg, ${D.orange}, ${ORANGE_DEEP})`, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -70, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.07)' }} />
        <div style={{ position: 'absolute', right: 120, top: 40, width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,255,255,.5)' }} />
        <div style={{ position: 'absolute', right: 70, top: 96, width: 8, height: 8, borderRadius: '50%', background: D.honey }} />

        <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 24px 0', position: 'relative' }}>
          {/* topbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <Logo h={38} contrast />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {student.level && (
                <span style={{ ...sansD(600, 12.5), background: 'rgba(255,255,255,.18)', padding: '5px 11px', borderRadius: 99 }}>{LEVEL_LABEL[student.level] ? LEVEL_LABEL[student.level][lang] : student.level}</span>
              )}
              <button onClick={() => setShowLogout(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid rgba(255,255,255,.4)', color: '#fff', fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '6px 12px', borderRadius: 9, cursor: 'pointer' }}>
                <Icon name="logout" size={13} color="#fff" />{pt ? 'Sair' : 'Log out'}
              </button>
            </div>
          </div>

          {/* greeting */}
          <div style={{ padding: '22px 0 20px' }}>
            <div style={{ ...sansD(500, 13), opacity: .85, textTransform: 'lowercase' }}>{todayLabel}</div>
            <div style={{ ...serifD(500, 32, { lineHeight: 1.05, marginTop: 6 }) }}>{pt ? `Olá, ${firstName}!` : `Hi, ${firstName}!`}</div>
            <div style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                <span style={{ ...sansD(600, 13.5) }}>{journeyName}</span>
                <span style={{ ...sansD(600, 13), opacity: .9 }}>{pct}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,.25)', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: '#fff', borderRadius: 99, transition: 'width .4s ease' }} />
              </div>
            </div>
          </div>

          {/* tabs */}
          <div style={{ display: 'flex', gap: 6 }}>
            {TABS.map(([k, icon, label]) => {
              const active = tab === k
              return (
                <button key={k} onClick={() => goTab(k)} style={{ flex: 1, fontFamily: 'inherit', fontSize: 13.5, fontWeight: 700, padding: '11px 8px', border: 'none', cursor: 'pointer', borderRadius: '11px 11px 0 0', transition: 'all .15s', background: active ? D.canvas : 'rgba(255,255,255,.16)', color: active ? ORANGE_DEEP : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                  <Icon name={icon} size={13} color={active ? ORANGE_DEEP : '#fff'} />{label}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '26px 24px 80px' }}>

        {/* ================= JORNADA ================= */}
        {tab === 'journey' && (
          <section style={{ animation: 'floatIn .4s ease both' }}>
            {!db[`seenWelcome_${sid}`] && journey && (
              <div style={{ background: D.orangeSoft, border: `1px solid ${D.honey}`, borderRadius: 15, padding: '16px 18px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ ...sansD(700, 14.5), color: ORANGE_DEEP }}>{pt ? `Bem-vinda, ${student.name}!` : `Welcome, ${student.name}!`}</div>
                  <div style={{ ...sansD(400, 13.5, { lineHeight: 1.5 }), color: D.ink, marginTop: 4 }}>{pt ? 'Sua jornada está organizada por semanas. Toque em uma semana abaixo para ver suas atividades.' : 'Your journey is organized by weeks. Tap a week below to see your activities.'}</div>
                </div>
                <button onClick={() => upDb({ [`seenWelcome_${sid}`]: true })} style={{ background: 'transparent', border: 'none', color: D.muted, cursor: 'pointer', display: 'flex', padding: 2 }}>
                  <Icon name="close" size={18} color={D.muted} />
                </button>
              </div>
            )}

            {!journey ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <Icon name="clock" size={48} color={D.line} />
                <p style={{ ...sansD(600, 16), color: D.ink, marginTop: 16 }}>{pt ? 'Sua jornada ainda não foi definida' : 'Your journey has not been set yet'}</p>
                <p style={{ ...sansD(400, 13), color: D.muted, marginTop: 8 }}>{pt ? 'A Renata vai escolher sua jornada em breve!' : 'Renata will set your journey soon!'}</p>
              </div>
            ) : (
              <>
                {/* journey switcher */}
                {jids.length > 1 && (
                  <>
                    <div style={{ ...kicker, marginBottom: 12 }}>{pt ? 'Minhas jornadas' : 'My journeys'}</div>
                    <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 24 }}>
                      {jids.map(id => JOURNEY_MAP[id] && (() => {
                        const c = JOURNEY_MAP[id].color
                        const active = jid === id
                        return (
                          <button key={id} onClick={() => { setSelJid(id); setSelWeek(null) }} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'inherit', fontSize: 13, fontWeight: 700, padding: '9px 16px', borderRadius: 99, cursor: 'pointer', transition: 'all .15s', border: `1.5px solid ${c}`, background: active ? c : D.surface, color: active ? '#fff' : c, boxShadow: D.shadow }}>
                            <Icon name={JOURNEY_MAP[id].icon} size={13} color={active ? '#fff' : c} />{pt ? JOURNEY_MAP[id].pt : JOURNEY_MAP[id].en}
                          </button>
                        )
                      })())}
                    </div>
                  </>
                )}

                {/* week grid */}
                <div style={{ ...kicker, marginBottom: 12 }}>{allWeeks.length} {pt ? 'semanas' : 'weeks'}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                  {allWeeks.map((w, i) => {
                    const tasks = getJTasks(jid, w.week)
                    const wPct = tasks.length ? Math.round(tasks.filter(tk => checked[tk.id]).length / tasks.length * 100) : 0
                    const done = wPct === 100 && tasks.length > 0
                    const active = selWeek === w.week
                    const c = WEEK_COLORS[i % WEEK_COLORS.length]
                    return (
                      <button key={w.week} onClick={() => setSelWeek(active ? null : w.week)} style={{ textAlign: 'left', fontFamily: 'inherit', cursor: 'pointer', background: active ? D.surfaceWarm : D.surface, border: `1.5px solid ${active ? c : D.line}`, borderRadius: 15, padding: 14, boxShadow: active ? `0 0 0 3px ${c}22` : D.shadow, transition: 'all .15s', display: 'flex', flexDirection: 'column', gap: 11 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ width: 30, height: 30, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', ...sansD(800, 13.5), color: '#fff', background: c }}>{done ? <Icon name="check" size={16} color="#fff" /> : w.week}</div>
                          {tasks.length === 0
                            ? <span style={{ ...sansD(600, 11), color: D.muted }}>{pt ? 'em breve' : 'soon'}</span>
                            : done
                              ? <span style={{ ...sansD(700, 11), color: D.moss, background: `${D.moss}1f`, padding: '3px 9px', borderRadius: 99 }}>{pt ? 'concluída' : 'done'}</span>
                              : <span style={{ ...sansD(700, 11), color: c, background: `${c}1f`, padding: '3px 9px', borderRadius: 99 }}>{tasks.length} {pt ? 'ativ.' : 'act.'}</span>}
                        </div>
                        <div style={{ ...sansD(600, 12.5, { lineHeight: 1.3 }), color: D.ink }}>{w.theme[lang] || w.theme.en}</div>
                      </button>
                    )
                  })}
                </div>

                {/* selected week activities */}
                {selWeek != null && (() => {
                  const w = allWeeks.find(w => w.week === selWeek)
                  const tasks = getJTasks(jid, selWeek)
                  return (
                    <div style={{ marginTop: 26 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                        <h3 style={{ margin: 0, ...serifD(500, 22) }}>{pt ? `Semana ${selWeek}` : `Week ${selWeek}`}</h3>
                        <span style={{ fontSize: 14, color: D.muted }}>{w?.theme[lang] || w?.theme.en}</span>
                      </div>

                      {tasks.length === 0 ? (
                        <div style={{ background: D.surface, border: `1px dashed ${D.line}`, borderRadius: 16, padding: '40px 24px', textAlign: 'center', boxShadow: D.shadow }}>
                          <div style={{ width: 56, height: 56, borderRadius: 15, background: D.surfaceWarm, color: D.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}><Icon name="lock" size={26} color={D.muted} /></div>
                          <div style={{ ...serifD(500, 18), marginTop: 14 }}>{pt ? 'Conteúdo em preparação' : 'Content in preparation'}</div>
                          <div style={{ ...sansD(400, 13.5), color: D.muted, marginTop: 6 }}>{pt ? `As atividades da Semana ${selWeek} serão liberadas conforme você avança.` : `Week ${selWeek} activities will be released as you progress.`}</div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {tasks.map((task, ti) => {
                            const done = !!checked[task.id]
                            const cm = CAT[task.cat] || CAT.grammar
                            const [cStrong, cSoft] = catColor(task.cat)
                            const r = pickResource(JOURNEY_RESOURCES[jid]?.[student.level || 'beginner']?.[selWeek], task.cat, ti)
                            const hint = !task.variations?.[student.level] ? levelHint(student.level, task.cat, lang) : null
                            const defaults = DEFAULT_ACTIVITIES[task.id]
                            const taskActs = db[`acts_${jid}_w${selWeek}_${task.id}`] || (defaults?.acts || defaults || [])
                            const taskCtx = defaults?.context || null
                            const actScore = db[`actScore_${sid}_${task.id}`]
                            return (
                              <div key={task.id} style={{ ...card, padding: '16px 18px 16px 15px', display: 'flex', gap: 14, alignItems: 'stretch' }}>
                                <div style={{ width: 4, borderRadius: 99, flexShrink: 0, background: cStrong }} />
                                <button onClick={() => upDb({ [`cjsd_${sid}`]: { ...checked, [task.id]: !done } })} style={checkBox(done, D.orange)}>{done && <Icon name="check" size={13} color="#fff" />}</button>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ ...sansD(600, 14.5, { lineHeight: 1.4 }), color: done ? D.muted : D.ink, textDecoration: done ? 'line-through' : 'none' }}>
                                    {pt
                                      ? (student.level && task.variations?.[student.level]?.pt) || task.pt
                                      : (student.level && task.variations?.[student.level]?.en) || task.en}
                                  </div>
                                  {hint && <div style={{ ...sansD(400, 11.5), color: student.level === 'advanced' ? D.moss : D.orange, marginTop: 6, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 5 }}><Icon name={student.level === 'advanced' ? 'trendingUp' : 'lightbulb'} size={11} color={student.level === 'advanced' ? D.moss : D.orange} />{hint}</div>}
                                  <div style={{ display: 'flex', gap: 7, marginTop: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: cStrong, background: cSoft, padding: '4px 10px', borderRadius: 99 }}>{pt ? cm.pt : cm.en}</span>
                                    {task.link && <a href={task.link} target="_blank" rel="noreferrer" onClick={() => markVisited(task.link)} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: visited[task.link] ? D.moss : D.terra, background: visited[task.link] ? D.sageSoft : D.surfaceWarm, border: `1px solid ${D.line}`, padding: '4px 10px', borderRadius: 99, textDecoration: 'none' }}><Icon name="link" size={11} color={visited[task.link] ? D.moss : D.terra} />{visited[task.link] ? (pt ? 'Recurso acessado' : 'Resource opened') : (pt ? 'Acessar recurso' : 'Open resource')}</a>}
                                    {r && (() => { const v = !!visited[r.url]; return <a href={r.url} target="_blank" rel="noreferrer" onClick={() => markVisited(r.url)} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: v ? D.moss : D.ink, background: v ? D.sageSoft : D.surfaceWarm, border: `1px solid ${D.line}`, padding: '4px 10px', borderRadius: 99, textDecoration: 'none' }}>{v ? <Icon name="check" size={11} color={D.moss} /> : <Icon name={TYPE_ICON[r.type]} size={11} color={D.ink} />}{r.label}</a> })()}
                                    {taskActs.length > 0 && <button onClick={() => setActModal({ taskId: task.id, acts: taskActs, taskText: pt ? task.pt : task.en, context: taskCtx })} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, fontFamily: 'inherit', color: actScore !== undefined ? D.moss : D.orange, background: actScore !== undefined ? D.sageSoft : D.orangeSoft, border: 'none', padding: '4px 10px', borderRadius: 99, cursor: 'pointer' }}><Icon name="target" size={12} color={actScore !== undefined ? D.moss : D.orange} />{pt ? 'Atividades' : 'Activities'}{actScore !== undefined ? ` · ${actScore}%` : ` (${taskActs.length})`}</button>}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })()}
              </>
            )}
          </section>
        )}

        {/* ================= HÁBITOS ================= */}
        {tab === 'habits' && (() => {
          const streak = (() => {
            let count = 0
            const d = new Date()
            while (true) {
              const dateStr = d.toISOString().slice(0, 10)
              const dayHabits = habits[dateStr] || {}
              if (!HABIT_LIST.some(h => dayHabits[h.id])) break
              count++
              d.setDate(d.getDate() - 1)
            }
            return count
          })()
          const totalDays = Object.keys(habits).filter(date => HABIT_LIST.some(h => habits[date]?.[h.id])).length
          const streakMsg = streak === 0
            ? (pt ? 'Complete um hábito hoje para começar!' : 'Complete a habit today to start!')
            : streak < 3 ? (pt ? 'Bom começo! Continue assim.' : 'Good start! Keep going.')
            : streak < 7 ? (pt ? 'Você está pegando o ritmo!' : "You're getting the rhythm!")
            : (pt ? 'Incrível! Você é imparável!' : "Amazing! You're unstoppable!")

          return (
            <section style={{ animation: 'floatIn .4s ease both' }}>
              <div style={{ background: `linear-gradient(160deg, ${D.honeySoft}, ${D.surface})`, border: `1px solid ${D.honey}`, borderRadius: 18, padding: '24px 26px', boxShadow: D.shadow, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ ...serifD(500, 44, { lineHeight: 1 }), color: ORANGE_DEEP }}>{streak}</span>
                    <span style={{ ...sansD(600, 15), color: D.muted }}>{pt ? (streak === 1 ? 'dia' : 'dias') : (streak === 1 ? 'day' : 'days')}</span>
                  </div>
                  <div style={{ ...sansD(400, 13.5), color: D.muted, marginTop: 6 }}>{streakMsg}</div>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ ...serifD(500, 26, { lineHeight: 1 }), color: D.honey }}>{totalDays}</div>
                  <div style={{ ...sansD(400, 12), color: D.muted, marginTop: 3 }}>{pt ? 'dias ativos' : 'active days'}</div>
                </div>
              </div>

              <div style={{ ...card, padding: 22, marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16, gap: 10 }}>
                  <h3 style={{ margin: 0, ...sansD(700, 16) }}>{pt ? 'Hoje' : 'Today'}</h3>
                  <span style={{ fontSize: 13, color: D.muted, textTransform: 'lowercase' }}>{todayLabel}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {HABIT_LIST.map(h => {
                    const done = !!todayHabits[h.id]
                    return (
                      <button key={h.id} onClick={() => upDb({ [`chab_${sid}`]: { ...habits, [today]: { ...todayHabits, [h.id]: !done } } })} style={{ display: 'flex', alignItems: 'center', gap: 13, width: '100%', padding: '14px 15px', borderRadius: 13, border: `1px solid ${done ? D.honey : D.line}`, background: done ? D.orangeSoft : D.surfaceWarm, cursor: 'pointer', color: D.ink, transition: 'all .15s', textAlign: 'left', fontFamily: 'inherit' }}>
                        <span style={checkBox(done, D.orange)}>{done && <Icon name="check" size={13} color="#fff" />}</span>
                        <Icon name={h.icon} size={19} color={done ? D.orange : D.muted} />
                        <span style={{ ...sansD(500, 14.5) }}>{pt ? h.pt : h.en}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div style={{ ...card, padding: 22 }}>
                <div style={{ ...kicker, marginBottom: 16 }}>{pt ? 'Últimos 7 dias' : 'Last 7 days'}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {Array.from({ length: 7 }).map((_, i) => {
                    const d = new Date()
                    d.setDate(d.getDate() - (6 - i))
                    const dateStr = d.toISOString().slice(0, 10)
                    const dayHabits = habits[dateStr] || {}
                    const on = HABIT_LIST.some(h => dayHabits[h.id])
                    const isToday = dateStr === today
                    const dayName = d.toLocaleDateString(pt ? 'pt-BR' : 'en-US', { weekday: 'short' }).slice(0, 3)
                    return (
                      <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ ...sansD(600, 11.5), color: D.muted, marginBottom: 8, textTransform: 'capitalize' }}>{dayName}</div>
                        <div style={{ width: '100%', aspectRatio: '1', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1.5px solid ${on ? D.orange : isToday ? D.honey : D.line}`, background: on ? D.orange : D.surfaceWarm, color: '#fff' }}>
                          {on && <Icon name="check" size={16} color="#fff" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        })()}

        {/* ================= DÚVIDAS ================= */}
        {tab === 'doubts' && (
          <section style={{ animation: 'floatIn .4s ease both' }}>
            <div style={{ background: D.skySoft, border: `1px solid ${D.sky}`, borderRadius: 15, padding: '16px 18px', marginBottom: 18, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: D.sky, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="feedback" size={18} color="#fff" /></div>
              <div style={{ ...sansD(400, 13.5, { lineHeight: 1.5 }), color: D.ink }}>{pt ? <>Manda sua dúvida aqui! A <strong>Renata responde pessoalmente</strong> — não é uma IA, é ela mesma.</> : <>Send your question here! <strong>Renata replies personally</strong> — not an AI, it's her.</>}</div>
            </div>

            <div style={{ ...card, padding: 22, marginBottom: 22 }}>
              <textarea value={question} onChange={e => { setQuestion(e.target.value); setSent(false) }}
                placeholder={pt ? 'Qual sua dúvida? Ex: "Qual a diferença entre since e for?"' : 'What\'s your question? Ex: "What\'s the difference between since and for?"'}
                style={{ ...inp, minHeight: 110, resize: 'vertical', lineHeight: 1.5, fontSize: 14.5 }} />
              {sent && <p style={{ ...sansD(600, 12.5), color: D.moss, margin: '10px 0 0', display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={13} color={D.moss} />{pt ? 'Dúvida enviada! A Renata vai responder em breve.' : 'Question sent! Renata will reply soon.'}</p>}
              <button onClick={() => {
                if (!question.trim()) return
                const k = `cq_${sid}`
                upDb({ [k]: [...(db[k] || []), { id: `q${Date.now()}`, text: question.trim(), date: new Date().toISOString().slice(0, 10), answer: null }] })
                setQuestion(''); setSent(true)
              }} disabled={!question.trim()} style={{ marginTop: 14, width: '100%', background: question.trim() ? D.orange : D.line, color: question.trim() ? '#fff' : D.muted, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: 14.5, padding: 14, borderRadius: 12, cursor: question.trim() ? 'pointer' : 'default', transition: 'all .15s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                <Icon name="send" size={15} color={question.trim() ? '#fff' : D.muted} />{pt ? 'Enviar dúvida' : 'Send question'}
              </button>
            </div>

            {questions.length > 0 && (
              <>
                <div style={{ ...kicker, marginBottom: 12 }}>{pt ? 'Suas dúvidas enviadas' : 'Your questions'}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[...questions].reverse().map(q => (
                    <div key={q.id} style={{ ...card, padding: '16px 18px' }}>
                      <div style={{ ...sansD(500, 14.5, { lineHeight: 1.5 }), color: D.ink }}>{q.text}</div>
                      <div style={{ ...sansD(400, 11.5), color: D.muted, marginTop: 6 }}>{q.date}</div>
                      {q.answer ? (
                        <div style={{ background: D.orangeSoft, borderRadius: 11, padding: '11px 13px', borderLeft: `3px solid ${D.orange}`, marginTop: 12 }}>
                          <div style={{ ...sansD(700, 11.5), color: ORANGE_DEEP, marginBottom: 4 }}>Renata:</div>
                          <div style={{ ...sansD(400, 13.5, { lineHeight: 1.6 }), color: D.ink }}>{q.answer}</div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 12 }}>
                          <span style={{ width: 8, height: 8, borderRadius: '50%', background: D.honey }} />
                          <span style={{ ...sansD(600, 12.5), color: D.muted }}>{pt ? 'Aguardando resposta da Renata' : "Waiting for Renata's reply"}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {/* ================= PERFIL ================= */}
        {tab === 'perfil' && (
          <section style={{ animation: 'floatIn .4s ease both', maxWidth: 520, margin: '0 auto' }}>
            <div style={{ ...card, padding: 26, marginBottom: 18 }}>
              <h3 style={{ margin: '0 0 4px', ...sansD(700, 17), display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="user" size={18} color={D.orange} />{pt ? 'Crie seu avatar' : 'Create your avatar'}</h3>
              <p style={{ margin: '0 0 20px', ...sansD(400, 13.5), color: D.muted }}>{pt ? 'Personalize cada detalhe do seu personagem' : 'Customize every detail of your character'}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <Avatar seed={myAvatar} size={96} />
              </div>
              <AvatarBuilder value={myAvatar} lang={lang} onSave={cfg => upDb({ [`avatar_${sid}`]: cfg })} />
            </div>

            <div style={{ ...card, padding: 26, borderLeft: `4px solid ${D.orange}` }}>
              <h3 style={{ margin: '0 0 12px', ...sansD(700, 16), display: 'flex', alignItems: 'center', gap: 9 }}><Icon name="key" size={16} color={D.orange} />{pt ? 'Alterar senha' : 'Change password'}</h3>
              <input type="password" style={inp} placeholder={pt ? 'Nova senha (mín. 6 caracteres)' : 'New password (min. 6 chars)'}
                value={newPwd} onChange={e => { setNewPwd(e.target.value); setPwdMsg('') }} />
              {pwdMsg && <p style={{ ...sansD(600, 12.5), color: pwdMsg === 'ok' ? D.moss : '#DC2626', margin: '8px 0 0', display: 'flex', alignItems: 'center', gap: 5 }}>
                {pwdMsg === 'ok' ? <><Icon name="check" size={13} color={D.moss} />{pt ? 'Senha alterada com sucesso!' : 'Password changed!'}</> : pwdMsg}
              </p>}
              <button style={{ marginTop: 12, width: '100%', background: D.orange, color: '#fff', border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: 14, padding: 13, borderRadius: 12, cursor: 'pointer' }} onClick={async () => {
                if (newPwd.trim().length < 6) { setPwdMsg(pt ? 'Mínimo 6 caracteres.' : 'Minimum 6 characters.'); return }
                const hashed = await hashPassword(newPwd.trim())
                upDb({ [`pwd_${sid}`]: hashed })
                setNewPwd(''); setPwdMsg('ok')
              }}>{pt ? 'Salvar nova senha' : 'Save new password'}</button>
            </div>
          </section>
        )}

      </main>
    </div>
  )
}
