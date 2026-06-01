import { useState } from 'react'
import { B, CAT } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { JOURNEYS, JOURNEY_MAP } from '../constants/journeys'
import Avatar from './Avatar'
import Icon from './Icon'
import Logo from './Logo'

export default function CourseApp({ lang, sid, courseStudents, db, upDb, onLogout }) {
  const [tab, setTab] = useState('journey')
  const [question, setQuestion] = useState('')
  const [sent, setSent] = useState(false)

  const student = courseStudents.find(s => s.id === sid)
  if (!student) return null

  const jid = db[`cjrn_${sid}`]
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
  ]

  return (
    <div style={S.app}>
      {/* Header */}
      <header style={{ background: B.laranja, height: 64, padding: '0 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <Logo h={48} contrast />
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar seed={student.avatar || 'Lily'} size={32} />
          <p style={{ ...pp(600, 13), color: '#fff' }}>{student.name}</p>
        </div>
        <button style={{ ...S.chip, background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: 11, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={onLogout}>
          <Icon name="logout" size={13} color="#fff" />{lang === 'pt' ? 'Sair' : 'Logout'}
        </button>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', maxWidth: 720, margin: '0 auto', width: '100%' }}>

        {/* Progress bar */}
        <div style={{ ...S.card, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <p style={{ ...pp(600, 13), color: B.dark }}>{journey ? (lang === 'pt' ? journey.pt : journey.en) : (lang === 'pt' ? 'Nenhuma jornada' : 'No journey')}</p>
              <p style={{ ...pp(700, 13), color: B.laranja }}>{pct}%</p>
            </div>
            <div style={{ height: 8, background: B.bege, borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: B.laranja, borderRadius: 99, transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
          {TABS.map(([k, lb]) => (
            <button key={k} style={{ ...S.chip, flex: 1, background: tab === k ? B.laranja : B.bege, color: tab === k ? '#fff' : B.mid, fontSize: 12, padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }} onClick={() => setTab(k)}>{lb}</button>
          ))}
        </div>

        {/* Journey tab */}
        {tab === 'journey' && (
          <div>
            {!journey ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <span style={{ fontSize: 48 }}>⏳</span>
                <p style={{ ...pp(600, 16), color: B.dark, marginTop: 16 }}>{lang === 'pt' ? 'Sua jornada ainda não foi definida' : 'Your journey has not been set yet'}</p>
                <p style={{ ...ir(400, 13), color: B.mid, marginTop: 8 }}>{lang === 'pt' ? 'A Renata vai escolher sua jornada em breve!' : 'Renata will set your journey soon!'}</p>
              </div>
            ) : (
              <div>
                <div style={{ background: journey.color, borderRadius: 14, padding: '14px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{journey.icon}</span>
                  <div>
                    <p style={{ ...pp(700, 15), color: '#fff' }}>{lang === 'pt' ? journey.pt : journey.en}</p>
                    <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.85)' }}>{lang === 'pt' ? journey.desc.pt : journey.desc.en}</p>
                  </div>
                </div>
                {allWeeks.map(w => {
                  const tasks = getJTasks(jid, w.week)
                  const wPct = tasks.length ? Math.round(tasks.filter(tk => checked[tk.id]).length / tasks.length * 100) : 0
                  return (
                    <div key={w.week} style={{ ...S.card, marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <p style={{ ...pp(700, 13), color: B.dark }}>{lang === 'pt' ? `Semana ${w.week}` : `Week ${w.week}`}: {w.theme[lang] || w.theme.en}</p>
                        <span style={{ ...pp(700, 12), color: journey.color }}>{wPct}%</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {tasks.map(task => {
                          const done = !!checked[task.id]
                          const cm = CAT[task.cat] || CAT.grammar
                          return (
                            <div key={task.id} onClick={() => upDb({ [`cjsd_${sid}`]: { ...checked, [task.id]: !done } })}
                              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: done ? B.olivaBg : B.cream, borderRadius: 10, border: `1.5px solid ${done ? B.oliva + '44' : B.border}`, cursor: 'pointer', transition: 'all 0.2s' }}>
                              <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${done ? B.oliva : B.border}`, background: done ? B.oliva : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {done && <Icon name="check" size={12} color="#fff" />}
                              </div>
                              <div style={{ flex: 1 }}>
                                <p style={{ ...ir(600, 12), color: done ? B.mid : B.dark, textDecoration: done ? 'line-through' : 'none' }}>{lang === 'pt' ? task.pt : task.en}</p>
                                {task.link && <a href={task.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ ...ir(400, 10), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}><Icon name="link" size={10} color={B.laranja} />{task.link}</a>}
                              </div>
                              <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
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
      </div>
    </div>
  )
}
