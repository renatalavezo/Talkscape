import { useState } from 'react'
import { B, CAT } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { JOURNEYS, JOURNEY_MAP } from '../constants/journeys'
import { JOURNEY_RESOURCES, TYPE_ICON, pickResource, levelHint } from '../constants/journeyResources'
import Avatar from './Avatar'
import Icon from './Icon'
import Logo from './Logo'

export default function CourseApp({ lang, sid, courseStudents, db, upDb, onLogout }) {
  const [tab, setTab] = useState('journey')
  const [selWeek, setSelWeek] = useState(null)
  const [selJid, setSelJid] = useState(null)
  const [question, setQuestion] = useState('')
  const [sent, setSent] = useState(false)
  const [newPwd, setNewPwd] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')

  const student = courseStudents.find(s => s.id === sid)
  if (!student) return null

  const jids = student.jids || (student.jid ? [student.jid] : [])
  const jid = selJid && jids.includes(selJid) ? selJid : jids[0] || null
  const journey = jid ? JOURNEY_MAP[jid] : null
  const checked = db[`cjsd_${sid}`] || {}
  const habits = db[`chab_${sid}`] || {}
  const today = new Date().toISOString().slice(0, 10)
  const todayHabits = habits[today] || {}
  const questions = db[`cq_${sid}`] || []

  const HABIT_LIST = [
    { id: 'listened', icon: '🎧', pt: 'Ouvi inglês hoje', en: 'Listened to English' },
    { id: 'read', icon: '📖', pt: 'Li algo em inglês', en: 'Read something in English' },
    { id: 'practiced', icon: '💬', pt: 'Pratiquei speaking', en: 'Practiced speaking' },
    { id: 'reviewed', icon: '📝', pt: 'Revisei o conteúdo', en: 'Reviewed content' },
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

  const TABS = [
    ['journey', <><Icon name="map" size={13} />&nbsp;{lang === 'pt' ? 'Jornada' : 'Journey'}</>],
    ['habits',  <><Icon name="habits" size={13} />&nbsp;{lang === 'pt' ? 'Hábitos' : 'Habits'}</>],
    ['doubts',  <><Icon name="feedback" size={13} />&nbsp;{lang === 'pt' ? 'Dúvidas' : 'Doubts'}</>],
    ['perfil',  <><Icon name="info" size={13} />&nbsp;{lang === 'pt' ? 'Perfil' : 'Profile'}</>],
  ]

  const firstName = student.name.split(' ')[0]

  return (
    <div style={{ ...S.app, background: '#fdf6f0' }}>
      {/* Header */}
      <header style={{ background: `linear-gradient(135deg, ${B.marrom} 0%, ${B.laranja} 100%)`, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, boxShadow: '0 4px 20px rgba(44,24,16,0.2)' }}>
        <Logo h={40} contrast />
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar seed={student.avatar || 'Lily'} size={34} />
          <p style={{ ...pp(600, 13), color: '#fff' }}>{firstName}</p>
          {student.level && (
            <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'Poppins,sans-serif' }}>
              {{ beginner:'🌱 Iniciante', intermediate:'🌿 Intermediário', advanced:'🌳 Avançado' }[student.level]}
            </span>
          )}
        </div>
        <button style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 20, padding: '6px 12px', color: '#fff', fontSize: 11, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', display: 'flex', alignItems: 'center', gap: 5 }} onClick={onLogout}>
          <Icon name="logout" size={13} color="#fff" />{lang === 'pt' ? 'Sair' : 'Logout'}
        </button>
      </header>

      {/* Hero welcome strip */}
      <div style={{ background: `linear-gradient(135deg, ${B.marrom}ee 0%, ${B.laranja}cc 100%)`, padding: '20px 20px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: -30, left: 40, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <p style={{ ...ir(400, 13), color: 'rgba(255,255,255,0.75)', marginBottom: 2 }}>{new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
        <p style={{ ...pp(800, 22), color: '#fff', marginBottom: 12 }}>
          {lang === 'pt' ? `Olá, ${firstName}! 👋` : `Hi, ${firstName}! 👋`}
        </p>
        {/* Progress inside hero */}
        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 14px', backdropFilter: 'blur(4px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <p style={{ ...pp(600, 12), color: 'rgba(255,255,255,0.9)' }}>{journey ? (lang === 'pt' ? journey.pt : journey.en) : (lang === 'pt' ? 'Nenhuma jornada' : 'No journey')}</p>
            <p style={{ ...pp(700, 12), color: '#fff' }}>{pct}%</p>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: '#fff', borderRadius: 99, transition: 'width 0.4s ease' }} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 14px 16px', maxWidth: 720, margin: '0 auto', width: '100%' }}>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, margin: '16px 0' }}>
          {TABS.map(([k, lb]) => (
            <button key={k} onClick={() => setTab(k)}
              style={{ flex: 1, padding: '10px 8px', borderRadius: 12, border: tab === k ? 'none' : `1.5px solid ${B.border}`, background: tab === k ? B.laranja : '#fff', color: tab === k ? '#fff' : B.mid, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, boxShadow: tab === k ? '0 4px 12px rgba(212,100,39,0.3)' : 'none', transition: 'all 0.15s' }}>{lb}</button>
          ))}
        </div>

        {/* Journey tab */}
        {tab === 'journey' && (
          <div>
            {jids.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {jids.map(id => JOURNEY_MAP[id] && (
                  <button key={id} onClick={() => { setSelJid(id); setSelWeek(null) }}
                    style={{ flex: 1, padding: '8px 10px', borderRadius: 12, border: `2px solid ${selJid === id ? JOURNEY_MAP[id].color : B.border}`, background: selJid === id ? JOURNEY_MAP[id].color + '15' : '#fff', color: selJid === id ? JOURNEY_MAP[id].color : B.mid, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, transition: 'all 0.15s' }}>
                    {JOURNEY_MAP[id].icon} {JOURNEY_MAP[id].pt}
                  </button>
                ))}
              </div>
            )}
            {!journey ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <span style={{ fontSize: 48 }}>⏳</span>
                <p style={{ ...pp(600, 16), color: B.dark, marginTop: 16 }}>{lang === 'pt' ? 'Sua jornada ainda não foi definida' : 'Your journey has not been set yet'}</p>
                <p style={{ ...ir(400, 13), color: B.mid, marginTop: 8 }}>{lang === 'pt' ? 'A Renata vai escolher sua jornada em breve!' : 'Renata will set your journey soon!'}</p>
              </div>
            ) : (
              <div>
                {/* Week selector */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                  {allWeeks.map(w => {
                    const tasks = getJTasks(jid, w.week)
                    const wPct = tasks.length ? Math.round(tasks.filter(tk => checked[tk.id]).length / tasks.length * 100) : 0
                    const isSelected = selWeek === w.week
                    const isDone = wPct === 100
                    return (
                      <button key={w.week} onClick={() => setSelWeek(isSelected ? null : w.week)}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '12px 14px', borderRadius: 14, border: `2px solid ${isSelected ? journey.color : isDone ? journey.color + '55' : '#e8ddd4'}`, background: isSelected ? journey.color : isDone ? journey.color + '12' : '#fff', cursor: 'pointer', minWidth: 76, boxShadow: isSelected ? `0 4px 14px ${journey.color}44` : '0 2px 6px rgba(44,24,16,0.06)', transition: 'all 0.15s' }}>
                        <p style={{ ...pp(800, 14), color: isSelected ? '#fff' : journey.color }}>{isDone ? '✓' : (lang === 'pt' ? `S${w.week}` : `W${w.week}`)}</p>
                        <p style={{ ...ir(400, 10), color: isSelected ? 'rgba(255,255,255,0.85)' : B.light, textAlign: 'center', maxWidth: 80, lineHeight: 1.3 }}>{w.theme[lang] || w.theme.en}</p>
                        <div style={{ height: 3, width: '100%', background: isSelected ? 'rgba(255,255,255,0.3)' : '#e8ddd4', borderRadius: 99, overflow: 'hidden', marginTop: 2 }}>
                          <div style={{ height: '100%', width: `${wPct}%`, background: isSelected ? '#fff' : journey.color, borderRadius: 99 }} />
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Tasks for selected week */}
                {selWeek ? (() => {
                  const w = allWeeks.find(w => w.week === selWeek)
                  const tasks = getJTasks(jid, selWeek)
                  const wDone = tasks.filter(tk => checked[tk.id]).length
                  return (
                    <div style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 4px 16px rgba(44,24,16,0.08)', border: `1px solid #f0e8e0` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, paddingBottom: 12, borderBottom: `1.5px solid #f5ede6` }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: journey.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 18 }}>{journey.icon}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ ...pp(700, 13), color: B.dark }}>{lang === 'pt' ? `Semana ${selWeek}` : `Week ${selWeek}`}: {w?.theme[lang] || w?.theme.en}</p>
                          <p style={{ ...ir(400, 11), color: B.light }}>{wDone}/{tasks.length} {lang === 'pt' ? 'concluídas' : 'completed'}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {tasks.map((task, ti) => {
                          const done = !!checked[task.id]
                          const cm = CAT[task.cat] || CAT.grammar
                          const r = pickResource(JOURNEY_RESOURCES[jid]?.[student.level || 'beginner']?.[selWeek], task.cat, ti)
                          const hint = !task.variations?.[student.level] ? levelHint(student.level, task.cat, lang) : null
                          return (
                            <div key={task.id} onClick={() => upDb({ [`cjsd_${sid}`]: { ...checked, [task.id]: !done } })}
                              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', background: done ? '#f5faf5' : '#fdf8f5', borderRadius: 12, border: `1.5px solid ${done ? '#b6d4b6' : '#edddd4'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
                              <div style={{ width: 22, height: 22, borderRadius: 7, border: `2px solid ${done ? B.oliva : '#d4c4b8'}`, background: done ? B.oliva : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
                                {done && <Icon name="check" size={12} color="#fff" />}
                              </div>
                              <div style={{ flex: 1 }}>
                                <p style={{ ...ir(600, 13), color: done ? '#8faf8f' : B.dark, textDecoration: done ? 'line-through' : 'none' }}>
                                  {lang === 'pt'
                                    ? (student.level && task.variations?.[student.level]?.pt) || task.pt
                                    : (student.level && task.variations?.[student.level]?.en) || task.en}
                                </p>
                                {hint && <p style={{ ...ir(400, 10.5), color: student.level === 'advanced' ? B.oliva : B.laranja, marginTop: 3, fontStyle: 'italic' }}>{student.level === 'advanced' ? '🔺' : '🔹'} {hint}</p>}
                                {task.link && <a href={task.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ ...ir(400, 10), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}><Icon name="link" size={10} color={B.laranja} />{task.link}</a>}
                                {r && <a href={r.url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f5f0eb', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 600, color: B.dark, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', border: '1px solid #e8ddd4', marginTop: 5 }}>{TYPE_ICON[r.type]} {r.label}</a>}
                              </div>
                              <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })() : (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <span style={{ fontSize: 36 }}>{journey.icon}</span>
                    <p style={{ ...ir(400, 13), color: B.light, marginTop: 10 }}>
                      {lang === 'pt' ? 'Toque em uma semana para ver as atividades ✨' : 'Tap a week to see the activities ✨'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Habits tab */}
        {tab === 'habits' && (() => {
          const streak = (() => {
            let count = 0
            const d = new Date()
            while (true) {
              const dateStr = d.toISOString().slice(0, 10)
              const dayHabits = habits[dateStr] || {}
              const hasAny = HABIT_LIST.some(h => dayHabits[h.id])
              if (!hasAny) break
              count++
              d.setDate(d.getDate() - 1)
            }
            return count
          })()

          const totalDays = Object.keys(habits).filter(date =>
            HABIT_LIST.some(h => habits[date]?.[h.id])
          ).length

          return (
            <div>
              <div style={{ background: streak > 0 ? `linear-gradient(135deg,${B.laranja},${B.marrom})` : B.bege, borderRadius: 18, padding: '20px 24px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ fontSize: 40, lineHeight: 1 }}>{streak >= 7 ? '🔥' : streak >= 3 ? '⚡' : streak > 0 ? '✨' : '💤'}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ ...pp(800, 28), color: streak > 0 ? '#fff' : B.mid, lineHeight: 1 }}>
                    {streak} {lang === 'pt' ? (streak === 1 ? 'dia' : 'dias') : (streak === 1 ? 'day' : 'days')}
                  </p>
                  <p style={{ ...ir(400, 13), color: streak > 0 ? 'rgba(255,255,255,0.85)' : B.light, marginTop: 4 }}>
                    {streak === 0
                      ? (lang === 'pt' ? 'Complete um hábito hoje para começar!' : 'Complete a habit today to start!')
                      : streak < 3
                      ? (lang === 'pt' ? 'Bom começo! Continue assim 💪' : 'Good start! Keep going 💪')
                      : streak < 7
                      ? (lang === 'pt' ? 'Você está pegando o ritmo! 🔥' : "You're getting the rhythm! 🔥")
                      : (lang === 'pt' ? 'Incrível! Você é imparável! 🚀' : "Amazing! You're unstoppable! 🚀")}
                  </p>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ ...pp(700, 12), color: streak > 0 ? 'rgba(255,255,255,0.7)' : B.light }}>{lang === 'pt' ? 'total' : 'total'}</p>
                  <p style={{ ...pp(800, 20), color: streak > 0 ? '#fff' : B.mid }}>{totalDays}</p>
                  <p style={{ ...pp(700, 10), color: streak > 0 ? 'rgba(255,255,255,0.7)' : B.light }}>{lang === 'pt' ? 'dias ativos' : 'active days'}</p>
                </div>
              </div>

              <div style={{ ...S.card, marginBottom: 14 }}>
                <p style={{ ...pp(700, 14), color: B.dark, marginBottom: 4 }}>{lang === 'pt' ? 'Hoje' : 'Today'}</p>
                <p style={{ ...ir(400, 12), color: B.mid, marginBottom: 14 }}>{new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {HABIT_LIST.map(h => {
                    const done = !!todayHabits[h.id]
                    return (
                      <div key={h.id} onClick={() => upDb({ [`chab_${sid}`]: { ...habits, [today]: { ...todayHabits, [h.id]: !done } } })}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, border: `1.5px solid ${done ? B.laranja + '44' : B.border}`, background: done ? B.laranja + '08' : B.cream, cursor: 'pointer' }}>
                        <span style={{ fontSize: 22 }}>{h.icon}</span>
                        <p style={{ ...ir(600, 13), color: done ? B.laranja : B.dark, flex: 1 }}>{lang === 'pt' ? h.pt : h.en}</p>
                        <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${done ? B.laranja : B.border}`, background: done ? B.laranja : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {done && <Icon name="check" size={13} color="#fff" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div style={S.card}>
                <p style={{ ...pp(600, 13), color: B.dark, marginBottom: 12 }}>{lang === 'pt' ? 'Últimos 7 dias' : 'Last 7 days'}</p>
                <div style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
                  {Array.from({ length: 7 }).map((_, i) => {
                    const d = new Date()
                    d.setDate(d.getDate() - (6 - i))
                    const dateStr = d.toISOString().slice(0, 10)
                    const dayHabits = habits[dateStr] || {}
                    const doneCount = HABIT_LIST.filter(h => dayHabits[h.id]).length
                    const isToday = dateStr === today
                    const dayName = d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { weekday: 'short' }).slice(0, 3)
                    return (
                      <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                        <p style={{ ...ir(400, 10), color: B.light, marginBottom: 4 }}>{dayName}</p>
                        <div style={{ height: 36, borderRadius: 8, background: doneCount === 0 ? B.bege : doneCount < HABIT_LIST.length ? B.laranja + '55' : B.laranja, border: isToday ? `2px solid ${B.laranja}` : '2px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {doneCount > 0 && <p style={{ ...pp(700, 11), color: doneCount === HABIT_LIST.length ? '#fff' : B.laranja }}>{doneCount}/{HABIT_LIST.length}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })()}

        {/* Doubts tab */}
        {tab === 'doubts' && (
          <div>
            <div style={{ background: B.laranja + '12', border: `1.5px solid ${B.laranja}33`, borderRadius: 14, padding: '14px 16px', marginBottom: 16, display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>💬</span>
              <p style={{ ...ir(400, 13), color: B.dark, lineHeight: 1.7 }}>
                {lang === 'pt'
                  ? 'Manda sua dúvida aqui! A Renata vai responder pessoalmente — não é uma IA, é ela mesma. 😊'
                  : "Send your question here! Renata will reply personally — not an AI, it's her. 😊"}
              </p>
            </div>

            <div style={S.card}>
              <textarea style={{ ...S.ta, marginBottom: 10 }} rows={3}
                placeholder={lang === 'pt' ? 'Qual sua dúvida? Ex: "Qual a diferença entre since e for?"' : 'What\'s your question? Ex: "What\'s the difference between since and for?"'}
                value={question} onChange={e => { setQuestion(e.target.value); setSent(false) }} />
              {sent && <p style={{ ...ir(600, 12), color: B.oliva, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon name="check" size={13} color={B.oliva} />{lang === 'pt' ? 'Dúvida enviada! A Renata vai responder em breve.' : 'Question sent! Renata will reply soon.'}
              </p>}
              <button style={{ ...S.btn(B.laranja), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                if (!question.trim()) return
                const k = `cq_${sid}`
                upDb({ [k]: [...(db[k] || []), { id: `q${Date.now()}`, text: question.trim(), date: new Date().toISOString().slice(0,10), answer: null }] })
                setQuestion(''); setSent(true)
              }}>
                <Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Enviar dúvida' : 'Send question'}
              </button>
            </div>

            {questions.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ ...pp(600, 13), color: B.dark, marginBottom: 10 }}>{lang === 'pt' ? 'Suas dúvidas' : 'Your questions'}</p>
                {[...questions].reverse().map(q => (
                  <div key={q.id} style={{ ...S.card, marginBottom: 10 }}>
                    <p style={{ ...ir(600, 13), color: B.dark, marginBottom: 6 }}>{q.text}</p>
                    <p style={{ ...ir(400, 11), color: B.light, marginBottom: q.answer ? 10 : 0 }}>{q.date}</p>
                    {q.answer ? (
                      <div style={{ background: B.laranja + '10', borderRadius: 10, padding: '10px 12px', borderLeft: `3px solid ${B.laranja}` }}>
                        <p style={{ ...ir(600, 11), color: B.laranja, marginBottom: 4 }}>Renata:</p>
                        <p style={{ ...ir(400, 13), color: B.dark, lineHeight: 1.7 }}>{q.answer}</p>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.laranja, opacity: 0.5 }} />
                        <p style={{ ...ir(400, 12), color: B.light }}>{lang === 'pt' ? 'Aguardando resposta da Renata...' : "Waiting for Renata's reply..."}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Perfil tab */}
        {tab === 'perfil' && (
          <div style={{ padding: 16, maxWidth: 480, margin: '0 auto' }}>
            <div style={{ ...S.card, marginBottom: 14, borderLeft: `4px solid ${B.laranja}` }}>
              <p style={{ ...pp(600, 14), color: B.dark, marginBottom: 12 }}>🔑 {lang === 'pt' ? 'Alterar senha' : 'Change password'}</p>
              <input type="password" style={S.inp} placeholder={lang === 'pt' ? 'Nova senha (mín. 6 caracteres)' : 'New password (min. 6 chars)'}
                value={newPwd} onChange={e => { setNewPwd(e.target.value); setPwdMsg('') }} />
              {pwdMsg && <p style={{ ...ir(600, 12), color: pwdMsg === 'ok' ? B.oliva : '#DC2626', margin: '6px 0' }}>
                {pwdMsg === 'ok' ? (lang === 'pt' ? '✓ Senha alterada com sucesso!' : '✓ Password changed!') : pwdMsg}
              </p>}
              <button style={{ ...S.btn(B.laranja), marginTop: 8 }} onClick={() => {
                if (newPwd.trim().length < 6) { setPwdMsg(lang === 'pt' ? 'Mínimo 6 caracteres.' : 'Minimum 6 characters.'); return }
                upDb({ courseStudents: courseStudents.map(s => s.id === sid ? { ...s, password: newPwd.trim() } : s) })
                setNewPwd(''); setPwdMsg('ok')
              }}>{lang === 'pt' ? 'Salvar nova senha' : 'Save new password'}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
