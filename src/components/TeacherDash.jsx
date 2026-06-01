import { useState, useEffect } from 'react'
import { B, CAT, GRADE } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { CEFR_META } from '../constants/cefr'
import { PLAN } from '../constants/plan'
import { AVATARS } from '../constants/avatars'
import Logo from './Logo'
import CalSection from './CalSection'

export default function TeacherDash({ t, lang, setLang, students, db, upDb, onPreview, onLogout }) {
  const [sel, setSel]               = useState(null)
  const [dtab, setDtab]             = useState('level')
  const [section, setSection]       = useState('students')
  const [showAddCourse, setShowAddCourse] = useState(false)
  const [delCourseConfirm, setDelCourseConfirm] = useState(null)
  const [cName, setCName]           = useState('')
  const [cEmail, setCEmail]         = useState('')
  const [cCourse, setCCourse]       = useState('')
  const [cErr, setCErr]             = useState('')
  const [q, setQ]                   = useState('')
  const [sort, setSort]             = useState('name')
  const [showAdd, setShowAdd]       = useState(false)
  const [addErr, setAddErr]         = useState('')
  const [delConfirm, setDelConfirm] = useState(null)
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
  const [matT, setMatT]             = useState('')
  const [matU, setMatU]             = useState('')
  const [matN, setMatN]             = useState('')
  const [planWeek, setPlanWeek]     = useState(1)
  const [editTask, setEditTask]     = useState(null)
  const [nTaskEn, setNTaskEn]       = useState('')
  const [nTaskPt, setNTaskPt]       = useState('')
  const [nTaskCat, setNTaskCat]     = useState('grammar')
  const [nWeekEn, setNWeekEn]       = useState('')
  const [nWeekPt, setNWeekPt]       = useState('')

  const selS = students.find(s => s.id === sel)

  useEffect(() => {
    if (!selS) return
    setFbDraft(db[`fb_${selS.id}`] || '')
    setInfoGen(db[`ig_${selS.id}`] || '')
    setInfoNotes(db[`in_${selS.id}`] || '')
  }, [sel, db])

  const lvOf   = sid => db[`lv_${sid}`] || 'A1'
  const lvMeta = sid => CEFR_META.find(c => c.level === lvOf(sid)) || CEFR_META[0]

  const getWTasks = (sid, wn) => {
    const lv = lvOf(sid), ck = `pt_${sid}_${lv}_w${wn}`
    if (db[ck]?.length) return [...db[ck], ...(db[`ex_${sid}_${lv}_w${wn}`] || [])]
    const exW = [...(PLAN[lv] || []), ...(db[`pew_${sid}_${lv}`] || [])]
    return [...(exW.find(w => w.week === wn)?.tasks || []), ...(db[`ex_${sid}_${lv}_w${wn}`] || [])]
  }

  const allTasks = sid => {
    const lv = lvOf(sid)
    const weeks = [...(PLAN[lv] || []), ...(db[`pew_${sid}_${lv}`] || [])]
    return weeks.flatMap(w => getWTasks(sid, w.week))
  }

  const pctOf = sid => {
    const all = allTasks(sid), ch = (db[`sd_${sid}`] || {}).checked || {}
    return all.length ? Math.round(all.filter(tk => ch[tk.id]).length / all.length * 100) : 0
  }

  const addStudent = () => {
    if (!newName.trim() || !newUser.trim() || !newPass.trim()) { setAddErr(t.fillAll); return }
    if (students.find(s => (s.username || '').toLowerCase() === newUser.trim().toLowerCase())) { setAddErr(t.usernameExists); return }
    const id = Date.now().toString(), av = AVATARS[students.length % AVATARS.length]
    upDb({ students: [...students, { id, name: newName.trim(), avatar: av, username: newUser.trim(), password: newPass.trim() }] })
    setNewName(''); setNewUser(''); setNewPass(''); setAddErr(''); setShowAdd(false)
  }

  const deleteStudent = s => {
    const sid = s.id
    const patch = { students: students.filter(x => x.id !== sid) }
    for (const k of [`lv_${sid}`, `sd_${sid}`, `fb_${sid}`, `hw_${sid}`, `mat_${sid}`, `hab_${sid}`, `ig_${sid}`, `in_${sid}`, `cal_${sid}`]) {
      patch[k] = null
    }
    for (const k of Object.keys(db)) {
      if (k.startsWith(`pew_${sid}_`) || k.startsWith(`pt_${sid}_`) || k.startsWith(`ex_${sid}_`)) {
        patch[k] = null
      }
    }
    upDb(patch)
    setSel(null)
    setDelConfirm(null)
  }

  // ── Curso helpers ──
  const courseStudents = db.curso_students || []

  const addCourseStudent = () => {
    if (!cName.trim()) { setCErr(t.fillAll); return }
    const id = `cs_${Date.now()}`
    upDb({ curso_students: [...courseStudents, { id, name: cName.trim(), email: cEmail.trim(), course: cCourse.trim(), status: 'active', avatar: AVATARS[courseStudents.length % AVATARS.length] }] })
    setCName(''); setCEmail(''); setCCourse(''); setCErr(''); setShowAddCourse(false)
  }

  const toggleCourseStatus = id => upDb({ curso_students: courseStudents.map(s => s.id === id ? { ...s, status: s.status === 'active' ? 'inactive' : 'active' } : s) })

  const deleteCourseStudent = s => {
    upDb({ curso_students: courseStudents.filter(x => x.id !== s.id) })
    setDelCourseConfirm(null)
  }

  const sorted = [...students]
    .filter(s => s.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : pctOf(b.id) - pctOf(a.id))

  // ── Plan helpers ──
  const planAllWeeks = () => {
    if (!selS) return []
    const lv = lvOf(selS.id)
    return [...(PLAN[lv] || []).map(w => ({ ...w, base: true })), ...(db[`pew_${selS.id}_${lv}`] || []).map(w => ({ ...w, base: false }))]
  }

  const curPlanTasks = () => {
    if (!selS) return []
    const lv = lvOf(selS.id), ck = `pt_${selS.id}_${lv}_w${planWeek}`
    if (db[ck]?.length) return db[ck]
    return planAllWeeks().find(w => w.week === planWeek)?.tasks || []
  }

  const savePlanTask = (tid, en, pt, cat) => {
    const lv = lvOf(selS.id), ck = `pt_${selS.id}_${lv}_w${planWeek}`
    upDb({ [ck]: curPlanTasks().map(tk => tk.id === tid ? { ...tk, en, pt, cat } : tk) })
    setEditTask(null)
  }

  const delPlanTask = tid => {
    const lv = lvOf(selS.id), ck = `pt_${selS.id}_${lv}_w${planWeek}`
    upDb({ [ck]: curPlanTasks().filter(tk => tk.id !== tid) })
  }

  const addPlanTask = () => {
    if (!nTaskEn.trim()) return
    const lv = lvOf(selS.id), ck = `pt_${selS.id}_${lv}_w${planWeek}`
    upDb({ [ck]: [...curPlanTasks(), { id: `ct_${Date.now()}`, en: nTaskEn.trim(), pt: nTaskPt.trim() || nTaskEn.trim(), cat: nTaskCat }] })
    setNTaskEn(''); setNTaskPt('')
  }

  const resetPlanWeek = () => {
    const lv = lvOf(selS.id), ck = `pt_${selS.id}_${lv}_w${planWeek}`
    upDb({ [ck]: null })
  }

  const addExtraWeek = () => {
    if (!nWeekEn.trim()) return
    const lv = lvOf(selS.id), ek = `pew_${selS.id}_${lv}`
    const existing = db[ek] || []
    const allNums = planAllWeeks().map(w => w.week)
    const n = allNums.length ? Math.max(...allNums) + 1 : 5
    upDb({ [ek]: [...existing, { week: n, theme: { en: nWeekEn.trim(), pt: nWeekPt.trim() || nWeekEn.trim() }, tasks: [], base: false }] })
    setNWeekEn(''); setNWeekPt(''); setPlanWeek(n)
  }

  const delExtraWeek = wn => {
    const lv = lvOf(selS.id), ek = `pew_${selS.id}_${lv}`
    upDb({ [ek]: (db[ek] || []).filter(w => w.week !== wn) })
    setPlanWeek(1)
  }

  return (
    <div style={S.app}>
      {/* Add student modal */}
      {showAdd && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowAdd(false)}>
          <div className="fu" style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 380, boxShadow: '0 24px 60px rgba(44,24,16,0.35)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ ...pp(700, 17), color: B.dark }}>{t.addSt}</h3>
              <button style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: B.light }} onClick={() => setShowAdd(false)}>✕</button>
            </div>
            <input style={{ ...S.inp, marginBottom: 10 }} placeholder={t.stPh}   value={newName} onChange={e => setNewName(e.target.value)} />
            <input style={{ ...S.inp, marginBottom: 10 }} placeholder={t.userPh} value={newUser} onChange={e => setNewUser(e.target.value)} />
            <input style={{ ...S.inp, marginBottom: 16 }} placeholder={t.passSt} value={newPass} onChange={e => setNewPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && addStudent()} />
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.oliva), flex: 1, fontSize: 14 }} onClick={addStudent}>{t.add}</button>
              <button style={{ ...S.btn(B.light), fontSize: 14, padding: '11px 18px' }} onClick={() => { setShowAdd(false); setAddErr('') }}>✕</button>
            </div>
            {addErr && <p style={{ ...ir(600, 12), color: B.marrom, marginTop: 10, textAlign: 'center' }}>⚠️ {addErr}</p>}
          </div>
        </div>
      )}

      {/* Delete confirm modal */}
      {delConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div className="fu" style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🗑️</div>
            <h3 style={{ ...pp(700, 17), color: B.dark, marginBottom: 8 }}>{t.confirmDel}</h3>
            <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 22 }}>{delConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.light), flex: 1 }} onClick={() => setDelConfirm(null)}>{t.cancel}</button>
              <button style={{ ...S.btn('#B03020'), flex: 1 }} onClick={() => deleteStudent(delConfirm)}>{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{ background: B.oliva, height: 52, padding: '0 14px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <Logo h={36} contrast />
        <div style={{ flex: 1, display: 'flex', gap: 6, justifyContent: 'center' }}>
          {[['students', lang === 'pt' ? 'Alunos' : 'Students'], ['calendar', lang === 'pt' ? 'Agenda' : 'Calendar'], ['curso', lang === 'pt' ? '⭐ Curso' : '⭐ Course']].map(([k, lb]) => (
            <button key={k} style={{ ...S.chip, background: section === k ? B.laranja : 'rgba(255,255,255,0.18)', color: '#fff', fontSize: 11, padding: '6px 12px' }} onClick={() => setSection(k)}>{lb}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <button style={{ ...S.chip, background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 10, padding: '5px 9px' }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>{t.switchLang}</button>
          <button style={{ ...S.chip, background: 'rgba(138,63,44,0.5)', color: '#fff', fontSize: 10, padding: '5px 9px' }} onClick={onLogout}>{t.logout}</button>
        </div>
      </header>

      {/* Delete course student modal */}
      {delCourseConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div className="fu" style={{ background: B.white, borderRadius: 20, padding: 28, width: '100%', maxWidth: 320, textAlign: 'center' }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🗑️</div>
            <h3 style={{ ...pp(700, 17), color: B.dark, marginBottom: 8 }}>{t.confirmDel}</h3>
            <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 22 }}>{delCourseConfirm.name}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...S.btn(B.light), flex: 1 }} onClick={() => setDelCourseConfirm(null)}>{t.cancel}</button>
              <button style={{ ...S.btn('#B03020'), flex: 1 }} onClick={() => deleteCourseStudent(delCourseConfirm)}>{lang === 'pt' ? 'Excluir' : 'Delete'}</button>
            </div>
          </div>
        </div>
      )}

      {section === 'calendar'
        ? <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher sid={null} />
        : section === 'curso' ? (
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 14px', maxWidth: 660, margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
              <h2 style={{ ...pp(700, 18), color: B.dark }}>{lang === 'pt' ? 'Alunas do Curso' : 'Course Students'}</h2>
              <button style={{ ...S.btn(B.laranja), fontSize: 13 }} onClick={() => setShowAddCourse(true)}>+ {lang === 'pt' ? 'Nova aluna' : 'New student'}</button>
            </div>

            {showAddCourse && (
              <div style={{ ...S.card, marginBottom: 18 }}>
                <p style={{ ...pp(600, 13), color: B.dark, marginBottom: 12 }}>{lang === 'pt' ? 'Nova aluna do curso' : 'New course student'}</p>
                <input style={{ ...S.inp, marginBottom: 8 }} placeholder={lang === 'pt' ? 'Nome *' : 'Name *'} value={cName} onChange={e => setCName(e.target.value)} />
                <input style={{ ...S.inp, marginBottom: 8 }} placeholder="E-mail" value={cEmail} onChange={e => setCEmail(e.target.value)} />
                <input style={{ ...S.inp, marginBottom: 12 }} placeholder={lang === 'pt' ? 'Curso (ex: Inglês para Negócios)' : 'Course name'} value={cCourse} onChange={e => setCCourse(e.target.value)} onKeyDown={e => e.key === 'Enter' && addCourseStudent()} />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ ...S.btn(B.oliva), flex: 1 }} onClick={addCourseStudent}>{t.add}</button>
                  <button style={{ ...S.btn(B.light), padding: '11px 18px' }} onClick={() => { setShowAddCourse(false); setCErr('') }}>✕</button>
                </div>
                {cErr && <p style={{ ...ir(600, 12), color: B.marrom, marginTop: 8, textAlign: 'center' }}>⚠ {cErr}</p>}
              </div>
            )}

            {courseStudents.length === 0 && !showAddCourse && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: B.light }}>
                <span style={{ fontSize: 40 }}>🎓</span>
                <p style={{ ...ir(400, 14), marginTop: 12 }}>{lang === 'pt' ? 'Nenhuma aluna ainda.' : 'No students yet.'}</p>
              </div>
            )}

            {courseStudents.map(s => {
              const isActive = s.status === 'active'
              return (
                <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 14, border: `1.5px solid ${B.border}`, background: B.white, marginBottom: 10 }}>
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{s.avatar}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <p style={{ ...pp(600, 14), color: B.dark }}>{s.name}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'Poppins,sans-serif', borderRadius: 20, padding: '2px 8px', background: isActive ? B.olivaBg : B.bege, color: isActive ? B.olivaD : B.light }}>
                        {isActive ? (lang === 'pt' ? 'Ativo' : 'Active') : (lang === 'pt' ? 'Inativo' : 'Inactive')}
                      </span>
                    </div>
                    {s.email && <p style={{ ...ir(400, 11), color: B.light, marginTop: 2 }}>{s.email}</p>}
                    {s.course && <p style={{ ...ir(500, 11), color: B.laranja, marginTop: 2 }}>🎓 {s.course}</p>}
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    <button style={{ ...S.chip, background: isActive ? B.bege : B.oliva, color: isActive ? B.mid : '#fff', fontSize: 11, padding: '6px 11px' }} onClick={() => toggleCourseStatus(s.id)}>
                      {isActive ? (lang === 'pt' ? 'Desativar' : 'Deactivate') : (lang === 'pt' ? 'Ativar' : 'Activate')}
                    </button>
                    <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 8, padding: '7px 10px', fontSize: 14, color: '#DC2626', cursor: 'pointer' }} onClick={() => setDelCourseConfirm(s)}>🗑️</button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {/* Student list */}
            {!sel && (
              <div style={{ padding: '16px 14px', maxWidth: 560, margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  <input style={{ ...S.inp, flex: 1, fontSize: 13, padding: '9px 12px' }} placeholder={t.searchPh} value={q} onChange={e => setQ(e.target.value)} />
                  <button style={{ ...S.btn(B.oliva), padding: '9px 14px', whiteSpace: 'nowrap' }} onClick={() => setShowAdd(true)}>{t.addSt}</button>
                </div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {[['name', t.sortName], ['progress', t.sortProg]].map(([k, lb]) => (
                    <button key={k} style={{ ...S.chip, flex: 1, background: sort === k ? B.marrom : B.bege, color: sort === k ? '#fff' : B.mid, fontSize: 12 }} onClick={() => setSort(k)}>{lb}</button>
                  ))}
                </div>
                {sorted.length === 0 && <p style={{ ...ir(400, 14), color: B.light, textAlign: 'center', padding: '32px 0' }}>{t.noSt}</p>}
                {sorted.map(s => {
                  const pct = pctOf(s.id), lm = lvMeta(s.id)
                  return (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px', borderRadius: 14, border: `1.5px solid ${B.border}`, background: B.white, marginBottom: 8 }}>
                      <span style={{ fontSize: 28, cursor: 'pointer' }} onClick={() => { setSel(s.id); setDtab('level') }}>{s.avatar}</span>
                      <div style={{ flex: 1, minWidth: 0, cursor: 'pointer' }} onClick={() => { setSel(s.id); setDtab('level') }}>
                        <p style={{ ...pp(600, 14), color: B.dark }}>{s.name}</p>
                        <p style={{ ...ir(400, 11), color: B.light }}>@{s.username}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                          <span style={{ fontSize: 10, background: lm.color, color: lm.text, borderRadius: 20, padding: '2px 8px', fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>{lm.level}</span>
                          <div style={{ flex: 1, height: 4, background: B.bege, borderRadius: 99, overflow: 'hidden' }}><div style={{ height: '100%', width: `${pct}%`, background: B.marrom, borderRadius: 99 }} /></div>
                          <span style={{ ...pp(700, 12), color: B.marrom }}>{pct}%</span>
                        </div>
                      </div>
                      <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 8, padding: '7px 10px', fontSize: 14, color: '#DC2626', cursor: 'pointer', flexShrink: 0 }} onClick={e => { e.stopPropagation(); setDelConfirm(s) }}>🗑️</button>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Student detail */}
            {selS && (
              <div style={{ padding: '14px', maxWidth: 680, margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <button style={{ ...S.btn(B.bege), color: B.dark, fontSize: 13, padding: '9px 14px' }} onClick={() => setSel(null)}>{t.back}</button>
                  <div style={{ flex: 1 }} />
                  <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 12px' }} onClick={() => onPreview(selS.id)}>{t.previewBtn}</button>
                  <button style={{ ...S.btn('#B03020'), fontSize: 12, padding: '9px 12px' }} onClick={() => setDelConfirm(selS)}>🗑️</button>
                </div>

                <div style={{ ...S.card, display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span style={{ fontSize: 44 }}>{selS.avatar}</span>
                  <div>
                    <h2 style={{ ...pp(800, 18), color: B.dark }}>{selS.name}</h2>
                    <p style={{ ...ir(400, 12), color: B.mid, marginTop: 2 }}>@{selS.username} · {lvMeta(selS.id).level} · {pctOf(selS.id)}%</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
                  {[['level', t.tabLevel], ['plan', t.tabPlan], ['fb', t.tabFb], ['hw', t.tabHW], ['mat', t.tabMat], ['info', t.tabInfo], ['cal', t.tabCal]].map(([k, lb]) => (
                    <button key={k} style={{ ...S.chip, background: dtab === k ? B.laranja : B.bege, color: dtab === k ? '#fff' : B.mid, fontSize: 12, padding: '7px 13px' }} onClick={() => setDtab(k)}>{lb}</button>
                  ))}
                </div>

                {/* Level tab */}
                {dtab === 'level' && (
                  <div className="fu">
                    <div style={{ ...S.card, marginBottom: 14 }}>
                      <p style={S.lbl}>{t.levelLabel}</p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {CEFR_META.map(c => {
                          const active = (db[`lv_${selS.id}`] || 'A1') === c.level
                          return <button key={c.level} style={{ ...S.chip, background: active ? c.color : B.bege, color: active ? c.text : B.mid, fontSize: 13, padding: '8px 16px', fontWeight: 700 }} onClick={() => upDb({ [`lv_${selS.id}`]: c.level })}>{c.icon} {c.level}</button>
                        })}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 9 }}>
                      {(PLAN[lvOf(selS.id)] || []).map(w => {
                        const ch = (db[`sd_${selS.id}`] || {}).checked || {}
                        const wt = getWTasks(selS.id, w.week)
                        const p = wt.length ? Math.round(wt.filter(tk => ch[tk.id]).length / wt.length * 100) : 0
                        const sc = (db[`sd_${selS.id}`] || {}).scores?.[`week${w.week}`]
                        const gr = sc ? GRADE(sc) : null
                        return (
                          <div key={w.week} style={{ ...S.card, textAlign: 'center', padding: '12px 8px' }}>
                            <p style={{ ...ir(600, 10), color: B.light, textTransform: 'uppercase' }}>{t.week} {w.week}</p>
                            <p style={{ ...pp(800, 18), color: B.dark, marginTop: 2 }}>{p}%</p>
                            {gr && <p style={{ ...pp(700, 14), color: gr.c }}>{gr.l}</p>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Plan tab */}
                {dtab === 'plan' && (() => {
                  const allW = planAllWeeks()
                  const curW = allW.find(w => w.week === planWeek) || allW[0]
                  const tasks = curPlanTasks()
                  const isCustom = !!db[`pt_${selS.id}_${lvOf(selS.id)}_w${planWeek}`]
                  return (
                    <div className="fu">
                      <div style={{ overflowX: 'auto', marginBottom: 14 }}>
                        <div style={{ display: 'flex', gap: 7, minWidth: 'max-content', paddingBottom: 4 }}>
                          {allW.map(w => (
                            <button key={w.week} style={{ ...S.chip, background: planWeek === w.week ? B.marrom : B.bege, color: planWeek === w.week ? '#fff' : B.mid, fontSize: 11, padding: '7px 12px', whiteSpace: 'nowrap' }} onClick={() => setPlanWeek(w.week)}>
                              {lang === 'pt' ? 'Sem' : 'Wk'} {w.week}{isCustom && planWeek === w.week ? ' ✏️' : ''}{!w.base ? ' 🆕' : ''}
                            </button>
                          ))}
                          <input style={{ ...S.inp, width: 120, fontSize: 11, padding: '6px 9px' }} placeholder={t.newWeekEn} value={nWeekEn} onChange={e => setNWeekEn(e.target.value)} />
                          <input style={{ ...S.inp, width: 100, fontSize: 11, padding: '6px 9px' }} placeholder={t.newWeekPt} value={nWeekPt} onChange={e => setNWeekPt(e.target.value)} />
                          <button style={{ ...S.btn(B.oliva), fontSize: 11, padding: '7px 11px', whiteSpace: 'nowrap' }} onClick={addExtraWeek}>{t.addWeek}</button>
                        </div>
                      </div>
                      {curW && (
                        <div style={S.card}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                            <div>
                              <p style={{ ...pp(700, 14), color: B.dark }}>{lang === 'pt' ? 'Semana' : 'Week'} {curW.week}: {curW.theme[lang]}</p>
                              <p style={{ ...ir(400, 11), color: B.light }}>{tasks.length} tasks{isCustom ? ' · ✏️ personalizada' : ''}</p>
                            </div>
                            <div style={{ display: 'flex', gap: 6 }}>
                              {isCustom && <button style={{ ...S.chip, background: B.bege, color: B.mid, fontSize: 11 }} onClick={resetPlanWeek}>{t.resetWeek}</button>}
                              {curW && !curW.base && <button style={{ ...S.chip, background: '#FEE2E2', color: '#DC2626', fontSize: 11 }} onClick={() => delExtraWeek(curW.week)}>{t.deleteWeek}</button>}
                            </div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
                            {tasks.length === 0 && <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', padding: '12px 0' }}>{t.noTasks}</p>}
                            {tasks.map(task => {
                              const cm = CAT[task.cat] || CAT.grammar
                              const isEditing = editTask?.id === task.id
                              return (
                                <div key={task.id} style={{ background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, overflow: 'hidden' }}>
                                  {isEditing ? (
                                    <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
                                      <input style={{ ...S.inp, fontSize: 12 }} value={editTask.en} onChange={e => setEditTask(p => ({ ...p, en: e.target.value }))} placeholder="English" />
                                      <input style={{ ...S.inp, fontSize: 12 }} value={editTask.pt} onChange={e => setEditTask(p => ({ ...p, pt: e.target.value }))} placeholder="Português" />
                                      <div style={{ display: 'flex', gap: 6 }}>
                                        <select style={{ ...S.inp, flex: 1, fontSize: 11 }} value={editTask.cat} onChange={e => setEditTask(p => ({ ...p, cat: e.target.value }))}>
                                          {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                                        </select>
                                        <button style={{ ...S.btn(B.oliva), fontSize: 11, padding: '7px 12px' }} onClick={() => savePlanTask(task.id, editTask.en, editTask.pt, editTask.cat)}>✅</button>
                                        <button style={{ ...S.btn(B.light), fontSize: 11, padding: '7px 10px' }} onClick={() => setEditTask(null)}>✕</button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 12px' }}>
                                      <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                                      <div style={{ flex: 1 }}>
                                        <p style={{ ...ir(600, 12), color: B.dark }}>{task.en}</p>
                                        <p style={{ ...ir(400, 10), color: B.light, fontStyle: 'italic' }}>{task.pt}</p>
                                      </div>
                                      <button style={{ background: B.bege, border: 'none', borderRadius: 6, padding: '4px 8px', fontSize: 11, color: B.mid, cursor: 'pointer' }} onClick={() => setEditTask({ ...task })}>✏️</button>
                                      <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '4px 8px', fontSize: 11, color: '#DC2626', cursor: 'pointer' }} onClick={() => delPlanTask(task.id)}>🗑</button>
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                          <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}` }}>
                            <p style={{ ...pp(600, 11), color: B.marrom, marginBottom: 8 }}>{t.addTask}</p>
                            <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Task (English)" value={nTaskEn} onChange={e => setNTaskEn(e.target.value)} />
                            <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder="Tradução (Português)" value={nTaskPt} onChange={e => setNTaskPt(e.target.value)} />
                            <div style={{ display: 'flex', gap: 6 }}>
                              <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={nTaskCat} onChange={e => setNTaskCat(e.target.value)}>
                                {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                              </select>
                              <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 14px' }} onClick={addPlanTask}>{t.save}</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })()}

                {/* Feedback tab */}
                {dtab === 'fb' && (
                  <div className="fu" style={S.card}>
                    <p style={S.lbl}>💬 {t.fbLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 12 }} rows={5} placeholder={t.fbPh} value={fbDraft} onChange={e => setFbDraft(e.target.value)} />
                    <button style={{ ...S.btn(B.oliva) }} onClick={() => upDb({ [`fb_${selS.id}`]: fbDraft })}>✅ {t.save}</button>
                  </div>
                )}

                {/* Homework tab */}
                {dtab === 'hw' && (
                  <div className="fu">
                    <div style={S.card}>
                      <p style={S.lbl}>📚 {t.hwLabel}</p>
                      {(db[`hw_${selS.id}`] || []).length === 0 && <p style={{ ...ir(400, 13), color: B.light, marginBottom: 12 }}>{t.noHW}</p>}
                      {(db[`hw_${selS.id}`] || []).map(h => {
                        const cm = CAT[h.cat] || CAT.grammar
                        return (
                          <div key={h.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '10px 12px', background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, marginBottom: 7 }}>
                            <span style={S.pill(cm.bg, cm.tx)}><span style={S.dot(cm.dot)} />{lang === 'pt' ? cm.pt : cm.en}</span>
                            <div style={{ flex: 1 }}>
                              <p style={{ ...ir(600, 13), color: B.dark }}>{h.en}</p>
                              <p style={{ ...ir(400, 11), color: B.mid, fontStyle: 'italic' }}>{h.pt}</p>
                              {h.due && <p style={{ ...ir(600, 11), color: B.laranja, marginTop: 2 }}>📅 {h.due}</p>}
                            </div>
                            <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '3px 8px', fontSize: 11, color: '#DC2626', cursor: 'pointer' }} onClick={() => upDb({ [`hw_${selS.id}`]: (db[`hw_${selS.id}`] || []).filter(x => x.id !== h.id) })}>✕</button>
                          </div>
                        )
                      })}
                      <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}`, marginTop: 8 }}>
                        <p style={{ ...pp(600, 11), color: B.marrom, marginBottom: 8 }}>{t.addHW}</p>
                        <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.hwEn} value={hwEn} onChange={e => setHwEn(e.target.value)} />
                        <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.hwPt} value={hwPt} onChange={e => setHwPt(e.target.value)} />
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          <input type="date" style={{ ...S.inp, flex: 1, fontSize: 12 }} value={hwDue} onChange={e => setHwDue(e.target.value)} />
                          <select style={{ ...S.inp, flex: 1, fontSize: 12 }} value={hwCat} onChange={e => setHwCat(e.target.value)}>
                            {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{lang === 'pt' ? v.pt : v.en}</option>)}
                          </select>
                          <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 13px' }} onClick={() => {
                            if (!hwEn.trim()) return
                            const k = `hw_${selS.id}`
                            upDb({ [k]: [...(db[k] || []), { id: `hw${Date.now()}`, en: hwEn.trim(), pt: hwPt.trim() || hwEn.trim(), due: hwDue, cat: hwCat, done: false }] })
                            setHwEn(''); setHwPt(''); setHwDue('')
                          }}>{t.save}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Materials tab */}
                {dtab === 'mat' && (
                  <div className="fu" style={S.card}>
                    <p style={S.lbl}>📎 {t.matLabel}</p>
                    {(db[`mat_${selS.id}`] || []).length === 0 && <p style={{ ...ir(400, 13), color: B.light, marginBottom: 12 }}>{t.noMat}</p>}
                    {(db[`mat_${selS.id}`] || []).map(m => (
                      <div key={m.id} style={{ display: 'flex', gap: 9, padding: '10px 12px', background: B.cream, borderRadius: 10, border: `1.5px solid ${B.border}`, marginBottom: 7 }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ ...ir(600, 13), color: B.dark }}>{m.title}</p>
                          {m.url && <a href={m.url} target="_blank" rel="noreferrer" style={{ ...ir(400, 12), color: B.laranja, wordBreak: 'break-all' }}>{m.url}</a>}
                          {m.note && <p style={{ ...ir(400, 12), color: B.mid, marginTop: 2 }}>{m.note}</p>}
                        </div>
                        <button style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '3px 8px', fontSize: 11, color: '#DC2626', cursor: 'pointer' }} onClick={() => upDb({ [`mat_${selS.id}`]: (db[`mat_${selS.id}`] || []).filter(x => x.id !== m.id) })}>✕</button>
                      </div>
                    ))}
                    <div style={{ background: B.bege, borderRadius: 10, padding: 12, border: `1.5px solid ${B.border}`, marginTop: 8 }}>
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.matTitlePh} value={matT} onChange={e => setMatT(e.target.value)} />
                      <input style={{ ...S.inp, marginBottom: 6, fontSize: 12 }} placeholder={t.matUrlPh}   value={matU} onChange={e => setMatU(e.target.value)} />
                      <div style={{ display: 'flex', gap: 6 }}>
                        <input style={{ ...S.inp, flex: 1, fontSize: 12 }} placeholder={t.matNotePh} value={matN} onChange={e => setMatN(e.target.value)} />
                        <button style={{ ...S.btn(B.marrom), fontSize: 12, padding: '9px 13px' }} onClick={() => {
                          if (!matT.trim()) return
                          const k = `mat_${selS.id}`
                          upDb({ [k]: [...(db[k] || []), { id: `mat${Date.now()}`, title: matT.trim(), url: matU.trim(), note: matN.trim() }] })
                          setMatT(''); setMatU(''); setMatN('')
                        }}>{t.save}</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Info tab */}
                {dtab === 'info' && (
                  <div className="fu" style={S.card}>
                    <p style={S.lbl}>ℹ️ {t.infoLabel}</p>
                    <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>{t.infoGenLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 14 }} rows={4} placeholder={t.infoGenPh}   value={infoGen}   onChange={e => setInfoGen(e.target.value)} />
                    <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>{t.infoNotesLabel}</p>
                    <textarea style={{ ...S.ta, marginBottom: 14 }} rows={5} placeholder={t.infoNotesPh} value={infoNotes} onChange={e => setInfoNotes(e.target.value)} />
                    <button style={{ ...S.btn(B.oliva) }} onClick={() => upDb({ [`ig_${selS.id}`]: infoGen, [`in_${selS.id}`]: infoNotes })}>✅ {t.save}</button>
                  </div>
                )}

                {/* Calendar tab */}
                {dtab === 'cal' && <CalSection t={t} lang={lang} db={db} upDb={upDb} isTeacher sid={selS.id} />}
              </div>
            )}
          </div>
        )
      }
    </div>
  )

}
