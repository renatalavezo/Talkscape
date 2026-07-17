import { useState, useEffect } from 'react'
import { CAT } from '../constants/colors'
import { D, serifD, sansD } from '../constants/dashColors'
import { CEFR_META } from '../constants/cefr'
import { PLAN } from '../constants/plan'
import { AVATARS } from '../constants/avatars'
import { JOURNEYS, JOURNEY_MAP } from '../constants/journeys'
import { JOURNEY_RESOURCES, TYPE_ICON, pickResource, levelHint } from '../constants/journeyResources'
import Avatar from './Avatar'
import Icon from './Icon'
import Logo from './Logo'
import ActivityEditor from './ActivityEditor'
import CalSection from './CalSection'
import { hashPassword } from '../utils'
import { useIsMobile } from '../hooks/useIsMobile'

const SIMPLE_LEVEL = { A1:'beginner', A2:'beginner', B1:'intermediate', B2:'intermediate', C1:'advanced', C2:'advanced' }
const SIMPLE_LABEL = { beginner:'Iniciante', intermediate:'Intermediário', advanced:'Avançado' }
const SIMPLE_ICON  = { beginner:'sprout', intermediate:'leaf', advanced:'treeDeciduous' }
const SIMPLE_COLOR = { beginner:[D.sky, D.skySoft], intermediate:[D.honey, D.honeySoft], advanced:[D.clay, D.claySoft] }

const F = "'Hanken Grotesk',sans-serif"

// New design-language style tokens (mockup: teacher_panel_template)
const SD = {
  card:   { background: D.surface, borderRadius: 18, padding: 20, border: `1px solid ${D.line}`, boxShadow: D.shadow },
  inp:    { padding: '11px 13px', borderRadius: 10, border: `1px solid ${D.line}`, fontSize: 14, outline: 'none', fontFamily: F, color: D.ink, background: D.surfaceWarm, width: '100%' },
  ta:     { padding: '10px 12px', borderRadius: 10, border: `1px solid ${D.line}`, fontSize: 13, fontFamily: F, color: D.ink, resize: 'vertical', outline: 'none', width: '100%', background: D.surfaceWarm },
  btn:    bg => ({ padding: '11px 18px', background: bg, color: '#fff', border: 'none', borderRadius: 11, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: F, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }),
  soft:   (color, bg) => ({ fontFamily: F, fontSize: 13, fontWeight: 600, padding: '9px 14px', borderRadius: 10, border: `1px solid ${bg}`, background: bg, color, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5 }),
  chip:   { border: 'none', borderRadius: 99, padding: '7px 13px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: F, display: 'inline-flex', alignItems: 'center', gap: 5 },
  lbl:    { fontFamily: F, fontWeight: 700, fontSize: 11.5, letterSpacing: 0.6, color: D.muted, textTransform: 'uppercase', display: 'block', marginBottom: 10 },
  pill:   (bg, tx) => ({ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', borderRadius: 99, fontWeight: 700, fontSize: 11, background: bg, color: tx, flexShrink: 0, fontFamily: F, whiteSpace: 'nowrap' }),
  dot:    c => ({ width: 5, height: 5, borderRadius: '50%', background: c, flexShrink: 0, display: 'inline-block' }),
  iconBtn: (color, bg) => ({ width: 36, height: 36, borderRadius: 10, border: `1px solid ${bg}`, background: bg, color, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }),
}

const AV_COLORS = [D.terra, D.sky, D.moss, D.clay, D.honey, D.sage]
const initialsOf = n => (n || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?'
const nameColor = n => AV_COLORS[((n || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % AV_COLORS.length]
const avCircle = (color, size = 46) => ({ width: size, height: size, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: Math.round(size * 0.34), background: color, fontFamily: F })
const bandColor = lv => (lv || 'A1')[0] === 'A' ? [D.sky, D.skySoft] : (lv || '')[0] === 'B' ? [D.honey, D.honeySoft] : [D.clay, D.claySoft]

// ---- Financeiro helpers ----
const brl = n => 'R$ ' + (Number(n) || 0).toLocaleString('pt-BR')
const monthKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
const shiftMonth = (key, delta) => { const [y, m] = key.split('-').map(Number); return monthKey(new Date(y, m - 1 + delta, 1)) }
const todayStart = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d }
const payDueDate = p => { const [y, m] = (p.month || '').split('-').map(Number); return new Date(y || 1970, (m || 1) - 1, p.dueDay || 1) }
const payStatus = p => {
  if (p.status === 'pago') return 'pago'
  return payDueDate(p) < todayStart() ? 'atrasado' : 'pendente'
}
const ST_META = {
  pago:     { pt: 'Pago',     en: 'Paid',    color: D.mossDeep, soft: D.sageSoft },
  pendente: { pt: 'Pendente', en: 'Pending', color: D.honey,    soft: D.honeySoft },
  atrasado: { pt: 'Atrasado', en: 'Overdue', color: D.clay,     soft: D.claySoft },
}

export default function TeacherDash({ t, lang, setLang, students, courseStudents, cadastrosPendentes, db, upDb, onPreview, onPreviewCourse, onLogout }) {
  const isMobile = useIsMobile()
  const [sel, setSel]               = useState(null)
  const [dtab, setDtab]             = useState('level')
  const [section, setSection]       = useState('students')
  const [q, setQ]                   = useState('')
  const [showAdd, setShowAdd]       = useState(false)
  const [addErr, setAddErr]         = useState('')
  const [delConfirm, setDelConfirm] = useState(null)
  const [delCourseConfirm, setDelCourseConfirm] = useState(null)
  const [copiedId, setCopiedId]     = useState(null)
  const [newName, setNewName]       = useState('')
  const [newUser, setNewUser]       = useState('')
  const [newEmail, setNewEmail]     = useState('')
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
  const [welcomeMsg, setWelcomeMsg] = useState('')
  const [fromCadastroId, setFromCadastroId] = useState(null)
  const [showAddCourse, setShowAddCourse] = useState(false)
  const [courseNewName, setCourseNewName] = useState('')
  const [courseNewEmail, setCourseNewEmail] = useState('')
  const [courseNewPass, setCourseNewPass] = useState('')
  const [courseNewJid, setCourseNewJid] = useState('')
  const [courseAddErr, setCourseAddErr] = useState('')
  const [selCourse, setSelCourse]   = useState(null)
  const [selCourseJrn, setSelCourseJrn] = useState(null)
  const [addJrnId, setAddJrnId]     = useState('')
  const [courseAnswers, setCourseAnswers] = useState({})
  const [selJBase, setSelJBase]           = useState(null)
  const [selJBaseWeek, setSelJBaseWeek]   = useState(1)
  const [jBaseOpen, setJBaseOpen]         = useState(false)
  const [jBaseEditTask, setJBaseEditTask] = useState(null)
  const [nJBTaskEn, setNJBTaskEn]         = useState('')
  const [nJBTaskPt, setNJBTaskPt]         = useState('')
  const [nJBTaskCat, setNJBTaskCat]       = useState('grammar')
  const [nJBTaskLink, setNJBTaskLink]     = useState('')
  const [actExpandTask, setActExpandTask] = useState(null) // taskId with activities panel open

  // ---- Financeiro state ----
  const [finMonth, setFinMonth]     = useState(monthKey(new Date()))
  const [finStatus, setFinStatus]   = useState('todos')   // todos | pago | pendente | atrasado
  const [finType, setFinType]       = useState('todos')   // todos | particular | curso
  const [finQuery, setFinQuery]     = useState('')
  const [showAddPay, setShowAddPay] = useState(false)
  const [paySel, setPaySel]         = useState('')        // '' = free text, 'p:<id>' particular, 'c:<id>' curso
  const [payName, setPayName]       = useState('')
  const [payType, setPayType]       = useState('particular')
  const [payAmount, setPayAmount]   = useState('')
  const [payMonth, setPayMonth]     = useState(monthKey(new Date()))
  const [payDueDay, setPayDueDay]   = useState('5')
  const [payErr, setPayErr]         = useState('')

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

  const addStudent = async () => {
    if (!newName.trim() || !newUser.trim() || !newPass.trim()) { setAddErr(t.fillAll); return }
    if (students.find(s => (s.username || '').toLowerCase() === newUser.trim().toLowerCase())) { setAddErr(t.usernameExists); return }
    const id = Date.now().toString(), av = AVATARS[students.length % AVATARS.length]
    const hashed = await hashPassword(newPass.trim())
    upDb({ students: [...students, { id, name: newName.trim(), avatar: av, username: newUser.trim(), email: newEmail.trim().toLowerCase() || null, password: hashed }] })
    if (fromCadastroId) {
      upDb({ cadastros_pendentes: (cadastrosPendentes || []).filter(c => c.id !== fromCadastroId) })
      setFromCadastroId(null)
    }
    setNewName(''); setNewUser(''); setNewEmail(''); setNewPass(''); setAddErr(''); setShowAdd(false)
  }

  const deleteStudent = s => { upDb({ students: students.filter(x => x.id !== s.id) }); setSel(null); setDelConfirm(null) }

  const deleteCourseStudent = s => {
    upDb({ courseStudents: (courseStudents || []).filter(x => x.id !== s.id) })
    if (selCourse === s.id) setSelCourse(null)
    setDelCourseConfirm(null)
  }

  const sorted = [...students]
    .filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || (s.username || '').toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  const journeyOf = sid => db[`jrn_${sid}`] ? JOURNEY_MAP[db[`jrn_${sid}`]] : null

  const csJids = s => s.jids || (s.jid ? [s.jid] : [])
  const unansweredTotal = (courseStudents || []).reduce((acc, s) => acc + ((db[`cq_${s.id}`] || []).filter(x => !x.answer).length), 0)

  // ---- Financeiro derived data ----
  const payments   = db.payments || []
  const updatePayments = next => upDb({ payments: next })
  const monthPays  = payments.filter(p => p.month === finMonth)
  const sumBy      = st => monthPays.filter(p => payStatus(p) === st).reduce((a, p) => a + (Number(p.amount) || 0), 0)
  const finRecebido = sumBy('pago'), finAReceber = sumBy('pendente'), finAtraso = sumBy('atrasado')
  const finPrevisto = finRecebido + finAReceber + finAtraso
  const finFiltered = monthPays.filter(p =>
    (finStatus === 'todos' || payStatus(p) === finStatus) &&
    (finType === 'todos' || p.type === finType) &&
    (!finQuery.trim() || (p.name || '').toLowerCase().includes(finQuery.trim().toLowerCase())))
  const finFilteredTotal = finFiltered.reduce((a, p) => a + (Number(p.amount) || 0), 0)
  const [finY, finM] = finMonth.split('-').map(Number)
  const finLabel = `${t.monthNames[(finM || 1) - 1]} ${finY}`
  const payTypeLabel = ty => ty === 'curso' ? (lang === 'pt' ? 'Curso Jornadas' : 'Jornadas course') : (lang === 'pt' ? 'Aulas particulares' : 'Private lessons')
  const payDetailLine = p => {
    const st = payStatus(p)
    if (st === 'pago') return p.paidDetail || (lang === 'pt' ? 'pago' : 'paid')
    if (st === 'pendente') return lang === 'pt' ? `vence dia ${p.dueDay}` : `due on day ${p.dueDay}`
    const days = Math.max(1, Math.floor((todayStart() - payDueDate(p)) / 86400000))
    return lang === 'pt' ? `venceu dia ${p.dueDay} · ${days} dia${days > 1 ? 's' : ''}` : `overdue since day ${p.dueDay} · ${days} day${days > 1 ? 's' : ''}`
  }
  const markPaid = p => {
    const stamp = new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { day: '2-digit', month: 'short' })
    updatePayments(payments.map(x => x.id === p.id ? { ...x, status: 'pago', paidDetail: `${lang === 'pt' ? 'pago em' : 'paid on'} ${stamp}` } : x))
  }
  const addPayment = () => {
    let name = payName.trim(), sid = null, type = payType
    if (paySel) {
      const [kind, ...rest] = paySel.split(':'); const id = rest.join(':')
      const found = kind === 'p' ? students.find(s => s.id === id) : (courseStudents || []).find(s => s.id === id)
      if (found) { name = found.name; sid = found.id; type = kind === 'p' ? 'particular' : 'curso' }
    }
    const amount = parseFloat(String(payAmount).replace(',', '.'))
    const dueDay = parseInt(payDueDay, 10)
    if (!name || !amount || amount <= 0 || !payMonth || !dueDay || dueDay < 1 || dueDay > 31) {
      setPayErr(lang === 'pt' ? 'Preencha aluno, valor, mês e dia de vencimento.' : 'Fill in student, amount, month and due day.')
      return
    }
    updatePayments([...payments, { id: `pay_${Date.now()}`, name, sid, type, amount, month: payMonth, dueDay, status: 'pendente', paidDetail: null }])
    setPaySel(''); setPayName(''); setPayAmount(''); setPayErr(''); setShowAddPay(false)
  }
  // last 6 months (ending at the viewed month) of PAID revenue
  const revMonths = Array.from({ length: 6 }, (_, i) => shiftMonth(finMonth, i - 5))
  const revSums = revMonths.map(mk => payments.filter(p => p.month === mk && payStatus(p) === 'pago').reduce((a, p) => a + (Number(p.amount) || 0), 0))
  const revMax = Math.max(...revSums, 1)

  const TABS = [
    ['level',   <><Icon name="progress" size={13} />&nbsp;{t.tabLevel}</>],
    ['journey', <><Icon name="map" size={13} />&nbsp;{lang === 'pt' ? 'Jornada' : 'Journey'}</>],
    ['diary',   <><Icon name="lightbulb" size={13} />&nbsp;{lang === 'pt' ? 'Diário' : 'Diary'}</>],
    ['fb',      <><Icon name="feedback" size={13} />&nbsp;{t.tabFb}</>],
    ['hw',      <><Icon name="homework" size={13} />&nbsp;{t.tabHW}</>],
    ['info',    <><Icon name="info" size={13} />&nbsp;{t.tabInfo}</>],
    ['cal',     <><Icon name="calendar" size={13} />&nbsp;{t.tabCal}</>],
  ]

  const NAV = [
    ['students',   lang === 'pt' ? 'Alunos' : 'Students'],
    ['calendar',   lang === 'pt' ? 'Agenda' : 'Calendar'],
    ['course',     lang === 'pt' ? 'Curso' : 'Course'],
    ['financeiro', lang === 'pt' ? 'Financeiro' : 'Finances'],
  ]

  const overlay = { position: 'fixed', inset: 0, background: 'rgba(59,42,33,0.55)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }
  const modal   = { background: D.surface, borderRadius: 20, padding: 28, width: '100%', boxShadow: D.shadowLg, border: `1px solid ${D.line}` }
  const dangerIconBtn = { background: D.claySoft, border: 'none', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }

  return (
    <div style={{ minHeight: '100vh', background: `radial-gradient(ellipse 900px 500px at 15% -10%, ${D.terraSoft}, transparent), radial-gradient(ellipse 800px 500px at 100% 0%, ${D.sageSoft}, transparent) ${D.canvas}`, fontFamily: F, color: D.ink, overflowX: 'hidden' }}>
      <div style={{ height: 5, background: `linear-gradient(90deg, ${D.terra} 0%, ${D.orange} 34%, ${D.moss} 67%, ${D.sky} 100%)` }} />

      {/* Settings modal */}
      {showSettings && (
        <div style={{ ...overlay, zIndex: 400 }} onClick={() => { setShowSettings(false); setPassChanged(false); setNewPassVal('') }}>
          <div style={{ ...modal, maxWidth: 360 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...serifD(500, 20), color: D.ink, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="settings" size={18} color={D.ink} />{lang === 'pt' ? 'Configurações' : 'Settings'}
              </h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => { setShowSettings(false); setPassChanged(false); setNewPassVal('') }}>
                <Icon name="close" size={20} color={D.muted} />
              </button>
            </div>
            <p style={{ ...sansD(600, 12), color: D.muted, marginBottom: 8 }}>{lang === 'pt' ? 'Nova senha de acesso' : 'New access password'}</p>
            <input style={{ ...SD.inp, marginBottom: 12 }} type="password" placeholder={lang === 'pt' ? 'Digite a nova senha...' : 'Enter new password...'} value={newPassVal} onChange={e => { setNewPassVal(e.target.value); setPassChanged(false) }} />
            {passChanged && <p style={{ ...sansD(600, 12), color: D.moss, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} color={D.moss} />{lang === 'pt' ? 'Senha alterada!' : 'Password changed!'}</p>}
            <button style={{ ...SD.btn(D.moss), width: '100%' }} onClick={() => { if (!newPassVal.trim()) return; upDb({ teacherPass: newPassVal.trim() }); setPassChanged(true); setNewPassVal('') }}>
              <Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar nova senha' : 'Save new password'}
            </button>
          </div>
        </div>
      )}

      {/* Add student modal */}
      {showAdd && (
        <div style={overlay} onClick={() => setShowAdd(false)}>
          <div style={{ ...modal, maxWidth: 380 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...serifD(500, 20), color: D.ink, display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="add" size={18} color={D.ink} />{t.addSt}</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => setShowAdd(false)}><Icon name="close" size={20} color={D.muted} /></button>
            </div>
            <input style={{ ...SD.inp, marginBottom: 10 }} placeholder={t.stPh} value={newName} onChange={e => setNewName(e.target.value)} />
            <input style={{ ...SD.inp, marginBottom: 10 }} type="email" placeholder="Email (para login)" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
            <input style={{ ...SD.inp, marginBottom: 10 }} placeholder={t.userPh} value={newUser} onChange={e => setNewUser(e.target.value)} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <input style={{ ...SD.inp, flex: 1 }} placeholder={t.passSt} value={newPass} onChange={e => setNewPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && addStudent()} />
              <button style={{ ...SD.soft(D.ink, D.cream), flexShrink: 0, fontSize: 12 }} onClick={() => { if (newPass) { navigator.clipboard.writeText(newPass); setCopiedId('new') } }}>{copiedId === 'new' ? '✓' : lang === 'pt' ? 'Copiar' : 'Copy'}</button>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...SD.btn(D.moss), flex: 1, fontSize: 14 }} onClick={addStudent}><Icon name="add" size={15} color="#fff" />{t.add}</button>
              <button style={{ ...SD.soft(D.muted, D.surfaceWarm), border: `1px solid ${D.line}`, padding: '11px 14px' }} onClick={() => { setShowAdd(false); setAddErr('') }}><Icon name="close" size={15} color={D.muted} /></button>
            </div>
            {addErr && <p style={{ ...sansD(600, 12), color: D.clay, marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}><Icon name="alert" size={13} color={D.clay} />{addErr}</p>}
          </div>
        </div>
      )}

      {/* Delete student confirm modal */}
      {delConfirm && (
        <div style={overlay}>
          <div style={{ ...modal, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon name="delete" size={44} color={D.clay} /></div>
            <h3 style={{ ...serifD(500, 20), color: D.ink, marginBottom: 8 }}>{t.confirmDel}</h3>
            <p style={{ ...sansD(400, 13), color: D.muted, marginBottom: 22 }}>{delConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...SD.soft(D.muted, D.surfaceWarm), border: `1px solid ${D.line}`, flex: 1, justifyContent: 'center' }} onClick={() => setDelConfirm(null)}>{t.cancel}</button>
              <button style={{ ...SD.btn(D.clay), flex: 1 }} onClick={() => deleteStudent(delConfirm)}><Icon name="delete" size={14} color="#fff" />{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete course student confirm modal */}
      {delCourseConfirm && (
        <div style={overlay}>
          <div style={{ ...modal, maxWidth: 320, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><Icon name="delete" size={44} color={D.clay} /></div>
            <h3 style={{ ...serifD(500, 20), color: D.ink, marginBottom: 8 }}>{lang === 'pt' ? 'Excluir aluna do curso?' : 'Delete course student?'}</h3>
            <p style={{ ...sansD(400, 13), color: D.muted, marginBottom: 22 }}>{delCourseConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...SD.soft(D.muted, D.surfaceWarm), border: `1px solid ${D.line}`, flex: 1, justifyContent: 'center' }} onClick={() => setDelCourseConfirm(null)}>{t.cancel}</button>
              <button style={{ ...SD.btn(D.clay), flex: 1 }} onClick={() => deleteCourseStudent(delCourseConfirm)}><Icon name="delete" size={14} color="#fff" />{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Add course student modal */}
      {showAddCourse && (
        <div style={overlay} onClick={() => setShowAddCourse(false)}>
          <div style={{ ...modal, maxWidth: 380 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...serifD(500, 20), color: D.ink }}>{lang === 'pt' ? 'Nova aluna do curso' : 'New course student'}</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }} onClick={() => setShowAddCourse(false)}><Icon name="close" size={20} color={D.muted} /></button>
            </div>
            <input style={{ ...SD.inp, marginBottom: 8 }} placeholder="Nome completo" value={courseNewName} onChange={e => setCourseNewName(e.target.value)} />
            <input style={{ ...SD.inp, marginBottom: 8 }} placeholder="Email" type="email" value={courseNewEmail} onChange={e => setCourseNewEmail(e.target.value)} />
            <input style={{ ...SD.inp, marginBottom: 8 }} placeholder="Senha de acesso" value={courseNewPass} onChange={e => setCourseNewPass(e.target.value)} />
            <select style={{ ...SD.inp, marginBottom: 16 }} value={courseNewJid} onChange={e => setCourseNewJid(e.target.value)}>
              <option value="">Escolher jornada...</option>
              {JOURNEYS.map(j => <option key={j.id} value={j.id}>{j.pt}</option>)}
            </select>
            {courseAddErr && <p style={{ ...sansD(600, 12), color: D.clay, marginBottom: 10 }}>{courseAddErr}</p>}
            <button style={{ ...SD.btn(D.orange), width: '100%' }} onClick={async () => {
              if (!courseNewName.trim() || !courseNewEmail.trim() || !courseNewPass.trim()) { setCourseAddErr('Preencha todos os campos.'); return }
              if ((courseStudents || []).find(s => s.email.toLowerCase() === courseNewEmail.trim().toLowerCase())) { setCourseAddErr('Email já cadastrado.'); return }
              const id = `cs_${Date.now()}`
              const hashed = await hashPassword(courseNewPass.trim())
              upDb({ courseStudents: [...(courseStudents || []), { id, name: courseNewName.trim(), email: courseNewEmail.trim().toLowerCase(), password: hashed, active: false, avatar: 'Lily', jid: courseNewJid || null, createdAt: new Date().toISOString().slice(0,10) }] })
              if (courseNewJid) upDb({ [`cjrn_${id}`]: courseNewJid })
              setCourseNewName(''); setCourseNewEmail(''); setCourseNewPass(''); setCourseNewJid(''); setCourseAddErr(''); setShowAddCourse(false)
            }}>
              <Icon name="add" size={15} color="#fff" />Adicionar aluna
            </button>
          </div>
        </div>
      )}

      {/* ============ TOP BAR ============ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(251,242,233,0.86)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: `1px solid ${D.line}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '10px 14px' : '10px 20px', display: 'flex', alignItems: 'center', gap: isMobile ? '10px 12px' : 14, flexWrap: 'wrap' }}>
          <Logo h={isMobile ? 32 : 36} />
          {!isMobile && (
            <nav style={{ display: 'flex', gap: 2, flex: 1, minWidth: 250, flexWrap: 'wrap' }}>
              {NAV.map(([k, label]) => {
                const active = section === k
                return (
                  <button key={k} onClick={() => setSection(k)}
                    style={{ fontFamily: F, fontSize: 14, fontWeight: active ? 700 : 600, padding: '9px 15px', borderRadius: 10, border: 'none', cursor: 'pointer', background: active ? D.moss : 'transparent', color: active ? '#fff' : D.muted, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all .15s' }}>
                    {label}
                    {k === 'course' && unansweredTotal > 0 && (
                      <span style={{ background: D.clay, color: '#fff', borderRadius: '50%', width: 17, height: 17, fontSize: 10, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{unansweredTotal}</span>
                    )}
                  </button>
                )
              })}
            </nav>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 10, marginLeft: 'auto', flexWrap: 'wrap' }}>
            <button style={{ background: 'transparent', border: `1px solid ${D.line}`, color: D.muted, fontFamily: F, fontSize: 12.5, fontWeight: 600, padding: '7px 12px', borderRadius: 9, cursor: 'pointer' }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>{t.switchLang}</button>
            <button title={lang === 'pt' ? 'Configurações' : 'Settings'} style={{ width: 34, height: 34, borderRadius: 9, border: `1px solid ${D.line}`, background: 'transparent', color: D.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowSettings(true)}><Icon name="settings" size={16} color={D.muted} /></button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: isMobile ? 0 : 12, borderLeft: isMobile ? 'none' : `1px solid ${D.line}` }}>
              {!isMobile && (
                <div style={{ textAlign: 'right', lineHeight: 1.15 }}>
                  <div style={{ ...sansD(600, 13.5), color: D.ink }}>Renata Lavezo</div>
                  <div style={{ fontSize: 11.5, color: D.muted }}>{lang === 'pt' ? 'Professora' : 'Teacher'}</div>
                </div>
              )}
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(150deg, ${D.sage}, ${D.mossDeep})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, boxShadow: D.shadow, flexShrink: 0 }}>R</div>
            </div>
            <button style={{ ...SD.soft(D.clay, D.claySoft), padding: '8px 12px', fontSize: 12.5, fontWeight: 700 }} onClick={onLogout}><Icon name="logout" size={13} color={D.clay} />{!isMobile && t.logout}</button>
          </div>
          {isMobile && (
            <nav style={{ display: 'flex', gap: 2, width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: 2 }}>
              {NAV.map(([k, label]) => {
                const active = section === k
                return (
                  <button key={k} onClick={() => setSection(k)}
                    style={{ fontFamily: F, fontSize: 13.5, fontWeight: active ? 700 : 600, padding: '8px 13px', borderRadius: 10, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, background: active ? D.moss : 'transparent', color: active ? '#fff' : D.muted, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all .15s' }}>
                    {label}
                    {k === 'course' && unansweredTotal > 0 && (
                      <span style={{ background: D.clay, color: '#fff', borderRadius: '50%', width: 17, height: 17, fontSize: 10, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{unansweredTotal}</span>
                    )}
                  </button>
                )
              })}
            </nav>
          )}
        </div>
      </header>

      {/* ============ AGENDA ============ */}
      {section === 'calendar' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher sid={null} />}

      {/* ============ CURSO ============ */}
      {section === 'course' && (
        <main className="fu" style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '22px 14px 70px' : '30px 20px 80px' }}>
          <div style={{ marginBottom: 26 }}>
            <h2 style={{ ...serifD(500, 28), color: D.ink }}>{lang === 'pt' ? 'Curso “Jornadas”' : '“Jornadas” Course'}</h2>
            <div style={{ fontSize: 14.5, color: D.muted, marginTop: 4 }}>{lang === 'pt' ? 'plano de ensino online — alunas por jornada e matrículas' : 'online course — students per journey and enrollments'}</div>
          </div>

          {jBaseOpen && selJBase ? (() => {
            // -------- Plano base editor --------
            const j = JOURNEY_MAP[selJBase]
            const allW = j?.weeks || []
            const tasks = getBaseTasks(selJBase, selJBaseWeek)
            const isOverridden = !!db[`jBase_${selJBase}_w${selJBaseWeek}`]
            return (
              <div>
                <button style={{ ...SD.soft(D.ink, D.cream), marginBottom: 16 }} onClick={() => { setJBaseOpen(false); setJBaseEditTask(null) }}>
                  <Icon name="back" size={15} color={D.ink} />{lang === 'pt' ? 'Voltar ao curso' : 'Back to course'}
                </button>
                <div style={{ background: `linear-gradient(135deg, ${D.moss}, ${D.mossDeep})`, borderRadius: 18, padding: '18px 22px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14, boxShadow: D.shadowLg, flexWrap: 'wrap' }}>
                  <Icon name={j.icon} size={26} color="#fff" />
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <p style={{ ...serifD(500, 20), color: '#fff' }}>{lang === 'pt' ? j.pt : j.en}</p>
                    <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.8)' }}>{lang === 'pt' ? j.desc.pt : j.desc.en}</p>
                  </div>
                  <span style={{ fontSize: 11.5, background: 'rgba(255,255,255,0.18)', color: '#fff', borderRadius: 99, padding: '5px 12px', fontFamily: F, fontWeight: 700, letterSpacing: 0.5 }}>
                    {lang === 'pt' ? 'EDITANDO PLANO BASE' : 'EDITING BASE PLAN'}
                  </span>
                </div>
                <div style={{ overflowX: 'auto', marginBottom: 16 }}>
                  <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4 }}>
                    {allW.map(w => {
                      const hasOverride = !!db[`jBase_${selJBase}_w${w.week}`]
                      const active = selJBaseWeek === w.week
                      return (
                        <button key={w.week} onClick={() => { setSelJBaseWeek(w.week); setJBaseEditTask(null) }}
                          style={{ ...SD.chip, background: active ? D.moss : D.surface, color: active ? '#fff' : D.muted, border: `1px solid ${active ? D.moss : D.line}`, fontSize: 12, padding: '8px 13px', whiteSpace: 'nowrap' }}>
                          {lang === 'pt' ? 'Sem' : 'Wk'} {w.week}{hasOverride && <Icon name="edit" size={10} color={active ? '#fff' : D.muted} />}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div style={SD.card}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <p style={{ ...sansD(700, 15), color: D.ink }}>{lang === 'pt' ? `Semana ${selJBaseWeek}` : `Week ${selJBaseWeek}`}: {allW.find(w => w.week === selJBaseWeek)?.theme[lang]}</p>
                      <p style={{ fontSize: 12, color: D.muted, display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>{tasks.length} tasks · {isOverridden ? <>{lang === 'pt' ? 'editada' : 'edited'} <Icon name="edit" size={10} color={D.muted} /></> : (lang === 'pt' ? 'padrão do código' : 'default from code')}</p>
                    </div>
                    {isOverridden && (
                      <button style={{ ...SD.chip, background: D.claySoft, color: D.clay }}
                        onClick={() => { const k = `jBase_${selJBase}_w${selJBaseWeek}`; const n = { ...db }; delete n[k]; upDb(n) }}>
                        <Icon name="reset" size={11} color={D.clay} />{lang === 'pt' ? 'Resetar para padrão' : 'Reset to default'}
                      </button>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                    {tasks.map((task, ti) => {
                      const cm = CAT[task.cat] || CAT.grammar
                      const isEditing = jBaseEditTask?.id === task.id
                      const r = pickResource(JOURNEY_RESOURCES[selJBase]?.['intermediate']?.[selJBaseWeek], task.cat, ti)
                      return (
                        <div key={task.id} style={{ background: D.surfaceWarm, borderRadius: 13, border: `1px solid ${D.line}`, overflow: 'hidden' }}>
                          {isEditing ? (
                            <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                              <input style={{ ...SD.inp, fontSize: 12, background: D.surface }} value={jBaseEditTask.en} onChange={e => setJBaseEditTask(p => ({ ...p, en: e.target.value }))} placeholder="English" />
                              <input style={{ ...SD.inp, fontSize: 12, background: D.surface }} value={jBaseEditTask.pt} onChange={e => setJBaseEditTask(p => ({ ...p, pt: e.target.value }))} placeholder="Português" />
                              <div style={{ position: 'relative' }}>
                                <Icon name="link" size={13} color={D.muted} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                <input style={{ ...SD.inp, fontSize: 12, paddingLeft: 30, background: D.surface }} value={jBaseEditTask.link || ''} onChange={e => setJBaseEditTask(p => ({ ...p, link: e.target.value }))} placeholder="Link (opcional)" />
                              </div>
                              <div style={{ display: 'flex', gap: 6 }}>
                                <select style={{ ...SD.inp, flex: 1, fontSize: 11, background: D.surface }} value={jBaseEditTask.cat} onChange={e => setJBaseEditTask(p => ({ ...p, cat: e.target.value }))}>
                                  {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                </select>
                                <button style={{ ...SD.btn(D.moss), fontSize: 11, padding: '7px 12px' }} onClick={() => {
                                  const updated = tasks.map(tk => tk.id === jBaseEditTask.id ? { ...tk, en: jBaseEditTask.en, pt: jBaseEditTask.pt, cat: jBaseEditTask.cat, link: jBaseEditTask.link || null } : tk)
                                  upDb({ [`jBase_${selJBase}_w${selJBaseWeek}`]: updated })
                                  setJBaseEditTask(null)
                                }}><Icon name="check" size={13} color="#fff" /></button>
                                <button style={{ ...SD.soft(D.muted, D.cream), fontSize: 11, padding: '7px 10px' }} onClick={() => setJBaseEditTask(null)}><Icon name="close" size={13} color={D.muted} /></button>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px' }}>
                              <span style={SD.pill(cm.bg, cm.tx)}><span style={SD.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                              <div style={{ flex: 1 }}>
                                <p style={{ ...sansD(600, 12.5), color: D.ink }}>{task.en}</p>
                                <p style={{ fontSize: 11, color: D.muted, fontStyle: 'italic' }}>{task.pt}</p>
                                {task.link && <a href={task.link} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: D.orange, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2, textDecoration: 'none' }}><Icon name="link" size={10} color={D.orange} />{task.link}</a>}
                                {r && <a href={r.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: D.cream, borderRadius: 99, padding: '3px 9px', fontSize: 10.5, fontWeight: 600, color: D.ink, textDecoration: 'none', fontFamily: F, border: `1px solid ${D.line}`, marginTop: 4 }}><Icon name={TYPE_ICON[r.type]} size={10} color={D.ink} /> {r.label}</a>}
                              </div>
                              <button style={{ background: D.cream, border: 'none', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setJBaseEditTask({ ...task })}><Icon name="edit" size={13} color={D.muted} /></button>
                              <button style={dangerIconBtn} onClick={() => {
                                const updated = tasks.filter(tk => tk.id !== task.id)
                                upDb({ [`jBase_${selJBase}_w${selJBaseWeek}`]: updated })
                              }}><Icon name="delete" size={13} color={D.clay} /></button>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <div style={{ background: D.cream, borderRadius: 13, padding: 14, border: `1px solid ${D.line}` }}>
                    <p style={{ ...sansD(700, 11.5), color: D.terra, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{lang === 'pt' ? 'Adicionar tarefa à base' : 'Add task to base'}</p>
                    <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder="Task (English)" value={nJBTaskEn} onChange={e => setNJBTaskEn(e.target.value)} />
                    <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder="Tradução (Português)" value={nJBTaskPt} onChange={e => setNJBTaskPt(e.target.value)} />
                    <div style={{ position: 'relative', marginBottom: 6 }}>
                      <Icon name="link" size={13} color={D.muted} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                      <input style={{ ...SD.inp, fontSize: 12, paddingLeft: 30, background: D.surface }} placeholder="Link (opcional)" value={nJBTaskLink} onChange={e => setNJBTaskLink(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <select style={{ ...SD.inp, flex: 1, fontSize: 12, background: D.surface }} value={nJBTaskCat} onChange={e => setNJBTaskCat(e.target.value)}>
                        {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                      </select>
                      <button style={{ ...SD.btn(D.terra), fontSize: 12, padding: '9px 14px' }} onClick={() => {
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
          })() : (
            <>
              {/* -------- Alunas por jornada -------- */}
              <div style={SD.lbl}>{lang === 'pt' ? 'Alunas por jornada' : 'Students per journey'}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
                {JOURNEYS.map(j => {
                  const count = (courseStudents || []).filter(s => csJids(s).includes(j.id)).length
                  const active = selJBase === j.id
                  return (
                    <button key={j.id} onClick={() => { setSelJBase(active ? null : j.id); setSelJBaseWeek(1); setJBaseEditTask(null) }}
                      style={{ display: 'flex', alignItems: 'center', gap: 14, background: D.surface, border: `1.5px solid ${active ? j.color : D.line}`, borderRadius: 16, padding: '15px 17px', cursor: 'pointer', textAlign: 'left', fontFamily: F, boxShadow: D.shadow, transition: 'all .15s' }}>
                      <div style={{ width: 5, height: 38, borderRadius: 99, background: j.color, flexShrink: 0 }} />
                      <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: D.ink }}>{lang === 'pt' ? j.pt : j.en}</div>
                        <div style={{ fontSize: 12.5, color: D.muted, marginTop: 3 }}>{j.weeks.length} {lang === 'pt' ? 'semanas' : 'weeks'}</div>
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: active ? '#fff' : j.color, background: active ? j.color : 'transparent', border: `1px solid ${j.color}`, padding: '5px 11px', borderRadius: 99, flexShrink: 0, whiteSpace: 'nowrap' }}>
                        {count === 1 ? (lang === 'pt' ? '1 aluna' : '1 student') : `${count} ${lang === 'pt' ? 'alunas' : 'students'}`}
                      </span>
                    </button>
                  )
                })}
              </div>

              {selJBase && (() => {
                const j = JOURNEY_MAP[selJBase]
                const count = (courseStudents || []).filter(s => csJids(s).includes(selJBase)).length
                return (
                  <div style={{ marginTop: 22, background: `linear-gradient(135deg, ${D.moss}, ${D.mossDeep})`, borderRadius: 18, padding: '22px 26px', color: '#fff', display: 'flex', alignItems: 'center', gap: 18, boxShadow: D.shadowLg, flexWrap: 'wrap' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 13, background: 'rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="edit" size={22} color="#fff" />
                    </div>
                    <div style={{ flex: 1, minWidth: 180 }}>
                      <div style={{ fontSize: 12.5, opacity: 0.85, fontWeight: 600, letterSpacing: 0.5 }}>{count} {lang === 'pt' ? (count === 1 ? 'aluna' : 'alunas') : (count === 1 ? 'student' : 'students')} · {lang === 'pt' ? 'EDITANDO' : 'EDITING'}</div>
                      <div style={{ ...serifD(500, 22), marginTop: 2 }}>{lang === 'pt' ? j.pt : j.en}</div>
                    </div>
                    <button style={{ background: '#fff', color: D.mossDeep, border: 'none', fontFamily: F, fontWeight: 700, fontSize: 14, padding: '11px 20px', borderRadius: 11, cursor: 'pointer' }} onClick={() => { setJBaseOpen(true); setJBaseEditTask(null) }}>
                      {lang === 'pt' ? 'Abrir editor →' : 'Open editor →'}
                    </button>
                  </div>
                )
              })()}

              {/* -------- Alunas matriculadas -------- */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '34px 0 14px', flexWrap: 'wrap', gap: 10 }}>
                <div style={{ ...SD.lbl, marginBottom: 0 }}>{lang === 'pt' ? 'Alunas matriculadas' : 'Enrolled students'}</div>
                <button style={{ ...SD.btn(D.orange), fontSize: 13, padding: '9px 15px', boxShadow: D.shadow }} onClick={() => setShowAddCourse(true)}>
                  <Icon name="add" size={15} color="#fff" />{lang === 'pt' ? 'Nova aluna' : 'New student'}
                </button>
              </div>

              {(courseStudents || []).length === 0 && (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <Icon name="graduation" size={48} color={D.line} />
                  <p style={{ fontSize: 14, color: D.muted, marginTop: 12 }}>{lang === 'pt' ? 'Nenhuma aluna no curso ainda.' : 'No course students yet.'}</p>
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {(courseStudents || []).map(s => {
                  const questions = db[`cq_${s.id}`] || []
                  const unanswered = questions.filter(x => !x.answer).length
                  return (
                    <div key={s.id} style={{ ...SD.card, padding: 22 }}>
                      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <Avatar seed={db[`avatar_${s.id}`] || s.avatar || 'Lily'} size={52} />
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 16, fontWeight: 700 }}>{s.name}</span>
                            <span style={SD.pill(s.active ? D.sageSoft : D.honeySoft, s.active ? D.mossDeep : D.honey)}>● {s.active ? 'Ativo' : 'Aguardando'}</span>
                            {unanswered > 0 && <span style={SD.pill(D.orangeSoft, D.orange)}>{unanswered} dúvida{unanswered > 1 ? 's' : ''}</span>}
                            {s.level && <span style={SD.pill(SIMPLE_COLOR[s.level][1], SIMPLE_COLOR[s.level][0])}><Icon name={SIMPLE_ICON[s.level]} size={11} color={SIMPLE_COLOR[s.level][0]} />{SIMPLE_LABEL[s.level]}</span>}
                          </div>
                          <div style={{ fontSize: 13, color: D.muted, marginTop: 5 }}>{s.email}</div>
                          <div style={{ display: 'flex', gap: 7, marginTop: 10, flexWrap: 'wrap' }}>
                            {csJids(s).map(jid => JOURNEY_MAP[jid] && (
                              <span key={jid} style={{ fontSize: 12, fontWeight: 600, color: JOURNEY_MAP[jid].color, background: JOURNEY_MAP[jid].color + '18', padding: '5px 11px', borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                <Icon name={JOURNEY_MAP[jid].icon} size={11} color={JOURNEY_MAP[jid].color} /> {lang === 'pt' ? JOURNEY_MAP[jid].pt : JOURNEY_MAP[jid].en}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                          <button style={SD.soft(s.active ? D.muted : D.mossDeep, s.active ? D.surfaceWarm : D.mossSoft)} onClick={() => upDb({ courseStudents: (courseStudents || []).map(x => x.id === s.id ? { ...x, active: !x.active } : x) })}>{s.active ? 'Desativar' : 'Ativar'}</button>
                          <button style={SD.soft(D.mossDeep, D.mossSoft)} onClick={() => { setSelCourseJrn(selCourseJrn === s.id ? null : s.id); setSelCourse(null) }}><Icon name="map" size={13} color={D.mossDeep} />Jornadas</button>
                          <button style={SD.soft(D.sky, D.skySoft)} onClick={() => onPreviewCourse(s.id)}><Icon name="globe" size={13} color={D.sky} />{lang === 'pt' ? 'Ver' : 'View'}</button>
                          <button style={SD.soft(D.terra, D.terraSoft)} onClick={() => { setSelCourse(selCourse === s.id ? null : s.id); setSelCourseJrn(null) }}><Icon name="feedback" size={13} color={D.terra} />Dúvidas</button>
                          <button style={SD.iconBtn(D.clay, D.claySoft)} onClick={() => setDelCourseConfirm(s)}><Icon name="delete" size={15} color={D.clay} /></button>
                        </div>
                      </div>

                      {selCourseJrn === s.id && (() => {
                        const jids = csJids(s)
                        const available = JOURNEYS.filter(j => !jids.includes(j.id))
                        const upJids = newJids => upDb({ courseStudents: (courseStudents || []).map(x => x.id === s.id ? { ...x, jids: newJids, jid: newJids[0] || null } : x) })
                        return (
                          <div style={{ marginTop: 16, borderTop: `1px solid ${D.line}`, paddingTop: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                              <p style={{ ...sansD(700, 13), color: D.ink }}>Jornadas da aluna</p>
                              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                <p style={{ fontSize: 12, color: D.muted, marginRight: 4 }}>Nível:</p>
                                {['beginner','intermediate','advanced'].map(k => (
                                  <button key={k} title={SIMPLE_LABEL[k]} onClick={() => upDb({ courseStudents: (courseStudents||[]).map(x => x.id === s.id ? {...x, level: x.level === k ? null : k} : x) })}
                                    style={{ padding: '5px 9px', borderRadius: 9, border: `1.5px solid ${s.level === k ? SIMPLE_COLOR[k][0] : D.line}`, background: s.level === k ? SIMPLE_COLOR[k][1] : D.surface, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                    <Icon name={SIMPLE_ICON[k]} size={13} color={s.level === k ? SIMPLE_COLOR[k][0] : D.muted} />
                                  </button>
                                ))}
                              </div>
                            </div>
                            {jids.length === 0 && <p style={{ fontSize: 12.5, color: D.muted, marginBottom: 10 }}>Nenhuma jornada atribuída.</p>}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                              {jids.map(jid => JOURNEY_MAP[jid] && (
                                <div key={jid} style={{ display: 'flex', alignItems: 'center', gap: 6, background: JOURNEY_MAP[jid].color + '15', border: `1.5px solid ${JOURNEY_MAP[jid].color}44`, borderRadius: 10, padding: '6px 10px' }}>
                                  <Icon name={JOURNEY_MAP[jid].icon} size={14} color={JOURNEY_MAP[jid].color} />
                                  <p style={{ ...sansD(600, 12.5), color: D.ink }}>{JOURNEY_MAP[jid].pt}</p>
                                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: D.muted, fontSize: 14, padding: '0 2px', lineHeight: 1 }} onClick={() => upJids(jids.filter(x => x !== jid))}>×</button>
                                </div>
                              ))}
                            </div>
                            {available.length > 0 && (
                              <div style={{ display: 'flex', gap: 8 }}>
                                <select style={{ ...SD.inp, flex: 1 }} value={addJrnId} onChange={e => setAddJrnId(e.target.value)}>
                                  <option value="">Adicionar jornada...</option>
                                  {available.map(j => <option key={j.id} value={j.id}>{j.pt}</option>)}
                                </select>
                                <button style={{ ...SD.btn(D.moss), padding: '0 16px' }} onClick={() => { if (addJrnId) { upJids([...jids, addJrnId]); setAddJrnId('') } }}>
                                  <Icon name="add" size={14} color="#fff" />
                                </button>
                              </div>
                            )}
                          </div>
                        )
                      })()}

                      {selCourse === s.id && (
                        <div style={{ marginTop: 16, borderTop: `1px solid ${D.line}`, paddingTop: 16 }}>
                          {questions.length === 0 && <p style={{ fontSize: 13, color: D.muted }}>Nenhuma dúvida ainda.</p>}
                          {questions.map((qs, qi) => (
                            <div key={qs.id} style={{ background: D.surfaceWarm, borderRadius: 13, padding: 14, marginBottom: 8, border: `1px solid ${D.line}` }}>
                              <p style={{ ...sansD(600, 13.5), color: D.ink, marginBottom: 4 }}>{qs.text}</p>
                              <p style={{ fontSize: 11.5, color: D.muted, marginBottom: 8 }}>{qs.date}</p>
                              {qs.answer
                                ? <div style={{ background: D.orangeSoft, borderRadius: 10, padding: '8px 10px', borderLeft: `3px solid ${D.orange}` }}><p style={{ fontSize: 12.5, color: D.ink }}>{qs.answer}</p></div>
                                : <div>
                                    <textarea style={{ ...SD.ta, marginBottom: 6, fontSize: 12, background: D.surface }} rows={2} placeholder="Escreva sua resposta..." value={courseAnswers[qs.id] || ''} onChange={e => setCourseAnswers(p => ({ ...p, [qs.id]: e.target.value }))} />
                                    <button style={{ ...SD.btn(D.orange), fontSize: 12, padding: '8px 12px' }} onClick={() => {
                                      if (!courseAnswers[qs.id]?.trim()) return
                                      const k = `cq_${s.id}`
                                      upDb({ [k]: (db[k] || []).map((x, i) => i === qi ? { ...x, answer: courseAnswers[qs.id].trim() } : x) })
                                      setCourseAnswers(p => { const n = { ...p }; delete n[qs.id]; return n })
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

              {/* -------- Cadastros pendentes -------- */}
              {(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').length > 0 && (
                <div style={{ ...SD.card, marginTop: 24, border: `1.5px solid ${D.orange}55`, background: D.surfaceWarm }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: D.orange }} />
                    <p style={{ ...sansD(700, 13.5), color: D.ink }}>{lang === 'pt' ? 'Cadastros Pendentes' : 'Pending Registrations'}</p>
                    <span style={SD.pill(D.orange, '#fff')}>{(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').length}</span>
                  </div>
                  {(cadastrosPendentes || []).filter(c => c.status === 'aguardando_pagamento').map(c => (
                    <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', background: D.surface, borderRadius: 13, marginBottom: 8, border: `1px solid ${D.line}`, flexWrap: 'wrap' }}>
                      <div style={{ flex: 1, minWidth: 160 }}>
                        <p style={{ ...sansD(600, 13.5), color: D.ink }}>{c.nome}</p>
                        <p style={{ fontSize: 11.5, color: D.muted }}>{c.email} · @{c.usuario}</p>
                        {c.senha && <p style={{ ...sansD(600, 11.5), color: D.moss, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="key" size={11} color={D.moss} />{c.senha}</p>}
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button style={{ ...SD.soft(D.mossDeep, D.mossSoft), fontSize: 12 }}
                          onClick={() => {
                            setNewName(c.nome)
                            setNewUser(c.usuario)
                            setNewPass(c.senha || Math.random().toString(36).slice(2, 8))
                            setFromCadastroId(c.id)
                            setShowAdd(true)
                          }}>
                          <Icon name="add" size={13} color={D.mossDeep} />{lang === 'pt' ? 'Criar conta' : 'Create account'}
                        </button>
                        <button style={dangerIconBtn}
                          onClick={() => upDb({ cadastros_pendentes: (cadastrosPendentes || []).filter(x => x.id !== c.id) })}>
                          <Icon name="delete" size={14} color={D.clay} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      )}

      {/* ============ FINANCEIRO ============ */}
      {section === 'financeiro' && (
        <main className="fu" style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '22px 14px 70px' : '30px 20px 80px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
            <div>
              <h2 style={{ ...serifD(500, 28), color: D.ink }}>{lang === 'pt' ? 'Financeiro' : 'Finances'}</h2>
              <div style={{ fontSize: 14.5, color: D.muted, marginTop: 4 }}>{lang === 'pt' ? `controle de mensalidades — ${finLabel.toLowerCase()}` : `tuition control — ${finLabel}`}</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <button style={{ width: 34, height: 34, borderRadius: 10, border: `1px solid ${D.line}`, background: D.surface, cursor: 'pointer', fontSize: 15, color: D.muted }} onClick={() => setFinMonth(shiftMonth(finMonth, -1))}>‹</button>
              <span style={{ fontSize: 14, fontWeight: 700, minWidth: 110, textAlign: 'center' }}>{finLabel}</span>
              <button style={{ width: 34, height: 34, borderRadius: 10, border: `1px solid ${D.line}`, background: D.surface, cursor: 'pointer', fontSize: 15, color: D.muted }} onClick={() => setFinMonth(shiftMonth(finMonth, 1))}>›</button>
              <button style={{ ...SD.btn(D.moss), boxShadow: D.shadow }} onClick={() => { setShowAddPay(v => !v); setPayErr('') }}>
                <Icon name="add" size={15} color="#fff" />{lang === 'pt' ? 'Nova mensalidade' : 'New payment'}
              </button>
            </div>
          </div>

          {/* Nova mensalidade form */}
          {showAddPay && (
            <div style={{ ...SD.card, marginBottom: 22 }}>
              <div style={SD.lbl}>{lang === 'pt' ? 'Nova mensalidade' : 'New payment'}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <select style={{ ...SD.inp, flex: 2, minWidth: 180 }} value={paySel} onChange={e => {
                  const v = e.target.value; setPaySel(v)
                  if (v) {
                    const [kind, ...rest] = v.split(':'); const id = rest.join(':')
                    const found = kind === 'p' ? students.find(s => s.id === id) : (courseStudents || []).find(s => s.id === id)
                    if (found) setPayName(found.name)
                    setPayType(kind === 'p' ? 'particular' : 'curso')
                  }
                }}>
                  <option value="">{lang === 'pt' ? 'Aluno (ou digite o nome ao lado)...' : 'Student (or type a name)...'}</option>
                  {students.map(s => <option key={`p:${s.id}`} value={`p:${s.id}`}>{s.name} · {lang === 'pt' ? 'particular' : 'private'}</option>)}
                  {(courseStudents || []).map(s => <option key={`c:${s.id}`} value={`c:${s.id}`}>{s.name} · curso</option>)}
                </select>
                <input style={{ ...SD.inp, flex: 2, minWidth: 150 }} placeholder={lang === 'pt' ? 'Nome (texto livre)' : 'Name (free text)'} value={payName} onChange={e => { setPayName(e.target.value); setPaySel('') }} />
                <select style={{ ...SD.inp, flex: 1, minWidth: 130 }} value={payType} onChange={e => setPayType(e.target.value)}>
                  <option value="particular">{lang === 'pt' ? 'Particular' : 'Private'}</option>
                  <option value="curso">Curso Jornadas</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginTop: 8 }}>
                <input style={{ ...SD.inp, flex: 1, minWidth: 110 }} type="number" min="0" step="0.01" placeholder={lang === 'pt' ? 'Valor (R$)' : 'Amount (R$)'} value={payAmount} onChange={e => setPayAmount(e.target.value)} />
                <input style={{ ...SD.inp, flex: 1, minWidth: 130 }} type="month" value={payMonth} onChange={e => setPayMonth(e.target.value)} />
                <input style={{ ...SD.inp, flex: 1, minWidth: 110 }} type="number" min="1" max="31" placeholder={lang === 'pt' ? 'Dia venc.' : 'Due day'} value={payDueDay} onChange={e => setPayDueDay(e.target.value)} />
                <button style={SD.btn(D.moss)} onClick={addPayment}><Icon name="save" size={14} color="#fff" />{t.save}</button>
                <button style={{ ...SD.soft(D.muted, D.surfaceWarm), border: `1px solid ${D.line}` }} onClick={() => { setShowAddPay(false); setPayErr('') }}>{t.cancel}</button>
              </div>
              {payErr && <p style={{ ...sansD(600, 12), color: D.clay, marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="alert" size={13} color={D.clay} />{payErr}</p>}
            </div>
          )}

          {/* Stat cards (clickable filters) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14, marginBottom: 22 }}>
            {[
              ['pago',     lang === 'pt' ? 'Recebido no mês' : 'Received this month', finRecebido, D.moss, D.sage, D.sageSoft],
              ['pendente', lang === 'pt' ? 'A receber' : 'To receive',                finAReceber, D.honey, D.honey, D.honeySoft],
              ['atrasado', lang === 'pt' ? 'Em atraso' : 'Overdue',                   finAtraso, D.clay, D.clay, D.claySoft],
              ['todos',    lang === 'pt' ? 'Total previsto' : 'Expected total',        finPrevisto, D.sky, D.sky, D.skySoft],
            ].map(([key, label, val, vc, bd, soft]) => {
              const active = finStatus === key
              return (
                <button key={key} onClick={() => setFinStatus(key)}
                  style={{ textAlign: 'left', fontFamily: F, cursor: 'pointer', background: `linear-gradient(160deg, ${soft}, ${D.surface})`, border: `1.5px solid ${bd}`, borderRadius: 16, padding: '18px 20px', boxShadow: active ? `0 0 0 3px ${soft}` : 'none', transition: 'all .15s' }}>
                  <div style={{ fontSize: 12.5, color: D.muted, fontWeight: 600 }}>{label}</div>
                  <div style={{ ...serifD(500, 27), color: vc, lineHeight: 1, marginTop: 8 }}>{brl(val)}</div>
                </button>
              )
            })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {/* payments list */}
            <div style={{ background: D.surface, border: `1px solid ${D.line}`, borderRadius: 20, padding: 24, boxShadow: D.shadow }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
                <div style={{ ...SD.lbl, marginBottom: 0 }}>{lang === 'pt' ? 'Mensalidades' : 'Payments'} · {finFiltered.length}</div>
                <div style={{ fontSize: 13, color: D.muted }}>{lang === 'pt' ? 'Soma' : 'Sum'}: <strong style={{ color: D.ink, fontSize: 14.5 }}>{brl(finFilteredTotal)}</strong></div>
              </div>

              {/* filtros de status */}
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 10 }}>
                {[
                  ['todos',    lang === 'pt' ? 'Todos' : 'All',          D.moss],
                  ['pago',     lang === 'pt' ? 'Pagos' : 'Paid',         D.moss],
                  ['pendente', lang === 'pt' ? 'Pendentes' : 'Pending',  D.honey],
                  ['atrasado', lang === 'pt' ? 'Atrasados' : 'Overdue',  D.clay],
                ].map(([key, label, color]) => {
                  const active = finStatus === key
                  return (
                    <button key={key} onClick={() => setFinStatus(key)}
                      style={{ fontFamily: F, fontSize: 12.5, fontWeight: 700, padding: '8px 14px', borderRadius: 99, cursor: 'pointer', border: `1px solid ${active ? color : D.line}`, background: active ? color : D.surfaceWarm, color: active ? '#fff' : D.muted, transition: 'all .15s' }}>{label}</button>
                  )
                })}
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
                {[
                  ['todos',      lang === 'pt' ? 'Todos' : 'All'],
                  ['particular', lang === 'pt' ? 'Particulares' : 'Private'],
                  ['curso',      'Curso Jornadas'],
                ].map(([key, label]) => {
                  const active = finType === key
                  return (
                    <button key={key} onClick={() => setFinType(key)}
                      style={{ fontFamily: F, fontSize: 12.5, fontWeight: 700, padding: '8px 14px', borderRadius: 99, cursor: 'pointer', border: `1px solid ${active ? D.sky : D.line}`, background: active ? D.sky : D.surfaceWarm, color: active ? '#fff' : D.muted, transition: 'all .15s' }}>{label}</button>
                  )
                })}
                <div style={{ position: 'relative', flex: 1, minWidth: 150 }}>
                  <Icon name="search" size={15} color={D.muted} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
                  <input style={{ width: '100%', padding: '9px 12px 9px 34px', border: `1px solid ${D.line}`, borderRadius: 99, fontFamily: F, fontSize: 13, background: D.surfaceWarm, color: D.ink, outline: 'none' }} placeholder={lang === 'pt' ? 'Buscar aluno...' : 'Search student...'} value={finQuery} onChange={e => setFinQuery(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {finFiltered.map(p => {
                  const st = payStatus(p)
                  const sm = ST_META[st]
                  return (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderRadius: 13, background: D.surfaceWarm, border: `1px solid ${D.line}`, flexWrap: 'wrap' }}>
                      <div style={avCircle(nameColor(p.name), 40)}>{initialsOf(p.name)}</div>
                      <div style={{ flex: 1, minWidth: 130 }}>
                        <div style={{ fontSize: 14.5, fontWeight: 700 }}>{p.name}</div>
                        <div style={{ fontSize: 12.5, color: D.muted, marginTop: 1 }}>{payTypeLabel(p.type)} · {payDetailLine(p)}</div>
                      </div>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: D.ink }}>{brl(p.amount)}</div>
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: sm.color, background: sm.soft, padding: '4px 11px', borderRadius: 99, whiteSpace: 'nowrap' }}>{lang === 'pt' ? sm.pt : sm.en}</span>
                      {st !== 'pago' && (
                        <button style={{ fontFamily: F, fontSize: 12, fontWeight: 700, padding: '7px 12px', borderRadius: 9, border: `1px solid ${D.mossSoft}`, background: D.mossSoft, color: D.mossDeep, cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={() => markPaid(p)}>
                          {lang === 'pt' ? 'Marcar pago' : 'Mark paid'}
                        </button>
                      )}
                      <button title={lang === 'pt' ? 'Excluir' : 'Delete'} style={{ ...dangerIconBtn, padding: '6px 8px' }} onClick={() => updatePayments(payments.filter(x => x.id !== p.id))}>
                        <Icon name="delete" size={13} color={D.clay} />
                      </button>
                    </div>
                  )
                })}
                {finFiltered.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '40px 20px', color: D.muted, fontSize: 14 }}>
                    {lang === 'pt' ? 'Nenhuma mensalidade com esses filtros.' : 'No payments match these filters.'}
                  </div>
                )}
              </div>
            </div>

            {/* revenue chart */}
            <div style={{ background: D.surface, border: `1px solid ${D.line}`, borderRadius: 20, padding: 24, boxShadow: D.shadow }}>
              <div style={{ ...SD.lbl, marginBottom: 6 }}>{lang === 'pt' ? 'Receita (6 meses)' : 'Revenue (6 months)'}</div>
              <div style={{ ...serifD(400, 15), color: D.muted, fontStyle: 'italic', marginBottom: 20 }}>{lang === 'pt' ? 'mensalidades pagas por mês' : 'paid tuition per month'}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 170 }}>
                {revMonths.map((mk, i) => {
                  const v = revSums[i]
                  const [, mm] = mk.split('-').map(Number)
                  const last = i === revMonths.length - 1
                  return (
                    <div key={mk} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: D.mossDeep }}>{v >= 1000 ? `R$${(v / 1000).toFixed(1).replace('.', ',')}k` : `R$${v}`}</div>
                      <div style={{ width: '100%', height: `${Math.round(v / revMax * 100)}%`, borderRadius: '8px 8px 4px 4px', background: last ? D.moss : D.sage, minHeight: v > 0 ? 4 : 0, transition: 'height .2s' }} />
                      <div style={{ fontSize: 11.5, color: D.muted, fontWeight: 600 }}>{t.monthNames[(mm || 1) - 1].slice(0, 3)}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ============ ALUNOS ============ */}
      {section === 'students' && (
        <main style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '22px 14px 70px' : '30px 20px 80px', width: '100%' }}>
          {!sel && (
            <div className="fu">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
                <div>
                  <h2 style={{ ...serifD(500, 28), color: D.ink }}>{lang === 'pt' ? 'Meus alunos' : 'My students'}</h2>
                  <div style={{ fontSize: 14.5, color: D.muted, marginTop: 4 }}>{students.length} {lang === 'pt' ? (students.length === 1 ? 'aluno particular' : 'alunos particulares') : (students.length === 1 ? 'private student' : 'private students')}</div>
                </div>
                <button style={{ ...SD.btn(D.moss), fontSize: 14, padding: '12px 18px', boxShadow: D.shadow }} onClick={() => setShowAdd(true)}>
                  <Icon name="add" size={16} color="#fff" />{lang === 'pt' ? 'Novo aluno' : 'New student'}
                </button>
              </div>

              {/* mini stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 22 }}>
                {(() => {
                  const band = pre => students.filter(s => pre.includes(lvOf(s.id))).length
                  return [
                    [band(['A1','A2']), lang === 'pt' ? 'Iniciantes (A1–A2)' : 'Beginners (A1–A2)', D.sky, D.skySoft],
                    [band(['B1','B2']), lang === 'pt' ? 'Intermediários (B1–B2)' : 'Intermediate (B1–B2)', D.honey, D.honeySoft],
                    [band(['C1','C2']), lang === 'pt' ? 'Avançados (C1–C2)' : 'Advanced (C1–C2)', D.clay, D.claySoft],
                    [students.length, lang === 'pt' ? 'Total de alunos' : 'Total students', D.moss, D.sageSoft, D.sage],
                  ].map(([n, label, color, soft, border], i) => (
                    <div key={i} style={{ background: `linear-gradient(160deg, ${soft}, ${D.surface})`, border: `1px solid ${border || color}`, borderRadius: 16, padding: '18px 20px' }}>
                      <div style={{ ...serifD(400, 30), color, lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: 12.5, color: D.muted, marginTop: 6 }}>{label}</div>
                    </div>
                  ))
                })()}
              </div>

              {/* pending activation */}
              {students.filter(s => s.active === false).length > 0 && (
                <div style={{ ...SD.card, marginBottom: 18, border: `1.5px solid ${D.clay}55`, background: D.surfaceWarm }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: D.clay }} />
                    <p style={{ ...sansD(700, 13.5), color: D.ink }}>{lang === 'pt' ? 'Novas alunas (aguardando ativação)' : 'New students (pending activation)'}</p>
                    <span style={SD.pill(D.clay, '#fff')}>{students.filter(s => s.active === false).length}</span>
                  </div>
                  {students.filter(s => s.active === false).map(s => (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', background: D.surface, borderRadius: 13, marginBottom: 8, border: `1px solid ${D.line}`, flexWrap: 'wrap' }}>
                      <Avatar seed={db[`avatar_${s.id}`] || s.avatar || 'Lily'} size={36} />
                      <div style={{ flex: 1, minWidth: 120 }}>
                        <p style={{ ...sansD(600, 13.5), color: D.ink }}>{s.name}</p>
                        <p style={{ fontSize: 11.5, color: D.muted }}>{s.email} · {s.phone}</p>
                        <p style={{ fontSize: 11, color: D.muted }}>@{s.username}</p>
                      </div>
                      <button style={{ ...SD.soft(D.mossDeep, D.mossSoft), fontSize: 12 }}
                        onClick={() => upDb({ students: students.map(x => x.id === s.id ? { ...x, active: true } : x) })}>
                        <Icon name="check" size={13} color={D.mossDeep} />{lang === 'pt' ? 'Ativar' : 'Activate'}
                      </button>
                      <button style={dangerIconBtn}
                        onClick={() => upDb({ students: students.filter(x => x.id !== s.id) })}>
                        <Icon name="delete" size={14} color={D.clay} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* search */}
              <div style={{ position: 'relative', marginBottom: 16 }}>
                <Icon name="search" size={18} color={D.muted} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
                <input style={{ width: '100%', padding: '14px 16px 14px 44px', border: `1px solid ${D.line}`, borderRadius: 14, fontFamily: F, fontSize: 14.5, background: D.surface, color: D.ink, boxShadow: D.shadow, outline: 'none' }}
                  placeholder={lang === 'pt' ? 'Buscar aluno pelo nome ou @usuário...' : 'Search by name or @username...'} value={q} onChange={e => setQ(e.target.value)} />
              </div>

              {/* list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {sorted.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '50px 20px', color: D.muted, fontSize: 14.5 }}>
                    {q ? (lang === 'pt' ? `Nenhum aluno encontrado para “${q}”.` : `No students found for “${q}”.`) : t.noSt}
                  </div>
                )}
                {sorted.map(s => {
                  const lv = lvOf(s.id), jrn = journeyOf(s.id)
                  const [lc, lsoft] = bandColor(lv)
                  return (
                    <div key={s.id} style={{ background: D.surface, border: `1px solid ${D.line}`, borderRadius: 16, padding: '16px 20px', boxShadow: D.shadow, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer', transition: 'all .15s' }}
                      onClick={() => { setSel(s.id); setDtab('level'); setJWeek(1) }}>
                      <Avatar seed={db[`avatar_${s.id}`] || s.avatar || 'Lily'} size={46} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 15.5, fontWeight: 700 }}>{s.name}</span>
                          <span style={{ fontSize: 11.5, fontWeight: 700, color: lc, background: lsoft, padding: '3px 10px', borderRadius: 99 }}>{lv}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 5, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 13, color: D.muted }}>@{s.username}</span>
                          {jrn && <span style={{ fontSize: 12, fontWeight: 600, color: D.mossDeep, background: D.mossSoft, padding: '4px 10px', borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name={jrn.icon} size={11} color={D.mossDeep} />{lang === 'pt' ? jrn.pt : jrn.en}</span>}
                        </div>
                      </div>
                      <Icon name="next" size={20} color={D.muted} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* -------- Student detail view -------- */}
          {selS && (
            <div className="fu">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                <button style={SD.soft(D.ink, D.cream)} onClick={() => setSel(null)}><Icon name="back" size={15} color={D.ink} />{lang === 'pt' ? 'Alunos' : 'Students'}</button>
                <div style={{ flex: 1 }} />
                <button style={SD.soft(D.sky, D.skySoft)} onClick={() => onPreview(selS.id)}><Icon name="globe" size={13} color={D.sky} />{t.previewBtn}</button>
                <button style={SD.iconBtn(D.clay, D.claySoft)} onClick={() => setDelConfirm(selS)}><Icon name="delete" size={15} color={D.clay} /></button>
              </div>

              <div style={{ ...SD.card, display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
                <Avatar seed={db[`avatar_${selS.id}`] || selS.avatar} size={56} />
                <div style={{ flex: 1, minWidth: 180 }}>
                  <h2 style={{ ...serifD(500, 24), color: D.ink }}>{selS.name}</h2>
                  <p style={{ fontSize: 13, color: D.muted, marginTop: 2 }}>@{selS.username} · {lvOf(selS.id)} · {pctOf(selS.id)}%</p>
                  {journeyOf(selS.id) && (
                    <span style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 600, color: D.mossDeep, background: D.mossSoft, borderRadius: 99, padding: '4px 11px' }}>
                      <Icon name={journeyOf(selS.id).icon} size={12} color={D.mossDeep} /> {lang === 'pt' ? journeyOf(selS.id).pt : journeyOf(selS.id).en}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
                {TABS.map(([k, lb]) => (
                  <button key={k} style={{ ...SD.chip, background: dtab === k ? D.moss : D.surface, color: dtab === k ? '#fff' : D.muted, border: `1px solid ${dtab === k ? D.moss : D.line}`, padding: '8px 14px' }} onClick={() => setDtab(k)}>{lb}</button>
                ))}
              </div>

              {dtab === 'level' && (
                <div>
                  <div style={{ ...SD.card, marginBottom: 14 }}>
                    <p style={SD.lbl}>{t.levelLabel}</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                      {CEFR_META.map(c => {
                        const active = (db[`lv_${selS.id}`] || 'A1') === c.level
                        const [bc, bsoft] = bandColor(c.level)
                        return <button key={c.level} style={{ ...SD.chip, background: active ? bc : bsoft, color: active ? '#fff' : bc, fontSize: 13, padding: '8px 16px', fontWeight: 700, border: `1px solid ${bc}` }} onClick={() => upDb({ [`lv_${selS.id}`]: c.level })}><Icon name={c.icon} size={14} color={active ? '#fff' : bc} />{c.level}</button>
                      })}
                    </div>
                    {(() => { const sl = SIMPLE_LEVEL[db[`lv_${selS.id}`] || 'A1']; return (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: D.skySoft, borderRadius: 12, padding: '9px 13px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 12.5, color: D.sky }}>Nível nas Jornadas:</span>
                        <span style={{ ...sansD(700, 13), color: D.sky, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name={SIMPLE_ICON[sl]} size={13} color={D.sky} />{SIMPLE_LABEL[sl]}</span>
                        <span style={{ fontSize: 11.5, color: D.muted }}>(as tasks das jornadas se adaptam automaticamente)</span>
                      </div>
                    )})()}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px,1fr))', gap: 10 }}>
                    {(PLAN[lvOf(selS.id)] || []).map(w => {
                      const jid = db[`jrn_${selS.id}`]
                      const jChecked = db[`jsd_${selS.id}`] || {}
                      const wt = jid ? getJTasks(selS.id, jid, w.week) : []
                      const p = wt.length ? Math.round(wt.filter(tk => jChecked[tk.id]).length / wt.length * 100) : 0
                      return (
                        <div key={w.week} style={{ ...SD.card, textAlign: 'center', padding: '14px 8px', cursor: 'pointer' }} onClick={() => { setDtab('journey'); setJWeek(w.week) }}>
                          <p style={{ ...sansD(700, 10.5), color: D.muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{t.week} {w.week}</p>
                          <p style={{ ...serifD(500, 22), color: D.ink, marginTop: 4 }}>{p}%</p>
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
                    <div style={{ ...SD.card, marginBottom: 14 }}>
                      <p style={SD.lbl}>{lang === 'pt' ? 'Atribuir jornada' : 'Assign journey'}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {JOURNEYS.map(j => (
                          <button key={j.id} onClick={() => { upDb({ [`jrn_${selS.id}`]: j.id }); setJWeek(1) }}
                            style={{ ...SD.chip, background: currentJid === j.id ? j.color : D.surfaceWarm, color: currentJid === j.id ? '#fff' : D.muted, fontSize: 12, padding: '8px 14px', border: `1.5px solid ${currentJid === j.id ? j.color : D.line}` }}>
                            <Icon name={j.icon} size={13} color={currentJid === j.id ? '#fff' : D.muted} /> {lang === 'pt' ? j.pt : j.en}
                          </button>
                        ))}
                        {currentJid && <button onClick={() => upDb({ [`jrn_${selS.id}`]: null })} style={{ ...SD.chip, background: D.claySoft, color: D.clay, fontSize: 11 }}><Icon name="close" size={11} color={D.clay} />{lang === 'pt' ? 'Remover' : 'Remove'}</button>}
                      </div>
                    </div>
                    {currentJ && (
                      <>
                        <div style={{ background: currentJ.color, borderRadius: 16, padding: '16px 20px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12, boxShadow: D.shadow }}>
                          <Icon name={currentJ.icon} size={26} color="#fff" />
                          <div>
                            <p style={{ ...serifD(500, 18), color: '#fff' }}>{lang === 'pt' ? currentJ.pt : currentJ.en}</p>
                            <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.8)' }}>{lang === 'pt' ? currentJ.desc.pt : currentJ.desc.en}</p>
                          </div>
                        </div>
                        <div style={{ overflowX: 'auto', marginBottom: 14 }}>
                          <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4, alignItems: 'center' }}>
                            {allW.map(w => (
                              <button key={w.week} onClick={() => setJWeek(w.week)} style={{ ...SD.chip, background: jWeek === w.week ? currentJ.color : D.surface, color: jWeek === w.week ? '#fff' : D.muted, border: `1px solid ${jWeek === w.week ? currentJ.color : D.line}`, fontSize: 11.5, padding: '7px 12px', whiteSpace: 'nowrap' }}>
                                {lang === 'pt' ? 'Sem' : 'Wk'} {w.week} · {jPct(w.week)}%{isExtraWeek(w.week) ? ' +' : ''}
                              </button>
                            ))}
                            <input style={{ ...SD.inp, width: 130, fontSize: 11, padding: '7px 9px', background: D.surface }} placeholder={lang === 'pt' ? 'Tema (inglês)' : 'Theme (English)'} value={nJWeekEn} onChange={e => setNJWeekEn(e.target.value)} />
                            <input style={{ ...SD.inp, width: 120, fontSize: 11, padding: '7px 9px', background: D.surface }} placeholder={lang === 'pt' ? 'Tema (pt)' : 'Theme (pt)'} value={nJWeekPt} onChange={e => setNJWeekPt(e.target.value)} />
                            <button style={{ ...SD.btn(D.moss), fontSize: 11, padding: '8px 11px', whiteSpace: 'nowrap' }} onClick={() => addJExtraWeek(selS.id, currentJid)}><Icon name="add" size={12} color="#fff" />{lang === 'pt' ? 'Semana' : 'Week'}</button>
                          </div>
                        </div>
                        {curW && (
                          <div style={SD.card}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                              <div>
                                <p style={{ ...sansD(700, 15), color: D.ink }}>{lang === 'pt' ? 'Semana' : 'Week'} {curW.week}: {curW.theme[lang]}</p>
                                <p style={{ fontSize: 12, color: D.muted, marginTop: 2 }}>{tasks.length} tasks{isCustom ? ` · ${lang === 'pt' ? 'personalizada' : 'customized'}` : ''}</p>
                              </div>
                              <div style={{ display: 'flex', gap: 6 }}>
                                {isCustom && <button style={{ ...SD.chip, background: D.cream, color: D.muted }} onClick={() => resetJWeek(selS.id, currentJid, jWeek)}><Icon name="reset" size={11} color={D.muted} />{lang === 'pt' ? 'Resetar' : 'Reset'}</button>}
                                {isExtraWeek(jWeek) && <button style={{ ...SD.chip, background: D.claySoft, color: D.clay }} onClick={() => delJExtraWeek(selS.id, currentJid, jWeek)}><Icon name="delete" size={11} color={D.clay} />{lang === 'pt' ? 'Remover semana' : 'Remove week'}</button>}
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                              {tasks.length === 0 && <p style={{ fontSize: 13, color: D.muted, textAlign: 'center', padding: '12px 0' }}>{t.noTasks}</p>}
                              {tasks.map((task, ti) => {
                                const cm = CAT[task.cat] || CAT.grammar
                                const isEditing = jEditTask?.id === task.id
                                const stLevel = SIMPLE_LEVEL[db[`lv_${selS.id}`] || 'A1'] || 'beginner'
                                const r = pickResource(JOURNEY_RESOURCES[currentJid]?.[stLevel]?.[jWeek], task.cat, ti)
                                const hint = !task.variations?.[stLevel] ? levelHint(stLevel, task.cat, lang) : null
                                return (
                                  <div key={task.id} style={{ background: D.surfaceWarm, borderRadius: 13, border: `1px solid ${D.line}`, overflow: 'hidden' }}>
                                    {isEditing ? (
                                      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                                        <input style={{ ...SD.inp, fontSize: 12, background: D.surface }} value={jEditTask.en} onChange={e => setJEditTask(p => ({ ...p, en: e.target.value }))} placeholder="English" />
                                        <input style={{ ...SD.inp, fontSize: 12, background: D.surface }} value={jEditTask.pt} onChange={e => setJEditTask(p => ({ ...p, pt: e.target.value }))} placeholder="Português" />
                                        <div style={{ position: 'relative' }}>
                                          <Icon name="link" size={13} color={D.muted} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                          <input style={{ ...SD.inp, fontSize: 12, paddingLeft: 30, background: D.surface }} value={jEditTask.link || ''} onChange={e => setJEditTask(p => ({ ...p, link: e.target.value }))} placeholder="Link (opcional)" />
                                        </div>
                                        <div style={{ display: 'flex', gap: 6 }}>
                                          <select style={{ ...SD.inp, flex: 1, fontSize: 11, background: D.surface }} value={jEditTask.cat} onChange={e => setJEditTask(p => ({ ...p, cat: e.target.value }))}>
                                            {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                          </select>
                                          <button style={{ ...SD.btn(D.moss), fontSize: 11, padding: '7px 12px' }} onClick={() => saveJTask(selS.id, currentJid, jWeek, jEditTask.id, jEditTask.en, jEditTask.pt, jEditTask.cat, jEditTask.link)}><Icon name="check" size={13} color="#fff" /></button>
                                          <button style={{ ...SD.soft(D.muted, D.cream), fontSize: 11, padding: '7px 10px' }} onClick={() => setJEditTask(null)}><Icon name="close" size={13} color={D.muted} /></button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px' }}>
                                          <span style={SD.pill(cm.bg, cm.tx)}><span style={SD.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                                          <div style={{ flex: 1 }}>
                                            <p style={{ ...sansD(600, 12.5), color: D.ink }}>{task.en}</p>
                                            <p style={{ fontSize: 11, color: D.muted, fontStyle: 'italic' }}>{task.pt}</p>
                                            {hint && <p style={{ fontSize: 11, color: stLevel === 'advanced' ? D.moss : D.orange, marginTop: 2, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 4 }}><Icon name={stLevel === 'advanced' ? 'trendingUp' : 'lightbulb'} size={10} color={stLevel === 'advanced' ? D.moss : D.orange} />{hint}</p>}
                                            {task.link && <a href={task.link} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: D.orange, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2, textDecoration: 'none' }}><Icon name="link" size={10} color={D.orange} />{task.link}</a>}
                                            {r && <a href={r.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: D.cream, borderRadius: 99, padding: '3px 9px', fontSize: 10.5, fontWeight: 600, color: D.ink, textDecoration: 'none', fontFamily: F, border: `1px solid ${D.line}`, marginTop: 4 }}><Icon name={TYPE_ICON[r.type]} size={10} color={D.ink} /> {r.label}</a>}
                                          </div>
                                          <button title={lang === 'pt' ? 'Atividades' : 'Activities'}
                                            style={{ background: actExpandTask === task.id ? D.orangeSoft : D.cream, border: `1px solid ${actExpandTask === task.id ? D.orange : D.line}`, borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                            onClick={() => setActExpandTask(actExpandTask === task.id ? null : task.id)}>
                                            <Icon name="target" size={13} color={actExpandTask === task.id ? D.orange : D.muted} />
                                          </button>
                                          <button style={{ background: D.cream, border: 'none', borderRadius: 8, padding: '7px 9px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setJEditTask({ ...task })}><Icon name="edit" size={13} color={D.muted} /></button>
                                          <button style={dangerIconBtn} onClick={() => delJTask(selS.id, currentJid, jWeek, task.id)}><Icon name="delete" size={13} color={D.clay} /></button>
                                        </div>
                                        {actExpandTask === task.id && (
                                          <div style={{ padding: '0 12px 12px' }}>
                                            <ActivityEditor
                                              acts={db[`acts_${currentJid}_w${jWeek}_${task.id}`] || []}
                                              lang={lang}
                                              onChange={acts => upDb({ [`acts_${currentJid}_w${jWeek}_${task.id}`]: acts })}
                                            />
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                            <div style={{ background: D.cream, borderRadius: 13, padding: 14, border: `1px solid ${D.line}` }}>
                              <p style={{ ...sansD(700, 11.5), color: D.terra, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{t.addTask}</p>
                              <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder="Task (English)" value={nJTaskEn} onChange={e => setNJTaskEn(e.target.value)} />
                              <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder="Tradução (Português)" value={nJTaskPt} onChange={e => setNJTaskPt(e.target.value)} />
                              <div style={{ position: 'relative', marginBottom: 6 }}>
                                <Icon name="link" size={13} color={D.muted} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                                <input style={{ ...SD.inp, fontSize: 12, paddingLeft: 30, background: D.surface }} placeholder="Link (opcional)" value={nJTaskLink} onChange={e => setNJTaskLink(e.target.value)} />
                              </div>
                              <div style={{ display: 'flex', gap: 6 }}>
                                <select style={{ ...SD.inp, flex: 1, fontSize: 12, background: D.surface }} value={nJTaskCat} onChange={e => setNJTaskCat(e.target.value)}>
                                  {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                </select>
                                <button style={{ ...SD.btn(D.terra), fontSize: 12, padding: '9px 14px' }} onClick={() => addJTask(selS.id, currentJid, jWeek)}><Icon name="add" size={14} color="#fff" />{t.save}</button>
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
                  <div style={{ ...SD.card, marginBottom: 14 }}>
                    <p style={{ ...SD.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="add" size={13} color={D.muted} />{lang === 'pt' ? 'Nova anotação de aula' : 'New class note'}</p>
                    <input type="date" style={{ ...SD.inp, marginBottom: 8 }} value={diaryDate} onChange={e => setDiaryDate(e.target.value)} />
                    <p style={{ ...sansD(600, 11.5), color: D.moss, marginBottom: 4 }}>{lang === 'pt' ? '✓ O que foi bem' : '✓ What went well'}</p>
                    <textarea style={{ ...SD.ta, marginBottom: 8 }} rows={2} placeholder={lang === 'pt' ? 'Ex: Ótima pronúncia, engajamento alto...' : 'Ex: Great pronunciation, high engagement...'} value={diaryGood} onChange={e => setDiaryGood(e.target.value)} />
                    <p style={{ ...sansD(600, 11.5), color: D.terra, marginBottom: 4 }}>{lang === 'pt' ? '→ O que reforçar' : '→ What to reinforce'}</p>
                    <textarea style={{ ...SD.ta, marginBottom: 8 }} rows={2} placeholder={lang === 'pt' ? 'Ex: Revisitar past perfect...' : 'Ex: Revisit past perfect...'} value={diaryImprove} onChange={e => setDiaryImprove(e.target.value)} />
                    <p style={{ ...sansD(600, 11.5), color: D.muted, marginBottom: 4 }}>{lang === 'pt' ? 'Notas gerais' : 'General notes'}</p>
                    <textarea style={{ ...SD.ta, marginBottom: 12 }} rows={2} placeholder={lang === 'pt' ? 'Qualquer observação extra...' : 'Any extra observation...'} value={diaryNotes} onChange={e => setDiaryNotes(e.target.value)} />
                    <button style={SD.btn(D.moss)} onClick={() => {
                      if (!diaryGood.trim() && !diaryImprove.trim() && !diaryNotes.trim()) return
                      const k = `diary_${selS.id}`
                      upDb({ [k]: [{ id: `d${Date.now()}`, date: diaryDate, good: diaryGood.trim(), improve: diaryImprove.trim(), notes: diaryNotes.trim() }, ...(db[k] || [])] })
                      setDiaryGood(''); setDiaryImprove(''); setDiaryNotes('')
                    }}><Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar anotação' : 'Save note'}</button>
                  </div>
                  {(db[`diary_${selS.id}`] || []).length === 0 && <div style={{ textAlign: 'center', padding: '32px 0' }}><Icon name="lightbulb" size={40} color={D.line} /><p style={{ fontSize: 13, color: D.muted, marginTop: 12 }}>{lang === 'pt' ? 'Nenhuma anotação ainda' : 'No notes yet'}</p></div>}
                  {(db[`diary_${selS.id}`] || []).map(entry => (
                    <div key={entry.id} style={{ ...SD.card, marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <p style={{ ...sansD(600, 13.5), color: D.ink }}>{new Date(entry.date + 'T12:00:00').toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                        <button style={{ ...dangerIconBtn, padding: '5px 8px' }} onClick={() => upDb({ [`diary_${selS.id}`]: (db[`diary_${selS.id}`] || []).filter(e => e.id !== entry.id) })}><Icon name="delete" size={12} color={D.clay} /></button>
                      </div>
                      {entry.good && <div style={{ marginBottom: 6 }}><p style={{ ...sansD(600, 11.5), color: D.moss, marginBottom: 2 }}>{lang === 'pt' ? '✓ Foi bem' : '✓ Went well'}</p><p style={{ fontSize: 13, color: D.ink, lineHeight: 1.6 }}>{entry.good}</p></div>}
                      {entry.improve && <div style={{ marginBottom: 6 }}><p style={{ ...sansD(600, 11.5), color: D.terra, marginBottom: 2 }}>{lang === 'pt' ? '→ Reforçar' : '→ To reinforce'}</p><p style={{ fontSize: 13, color: D.ink, lineHeight: 1.6 }}>{entry.improve}</p></div>}
                      {entry.notes && <div><p style={{ ...sansD(600, 11.5), color: D.muted, marginBottom: 2 }}>{lang === 'pt' ? 'Notas' : 'Notes'}</p><p style={{ fontSize: 13, color: D.ink, lineHeight: 1.6 }}>{entry.notes}</p></div>}
                    </div>
                  ))}
                </div>
              )}

              {dtab === 'fb' && (
                <div style={SD.card}>
                  <p style={{ ...SD.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="feedback" size={13} color={D.muted} />{t.fbLabel}</p>
                  <textarea style={{ ...SD.ta, marginBottom: 12 }} rows={5} placeholder={t.fbPh} value={fbDraft} onChange={e => setFbDraft(e.target.value)} />
                  <button style={SD.btn(D.moss)} onClick={() => upDb({ [`fb_${selS.id}`]: fbDraft })}><Icon name="save" size={15} color="#fff" />{t.save}</button>
                </div>
              )}

              {dtab === 'hw' && (
                <div style={SD.card}>
                  <p style={{ ...SD.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="homework" size={13} color={D.muted} />{t.hwLabel}</p>
                  {(db[`hw_${selS.id}`] || []).length === 0 && <p style={{ fontSize: 13, color: D.muted, marginBottom: 12 }}>{t.noHW}</p>}
                  {(db[`hw_${selS.id}`] || []).map(h => {
                    const cm = CAT[h.cat] || CAT.grammar
                    return (
                      <div key={h.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '11px 13px', background: D.surfaceWarm, borderRadius: 13, border: `1px solid ${D.line}`, marginBottom: 8 }}>
                        <span style={SD.pill(cm.bg, cm.tx)}><span style={SD.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                        <div style={{ flex: 1 }}>
                          <p style={{ ...sansD(600, 13), color: D.ink }}>{h.en}</p>
                          <p style={{ fontSize: 11.5, color: D.muted, fontStyle: 'italic' }}>{h.pt}</p>
                          {h.due && <p style={{ ...sansD(600, 11.5), color: D.orange, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="calendar" size={11} color={D.orange} />{h.due}</p>}
                          {h.link && <a href={h.link} target="_blank" rel="noreferrer" style={{ fontSize: 11.5, color: D.orange, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2, textDecoration: 'none' }}><Icon name="link" size={11} color={D.orange} />{h.link}</a>}
                        </div>
                        <button style={dangerIconBtn} onClick={() => upDb({ [`hw_${selS.id}`]: (db[`hw_${selS.id}`] || []).filter(x => x.id !== h.id) })}><Icon name="delete" size={13} color={D.clay} /></button>
                      </div>
                    )
                  })}
                  <div style={{ background: D.cream, borderRadius: 13, padding: 14, border: `1px solid ${D.line}`, marginTop: 8 }}>
                    <p style={{ ...sansD(700, 11.5), color: D.terra, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{t.addHW}</p>
                    <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder={t.hwEn} value={hwEn} onChange={e => setHwEn(e.target.value)} />
                    <input style={{ ...SD.inp, marginBottom: 6, fontSize: 12, background: D.surface }} placeholder={t.hwPt} value={hwPt} onChange={e => setHwPt(e.target.value)} />
                    <div style={{ position: 'relative', marginBottom: 6 }}>
                      <Icon name="link" size={13} color={D.muted} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                      <input style={{ ...SD.inp, fontSize: 12, paddingLeft: 30, background: D.surface }} placeholder="Link (opcional)" value={hwLink} onChange={e => setHwLink(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      <input type="date" style={{ ...SD.inp, flex: 1, fontSize: 12, background: D.surface, minWidth: 120 }} value={hwDue} onChange={e => setHwDue(e.target.value)} />
                      <select style={{ ...SD.inp, flex: 1, fontSize: 12, background: D.surface, minWidth: 120 }} value={hwCat} onChange={e => setHwCat(e.target.value)}>
                        {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                      </select>
                      <button style={{ ...SD.btn(D.terra), fontSize: 12, padding: '9px 13px' }} onClick={() => {
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
                <div style={SD.card}>
                  <p style={{ ...SD.lbl, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="info" size={13} color={D.muted} />{t.infoLabel}</p>
                  <p style={{ ...sansD(600, 12.5), color: D.muted, marginBottom: 6 }}>Email (login da aluna)</p>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                    <input style={{ ...SD.inp, flex: 1 }} type="email" placeholder="email@email.com"
                      defaultValue={selS.email || ''}
                      onBlur={e => { if (e.target.value.trim()) upDb({ students: students.map(s => s.id === selS.id ? { ...s, email: e.target.value.trim().toLowerCase() } : s) }) }} />
                  </div>
                  <p style={{ ...sansD(600, 12.5), color: D.muted, marginBottom: 6 }}>{t.infoGenLabel}</p>
                  <textarea style={{ ...SD.ta, marginBottom: 14 }} rows={4} placeholder={t.infoGenPh} value={infoGen} onChange={e => setInfoGen(e.target.value)} />
                  <p style={{ ...sansD(600, 12.5), color: D.muted, marginBottom: 6 }}>{t.infoNotesLabel}</p>
                  <textarea style={{ ...SD.ta, marginBottom: 14 }} rows={5} placeholder={t.infoNotesPh} value={infoNotes} onChange={e => setInfoNotes(e.target.value)} />
                  <p style={{ ...sansD(600, 12.5), color: D.muted, marginBottom: 6 }}>{lang === 'pt' ? 'Mensagem de boas-vindas' : 'Welcome message'}</p>
                  <textarea style={{ ...SD.ta, marginBottom: 14 }} rows={3}
                    placeholder={lang === 'pt' ? 'Ex: Olá! Seja bem-vinda ao TalkScape...' : 'Ex: Hi! Welcome to TalkScape...'}
                    value={db[`welcome_${selS.id}`] || ''}
                    onChange={e => upDb({ [`welcome_${selS.id}`]: e.target.value })} />
                  <button style={SD.btn(D.moss)} onClick={() => upDb({ [`ig_${selS.id}`]: infoGen, [`in_${selS.id}`]: infoNotes })}><Icon name="save" size={15} color="#fff" />{t.save}</button>
                </div>
              )}

              {dtab === 'cal' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher={true} sid={selS.id} />}
            </div>
          )}
        </main>
      )}
    </div>
  )
}
