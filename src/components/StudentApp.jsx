import { useState } from 'react'
import { CAT } from '../constants/colors'
import { D, serifD, sansD } from '../constants/dashColors'
import { CEFR_META } from '../constants/cefr'
import { PLAN } from '../constants/plan'
import { STUDY_HABITS, HW_HABITS } from '../constants/habits'
import { todayStr, weekDays, hashPassword } from '../utils'
import { useIsMobile } from '../hooks/useIsMobile'
import Logo from './Logo'
import Avatar from './Avatar'
import AvatarBuilder from './AvatarBuilder'
import CalSection from './CalSection'
import Icon from './Icon'
import { JOURNEY_MAP } from '../constants/journeys'
import { JOURNEY_RESOURCES, TYPE_ICON, pickResource, levelHint } from '../constants/journeyResources'
import ActivityModal from './ActivityModal'
import { DEFAULT_ACTIVITIES } from '../constants/defaultActivities'

const CEFR_TO_LEVEL = { A1: 'beginner', A2: 'beginner', B1: 'intermediate', B2: 'intermediate', C1: 'advanced', C2: 'advanced' }
const LEVEL_BADGE = {
  beginner:     { pt: 'Iniciante',     en: 'Beginner',     icon: 'sprout' },
  intermediate: { pt: 'Intermediário', en: 'Intermediate', icon: 'leaf' },
  advanced:     { pt: 'Avançado',      en: 'Advanced',     icon: 'treeDeciduous' },
}
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
const STREAK_DOT = [D.honey, D.orange, D.terra, D.clay, D.moss, D.sage, D.sky]

export default function StudentApp({ t, lang, setLang, sid, students, db, upDb, isPreview, onBack }) {
  const isMobile = useIsMobile()
  const [tab, setTab]           = useState('dashboard')
  const [jSelWeek, setJSelWeek] = useState(1)
  const [newPwd, setNewPwd]     = useState('')
  const [pwdMsg, setPwdMsg]     = useState('')
  const [showLogout, setShowLogout] = useState(false)
  const [tourStep, setTourStep] = useState(0)
  const [actModal, setActModal] = useState(null) // { taskId, acts, taskText, context }

  const pt        = lang === 'pt'
  const student   = students.find(s => s.id === sid) || { name: '?', avatar: 'Lily' }
  const firstName = (student.name || '?').split(' ')[0]
  const myAvatar  = db[`avatar_${sid}`] || student.avatar || 'Lily'
  const lvl       = db[`lv_${sid}`] || 'A1'
  const lvm       = CEFR_META.find(c => c.level === lvl) || CEFR_META[0]
  const plan      = PLAN[lvl] || []
  const dk        = `sd_${sid}`
  const sd        = db[dk] || {}
  const checked   = sd.checked || {}
  const scores    = sd.scores  || {}
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
  const avgScore = Object.values(scores).length ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length) : null

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
  const jWeekPct  = wn => { const ts = jGetTasks(wn); return ts.length ? Math.round(ts.filter(tk => jChecked[tk.id]).length / ts.length * 100) : 0 }
  const jAllTasks = jAllWeeks.flatMap(w => jGetTasks(w.week))
  const jTotalPct = jAllTasks.length ? Math.round(jAllTasks.filter(tk => jChecked[tk.id]).length / jAllTasks.length * 100) : 0

  const jCurrentWeek = journey
    ? (jAllWeeks.find(w => { const wt = jGetTasks(w.week); return wt.length ? wt.some(tk => !jChecked[tk.id]) : false }) || jAllWeeks[jAllWeeks.length - 1])
    : null
  const jCurrentTasks = jCurrentWeek ? jGetTasks(jCurrentWeek.week) : []
  const jCurrentPct = jCurrentTasks.length ? Math.round(jCurrentTasks.filter(tk => jChecked[tk.id]).length / jCurrentTasks.length * 100) : 0
  const jNextTask   = jCurrentTasks.find(tk => !jChecked[tk.id]) || jCurrentTasks[0]

  const taskText = tk => pt ? (tk.variations?.[simpleLevel]?.pt || tk.pt) : (tk.variations?.[simpleLevel]?.en || tk.en)
  const catColor = c => CAT_COLOR[c] || [D.muted, D.surfaceWarm]
  const journeyName = journey ? (pt ? journey.pt : journey.en) : null

  const todayLabel = new Date().toLocaleDateString(pt ? 'pt-BR' : 'en-US', { weekday: 'long', day: 'numeric', month: 'long' })

  const TABS = [
    ['dashboard', t.tabDash], ['journey', pt ? 'Jornada' : 'Journey'], ['hw', t.tabHWst],
    ['habits', t.tabHabits], ['calendar', t.tabCalSt],
    ['info', pt ? 'Perfil' : 'Profile'],
  ]
  const goTab = k => { setTab(k); window.scrollTo({ top: 0 }) }

  // Shared style bits (new visual language)
  const card = { background: D.surface, borderRadius: 20, boxShadow: D.shadow, border: `1px solid ${D.line}` }
  const checkBox = (on, color) => ({ width: 26, height: 26, borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: `2px solid ${on ? color : D.line}`, background: on ? color : 'transparent', transition: 'all .15s', padding: 0 })
  const inp = { width: '100%', padding: '12px 14px', border: `1px solid ${D.line}`, borderRadius: 11, fontFamily: 'inherit', fontSize: 14, background: D.surfaceWarm, color: D.ink, boxSizing: 'border-box' }
  const primaryBtn = { background: D.terra, color: '#fff', border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: 14, padding: '12px 22px', borderRadius: 11, cursor: 'pointer' }
  const kicker = { fontSize: 12, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: D.muted }

  const SectionHead = ({ title, sub }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 12px', marginBottom: 22 }}>
      <h2 style={{ margin: 0, ...serifD(500, 28), color: D.ink }}>{title}</h2>
      {sub && <span style={{ fontSize: 15, color: D.muted }}>{sub}</span>}
    </div>
  )

  return (
    <>
    <div style={{ minHeight: '100vh', background: `radial-gradient(ellipse 900px 500px at 15% -10%, ${D.terraSoft}, transparent), radial-gradient(ellipse 800px 500px at 100% 0%, ${D.sageSoft}, transparent) ${D.canvas}`, fontFamily: "'Hanken Grotesk',sans-serif", color: D.ink, WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ height: 5, background: `linear-gradient(90deg, ${D.terra} 0%, ${D.orange} 34%, ${D.moss} 67%, ${D.sky} 100%)` }} />

      {/* ================= TOP BAR ================= */}
      <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(249,241,233,.88)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: `1px solid ${D.line}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '10px 14px' : '10px 20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: isMobile ? '10px 12px' : '8px 18px' }}>
          <Logo h={isMobile ? 32 : 38} />

          {/* nav — full row below on mobile, inline on desktop */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: 2, flex: '1 1 240px', minWidth: 0, overflowX: 'auto' }}>
              {TABS.map(([k, lb]) => (
                <button key={k} onClick={() => goTab(k)}
                  style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: tab === k ? 700 : 600, padding: '9px 15px', borderRadius: 10, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .15s', background: tab === k ? D.terra : 'transparent', color: tab === k ? '#fff' : D.muted, flexShrink: 0 }}>
                  {lb}
                </button>
              ))}
            </nav>
          )}

          {/* right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 12, marginLeft: 'auto' }}>
            <button onClick={() => setLang(pt ? 'en' : 'pt')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: `1px solid ${D.line}`, color: D.muted, fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '7px 12px', borderRadius: 9, cursor: 'pointer' }}>
              <Icon name="globe" size={12} color={D.muted} />{t.switchLang}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: isMobile ? 0 : 12, borderLeft: isMobile ? 'none' : `1px solid ${D.line}` }}>
              {!isMobile && (
                <div style={{ textAlign: 'right', lineHeight: 1.15, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 140 }}>{student.name}</div>
                  <div style={{ fontSize: 11.5, color: D.muted }}>{lvl} · {lvm.label[lang]}</div>
                </div>
              )}
              <Avatar seed={myAvatar} size={isMobile ? 34 : 38} />
            </div>
            {isPreview ? (
              <button onClick={onBack} title={pt ? 'Voltar' : 'Back'}
                style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'transparent', border: `1px solid ${D.line}`, color: D.muted, fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '7px 11px', borderRadius: 9, cursor: 'pointer' }}>
                <Icon name="back" size={13} color={D.muted} />{!isMobile && (pt ? 'Voltar' : 'Back')}
              </button>
            ) : (
              <button onClick={() => setShowLogout(true)} title={pt ? 'Sair' : 'Log out'}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: `1px solid ${D.line}`, color: D.muted, padding: '8px 10px', borderRadius: 9, cursor: 'pointer' }}>
                <Icon name="logout" size={14} color={D.muted} />
              </button>
            )}
          </div>

          {/* nav row (mobile only) — full-width scrollable */}
          {isMobile && (
            <nav style={{ display: 'flex', gap: 2, width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: 2 }}>
              {TABS.map(([k, lb]) => (
                <button key={k} onClick={() => goTab(k)}
                  style={{ fontFamily: 'inherit', fontSize: 13.5, fontWeight: tab === k ? 700 : 600, padding: '8px 13px', borderRadius: 10, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .15s', background: tab === k ? D.terra : 'transparent', color: tab === k ? '#fff' : D.muted, flexShrink: 0 }}>
                  {lb}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Onboarding tour — first login only */}
      {!isPreview && !db[`seenTour_${sid}`] && (() => {
        const steps = [
          { icon: 'smile', title: pt ? `Bem-vinda, ${student.name}!` : `Welcome, ${student.name}!`, desc: pt ? 'Este é o seu espaço de estudos no TalkScape. Deixa eu te mostrar como tudo funciona em 5 passos rápidos!' : "This is your TalkScape study space. Let me show you how everything works in 5 quick steps!" },
          { icon: 'map', title: pt ? 'Jornada' : 'Journey', desc: pt ? 'Aqui ficam suas atividades semanais. Cada semana tem tarefas de listening, speaking, grammar e mais. Marque as feitas e acompanhe seu progresso!' : 'Here are your weekly activities. Each week has tasks for listening, speaking, grammar and more. Check them off and track your progress!' },
          { icon: 'homework', title: pt ? 'Lição' : 'Homework', desc: pt ? 'Teacher Renata envia tarefas extras por aqui. Quando aparecer algo novo, você recebe na aba Lição.' : 'Teacher Renata sends extra tasks here. When something new arrives, it shows up in the Homework tab.' },
          { icon: 'flame', title: pt ? 'Hábitos' : 'Habits', desc: pt ? 'Registre seus hábitos de estudo diários aqui. Manter uma sequência de dias seguidos faz toda a diferença!' : 'Log your daily study habits here. Keeping a daily streak makes all the difference!' },
          { icon: 'dashboard', title: pt ? 'Início' : 'Home', desc: pt ? 'No Início você vê sua sequência de dias, seu progresso e por onde continuar. É sua visão geral de tudo!' : "On Home you see your streak, your progress and where to pick up next. It's your big picture view!" },
        ]
        const step = steps[tourStep]
        const isLast = tourStep === steps.length - 1
        const dismiss = () => { upDb({ [`seenTour_${sid}`]: true }) }
        return (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(59,42,33,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: 20 }}>
            <div style={{ background: D.surface, borderRadius: 22, padding: '32px 28px', maxWidth: 360, width: '100%', boxShadow: D.shadowLg, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon name={step.icon} size={52} color={D.terra} /></div>
              <p style={{ ...sansD(700, 18), color: D.ink, marginBottom: 10 }}>{step.title}</p>
              <p style={{ ...sansD(400, 14), color: D.muted, lineHeight: 1.65, marginBottom: 28 }}>{step.desc}</p>
              {/* progress dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 22 }}>
                {steps.map((_, i) => (
                  <div key={i} style={{ width: i === tourStep ? 18 : 7, height: 7, borderRadius: 99, background: i === tourStep ? D.terra : D.line, transition: 'all 0.2s' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {tourStep > 0 && (
                  <button style={{ flex: 1, padding: 11, borderRadius: 12, border: `1.5px solid ${D.line}`, background: 'transparent', color: D.muted, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
                    onClick={() => setTourStep(s => s - 1)}>
                    {pt ? '← Voltar' : '← Back'}
                  </button>
                )}
                <button style={{ flex: 2, padding: 11, borderRadius: 12, border: 'none', background: D.terra, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                  onClick={() => isLast ? dismiss() : setTourStep(s => s + 1)}>
                  {isLast && <Icon name="send" size={14} color="#fff" />}
                  {isLast ? (pt ? 'Começar!' : "Let's go!") : (pt ? 'Próximo →' : 'Next →')}
                </button>
              </div>
              <button style={{ background: 'none', border: 'none', color: D.muted, fontSize: 12, cursor: 'pointer', marginTop: 14, fontFamily: 'inherit' }}
                onClick={dismiss}>
                {pt ? 'Pular tour' : 'Skip tour'}
              </button>
            </div>
          </div>
        )
      })()}

      {/* Logout confirm */}
      {showLogout && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(59,42,33,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 20 }} onClick={() => setShowLogout(false)}>
          <div style={{ background: D.surface, borderRadius: 18, padding: '24px 22px', maxWidth: 320, width: '100%', boxShadow: D.shadowLg }} onClick={e => e.stopPropagation()}>
            <p style={{ ...sansD(700, 16), color: D.ink, marginBottom: 6 }}>{pt ? 'Quer mesmo sair?' : 'Log out?'}</p>
            <p style={{ ...sansD(400, 13), color: D.muted, marginBottom: 18, lineHeight: 1.5 }}>{pt ? 'Seu progresso está salvo. Você pode voltar quando quiser.' : 'Your progress is saved. You can come back any time.'}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ flex: 1, padding: '11px 0', borderRadius: 11, border: `1px solid ${D.line}`, background: D.surfaceWarm, color: D.ink, fontSize: 13.5, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }} onClick={() => setShowLogout(false)}>{pt ? 'Cancelar' : 'Cancel'}</button>
              <button style={{ flex: 1, padding: '11px 0', borderRadius: 11, border: 'none', background: D.terra, color: '#fff', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={onBack}><Icon name="logout" size={14} color="#fff" />{pt ? 'Sair' : 'Log out'}</button>
            </div>
          </div>
        </div>
      )}

      {isPreview && (
        <div style={{ background: D.honeySoft, borderBottom: `1px solid ${D.honey}`, padding: '7px 20px', fontSize: 12, color: D.terraDeep, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="eye" size={13} color={D.terraDeep} />Teacher Renata — preview
        </div>
      )}
      {fb && (
        <div style={{ maxWidth: 1100, margin: '16px auto 0', padding: '0 20px' }}>
          <div style={{ background: D.orangeSoft, borderLeft: `4px solid ${D.orange}`, padding: '10px 16px', borderRadius: 10, fontSize: 13, color: D.ink, lineHeight: 1.5 }}>
            <strong style={{ color: D.terraDeep }}>{t.teacherFbLabel}</strong> {fb}
          </div>
        </div>
      )}

      {/* ================= AGENDA (CalSection renders its own full section) ================= */}
      {tab === 'calendar' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher={false} sid={sid} />}

      {tab !== 'calendar' && (
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 20px 80px' }}>

        {/* ================= INÍCIO ================= */}
        {tab === 'dashboard' && (
          <section>
            {/* Welcome / first step banner */}
            {!isPreview && !db[`seenWelcome_${sid}`] && (
              <div style={{ background: D.terraSoft, border: `1px solid ${D.terra}44`, borderRadius: 16, padding: '16px 18px', marginBottom: 20, position: 'relative', boxShadow: D.shadow }}>
                <button style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: 4 }} onClick={() => upDb({ [`seenWelcome_${sid}`]: true })}>
                  <Icon name="close" size={16} color={D.muted} />
                </button>
                <p style={{ ...sansD(700, 15), color: D.terraDeep, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 7 }}><Icon name="smile" size={18} color={D.terra} />{pt ? `Bem-vinda, ${student.name}!` : `Welcome, ${student.name}!`}</p>
                <p style={{ ...sansD(400, 13), color: D.muted, lineHeight: 1.6, marginBottom: 12 }}>
                  {pt
                    ? 'Aqui você acompanha seu progresso. Para começar a estudar, vá até a aba Jornada.'
                    : 'This is where you track your progress. To start studying, go to the Journey tab.'}
                </p>
                <button style={{ ...primaryBtn, fontSize: 13, padding: '9px 16px', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 6 }} onClick={() => { goTab('journey'); upDb({ [`seenWelcome_${sid}`]: true }) }}>
                  <Icon name="map" size={14} color="#fff" />{pt ? 'Ir para a Jornada' : 'Go to the Journey'}
                </button>
              </div>
            )}

            {/* hero + streak */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'stretch', marginBottom: 22 }}>
              <div style={{ flex: '1 1 300px', minWidth: 0, background: `linear-gradient(135deg,${D.terra},${D.terraDeep})`, borderRadius: 22, padding: '30px 32px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: D.shadowLg }}>
                <div style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
                <div style={{ position: 'absolute', right: 30, bottom: -60, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
                <div style={{ position: 'absolute', right: 46, top: 30, width: 14, height: 14, borderRadius: '50%', background: D.honey }} />
                <div style={{ position: 'absolute', right: 96, top: 66, width: 9, height: 9, borderRadius: '50%', background: D.sky }} />
                <div style={{ position: 'absolute', right: 74, top: 16, width: 7, height: 7, borderRadius: '50%', background: D.clay }} />
                <div style={{ fontSize: 13, opacity: 0.82, fontWeight: 500 }}>{todayLabel}</div>
                <div style={{ ...serifD(500, 34), lineHeight: 1.1, marginTop: 8 }}>{pt ? `Olá, ${firstName}` : `Hello, ${firstName}`}</div>
                <div style={{ fontSize: 15, opacity: 0.9, marginTop: 10, maxWidth: 380, lineHeight: 1.5 }}>
                  {journey ? (
                    pt
                      ? <>Você está a caminho da fluência no <strong style={{ fontWeight: 600 }}>{journeyName}</strong>. Bora continuar de onde parou?</>
                      : <>You're on your way to fluency in <strong style={{ fontWeight: 600 }}>{journeyName}</strong>. Let's pick up where you left off?</>
                  ) : (
                    pt
                      ? 'Sua jornada de estudos será configurada em breve pela Teacher Renata. Enquanto isso, registre seus hábitos de hoje!'
                      : "Teacher Renata will set up your study journey soon. Meanwhile, log today's habits!"
                  )}
                </div>
                <button onClick={() => goTab(journey ? 'journey' : 'habits')} style={{ marginTop: 22, background: '#fff', color: D.terraDeep, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: 14, padding: '12px 22px', borderRadius: 11, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 6px 18px rgba(0,0,0,.14)' }}>
                  {journey ? (pt ? 'Continuar minha jornada →' : 'Continue my journey →') : (pt ? 'Ver meus hábitos →' : 'See my habits →')}
                </button>
              </div>

              {/* streak card */}
              <div style={{ flex: '0 1 230px', minWidth: 210, background: `linear-gradient(160deg,${D.honeySoft},${D.surface})`, borderRadius: 22, padding: 26, boxShadow: D.shadow, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: `1px solid ${D.honey}` }}>
                <div style={kicker}>{pt ? 'Sequência' : 'Streak'}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
                  <div style={{ ...serifD(500, 52), lineHeight: 1, color: D.terra }}>{streak}</div>
                  <div style={{ fontSize: 15, color: D.muted }}>{pt ? (streak === 1 ? 'dia' : 'dias') : (streak === 1 ? 'day' : 'days')}</div>
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
                  {days.map((d, i) => {
                    const done = dayDone(d), isT = d === today
                    return <div key={d} title={t.dayNames[i]} style={{ flex: 1, height: 8, borderRadius: 99, background: done ? STREAK_DOT[i] : D.line, outline: isT ? `2px solid ${D.terra}` : 'none', outlineOffset: 1 }} />
                  })}
                </div>
                <div style={{ fontSize: 12.5, color: D.muted, marginTop: 12 }}>
                  {streak > 0 ? (pt ? `Continue firme, ${firstName}!` : `Keep it up, ${firstName}!`) : (pt ? `Comece hoje, ${firstName}!` : `Start today, ${firstName}!`)}
                </div>
              </div>
            </div>

            {/* continue studying + today's habits */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
              {/* continue card */}
              <div style={{ ...card, flex: '1.4 1 340px', minWidth: 0, padding: 26 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{pt ? 'Continue estudando' : 'Keep studying'}</h3>
                  <a onClick={() => goTab('journey')} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer', color: D.terra }}>{pt ? 'Ver jornada' : 'View journey'}</a>
                </div>
                {journey && jCurrentWeek ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', padding: 16, borderRadius: 15, background: D.surfaceWarm, border: `1px solid ${D.line}` }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: D.mossSoft, color: D.mossDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={journey.icon} size={24} color={D.mossDeep} />
                    </div>
                    <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                      <div style={{ fontSize: 12, color: D.mossDeep, fontWeight: 700, textTransform: 'uppercase' }}>
                        {pt ? 'Semana' : 'Week'} {jCurrentWeek.week} · {jCurrentWeek.theme?.[lang] || jCurrentWeek.theme?.en}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, marginTop: 3, lineHeight: 1.4 }}>{jNextTask ? taskText(jNextTask) : (jCurrentWeek.theme?.[lang] || jCurrentWeek.theme?.en)}</div>
                      <div style={{ height: 6, borderRadius: 99, background: D.line, marginTop: 12, overflow: 'hidden' }}>
                        <div style={{ width: `${jCurrentPct}%`, height: '100%', background: D.orange, borderRadius: 99, transition: 'width .6s' }} />
                      </div>
                    </div>
                    <button onClick={() => { setJSelWeek(jCurrentWeek.week); goTab('journey') }} style={{ ...primaryBtn, fontSize: 13, padding: '11px 18px', flexShrink: 0 }}>
                      {pt ? 'Retomar' : 'Resume'}
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 16, borderRadius: 15, background: D.surfaceWarm, border: `1px solid ${D.line}` }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: D.mossSoft, color: D.mossDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="map" size={24} color={D.mossDeep} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{pt ? 'Nenhuma jornada atribuída ainda' : 'No journey assigned yet'}</div>
                      <div style={{ fontSize: 13, color: D.muted, marginTop: 3, lineHeight: 1.5 }}>{pt ? 'Teacher Renata vai configurar sua jornada em breve!' : 'Teacher Renata will set up your journey soon!'}</div>
                    </div>
                  </div>
                )}
                {/* mini stats — real plan progress */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 16 }}>
                  <div style={{ flex: '1 1 100px', textAlign: 'center', padding: 14, borderRadius: 14, background: D.claySoft }}>
                    <div style={{ ...serifD(400, 26), color: D.clay }}>{pct}%</div>
                    <div style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>{pt ? 'do plano concluído' : 'of the plan done'}</div>
                  </div>
                  <div style={{ flex: '1 1 100px', textAlign: 'center', padding: 14, borderRadius: 14, background: D.sageSoft }}>
                    <div style={{ ...serifD(400, 26), color: D.moss }}>{done2}<span style={{ fontSize: 16, color: D.muted }}>/{total2}</span></div>
                    <div style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>{t.tasksDone}</div>
                  </div>
                  <div style={{ flex: '1 1 100px', textAlign: 'center', padding: 14, borderRadius: 14, background: D.honeySoft }}>
                    <div style={{ ...serifD(400, 26), color: D.honey }}>{avgScore !== null ? `${avgScore}%` : lvl}</div>
                    <div style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>{avgScore !== null ? t.avgLabel : (pt ? 'seu nível' : 'your level')}</div>
                  </div>
                </div>
              </div>

              {/* today's habits mini */}
              <div style={{ flex: '1 1 280px', minWidth: 0, background: `linear-gradient(160deg,${D.skySoft},${D.surface})`, borderRadius: 20, padding: 26, boxShadow: D.shadow, border: `1px solid ${D.sky}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{pt ? 'Hábitos de hoje' : "Today's habits"}</h3>
                  <a onClick={() => goTab('habits')} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer', color: D.terra }}>{pt ? 'Ver todos' : 'See all'}</a>
                </div>
                {STUDY_HABITS.slice(0, 4).map(h => {
                  const on = !!todayH[h.id]
                  return (
                    <button key={h.id} onClick={() => toggleHab(h.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '13px 14px', marginBottom: 8, borderRadius: 13, border: `1px solid ${D.line}`, background: on ? D.surfaceWarm : D.surface, cursor: 'pointer', fontFamily: 'inherit', color: D.ink, transition: 'all .15s' }}>
                      <span style={checkBox(on, D.terra)}>{on && <Icon name="check" size={14} color="#fff" />}</span>
                      <span style={{ fontSize: 14, fontWeight: 500, textAlign: 'left' }}>{pt ? h.pt : h.en}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= JORNADA ================= */}
        {tab === 'journey' && !journey && (
          <section>
            <SectionHead title={pt ? 'Jornada' : 'Journey'} sub={pt ? 'seu caminho de estudos' : 'your study path'} />
            <div style={{ ...card, padding: '70px 30px', textAlign: 'center' }}>
              <div style={{ width: 74, height: 74, borderRadius: 20, background: D.surfaceWarm, border: `1px solid ${D.line}`, color: D.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Icon name="map" size={34} color={D.muted} />
              </div>
              <div style={{ ...serifD(400, 22), marginTop: 20 }}>{pt ? 'Nenhuma jornada atribuída ainda' : 'No journey assigned yet'}</div>
              <div style={{ fontSize: 14.5, color: D.muted, maxWidth: 340, margin: '8px auto 0', lineHeight: 1.5 }}>
                {pt ? 'Teacher Renata vai configurar sua jornada em breve!' : 'Teacher Renata will set up your journey soon!'}
              </div>
            </div>
          </section>
        )}
        {tab === 'journey' && journey && (
          <section>
            {/* course banner */}
            <div style={{ background: `linear-gradient(135deg,${D.moss},${D.mossDeep})`, borderRadius: 22, padding: '28px 32px', color: '#fff', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, boxShadow: D.shadowLg, position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
              <div style={{ position: 'absolute', right: -30, top: -50, width: 170, height: 170, borderRadius: '50%', background: 'rgba(255,255,255,.06)' }} />
              <div style={{ width: 60, height: 60, borderRadius: 17, background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={journey.icon} size={30} color="#fff" />
              </div>
              <div style={{ flex: '1 1 240px', minWidth: 0 }}>
                <div style={{ fontSize: 12.5, opacity: 0.8, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{pt ? 'Sua jornada' : 'Your journey'}</div>
                <h2 style={{ margin: '4px 0 0', ...serifD(500, 28) }}>{journeyName}</h2>
                <div style={{ fontSize: 14, opacity: 0.9, marginTop: 4 }}>{pt ? journey.desc.pt : journey.desc.en}</div>
              </div>
              <div style={{ textAlign: 'right', position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.25)', padding: '7px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600 }}>
                  <Icon name={LEVEL_BADGE[simpleLevel].icon} size={14} color="#fff" />{LEVEL_BADGE[simpleLevel][lang] || LEVEL_BADGE[simpleLevel].en}
                </div>
                <div style={{ fontSize: 12.5, opacity: 0.85, marginTop: 10 }}>{jTotalPct}% {pt ? 'concluído' : 'complete'}</div>
                <div style={{ width: 150, height: 6, borderRadius: 99, background: 'rgba(255,255,255,.2)', marginTop: 6, overflow: 'hidden', marginLeft: 'auto' }}>
                  <div style={{ width: `${jTotalPct}%`, height: '100%', background: '#fff', borderRadius: 99, transition: 'width .6s' }} />
                </div>
              </div>
            </div>

            {/* week pills */}
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, marginBottom: 24 }}>
              {jAllWeeks.map(w => {
                const wpct = jWeekPct(w.week), active = jSelWeek === w.week
                return (
                  <button key={w.week} onClick={() => setJSelWeek(w.week)}
                    style={{ whiteSpace: 'nowrap', fontFamily: 'inherit', fontSize: 13, padding: '9px 15px', borderRadius: 11, cursor: 'pointer', transition: 'all .15s', border: `1px solid ${active ? D.moss : D.line}`, background: active ? D.moss : D.surface, color: active ? '#fff' : D.ink, boxShadow: D.shadow, flexShrink: 0 }}>
                    <span style={{ fontWeight: 700 }}>{pt ? 'Sem' : 'Wk'} {w.week}</span>
                    <span style={{ opacity: 0.75, marginLeft: 6 }}>{wpct === 100 ? '✓' : `${wpct}%`}</span>
                  </button>
                )
              })}
            </div>

            {jSelW && (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px 12px', marginBottom: 16 }}>
                  <h2 style={{ margin: 0, ...serifD(500, 24) }}>{pt ? 'Semana' : 'Week'} {jSelW.week}</h2>
                  <span style={{ fontSize: 16, color: D.muted }}>{jSelW.theme[lang] || jSelW.theme.en}</span>
                </div>

                {/* activity list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {jTasks.map((task, ti) => {
                    const cm = CAT[task.cat] || CAT.grammar
                    const [cStrong, cSoft] = catColor(task.cat)
                    const done = jChecked[task.id]
                    const r = pickResource(JOURNEY_RESOURCES[jid]?.[simpleLevel]?.[jSelWeek], task.cat, ti)
                    const displayText = taskText(task)
                    const hint = !task.variations?.[simpleLevel] ? levelHint(simpleLevel, task.cat, lang) : null
                    const dbActs    = db[`acts_${jid}_w${jSelWeek}_${task.id}`]
                    const defaults  = DEFAULT_ACTIVITIES[task.id]
                    const taskActs  = dbActs || (defaults?.acts || defaults || [])
                    const taskCtx   = defaults?.context || null
                    const actScore  = db[`actScore_${sid}_${task.id}`]
                    return (
                      <div key={task.id} style={{ ...card, borderRadius: 16, padding: '20px 22px 20px 18px', display: 'flex', gap: 16, alignItems: 'stretch', opacity: done ? 0.78 : 1 }}>
                        <div style={{ width: 4, borderRadius: 99, flexShrink: 0, background: cStrong }} />
                        <button onClick={() => jToggle(task.id)} style={{ ...checkBox(done, D.moss), alignSelf: 'flex-start' }}>
                          {done && <Icon name="check" size={14} color="#fff" />}
                        </button>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <div style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.4, flex: '1 1 240px', minWidth: 0, color: done ? D.muted : D.ink, textDecoration: done ? 'line-through' : 'none' }}>{displayText}</div>
                            <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: cStrong, background: cSoft, padding: '4px 10px', borderRadius: 99 }}>{pt ? cm.pt : cm.en}</span>
                          </div>
                          {hint && !done && (
                            <div style={{ ...serifD(400, 14), fontStyle: 'italic', color: D.muted, marginTop: 5, display: 'flex', alignItems: 'center', gap: 5 }}>
                              <Icon name={simpleLevel === 'advanced' ? 'trendingUp' : 'lightbulb'} size={12} color={simpleLevel === 'advanced' ? D.moss : D.orange} />{hint}
                            </div>
                          )}
                          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                            {task.link && (
                              <a href={task.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: D.terra, background: D.terraSoft, padding: '5px 11px', borderRadius: 8, textDecoration: 'none' }}>
                                <Icon name="link" size={13} color={D.terra} />{pt ? 'Acessar recurso' : 'Open resource'}
                              </a>
                            )}
                            {r && (() => { const v = !!visited[r.url]; return (
                              <a href={r.url} target="_blank" rel="noreferrer" onClick={e => { e.stopPropagation(); markVisited(r.url) }}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: D.mossDeep, background: v ? D.sageSoft : D.mossSoft, padding: '5px 11px', borderRadius: 8, textDecoration: 'none', border: v ? `1px solid ${D.sage}` : '1px solid transparent' }}>
                                {v ? <Icon name="check" size={13} color={D.mossDeep} /> : <Icon name={TYPE_ICON[r.type]} size={13} color={D.mossDeep} />}{r.label}
                              </a>
                            ) })()}
                            {taskActs.length > 0 && (
                              <button onClick={e => { e.stopPropagation(); setActModal({ taskId: task.id, acts: taskActs, taskText: displayText, context: taskCtx }) }}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, fontFamily: 'inherit', color: actScore !== undefined ? D.mossDeep : D.terra, background: actScore !== undefined ? D.sageSoft : D.terraSoft, padding: '5px 11px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>
                                <Icon name="target" size={13} color={actScore !== undefined ? D.mossDeep : D.terra} />
                                {pt ? 'Atividades' : 'Activities'}{actScore !== undefined ? ` · ${actScore}%` : ` (${taskActs.length})`}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )}
          </section>
        )}

        {/* ================= LIÇÃO ================= */}
        {tab === 'hw' && (
          <section>
            <SectionHead title={pt ? 'Lição de casa' : 'Homework'} sub={pt ? 'tarefas atribuídas pela Teacher Renata' : 'tasks assigned by Teacher Renata'} />

            {hw.length === 0 && (
              <div style={{ ...card, padding: '70px 30px', textAlign: 'center' }}>
                <div style={{ width: 74, height: 74, borderRadius: 20, background: D.surfaceWarm, border: `1px solid ${D.line}`, color: D.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <Icon name="homework" size={34} color={D.muted} />
                </div>
                <div style={{ ...serifD(400, 22), marginTop: 20 }}>{pt ? 'Tudo em dia por aqui!' : 'All caught up here!'}</div>
                <div style={{ fontSize: 14.5, color: D.muted, marginTop: 8, maxWidth: 340, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
                  {pt ? 'Nenhuma tarefa atribuída no momento. Quando a Renata enviar uma lição, ela aparece aqui.' : 'No tasks assigned right now. When Renata sends homework, it shows up here.'}
                </div>
                <button onClick={() => goTab('journey')} style={{ ...primaryBtn, marginTop: 22 }}>
                  {pt ? 'Enquanto isso, ir para a Jornada →' : 'Meanwhile, go to the Journey →'}
                </button>
              </div>
            )}

            {hw.filter(h => !h.done).length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {hw.filter(h => !h.done).map(h => {
                  const cm = CAT[h.cat] || CAT.grammar
                  const [cStrong, cSoft] = catColor(h.cat)
                  return (
                    <div key={h.id} style={{ ...card, borderRadius: 16, padding: '18px 20px 18px 16px', display: 'flex', gap: 14, alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => toggleHW(h.id)}>
                      <div style={{ width: 4, borderRadius: 99, alignSelf: 'stretch', flexShrink: 0, background: cStrong }} />
                      <div style={checkBox(false, D.terra)} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                          <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                            <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{h.en}</p>
                            <p style={{ ...serifD(400, 13.5), fontStyle: 'italic', color: D.muted, margin: '3px 0 0' }}>{h.pt}</p>
                          </div>
                          <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: cStrong, background: cSoft, padding: '4px 10px', borderRadius: 99 }}>{pt ? cm.pt : cm.en}</span>
                        </div>
                        {h.due && (
                          <p style={{ fontSize: 12.5, fontWeight: 600, color: D.orange, marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Icon name="calendar" size={13} color={D.orange} />{h.due}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {hw.filter(h => h.done).length > 0 && (
              <div style={{ marginTop: 24 }}>
                <p style={{ ...kicker, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={12} color={D.muted} />{pt ? 'Concluídas' : 'Completed'}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {hw.filter(h => h.done).map(h => (
                    <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: D.surfaceWarm, borderRadius: 13, border: `1px solid ${D.line}`, cursor: 'pointer', opacity: 0.7 }} onClick={() => toggleHW(h.id)}>
                      <div style={checkBox(true, D.moss)}><Icon name="check" size={14} color="#fff" /></div>
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: D.muted, textDecoration: 'line-through', margin: 0 }}>{h.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {mats.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: D.ink, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Icon name="paperclip" size={15} color={D.terra} />{pt ? 'Materiais de Teacher Renata' : 'Materials from Teacher Renata'}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {mats.map(m => (
                    <div key={m.id} style={{ padding: '14px 16px', background: D.mossSoft, borderRadius: 14, border: `1px solid ${D.sage}` }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: D.ink, margin: 0 }}>{m.title}</p>
                      {m.url && <a href={m.url} target="_blank" rel="noreferrer" style={{ fontSize: 12.5, color: D.terra, wordBreak: 'break-all' }}>{m.url}</a>}
                      {m.note && <p style={{ fontSize: 12.5, color: D.muted, marginTop: 4, lineHeight: 1.5 }}>{m.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ================= HÁBITOS ================= */}
        {tab === 'habits' && (
          <section>
            <SectionHead title={pt ? 'Meus hábitos' : 'My habits'} sub={pt ? 'pequenas ações que constroem fluência' : 'small actions that build fluency'} />

            {/* weekly tracker */}
            <div style={{ background: `linear-gradient(135deg,${D.orange},#C9762E)`, borderRadius: 20, padding: '24px 28px', color: '#fff', boxShadow: D.shadowLg, marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 12.5, opacity: 0.85, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>{pt ? 'Esta semana' : 'This week'}</div>
                  <div style={{ ...serifD(400, 24), marginTop: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {streak > 0 && <Icon name="flame" size={22} color="#fff" />}
                    {streak > 0 ? `${streak} ${t.streakLabel}` : t.noStreak}
                  </div>
                </div>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={streak >= 7 ? 'trophy' : streak >= 3 ? 'star' : 'calendar'} size={21} color="#fff" />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                {days.map((d, i) => {
                  const done = dayDone(d), isT = d === today
                  return (
                    <div key={d} style={{ flex: 1, textAlign: 'center', minWidth: 0 }}>
                      <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 8, fontWeight: 600 }}>{t.dayNames[i]}</div>
                      <div style={{ width: '100%', aspectRatio: '1', borderRadius: 12, border: `2px solid ${isT ? '#fff' : done ? '#fff' : 'rgba(255,255,255,.4)'}`, background: done ? '#fff' : 'rgba(255,255,255,.12)', color: done ? D.orange : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700 }}>
                        {done && <Icon name="check" size={17} color={D.orange} />}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {[
                { title: t.studyH, icon: 'bookOpen', habits: STUDY_HABITS, color: D.moss },
                { title: pt ? 'Rotina de lição' : 'Homework routine', icon: 'homework', habits: HW_HABITS, color: D.terra },
              ].map(({ title, icon, habits, color }) => (
                <div key={title} style={{ ...card, overflow: 'hidden' }}>
                  <div style={{ background: color, color: '#fff', padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontWeight: 700, fontSize: 15 }}><Icon name={icon} size={18} color="#fff" />{title}</span>
                    <span style={{ fontSize: 13, background: 'rgba(255,255,255,.2)', padding: '3px 11px', borderRadius: 99, fontWeight: 600 }}>{habits.filter(h => !!todayH[h.id]).length}/{habits.length}</span>
                  </div>
                  <div style={{ padding: 8 }}>
                    {habits.map(h => {
                      const on = !!todayH[h.id]
                      return (
                        <button key={h.id} onClick={() => toggleHab(h.id)}
                          style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 13px', borderRadius: 12, border: '1px solid transparent', background: on ? D.surfaceWarm : 'transparent', cursor: 'pointer', fontFamily: 'inherit', color: D.ink, textAlign: 'left' }}>
                          <span style={checkBox(on, color)}>{on && <Icon name="check" size={14} color="#fff" />}</span>
                          <span style={{ flex: 1, textAlign: 'left' }}>
                            <span style={{ display: 'block', fontSize: 14, fontWeight: 600, textDecoration: on ? 'line-through' : 'none', color: on ? D.muted : D.ink }}>{h.en}</span>
                            <span style={{ display: 'block', ...serifD(400, 13), fontStyle: 'italic', color: D.muted }}>{h.pt}</span>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= PERFIL ================= */}
        {tab === 'info' && (
          <section>
            <SectionHead title={pt ? 'Meu perfil' : 'My profile'} sub={pt ? 'suas informações e personalização' : 'your info and personalization'} />

            {/* level card */}
            <div style={{ background: `linear-gradient(135deg,${D.terra},${D.terraDeep})`, borderRadius: 20, padding: '26px 30px', color: '#fff', boxShadow: D.shadowLg, marginBottom: 20, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 22 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={lvm.icon} size={27} color="#fff" />
              </div>
              <div style={{ flex: '1 1 240px', minWidth: 0 }}>
                <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase' }}>{pt ? 'Meu nível' : 'My level'}</div>
                <div style={{ ...serifD(400, 26), marginTop: 2 }}>{lvm.level} · {lvm.label[lang]}</div>
                <div style={{ fontSize: 13.5, opacity: 0.9, marginTop: 6, maxWidth: 460, lineHeight: 1.5 }}>
                  {pt
                    ? `Teacher Renata definiu seu nível atual como ${lvm.level}. Conforme você evolui, ele é atualizado para refletir seu progresso no inglês.`
                    : `Teacher Renata set your current level as ${lvm.level}. As you progress, it gets updated to reflect your English journey.`}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20, alignItems: 'start' }}>
              {/* avatar creator */}
              <div style={{ ...card, padding: 26 }}>
                <h3 style={{ margin: '0 0 4px', fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 9 }}>
                  <Icon name="user" size={18} color={D.terra} />{pt ? 'Crie seu avatar' : 'Create your avatar'}
                </h3>
                <p style={{ margin: '0 0 20px', fontSize: 13.5, color: D.muted }}>{pt ? 'Personalize cada detalhe do seu personagem' : 'Customize every detail of your character'}</p>
                <AvatarBuilder value={myAvatar} lang={lang} onSave={cfg => upDb({ [`avatar_${sid}`]: cfg })} />
              </div>

              {/* settings column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ ...card, padding: 26 }}>
                  <h3 style={{ margin: '0 0 18px', fontSize: 17, fontWeight: 700 }}>{t.yourInfo}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: D.muted, display: 'block', marginBottom: 6 }}>{pt ? 'Nome' : 'Name'}</label>
                      <input value={student.name || ''} disabled style={{ ...inp, cursor: 'not-allowed', opacity: 0.85 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 12.5, fontWeight: 600, color: D.muted, display: 'block', marginBottom: 6 }}>E-mail</label>
                      <input value={student.email || '—'} disabled style={{ ...inp, cursor: 'not-allowed', opacity: 0.85 }} />
                    </div>
                    <p style={{ margin: 0, fontSize: 12.5, color: D.muted, display: 'flex', alignItems: 'center', gap: 6, lineHeight: 1.5 }}>
                      <Icon name="info" size={13} color={D.muted} />{pt ? 'Para alterar, fale com Teacher Renata.' : 'To change these, talk to Teacher Renata.'}
                    </p>
                  </div>
                </div>

                <div style={{ ...card, padding: 26 }}>
                  <h3 style={{ margin: '0 0 6px', fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 9 }}>
                    <Icon name="key" size={17} color={D.terra} />{pt ? 'Alterar senha' : 'Change password'}
                  </h3>
                  <p style={{ margin: '0 0 16px', fontSize: 13.5, color: D.muted }}>{pt ? 'Mantenha sua conta segura.' : 'Keep your account safe.'}</p>
                  <input type="password" style={{ ...inp, marginBottom: 10 }} placeholder={pt ? 'Nova senha (mín. 6 caracteres)' : 'New password (min. 6 chars)'}
                    value={newPwd} onChange={e => { setNewPwd(e.target.value); setPwdMsg('') }} />
                  {pwdMsg && <p style={{ fontSize: 12.5, fontWeight: 600, color: pwdMsg === 'ok' ? D.moss : D.terraDeep, margin: '0 0 10px' }}>
                    {pwdMsg === 'ok' ? <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="check" size={13} color={D.moss} />{pt ? 'Senha alterada com sucesso!' : 'Password changed!'}</span> : pwdMsg}
                  </p>}
                  <button style={{ background: 'transparent', border: `1px solid ${D.line}`, color: D.ink, fontFamily: 'inherit', fontWeight: 600, fontSize: 14, padding: '11px 18px', borderRadius: 11, cursor: 'pointer' }} onClick={async () => {
                    if (newPwd.trim().length < 6) { setPwdMsg(pt ? 'Mínimo 6 caracteres.' : 'Minimum 6 characters.'); return }
                    const hashed = await hashPassword(newPwd.trim())
                    upDb({ [`pwd_${sid}`]: hashed })
                    setNewPwd(''); setPwdMsg('ok')
                  }}>{pt ? 'Atualizar senha' : 'Update password'}</button>
                </div>

                {infoGen && (
                  <div style={{ ...card, padding: 26 }}>
                    <p style={{ ...kicker, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="info" size={13} color={D.muted} />{t.infoGenLabel}</p>
                    <p style={{ fontSize: 14, color: D.ink, whiteSpace: 'pre-wrap', lineHeight: 1.7, margin: 0 }}>{infoGen}</p>
                  </div>
                )}
                {infoNotes && (
                  <div style={{ ...card, padding: 26, borderLeft: `4px solid ${D.orange}` }}>
                    <p style={{ ...kicker, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="lightbulb" size={13} color={D.orange} />{t.infoNotesLabel}</p>
                    <p style={{ fontSize: 14, color: D.ink, whiteSpace: 'pre-wrap', lineHeight: 1.7, margin: 0 }}>{infoNotes}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

      </main>
      )}
    </div>

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
    </>
  )
}
