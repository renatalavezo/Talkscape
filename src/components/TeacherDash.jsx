import { useState, useEffect } from 'react'
import { B, CAT } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { CEFR_META } from '../constants/cefr'
import { PLAN } from '../constants/plan'
import { AVATARS } from '../constants/avatars'
import { JOURNEYS, JOURNEY_MAP } from '../constants/journeys'
import Avatar from './Avatar'
import Icon from './Icon'
import Logo from './Logo'
import CalSection from './CalSection'

export default function TeacherDash({ t, lang, setLang, students, courseStudents, cadastrosPendentes, db, upDb, onPreview, onPreviewCourse, onLogout }) {
  const [sel, setSel]               = useState(null)
  const [dtab, setDtab]             = useState('level')
  const [section, setSection]       = useState('students')
  const [q, setQ]                   = useState('')
  const [sort, setSort]             = useState('name')
  const [showAdd, setShowAdd]       = useState(false)
  const [addErr, setAddErr]         = useState('')
  const [delConfirm, setDelConfirm] = useState(null)
  const [delCourseConfirm, setDelCourseConfirm] = useState(null)
  const [copiedId, setCopiedId]     = useState(null)
  const [newName, setNewName]       = useState('')
  const [newUser, setNewUser]       = useState('')
  const [newPass, setNewPass]       = useState('')
  const [fbDraft, setFbDraft]       = useState('')
  const [infoGen, setInfoGen]       = useState('')
  const [infoNotes, setInfoNotes]   = useState('')
  const [hwEn, setHwEn]             = useState('')
  const [hwPt, setHwPt]             = useState('')
  const [hwDue, setHwDue]           = useState('')
  const [hwCat, setHwCat]           = useState('grammar')
  const [hwLink, setHwLink]         = useState('')
  const [jWeek, setJWeek]           = useState(1)
  const [jEditTask, setJEditTask]   = useState(null)
  const [nJTaskEn, setNJTaskEn]     = useState('')
  const [nJTaskPt, setNJTaskPt]     = useState('')
  const [nJTaskCat, setNJTaskCat]   = useState('grammar')
  const [nJTaskLink, setNJTaskLink] = useState('')
  const [nJWeekEn, setNJWeekEn]     = useState('')
  const [nJWeekPt, setNJWeekPt]     = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [newPassVal, setNewPassVal] = useState('')
  const [passChanged, setPassChanged] = useState(false)
  const [diaryDate, setDiaryDate]   = useState(new Date().toISOString().slice(0,10))
  const [diaryGood, setDiaryGood]   = useState('')
  const [diaryImprove, setDiaryImprove] = useState('')
  const [diaryNotes, setDiaryNotes] = useState('')
  const [bankEn, setBankEn]         = useState('')
  const [bankPt, setBankPt]         = useState('')
  const [bankCat, setBankCat]       = useState('grammar')
  const [bankLink, setBankLink]     = useState('')
  const [welcomeMsg, setWelcomeMsg] = useState('')
  const [fromCadastroId, setFromCadastroId] = useState(null)
  const [showAddCourse, setShowAddCourse] = useState(false)
  const [courseNewName, setCourseNewName] = useState('')
  const [courseNewEmail, setCourseNewEmail] = useState('')
  const [courseNewPass, setCourseNewPass] = useState('')
  const [courseNewJid, setCourseNewJid] = useState('')
  const [courseAddErr, setCourseAddErr] = useState('')
  const [selCourse, setSelCourse]   = useState(null)
  const [courseAnswers, setCourseAnswers] = useState({})
  const [selJBase, setSelJBase]           = useState(null)
  const [selJBaseWeek, setSelJBaseWeek]   = useState(1)
  const [jBaseEditTask, setJBaseEditTask] = useState(null)
  const [nJBTaskEn, setNJBTaskEn]         = useState('')
  const [nJBTaskPt, setNJBTaskPt]         = useState('')
  const [nJBTaskCat, setNJBTaskCat]       = useState('grammar')
  const [nJBTaskLink, setNJBTaskLink]     = useState('')

  const selS = students.find(s => s.id === sel)

  useEffect(() => {
    if (!selS) return
    setFbDraft(db[`fb_${selS.id}`] || '')
    setInfoGen(db[`ig_${selS.id}`] || '')
    setInfoNotes(db[`in_${selS.id}`] || '')
    setWelcomeMsg(db[`welcome_${selS.id}`] || '')
  }, [sel, db])

  const lvOf   = sid => db[`lv_${sid}`] || 'A1'
  const lvMeta = sid => CEFR_META.find(c => c.level === lvOf(sid)) || CEFR_META[0]

  const pctOf = sid => {
    const jid = db[`jrn_${sid}`]
    if (!jid || !JOURNEY_MAP[jid]) return 0
    const j = JOURNEY_MAP[jid]
    const allWeeks = [...j.weeks, ...(db[`jew_${sid}_${jid}`] || [])]
    const allTasks = allWeeks.flatMap(w => getJTasks(sid, jid, w.week))
    const checked = db[`jsd_${sid}`] || {}
    return allTasks.length ? Math.round(allTasks.filter(tk => checked[tk.id]).length / allTasks.length * 100) : 0
  }

  const getJTasks = (sid, jid, wn) => {
    const ck = `jt_${sid}_${jid}_w${wn}`
    if (db[ck]) return db[ck]
    const bk = `jBase_${jid}_w${wn}`
    if (db[bk]) return db[bk]
    return JOURNEY_MAP[jid]?.weeks.find(w => w.week === wn)?.tasks || []
  }

  const getBaseTasks = (jid, wn) => {
    const bk = `jBase_${jid}_w${wn}`
    if (db[bk]) return db[bk]
    return JOURNEY_MAP[jid]?.weeks.find(w => w.week === wn)?.tasks || []
  }

  const journeyAllWeeks = (sid, jid) => {
    const base = JOURNEY_MAP[jid]?.weeks || []
    const extra = db[`jew_${sid}_${jid}`] || []
    return [...base, ...extra]
  }

  const saveJTask = (sid, jid, wn, tid, en, pt, cat, link) => {
    const ck = `jt_${sid}_${jid}_w${wn}`
    upDb({ [ck]: getJTasks(sid, jid, wn).map(tk => tk.id === tid ? { ...tk, en, pt, cat, link: link || null } : tk) })
    setJEditTask(null)
  }

  const delJTask = (sid, jid, wn, tid) => {
    const ck = `jt_${sid}_${jid}_w${wn}`
    upDb({ [ck]: getJTasks(sid, jid, wn).filter(tk => tk.id !== tid) })
  }

  const addJTask = (sid, jid, wn) => {
    if (!nJTaskEn.trim()) return
    const ck = `jt_${sid}_${jid}_w${wn}`
    upDb({ [ck]: [...getJTasks(sid, jid, wn), { id: `jct_${Date.now()}`, en: nJTaskEn.trim(), pt: nJTaskPt.trim() || nJTaskEn.trim(), cat: nJTaskCat, link: nJTaskLink.trim() || null }] })
    setNJTaskEn(''); setNJTaskPt(''); setNJTaskLink('')
  }

  const resetJWeek = (sid, jid, wn) => {
    const ck = `jt_${sid}_${jid}_w${wn}`
    const next = { ...db }; delete next[ck]; upDb(next)
  }

  const addJExtraWeek = (sid, jid) => {
    if (!nJWeekEn.trim()) return
    const ek = `jew_${sid}_${jid}`
    const existing = db[ek] || []
    const allNums = journeyAllWeeks(sid, jid).map(w => w.week)
    const n = allNums.length ? Math.max(...allNums) + 1 : 13
    upDb({ [ek]: [...existing, { week: n, theme: { en: nJWeekEn.trim(), pt: nJWeekPt.trim() || nJWeekEn.trim() }, tasks: [] }] })
    setNJWeekEn(''); setNJWeekPt(''); setJWeek(n)
  }

  const delJExtraWeek = (sid, jid, wn) => {
    const ek = `jew_${sid}_${jid}`
    upDb({ [ek]: (db[ek] || []).filter(w => w.week !== wn) })
    setJWeek(1)
  }

  const addStudent = () => {
    if (!newName.trim() || !newUser.trim() || !newPass.trim()) { setAddErr(t.fillAll); return }
    if (students.find(s => (s.username || '').toLowerCase() === newUser.trim().toLowerCase())) { setAddErr(t.usernameExists); return }
    const id = Date.now().toString(), av = AVATARS[students.length % AVATARS.length]
    upDb({ students: [...students, { id, name: newName.trim(), avatar: av, username: newUser.trim(), password: newPass.trim() }] })
    if (fromCadastroId) {
      upDb({ cadastros_pendentes: (cadastrosPendentes || []).filter(c => c.id !== fromCadastroId) })
      setFromCadastroId(null)
    }
    setNewName(''); setNewUser(''); setNewPass(''); setAddErr(''); setShowAdd(false)
  }

  const deleteStudent = s => { upDb({ students: students.filter(x => x.id !== s.id) }); setSel(null); setDelConfirm(null) }

  const deleteCourseStudent = s => {
    upDb({ courseStudents: (courseStudents || []).filter(x => x.id !== s.id) })
    if (selCourse === s.id) setSelCourse(null)
    setDelCourseConfirm(null)
  }

  const sorted = [...students]
    .filter(s => s.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : pctOf(b.id) - pctOf(a.id))

  const journeyOf = sid => db[`jrn_${sid}`] ? JOURNEY_MAP[db[`jrn_${sid}`]] : null

  const TABS = [
    ['level',   <><Icon name="progress" size={13} />&nbsp;{t.tabLevel}</>],
    ['journey', <><Icon name="map" size={13} />&nbsp;{lang === 'pt' ? 'Jornada' : 'Journey'}</>],
    ['diary',   <><Icon name="lightbulb" size={13} />&nbsp;{lang === 'pt' ? 'Diário' : 'Diary'}</>],
    ['fb',      <><Icon name="feedback" size={13} />&nbsp;{t.tabFb}</>],
    ['hw',      <><Icon name="homework" size={13} />&nbsp;{t.tabHW}</>],
    ['info',    <><Icon name="info" size={13} />&nbsp;{t.tabInfo}</>],
    ['cal',     <><Icon name="calendar" size={13} />&nbsp;{t.tabCal}</>],
  ]

  return (
    <div style={{ ...S.app, overflowX: 'hidden' }}>

      {/* Settings modal */}
      {showSettings && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => { setShowSettings(false); setPassChanged(false); setNewPassVal('') }}>
          <div style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 360, boxShadow: '0 24px 60px rgba(44,24,16,0.35)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...pp(700, 17), color: B.dark, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="settings" size={18} color={B.dark} />{lang === 'pt' ? 'Configurações' : 'Settings'}
              </h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => { setShowSettings(false); setPassChanged(false); setNewPassVal('') }}>
                <Icon name="close" size={20} color={B.light} />
              </button>
            </div>
            <p style={{ ...pp(600, 12), color: B.mid, marginBottom: 8 }}>{lang === 'pt' ? 'Nova senha de acesso' : 'New access password'}</p>
            <input style={{ ...S.inp, marginBottom: 12 }} type="password" placeholder={lang === 'pt' ? 'Digite a nova senha...' : 'Enter new password...'} value={newPassVal} onChange={e => { setNewPassVal(e.target.value); setPassChanged(false) }} />
            {passChanged && <p style={{ ...ir(600, 12), color: B.oliva, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} color={B.oliva} />{lang === 'pt' ? 'Senha alterada!' : 'Password changed!'}</p>}
            <button style={{ ...S.btn(B.oliva), width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }} onClick={() => { if (!newPassVal.trim()) return; upDb({ teacherPass: newPassVal.trim() }); setPassChanged(true); setNewPassVal('') }}>
              <Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar nova senha' : 'Save new password'}
            </button>
          </div>
        </div>
      )}

      {/* Add student modal */}
      {showAdd && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowAdd(false)}>
          <div style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 380, boxShadow: '0 24px 60px rgba(44,24,16,0.35)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...pp(700, 17), color: B.dark, display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="add" size={18} color={B.dark} />{t.addSt}</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => setShowAdd(false)}><Icon name="close" size={20} color={B.light} /></button>
            </div>
            <input style={{ ...S.inp, marginBottom: 10 }} placeholder={t.stPh} value={newName} onChange={e => setNewName(e.target.value)} />
            <input style={{ ...S.inp, marginBottom: 10 }} placeholder={t.userPh} value={newUser} onChange={e => setNewUser(e.target.value)} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <input style={{ ...S.inp, flex: 1, marginBottom: 0 }} placeholder={t.passSt} value={newPass} onChange={e => setNewPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && addStudent()} />
              <button style={{ ...S.btn(B.bege), color: B.dark, padding: '0 14px', fontSize: 12, flexShrink: 0 }} onClick={() => { if (newPass) { navigator.clipboard.writeText(newPass); setCopiedId('new') } }}>{copiedId === 'new' ? '✓' : lang === 'pt' ? 'Copiar' : 'Copy'}</button>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.oliva), flex: 1, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={addStudent}><Icon name="add" size={15} color="#fff" />{t.add}</button>
              <button style={{ ...S.btn(B.light), fontSize: 14, padding: '11px 14px', display: 'flex', alignItems: 'center' }} onClick={() => { setShowAdd(false); setAddErr('') }}><Icon name="close" size={15} color="#fff" /></button>
            </div>
            {addErr && <p style={{ ...ir(600, 12), color: B.marrom, marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}><Icon name="alert" size={13} color={B.marrom} />{addErr}</p>}
          </div>
        </div>
      )}

      {/* Delete student confirm modal */}
      {delConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 320, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon name="delete" size={44} color={B.marrom} /></div>
            <h3 style={{ ...pp(700, 17), color: B.dark, marginBottom: 8 }}>{t.confirmDel}</h3>
            <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 22 }}>{delConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.light), flex: 1 }} onClick={() => setDelConfirm(null)}>{t.cancel}</button>
              <button style={{ ...S.btn('#B03020'), flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={() => deleteStudent(delConfirm)}><Icon name="delete" size={14} color="#fff" />{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete course student confirm modal */}
      {delCourseConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 320, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon name="delete" size={44} color={B.marrom} /></div>
            <h3 style={{ ...pp(700, 17), color: B.dark, marginBottom: 8 }}>{lang === 'pt' ? 'Excluir aluna do curso?' : 'Delete course student?'}</h3>
            <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 22 }}>{delCourseConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.light), flex: 1 }} onClick={() => setDelCourseConfirm(null)}>{t.cancel}</button>
              <button style={{ ...S.btn('#B03020'), flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={() => deleteCourseStudent(delCourseConfirm)}><Icon name="delete" size={14} color="#fff" />{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Add course student modal */}
      {showAddCourse && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowAddCourse(false)}>
          <div style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 380 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...pp(700, 17), color: B.dark }}>Nova aluna do curso</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setShowAddCourse(false)}><Icon name="close" size={20} color={B.light} /></button>
            </div>
            <input style={{ ...S.inp, marginBottom: 8 }} placeholder="Nome completo" value={courseNewName} onChange={e => setCourseNewName(e.target.value)} />
            <input style={{ ...S.inp, marginBottom: 8 }} placeholder="Email" type="email" value={courseNewEmail} onChange={e => setCourseNewEmail(e.target.value)} />
            <input style={{ ...S.inp, marginBottom: 8 }} placeholder="Senha de acesso" value={courseNewPass} onChange={e => setCourseNewPass(e.target.value)} />
            <select style={{ ...S.inp, marginBottom: 16 }} value={courseNewJid} onChange={e => setCourseNewJid(e.target.value)}>
              <option value="">Escolher jornada...</option>
              {JOURNEYS.map(j => <option key={j.id} value={j.id}>{j.icon} {j.pt}</option>)}
            </select>
            {courseAddErr && <p style={{ ...ir(600, 12), color: B.marrom, marginBottom: 10 }}>{courseAddErr}</p>}
            <button style={{ ...S.btn(B.laranja), width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={() => {
              if (!courseNewName.trim() || !courseNewEmail.trim() || !courseNewPass.trim()) { setCourseAddErr('Preencha todos os campos.'); return }
              if ((courseStudents || []).find(s => s.email.toLowerCase() === courseNewEmail.trim().toLowerCase())) { setCourseAddErr('Email já cadastrado.'); return }
              const id = `cs_${Date.now()}`
              upDb({ courseStudents: [...(courseStudents || []), { id, name: courseNewName.trim(), email: courseNewEmail.trim().toLowerCase(), password: courseNewPass.trim(), active: false, avatar: 'Lily', jid: courseNewJid || null, createdAt: new Date().toISOString().slice(0,10) }] })
              if (courseNewJid) upDb({ [`cjrn_${id}`]: courseNewJid })
              setCourseNewName(''); setCourseNewEmail(''); setCourseNewPass(''); setCourseNewJid(''); setCourseAddErr(''); setShowAddCourse(false)
            }}>
              <Icon name="add" size={15} color="#fff" />Adicionar aluna
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{ background: B.oliva, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, flexWrap: 'wrap', minHeight: 56 }}>
        <Logo h={40} contrast />
        <div style={{ flex: 1, display: 'flex', gap: 4, overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {[
            ['students', <><Icon name="students" size={12} color="#fff" />&nbsp;{lang === 'pt' ? 'Alunos' : 'Students'}</>],
            ['calendar', <><Icon name="calendar" size={12} color="#fff" />&nbsp;{lang === 'pt' ? 'Agenda' : 'Calendar'}</>],
            ['bank',     <><Icon name="star" size={12} color="#fff" />&nbsp;{lang === 'pt' ? 'Banco' : 'Bank'}</>],
            ['course',   (() => { const n = (courseStudents||[]).reduce((acc,s) => acc + ((db[`cq_${s.id}`]||[]).filter(q=>!q.answer).length), 0); return <><Icon name="star" size={12} color="#fff" />&nbsp;{lang === 'pt' ? 'Curso' : 'Course'}{n > 0 && <span style={{ background: '#ef4444', borderRadius: '50%', width: 16, height: 16, fontSize: 9, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>{n}</span>}</> })()],
            ['journeys', <><Icon name="map" size={12} color="#fff" />&nbsp;{lang === 'pt' ? 'Jornadas' : 'Journeys'}</>],
          ].map(([k, lb]) => (
            <button key={k} style={{ ...S.chip, background: section === k ? B.laranja : 'rgba(255,255,255,0.18)', color: '#fff', fontSize: 11, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }} onClick={() => setSection(k)}>{lb}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
          <button style={{ ...S.chip, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 11, padding: '6px 8px' }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>{t.switchLang}</button>
          <button style={{ ...S.chip, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 11, padding: '6px 8px', display: 'flex', alignItems: 'center' }} onClick={() => setShowSettings(true)}><Icon name="settings" size={14} color="#fff" /></button>
          <button style={{ ...S.chip, background: 'rgba(138,63,44,0.5)', color: '#fff', fontSize: 11, padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={onLogout}><Icon name="logout" size={13} color="#fff" />{t.logout}</button>
        </div>
      </header>

      {section === 'calendar'
        ? <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher sid={null} />
        : section === 'bank'
        ? (
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', maxWidth: 820, margin: '0 auto' }}>
            <div style={{ ...S.card, marginBottom: 20 }}>
              <p style={{ ...S.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="add" size={13} color={B.mid} />{lang === 'pt' ? 'Adicionar ao banco' : 'Add to bank'}</p>
              <input style={{ ...S.inp, marginBottom: 6, fontSize: 13 }} placeholder="Atividade (English)" value={bankEn} onChange={e => setBankEn(e.target.value)} />
              <input style={{ ...S.inp, marginBottom: 6, fontSize: 13 }} placeholder="Tradução (Português)" value={bankPt} onChange={e => setBankPt(e.target.value)} />
              <div style={{ position: 'relative', marginBottom: 6 }}>
                <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                <input style={{ ...S.inp, fontSize: 13, paddingLeft: 30 }} placeholder="Link (opcional)" value={bankLink} onChange={e => setBankLink(e.target.value)} />
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <select style={{ ...S.inp, flex: 1, fontSize: 13 }} value={bankCat} onChange={e => setBankCat(e.target.value)}>
                  {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                </select>
                <button style={{ ...S.btn(B.oliva), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                  if (!bankEn.trim()) return
                  upDb({ activityBank: [...(db.activityBank || []), { id: `bk${Date.now()}`, en: bankEn.trim(), pt: bankPt.trim() || bankEn.trim(), cat: bankCat, link: bankLink.trim() || null }] })
                  setBankEn(''); setBankPt(''); setBankLink('')
                }}><Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar' : 'Save'}</button>
              </div>
            </div>
            {(db.activityBank || []).length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <Icon name="star" size={48} color={B.border} />
                <p style={{ ...ir(400, 14), color: B.light, marginTop: 12 }}>{lang === 'pt' ? 'Banco vazio. Adicione atividades favoritas!' : 'Empty bank. Add your favorite activities!'}</p>
              </div>
            )}
            {(db.activityBank || []).map(item => {
              const cm = CAT[item.cat] || CAT.grammar
              return (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '12px 14px', background: B.white, borderRadius: 12, border: `1.5px solid ${B.border}`, marginBottom: 8 }}>
                  <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ ...ir(600, 13), color: B.dark }}>{item.en}</p>
                    <p style={{ ...ir(400, 11), color: B.light, fontStyle: 'italic' }}>{item.pt}</p>
                    {item.link && <a href={item.link} target="_blank" rel="noreferrer" style={{ ...ir(400, 11), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}><Icon name="link" size={10} color={B.laranja} />{item.link}</a>}
                  </div>
                  <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => upDb({ activityBank: (db.activityBank || []).filter(x => x.id !== item.id) })}>
                    <Icon name="delete" size={13} color="#DC2626" />
                  </button>
                </div>
              )
            })}
          </div>
        )
        : section === 'journeys'
        ? (
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', maxWidth: 960, margin: '0 auto' }}>
            <div style={{ ...S.card, marginBottom: 16 }}>
              <p style={{ ...S.lbl }}>{lang === 'pt' ? 'Selecione uma jornada para editar' : 'Select a journey to edit'}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {JOURNEYS.map(j => (
                  <button key={j.id} onClick={() => { setSelJBase(j.id); setSelJBaseWeek(1) }}
                    style={{ ...S.chip, background: selJBase === j.id ? j.color : B.bege, color: selJBase === j.id ? '#fff' : B.mid, fontSize: 12, padding: '8px 14px', border: `1.5px solid ${selJBase === j.id ? j.color : B.border}` }}>
                    {j.icon} {lang === 'pt' ? j.pt : j.en}
                  </button>
                ))}
              </div>
            </div>
            {selJBase && (() => {
              const j = JOURNEY_MAP[selJBase]
              const allW = j?.weeks || []
              const tasks = getBaseTasks(selJBase, selJBaseWeek)
              const isOverridden = !!db[`jBase_${selJBase}_w${selJBaseWeek}`]
              return (
                <div>
                  <div style={{ background: j.color, borderRadius: 14, padding: '14px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 26 }}>{j.icon}</span>
                    <div>
                      <p style={{ ...pp(700, 15), color: '#fff' }}>{lang === 'pt' ? j.pt : j.en}</p>
                      <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.8)' }}>{lang === 'pt' ? j.desc.pt : j.desc.en}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: 20, padding: '4px 12px', fontFamily: 'Poppins,sans-serif', fontWeight: 600 }}>
                        {lang === 'pt' ? 'Editando base' : 'Editing base'}
                      </span>
                    </div>
                  </div>
                  <div style={{ overflowX: 'auto', marginBottom: 14 }}>
                    <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4 }}>
                      {allW.map(w => {
                        const hasOverride = !!db[`jBase_${selJBase}_w${w.week}`]
                        return (
                          <button key={w.week} onClick={() => { setSelJBaseWeek(w.week); setJBaseEditTask(null) }}
                            style={{ ...S.chip, background: selJBaseWeek === w.week ? j.color : B.bege, color: selJBaseWeek === w.week ? '#fff' : B.mid, fontSize: 11, padding: '7px 12px', whiteSpace: 'nowrap' }}>
                            {lang === 'pt' ? 'Sem' : 'Wk'} {w.week}{hasOverride ? ' ✏️' : ''}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <div style={S.card}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                      <div>
                        <p style={{ ...pp(700, 14), color: B.dark }}>{lang === 'pt' ? `Semana ${selJBaseWeek}` : `Week ${selJBaseWeek}`}: {allW.find(w => w.week === selJBaseWeek)?.theme[lang]}</p>
                        <p style={{ ...ir(400, 11), color: B.light }}>{tasks.length} tasks · {isOverridden ? (lang === 'pt' ? 'editada ✏️' : 'edited ✏️') : (lang === 'pt' ? 'padrão do código' : 'default from code')}</p>
                      </div>
                      {isOverridden && (
                        <button style={{ ...S.chip, background: '#FEE2E2', color: '#DC2626', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}
                          onClick={() => { const k = `jBase_${selJBase}_w${selJBaseWeek}`; const n = { ...db }; delete n[k]; upDb(n) }}>
                          <Icon name="reset" size={11} color="#DC2626" />{lang === 'pt' ? 'Resetar para padrão' : 'Reset to default'}
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
                      {tasks.map(task => {
                        const cm = CAT[task.cat] || CAT.grammar
                        const isEditing = jBaseEditTask?.id === task.id
                        return (
                          <div key={task.id} style={{ background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, overflow: 'hidden' }}>
                            {isEditing ? (
                              <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                                <input style={{ ...S.inp, fontSize: 12 }} value={jBaseEditTask.en} onChange={e => setJBaseEditTask(p => ({ ...p, en: e.target.value }))} placeholder="English" />
                                <input style={{ ...S.inp, fontSize: 12 }} value={jBaseEditTask.pt} onChange={e => setJBaseEditTask(p => ({ ...p, pt: e.target.value }))} placeholder="Português" />
                                <div style={{ position: 'relative' }}>
                                  <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                  <input style={{ ...S.inp, fontSize: 12, paddingLeft: 30 }} value={jBaseEditTask.link || ''} onChange={e => setJBaseEditTask(p => ({ ...p, link: e.target.value }))} placeholder="Link (opcional)" />
                                </div>
                                <div style={{ display: 'flex', gap: 6 }}>
                                  <select style={{ ...S.inp, flex: 1, fontSize: 11 }} value={jBaseEditTask.cat} onChange={e => setJBaseEditTask(p => ({ ...p, cat: e.target.value }))}>
                                    {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                  </select>
                                  <button style={{ ...S.btn(B.oliva), fontSize: 11, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => {
                                    const updated = tasks.map(tk => tk.id === jBaseEditTask.id ? { ...tk, en: jBaseEditTask.en, pt: jBaseEditTask.pt, cat: jBaseEditTask.cat, link: jBaseEditTask.link || null } : tk)
                                    upDb({ [`jBase_${selJBase}_w${selJBaseWeek}`]: updated })
                                    setJBaseEditTask(null)
                                  }}><Icon name="check" size={13} color="#fff" /></button>
                                  <button style={{ ...S.btn(B.light), fontSize: 11, padding: '7px 10px', display: 'flex', alignItems: 'center' }} onClick={() => setJBaseEditTask(null)}><Icon name="close" size={13} color="#fff" /></button>
                                </div>
                              </div>
                            ) : (
                              <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px' }}>
                                <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                                <div style={{ flex: 1 }}>
                                  <p style={{ ...ir(600, 12), color: B.dark }}>{task.en}</p>
                                  <p style={{ ...ir(400, 10), color: B.light, fontStyle: 'italic' }}>{task.pt}</p>
                                  {task.link && <a href={task.link} target="_blank" rel="noreferrer" style={{ ...ir(400, 10), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}><Icon name="link" size={10} color={B.laranja} />{task.link}</a>}
                                </div>
                                <button style={{ background: B.bege, border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setJBaseEditTask({ ...task })}><Icon name="edit" size={13} color={B.mid} /></button>
                                <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => {
                                  const updated = tasks.filter(tk => tk.id !== task.id)
                                  upDb({ [`jBase_${selJBase}_w${selJBaseWeek}`]: updated })
                                }}><Icon name="delete" size={13} color="#DC2626" /></button>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}` }}>
                      <p style={{ ...pp(600, 11), color: B.marrom, marginBottom: 8 }}>{lang === 'pt' ? 'Adicionar tarefa à base' : 'Add task to base'}</p>
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Task (English)" value={nJBTaskEn} onChange={e => setNJBTaskEn(e.target.value)} />
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Tradução (Português)" value={nJBTaskPt} onChange={e => setNJBTaskPt(e.target.value)} />
                      <div style={{ position: 'relative', marginBottom: 6 }}>
                        <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                        <input style={{ ...S.inp, fontSize: 12, paddingLeft: 30 }} placeholder="Link (opcional)" value={nJBTaskLink} onChange={e => setNJBTaskLink(e.target.value)} />
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={nJBTaskCat} onChange={e => setNJBTaskCat(e.target.value)}>
                          {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                        </select>
                        <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                          if (!nJBTaskEn.trim()) return
                          const newTask = { id: `jb_${Date.now()}`, en: nJBTaskEn.trim(), pt: nJBTaskPt.trim() || nJBTaskEn.trim(), cat: nJBTaskCat, link: nJBTaskLink.trim() || null }
                          upDb({ [`jBase_${selJBase}_w${selJBaseWeek}`]: [...tasks, newTask] })
                          setNJBTaskEn(''); setNJBTaskPt(''); setNJBTaskLink('')
                        }}>
                          <Icon name="add" size={14} color="#fff" />{t.save}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )
        : section === 'course'
        ? (
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', maxWidth: 820, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h2 style={{ ...pp(700, 18), color: B.dark }}>Alunas do Curso</h2>
              <button style={{ ...S.btn(B.laranja), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setShowAddCourse(true)}>
                <Icon name="add" size={15} color="#fff" />Nova aluna
              </button>
            </div>
            {(courseStudents || []).length === 0 && (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <span style={{ fontSize: 48 }}>🎓</span>
                <p style={{ ...ir(400, 14), color: B.light, marginTop: 12 }}>Nenhuma aluna no curso ainda.</p>
              </div>
            )}
            {(courseStudents || []).map(s => {
              const questions = db[`cq_${s.id}`] || []
              const unanswered = questions.filter(q => !q.answer).length
              return (
                <div key={s.id} style={{ ...S.card, marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <Avatar seed={s.avatar || 'Lily'} size={44} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <p style={{ ...pp(600, 14), color: B.dark }}>{s.name}</p>
                        <span style={{ fontSize: 10, background: s.active ? B.oliva + '22' : '#FEE2E2', color: s.active ? B.oliva : '#DC2626', borderRadius: 20, padding: '2px 8px', fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{s.active ? 'Ativo' : 'Aguardando'}</span>
                        {unanswered > 0 && <span style={{ fontSize: 10, background: B.laranja + '22', color: B.laranja, borderRadius: 20, padding: '2px 8px', fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{unanswered} dúvida{unanswered > 1 ? 's' : ''}</span>}
                      </div>
                      <p style={{ ...ir(400, 11), color: B.light }}>{s.email}</p>
                      {s.jid && JOURNEY_MAP[s.jid] && <p style={{ ...ir(400, 11), color: B.mid }}>{JOURNEY_MAP[s.jid].icon} {JOURNEY_MAP[s.jid].pt}</p>}
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button style={{ ...S.btn(s.active ? B.light : B.oliva), fontSize: 12, padding: '8px 12px' }} onClick={() => upDb({ courseStudents: (courseStudents || []).map(x => x.id === s.id ? { ...x, active: !x.active } : x) })}>{s.active ? 'Desativar' : 'Ativar'}</button>
                      <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => onPreviewCourse(s.id)}><Icon name="globe" size={13} color="#fff" />{lang === 'pt' ? 'Ver' : 'View'}</button>
                      <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => setSelCourse(selCourse === s.id ? null : s.id)}><Icon name="feedback" size={13} color="#fff" />Dúvidas</button>
                      <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 8, padding: '8px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setDelCourseConfirm(s)}><Icon name="delete" size={14} color="#DC2626" /></button>
                    </div>
                  </div>
                  {selCourse === s.id && (
                    <div style={{ marginTop: 14, borderTop: `1px solid ${B.border}`, paddingTop: 14 }}>
                      {questions.length === 0 && <p style={{ ...ir(400, 13), color: B.light }}>Nenhuma dúvida ainda.</p>}
                      {questions.map((q, qi) => (
                        <div key={q.id} style={{ background: B.cream, borderRadius: 10, padding: 12, marginBottom: 8, border: `1.5px solid ${B.border}` }}>
                          <p style={{ ...ir(600, 13), color: B.dark, marginBottom: 4 }}>{q.text}</p>
                          <p style={{ ...ir(400, 11), color: B.light, marginBottom: 8 }}>{q.date}</p>
                          {q.answer
                            ? <div style={{ background: B.laranja + '10', borderRadius: 8, padding: '8px 10px', borderLeft: `3px solid ${B.laranja}` }}><p style={{ ...ir(400, 12), color: B.dark }}>{q.answer}</p></div>
                            : <div>
                                <textarea style={{ ...S.ta, marginBottom: 6, fontSize: 12 }} rows={2} placeholder="Escreva sua resposta..." value={courseAnswers[q.id] || ''} onChange={e => setCourseAnswers(p => ({ ...p, [q.id]: e.target.value }))} />
                                <button style={{ ...S.btn(B.laranja), fontSize: 12, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => {
                                  if (!courseAnswers[q.id]?.trim()) return
                                  const k = `cq_${s.id}`
                                  upDb({ [k]: (db[k] || []).map((x, i) => i === qi ? { ...x, answer: courseAnswers[q.id].trim() } : x) })
                                  setCourseAnswers(p => { const n = { ...p }; delete n[q.id]; return n })
                                }}><Icon name="save" size={13} color="#fff" />Responder</button>
                              </div>
                          }
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
        : (
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {!sel && (
              <div style={{ padding: '16px 14px', maxWidth: 820, margin: '0 auto' }}>
                {(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').length > 0 && (
                  <div style={{ ...S.card, marginBottom: 16, border: `1.5px solid ${B.laranja}44`, background: B.laranja + '06' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.laranja }} />
                      <p style={{ ...pp(700, 13), color: B.dark }}>{lang === 'pt' ? 'Cadastros Pendentes' : 'Pending Registrations'}</p>
                      <span style={{ background: B.laranja, color: '#fff', borderRadius: 20, padding: '2px 8px', fontSize: 11, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').length}</span>
                    </div>
                    {(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').map(c => (
                      <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: B.white, borderRadius: 12, marginBottom: 8, border: `1px solid ${B.border}`, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 160 }}>
                          <p style={{ ...pp(600, 13), color: B.dark }}>{c.nome}</p>
                          <p style={{ ...ir(400, 11), color: B.light }}>{c.email} · @{c.usuario}</p>
                          {c.senha && <p style={{ ...ir(600, 11), color: B.oliva, marginTop: 2 }}>🔑 {c.senha}</p>}
                        </div>
                        <div style={{ display: 'flex', gap: 6 }}>
                          <button style={{ ...S.btn(B.oliva), fontSize: 12, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 5 }}
                            onClick={() => {
                              setNewName(c.nome)
                              setNewUser(c.usuario)
                              setNewPass(c.senha || Math.random().toString(36).slice(2, 8))
                              setFromCadastroId(c.id)
                              setShowAdd(true)
                            }}>
                            <Icon name="add" size={13} color="#fff" />{lang === 'pt' ? 'Criar conta' : 'Create account'}
                          </button>
                          <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 8, padding: '7px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                            onClick={() => upDb({ cadastros_pendentes: (cadastrosPendentes || []).filter(x => x.id !== c.id) })}>
                            <Icon name="delete" size={14} color="#DC2626" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <Icon name="search" size={15} color={B.light} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
                    <input style={{ ...S.inp, paddingLeft: 34, fontSize: 13 }} placeholder={t.searchPh} value={q} onChange={e => setQ(e.target.value)} />
                  </div>
                  <button style={{ ...S.btn(B.oliva), padding: '9px 14px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setShowAdd(true)}><Icon name="add" size={15} color="#fff" />{t.addSt}</button>
                </div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {[['name', t.sortName], ['progress', t.sortProg]].map(([k, lb]) => (
                    <button key={k} style={{ ...S.chip, flex: 1, background: sort === k ? B.marrom : B.bege, color: sort === k ? '#fff' : B.mid, fontSize: 12 }} onClick={() => setSort(k)}>{lb}</button>
                  ))}
                </div>
                {sorted.length === 0 && <p style={{ ...ir(400, 14), color: B.light, textAlign: 'center', padding: '32px 0' }}>{t.noSt}</p>}
                {sorted.map(s => {
                  const pct = pctOf(s.id), lm = lvMeta(s.id), jrn = journeyOf(s.id)
                  return (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px', borderRadius: 14, border: `1.5px solid ${B.border}`, background: B.white, cursor: 'pointer', marginBottom: 8 }} onClick={() => { setSel(s.id); setDtab('level'); setJWeek(1) }}>
                      <Avatar seed={s.avatar} size={44} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <p style={{ ...pp(600, 14), color: B.dark }}>{s.name}</p>
                          {jrn && <span style={{ fontSize: 10, background: jrn.color + '22', color: jrn.color, borderRadius: 20, padding: '2px 8px', fontWeight: 700, fontFamily: 'Poppins,sans-serif', border: `1px solid ${jrn.color}44` }}>{jrn.icon} {lang === 'pt' ? jrn.pt : jrn.en}</span>}
                        </div>
                        <p style={{ ...ir(400, 11), color: B.light }}>@{s.username}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                          <span style={{ fontSize: 10, background: lm.color, color: lm.text, borderRadius: 20, padding: '2px 8px', fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{lm.level}</span>
                          <div style={{ flex: 1, height: 4, background: B.bege, borderRadius: 99, overflow: 'hidden' }}><div style={{ height: '100%', width: `${pct}%`, background: B.marrom, borderRadius: 99 }} /></div>
                          <span style={{ ...pp(700, 12), color: B.marrom }}>{pct}%</span>
                        </div>
                      </div>
                      <Icon name="next" size={20} color={B.light} />
                    </div>
                  )
                })}
              </div>
            )}

            {selS && (
              <div style={{ padding: '14px', maxWidth: 960, margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <button style={{ ...S.btn(B.bege), color: B.dark, fontSize: 13, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setSel(null)}><Icon name="back" size={15} color={B.dark} />{t.back}</button>
                  <div style={{ flex: 1 }} />
                  <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => onPreview(selS.id)}><Icon name="globe" size={13} color="#fff" />{t.previewBtn}</button>
                  <button style={{ ...S.btn('#B03020'), fontSize: 12, padding: '9px 12px', display: 'flex', alignItems: 'center' }} onClick={() => setDelConfirm(selS)}><Icon name="delete" size={14} color="#fff" /></button>
                </div>

                <div style={{ ...S.card, display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
                  <Avatar seed={selS.avatar} size={56} />
                  <div style={{ flex: 1 }}>
                    <h2 style={{ ...pp(800, 18), color: B.dark }}>{selS.name}</h2>
                    <p style={{ ...ir(400, 12), color: B.mid, marginTop: 2 }}>@{selS.username} · {lvMeta(selS.id).level} · {pctOf(selS.id)}%</p>
                    {journeyOf(selS.id) && (
                      <span style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, background: journeyOf(selS.id).color + '22', color: journeyOf(selS.id).color, borderRadius: 20, padding: '3px 10px', fontWeight: 700, fontFamily: 'Poppins,sans-serif', border: `1px solid ${journeyOf(selS.id).color}44` }}>
                        {journeyOf(selS.id).icon} {lang === 'pt' ? journeyOf(selS.id).pt : journeyOf(selS.id).en}
                      </span>
                    )}
                  </div>
                  <div>
                    <p style={{ ...ir(600, 10), color: B.light, marginBottom: 6, textTransform: 'uppercase' }}>Avatar</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, maxWidth: 220 }}>
                      {['Lily','Felix','Zoe','Leo','Mia','Finn','Aria','Kai','Nova','Eli','Luna','Ash'].map(seed => (
                        <img key={seed} src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                          width={32} height={32} alt={seed}
                          onClick={() => upDb({ students: students.map(s => s.id === selS.id ? { ...s, avatar: seed } : s) })}
                          style={{ borderRadius: '50%', cursor: 'pointer', border: selS.avatar === seed ? `2.5px solid ${B.laranja}` : '2px solid transparent', background: '#f0ebe4' }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
                  {TABS.map(([k, lb]) => (
                    <button key={k} style={{ ...S.chip, background: dtab === k ? B.laranja : B.bege, color: dtab === k ? '#fff' : B.mid, fontSize: 12, padding: '7px 13px', display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => setDtab(k)}>{lb}</button>
                  ))}
                </div>

                {dtab === 'level' && (
                  <div>
                    <div style={{ ...S.card, marginBottom: 14 }}>
                      <p style={S.lbl}>{t.levelLabel}</p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {CEFR_META.map(c => {
                          const active = (db[`lv_${selS.id}`] || 'A1') === c.level
                          return <button key={c.level} style={{ ...S.chip, background: active ? c.color : B.bege, color: active ? c.text : B.mid, fontSize: 13, padding: '8px 16px', fontWeight: 700 }} onClick={() => upDb({ [`lv_${selS.id}`]: c.level })}>{c.icon} {c.level}</button>
                        })}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px,1fr))', gap: 9 }}>
                      {(PLAN[lvOf(selS.id)] || []).map(w => {
                        const jid = db[`jrn_${selS.id}`]
                        const jChecked = db[`jsd_${selS.id}`] || {}
                        const wt = jid ? getJTasks(selS.id, jid, w.week) : []
                        const p = wt.length ? Math.round(wt.filter(tk => jChecked[tk.id]).length / wt.length * 100) : 0
                        return (
                          <div key={w.week} style={{ ...S.card, textAlign: 'center', padding: '12px 8px', cursor: 'pointer' }} onClick={() => { setDtab('journey'); setJWeek(w.week) }}>
                            <p style={{ ...ir(600, 10), color: B.light, textTransform: 'uppercase' }}>{t.week} {w.week}</p>
                            <p style={{ ...pp(800, 18), color: B.dark, marginTop: 2 }}>{p}%</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {dtab === 'journey' && (() => {
                  const currentJid = db[`jrn_${selS.id}`]
                  const currentJ = currentJid ? JOURNEY_MAP[currentJid] : null
                  const allW = currentJ ? journeyAllWeeks(selS.id, currentJid) : []
                  const curW = allW.find(w => w.week === jWeek) || allW[0]
                  const tasks = currentJ ? getJTasks(selS.id, currentJid, jWeek) : []
                  const isCustom = !!(currentJid && db[`jt_${selS.id}_${currentJid}_w${jWeek}`])
                  const jChecked = db[`jsd_${selS.id}`] || {}
                  const jPct = wn => { const wt = currentJ ? getJTasks(selS.id, currentJid, wn) : []; return wt.length ? Math.round(wt.filter(tk => jChecked[tk.id]).length / wt.length * 100) : 0 }
                  const isExtraWeek = wn => !(JOURNEY_MAP[currentJid]?.weeks || []).find(w => w.week === wn)
                  return (
                    <div>
                      <div style={{ ...S.card, marginBottom: 14 }}>
                        <p style={S.lbl}>{lang === 'pt' ? 'Atribuir jornada' : 'Assign journey'}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {JOURNEYS.map(j => (
                            <button key={j.id} onClick={() => { upDb({ [`jrn_${selS.id}`]: j.id }); setJWeek(1) }}
                              style={{ ...S.chip, background: currentJid === j.id ? j.color : B.bege, color: currentJid === j.id ? '#fff' : B.mid, fontSize: 12, padding: '8px 14px', border: `1.5px solid ${currentJid === j.id ? j.color : B.border}` }}>
                              {j.icon} {lang === 'pt' ? j.pt : j.en}
                            </button>
                          ))}
                          {currentJid && <button onClick={() => upDb({ [`jrn_${selS.id}`]: null })} style={{ ...S.chip, background: '#FEE2E2', color: '#DC2626', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="close" size={11} color="#DC2626" />{lang === 'pt' ? 'Remover' : 'Remove'}</button>}
                        </div>
                      </div>
                      {currentJ && (
                        <>
                          <div style={{ background: currentJ.color, borderRadius: 14, padding: '14px 18px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 26 }}>{currentJ.icon}</span>
                            <div>
                              <p style={{ ...pp(700, 15), color: '#fff' }}>{lang === 'pt' ? currentJ.pt : currentJ.en}</p>
                              <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.8)' }}>{lang === 'pt' ? currentJ.desc.pt : currentJ.desc.en}</p>
                            </div>
                          </div>
                          <div style={{ overflowX: 'auto', marginBottom: 14 }}>
                            <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4 }}>
                              {allW.map(w => (
                                <button key={w.week} onClick={() => setJWeek(w.week)} style={{ ...S.chip, background: jWeek === w.week ? currentJ.color : B.bege, color: jWeek === w.week ? '#fff' : B.mid, fontSize: 11, padding: '7px 12px', whiteSpace: 'nowrap' }}>
                                  {lang === 'pt' ? 'Sem' : 'Wk'} {w.week} · {jPct(w.week)}%{isExtraWeek(w.week) ? ' +' : ''}
                                </button>
                              ))}
                              <input style={{ ...S.inp, width: 130, fontSize: 11, padding: '6px 9px' }} placeholder={lang === 'pt' ? 'Tema (inglês)' : 'Theme (English)'} value={nJWeekEn} onChange={e => setNJWeekEn(e.target.value)} />
                              <input style={{ ...S.inp, width: 120, fontSize: 11, padding: '6px 9px' }} placeholder={lang === 'pt' ? 'Tema (pt)' : 'Theme (pt)'} value={nJWeekPt} onChange={e => setNJWeekPt(e.target.value)} />
                              <button style={{ ...S.btn(B.oliva), fontSize: 11, padding: '7px 11px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => addJExtraWeek(selS.id, currentJid)}><Icon name="add" size={12} color="#fff" />{lang === 'pt' ? 'Semana' : 'Week'}</button>
                            </div>
                          </div>
                          {curW && (
                            <div style={S.card}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                                <div>
                                  <p style={{ ...pp(700, 14), color: B.dark }}>{lang === 'pt' ? 'Semana' : 'Week'} {curW.week}: {curW.theme[lang]}</p>
                                  <p style={{ ...ir(400, 11), color: B.light }}>{tasks.length} tasks{isCustom ? ` · ${lang === 'pt' ? 'personalizada' : 'customized'}` : ''}</p>
                                </div>
                                <div style={{ display: 'flex', gap: 6 }}>
                                  {isCustom && <button style={{ ...S.chip, background: B.bege, color: B.mid, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => resetJWeek(selS.id, currentJid, jWeek)}><Icon name="reset" size={11} color={B.mid} />{lang === 'pt' ? 'Resetar' : 'Reset'}</button>}
                                  {isExtraWeek(jWeek) && <button style={{ ...S.chip, background: '#FEE2E2', color: '#DC2626', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => delJExtraWeek(selS.id, currentJid, jWeek)}><Icon name="delete" size={11} color="#DC2626" />{lang === 'pt' ? 'Remover semana' : 'Remove week'}</button>}
                                </div>
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
                                {tasks.length === 0 && <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', padding: '12px 0' }}>{t.noTasks}</p>}
                                {tasks.map(task => {
                                  const cm = CAT[task.cat] || CAT.grammar
                                  const isEditing = jEditTask?.id === task.id
                                  return (
                                    <div key={task.id} style={{ background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, overflow: 'hidden' }}>
                                      {isEditing ? (
                                        <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                                          <input style={{ ...S.inp, fontSize: 12 }} value={jEditTask.en} onChange={e => setJEditTask(p => ({ ...p, en: e.target.value }))} placeholder="English" />
                                          <input style={{ ...S.inp, fontSize: 12 }} value={jEditTask.pt} onChange={e => setJEditTask(p => ({ ...p, pt: e.target.value }))} placeholder="Português" />
                                          <div style={{ position: 'relative' }}>
                                            <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                            <input style={{ ...S.inp, fontSize: 12, paddingLeft: 30 }} value={jEditTask.link || ''} onChange={e => setJEditTask(p => ({ ...p, link: e.target.value }))} placeholder="Link (opcional)" />
                                          </div>
                                          <div style={{ display: 'flex', gap: 6 }}>
                                            <select style={{ ...S.inp, flex: 1, fontSize: 11 }} value={jEditTask.cat} onChange={e => setJEditTask(p => ({ ...p, cat: e.target.value }))}>
                                              {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                            </select>
                                            <button style={{ ...S.btn(B.oliva), fontSize: 11, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 4 }} onClick={() => saveJTask(selS.id, currentJid, jWeek, jEditTask.id, jEditTask.en, jEditTask.pt, jEditTask.cat, jEditTask.link)}><Icon name="check" size={13} color="#fff" /></button>
                                            <button style={{ ...S.btn(B.light), fontSize: 11, padding: '7px 10px', display: 'flex', alignItems: 'center' }} onClick={() => setJEditTask(null)}><Icon name="close" size={13} color="#fff" /></button>
                                          </div>
                                        </div>
                                      ) : (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px' }}>
                                          <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                                          <div style={{ flex: 1 }}>
                                            <p style={{ ...ir(600, 12), color: B.dark }}>{task.en}</p>
                                            <p style={{ ...ir(400, 10), color: B.light, fontStyle: 'italic' }}>{task.pt}</p>
                                            {task.link && <a href={task.link} target="_blank" rel="noreferrer" style={{ ...ir(400, 10), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}><Icon name="link" size={10} color={B.laranja} />{task.link}</a>}
                                          </div>
                                          <button style={{ background: B.bege, border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setJEditTask({ ...task })}><Icon name="edit" size={13} color={B.mid} /></button>
                                          <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => delJTask(selS.id, currentJid, jWeek, task.id)}><Icon name="delete" size={13} color="#DC2626" /></button>
                                        </div>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                              <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}` }}>
                                <p style={{ ...pp(600, 11), color: B.marrom, marginBottom: 8 }}>{t.addTask}</p>
                                <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Task (English)" value={nJTaskEn} onChange={e => setNJTaskEn(e.target.value)} />
                                <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Tradução (Português)" value={nJTaskPt} onChange={e => setNJTaskPt(e.target.value)} />
                                <div style={{ position: 'relative', marginBottom: 6 }}>
                                  <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                  <input style={{ ...S.inp, fontSize: 12, paddingLeft: 30 }} placeholder="Link (opcional)" value={nJTaskLink} onChange={e => setNJTaskLink(e.target.value)} />
                                </div>
                                <div style={{ display: 'flex', gap: 6 }}>
                                  <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={nJTaskCat} onChange={e => setNJTaskCat(e.target.value)}>
                                    {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                  </select>
                                  <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => addJTask(selS.id, currentJid, jWeek)}><Icon name="add" size={14} color="#fff" />{t.save}</button>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })()}

                {dtab === 'diary' && (
                  <div>
                    <div style={{ ...S.card, marginBottom: 14 }}>
                      <p style={{ ...S.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="add" size={13} color={B.mid} />{lang === 'pt' ? 'Nova anotação de aula' : 'New class note'}</p>
                      <input type="date" style={{ ...S.inp, marginBottom: 8 }} value={diaryDate} onChange={e => setDiaryDate(e.target.value)} />
                      <p style={{ ...ir(600, 11), color: B.oliva, marginBottom: 4 }}>{lang === 'pt' ? '✓ O que foi bem' : '✓ What went well'}</p>
                      <textarea style={{ ...S.ta, marginBottom: 8 }} rows={2} placeholder={lang === 'pt' ? 'Ex: Ótima pronúncia, engajamento alto...' : 'Ex: Great pronunciation, high engagement...'} value={diaryGood} onChange={e => setDiaryGood(e.target.value)} />
                      <p style={{ ...ir(600, 11), color: B.marrom, marginBottom: 4 }}>{lang === 'pt' ? '→ O que reforçar' : '→ What to reinforce'}</p>
                      <textarea style={{ ...S.ta, marginBottom: 8 }} rows={2} placeholder={lang === 'pt' ? 'Ex: Revisitar past perfect...' : 'Ex: Revisit past perfect...'} value={diaryImprove} onChange={e => setDiaryImprove(e.target.value)} />
                      <p style={{ ...ir(600, 11), color: B.mid, marginBottom: 4 }}>{lang === 'pt' ? 'Notas gerais' : 'General notes'}</p>
                      <textarea style={{ ...S.ta, marginBottom: 12 }} rows={2} placeholder={lang === 'pt' ? 'Qualquer observação extra...' : 'Any extra observation...'} value={diaryNotes} onChange={e => setDiaryNotes(e.target.value)} />
                      <button style={{ ...S.btn(B.oliva), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                        if (!diaryGood.trim() && !diaryImprove.trim() && !diaryNotes.trim()) return
                        const k = `diary_${selS.id}`
                        upDb({ [k]: [{ id: `d${Date.now()}`, date: diaryDate, good: diaryGood.trim(), improve: diaryImprove.trim(), notes: diaryNotes.trim() }, ...(db[k] || [])] })
                        setDiaryGood(''); setDiaryImprove(''); setDiaryNotes('')
                      }}><Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar anotação' : 'Save note'}</button>
                    </div>
                    {(db[`diary_${selS.id}`] || []).length === 0 && <div style={{ textAlign: 'center', padding: '32px 0' }}><Icon name="lightbulb" size={40} color={B.border} /><p style={{ ...ir(400, 13), color: B.light, marginTop: 12 }}>{lang === 'pt' ? 'Nenhuma anotação ainda' : 'No notes yet'}</p></div>}
                    {(db[`diary_${selS.id}`] || []).map(entry => (
                      <div key={entry.id} style={{ ...S.card, marginBottom: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                          <p style={{ ...pp(600, 13), color: B.dark }}>{new Date(entry.date + 'T12:00:00').toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                          <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => upDb({ [`diary_${selS.id}`]: (db[`diary_${selS.id}`] || []).filter(e => e.id !== entry.id) })}><Icon name="delete" size={12} color="#DC2626" /></button>
                        </div>
                        {entry.good && <div style={{ marginBottom: 6 }}><p style={{ ...ir(600, 11), color: B.oliva, marginBottom: 2 }}>{lang === 'pt' ? '✓ Foi bem' : '✓ Went well'}</p><p style={{ ...ir(400, 13), color: B.dark, lineHeight: 1.6 }}>{entry.good}</p></div>}
                        {entry.improve && <div style={{ marginBottom: 6 }}><p style={{ ...ir(600, 11), color: B.marrom, marginBottom: 2 }}>{lang === 'pt' ? '→ Reforçar' : '→ To reinforce'}</p><p style={{ ...ir(400, 13), color: B.dark, lineHeight: 1.6 }}>{entry.improve}</p></div>}
                        {entry.notes && <div><p style={{ ...ir(600, 11), color: B.mid, marginBottom: 2 }}>{lang === 'pt' ? 'Notas' : 'Notes'}</p><p style={{ ...ir(400, 13), color: B.dark, lineHeight: 1.6 }}>{entry.notes}</p></div>}
                      </div>
                    ))}
                  </div>
                )}

                {dtab === 'fb' && (
                  <div style={S.card}>
                    <p style={{ ...S.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="feedback" size={13} color={B.mid} />{t.fbLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 12 }} rows={5} placeholder={t.fbPh} value={fbDraft} onChange={e => setFbDraft(e.target.value)} />
                    <button style={{ ...S.btn(B.oliva), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => upDb({ [`fb_${selS.id}`]: fbDraft })}><Icon name="save" size={15} color="#fff" />{t.save}</button>
                  </div>
                )}

                {dtab === 'hw' && (
                  <div style={S.card}>
                    <p style={{ ...S.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="homework" size={13} color={B.mid} />{t.hwLabel}</p>
                    {(db[`hw_${selS.id}`] || []).length === 0 && <p style={{ ...ir(400, 13), color: B.light, marginBottom: 12 }}>{t.noHW}</p>}
                    {(db[`hw_${selS.id}`] || []).map(h => {
                      const cm = CAT[h.cat] || CAT.grammar
                      return (
                        <div key={h.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '10px 12px', background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, marginBottom: 7 }}>
                          <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                          <div style={{ flex: 1 }}>
                            <p style={{ ...ir(600, 13), color: B.dark }}>{h.en}</p>
                            <p style={{ ...ir(400, 11), color: B.mid, fontStyle: 'italic' }}>{h.pt}</p>
                            {h.due && <p style={{ ...ir(600, 11), color: B.laranja, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="calendar" size={11} color={B.laranja} />{h.due}</p>}
                            {h.link && <a href={h.link} target="_blank" rel="noreferrer" style={{ ...ir(400, 11), color: B.laranja, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}><Icon name="link" size={11} color={B.laranja} />{h.link}</a>}
                          </div>
                          <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => upDb({ [`hw_${selS.id}`]: (db[`hw_${selS.id}`] || []).filter(x => x.id !== h.id) })}><Icon name="delete" size={13} color="#DC2626" /></button>
                        </div>
                      )
                    })}
                    <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}`, marginTop: 8 }}>
                      <p style={{ ...pp(600, 11), color: B.marrom, marginBottom: 8 }}>{t.addHW}</p>
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.hwEn} value={hwEn} onChange={e => setHwEn(e.target.value)} />
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.hwPt} value={hwPt} onChange={e => setHwPt(e.target.value)} />
                      <div style={{ position: 'relative', marginBottom: 6 }}>
                        <Icon name="link" size={13} color={B.light} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                        <input style={{ ...S.inp, fontSize: 12, paddingLeft: 30 }} placeholder="Link (opcional)" value={hwLink} onChange={e => setHwLink(e.target.value)} />
                      </div>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        <input type="date" style={{ ...S.inp, flex: 1, fontSize: 12 }} value={hwDue} onChange={e => setHwDue(e.target.value)} />
                        <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={hwCat} onChange={e => setHwCat(e.target.value)}>
                          {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                        </select>
                        <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                          if (!hwEn.trim()) return
                          const k = `hw_${selS.id}`
                          upDb({ [k]: [...(db[k] || []), { id: `hw${Date.now()}`, en: hwEn.trim(), pt: hwPt.trim() || hwEn.trim(), due: hwDue, cat: hwCat, link: hwLink.trim() || null, done: false }] })
                          setHwEn(''); setHwPt(''); setHwDue(''); setHwLink('')
                        }}><Icon name="save" size={14} color="#fff" />{t.save}</button>
                      </div>
                    </div>
                  </div>
                )}

                {dtab === 'info' && (
                  <div style={S.card}>
                    <p style={{ ...S.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="info" size={13} color={B.mid} />{t.infoLabel}</p>
                    <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>{t.infoGenLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 14 }} rows={4} placeholder={t.infoGenPh} value={infoGen} onChange={e => setInfoGen(e.target.value)} />
                    <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>{t.infoNotesLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 14 }} rows={5} placeholder={t.infoNotesPh} value={infoNotes} onChange={e => setInfoNotes(e.target.value)} />
                    <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>{lang === 'pt' ? 'Mensagem de boas-vindas' : 'Welcome message'}</p>
                    <textarea style={{ ...S.ta, marginBottom: 14 }} rows={3}
                      placeholder={lang === 'pt' ? 'Ex: Olá! Seja bem-vinda ao TalkScape...' : 'Ex: Hi! Welcome to TalkScape...'}
                      value={db[`welcome_${selS.id}`] || ''}
                      onChange={e => upDb({ [`welcome_${selS.id}`]: e.target.value })} />
                    <button style={{ ...S.btn(B.oliva), display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => upDb({ [`ig_${selS.id}`]: infoGen, [`in_${selS.id}`]: infoNotes })}><Icon name="save" size={15} color="#fff" />{t.save}</button>
                  </div>
                )}

                {dtab === 'cal' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher={true} sid={selS.id} />}
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}
