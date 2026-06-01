import { useState, useEffect, useRef } from 'react'
import { onValue } from 'firebase/database'
import { rtdb, dbLoad, dbSave } from './firebase'
import { TR } from './constants/translations'
import { B } from './constants/colors'
import { ir } from './constants/styles'
import { TEACHER_PASS } from './utils'
import Logo from './components/Logo'
import Splash from './components/Splash'
import TeacherPass from './components/TeacherPass'
import StudentLogin from './components/StudentLogin'
import TeacherDash from './components/TeacherDash'
import StudentApp from './components/StudentApp'
import LandingPage from './components/LandingPage'
import CourseLogin from './components/CourseLogin'
import CourseApp from './components/CourseApp'

export default function App() {
  const [db, setDb]             = useState({})
  const [lang, setLang]         = useState('pt')
  const [view, setView]         = useState('splash')
  const [activeId, setId]       = useState(null)
  const [passVal, setPassVal]   = useState('')
  const [passErr, setPassErr]   = useState(false)
  const [loginU, setLoginU]     = useState('')
  const [loginP, setLoginP]     = useState('')
  const [loginErr, setLoginErr] = useState('')
  const [courseLoginU, setCourseLoginU] = useState('')
  const [courseLoginP, setCourseLoginP] = useState('')
  const [courseLoginErr, setCourseLoginErr] = useState('')
  const [loading, setLoading]   = useState(true)
  const [ready, setReady]       = useState(false)

  const saveTimer    = useRef(null)
  const isRemote     = useRef(false)
  const initialized  = useRef(false)
  const t = TR[lang]

  useEffect(() => {
    const unsub = onValue(rtdb, snap => {
      const fresh = snap.exists() ? snap.val() : {}
      isRemote.current = true
      setDb(fresh)
      if (!initialized.current) {
        initialized.current = true
        setLang(fresh.lang || 'pt')
        setLoading(false)
        setReady(true)
      }
    })
    return () => unsub()
  }, [])

  useEffect(() => {
    if (!ready) return
    if (isRemote.current) { isRemote.current = false; return }
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(async () => {
      const fresh = await dbLoad()
      await dbSave({ ...fresh, ...db, lang })
    }, 800)
    return () => clearTimeout(saveTimer.current)
  }, [db, lang, ready])

  const upDb     = patch => setDb(p => ({ ...p, ...patch }))
  const students = db.students || []
  const courseStudents = db.courseStudents || []

  const doStudentLogin = () => {
    const u = loginU.trim().toLowerCase()
    const p = loginP.trim()
    if (!u) { setLoginErr(t.noAccount); return }
    const s = students.find(s =>
      (s.username || '').trim().toLowerCase() === u && (s.password || '').trim() === p
    )
    if (!s) { setLoginErr(t.wrongLogin); return }
    setId(s.id); setView('student'); setLoginErr('')
  }

  const doCourseLogin = () => {
    const u = courseLoginU.trim().toLowerCase()
    const p = courseLoginP.trim()
    if (!u) { setCourseLoginErr('Preencha seu email.'); return }
    const s = courseStudents.find(s =>
      (s.email || '').trim().toLowerCase() === u && (s.password || '').trim() === p
    )
    if (!s) { setCourseLoginErr('Email ou senha incorretos.'); return }
    if (!s.active) { setCourseLoginErr('Seu acesso ainda não foi liberado. Aguarde a confirmação do pagamento.'); return }
    setId(s.id); setView('course'); setCourseLoginErr('')
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})` }}>
      <Logo h={60} contrast />
      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, border: '4px solid rgba(255,255,255,0.3)', borderTop: '4px solid #fff', borderRadius: '50%', animation: 'spin 0.9s linear infinite' }} />
        <p style={{ ...ir(500, 14), color: 'rgba(255,255,255,0.8)' }}>{t.loading}</p>
      </div>
    </div>
  )

  return (
    <>
      {view === 'splash'   && <Splash t={t} lang={lang} setLang={setLang} onTeacher={() => setView('t-pass')} onStudent={() => setView('s-login')} onExplore={() => setView('landing')} onCourse={() => setView('c-login')} />}
      {view === 'landing'  && <LandingPage onBack={() => setView('splash')} onStudent={() => setView('s-login')} onCourse={() => setView('c-login')} />}
      {view === 't-pass'   && <TeacherPass t={t} val={passVal} setVal={setPassVal} err={passErr} onSubmit={() => { if (passVal === (db.teacherPass || TEACHER_PASS)) { setView('teacher'); setPassErr(false) } else setPassErr(true) }} onBack={() => { setView('splash'); setPassVal(''); setPassErr(false) }} />}
      {view === 'teacher'  && <TeacherDash t={t} lang={lang} setLang={setLang} students={students} courseStudents={courseStudents} db={db} upDb={upDb} onPreview={id => { setId(id); setView('preview') }} onLogout={() => setView('splash')} />}
      {view === 's-login'  && <StudentLogin t={t} lang={lang} setLang={setLang} u={loginU} setU={setLoginU} p={loginP} setP={setLoginP} err={loginErr} onLogin={doStudentLogin} onBack={() => { setView('splash'); setLoginErr('') }} />}
      {(view === 'student' || view === 'preview') && <StudentApp t={t} lang={lang} setLang={setLang} sid={activeId} students={students} db={db} upDb={upDb} isPreview={view === 'preview'} onBack={() => setView(view === 'preview' ? 'teacher' : 'splash')} />}
      {view === 'c-login'  && <CourseLogin lang={lang} u={courseLoginU} setU={setCourseLoginU} p={courseLoginP} setP={setCourseLoginP} err={courseLoginErr} onLogin={doCourseLogin} onBack={() => { setView('landing'); setCourseLoginErr('') }} />}
      {view === 'course'   && <CourseApp lang={lang} sid={activeId} courseStudents={courseStudents} db={db} upDb={upDb} onLogout={() => setView('landing')} />}
    </>
  )
}
