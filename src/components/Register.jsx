import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { AVATARS } from '../constants/avatars'
import { hashPassword } from '../utils'
import Logo from './Logo'

const JOURNEYS_LIST = [
  { id: 'core',         icon: '🏁', pt: 'Inglês Essencial',       en: 'Core English' },
  { id: 'conversation', icon: '💬', pt: 'Conversação',             en: 'Conversation' },
  { id: 'business',     icon: '💼', pt: 'Inglês para Negócios',    en: 'Business English' },
  { id: 'travel',       icon: '✈️', pt: 'Inglês para Viagem',      en: 'Travel English' },
  { id: 'grammar',      icon: '🔧', pt: 'Gramática Prática',       en: 'Grammar Kit' },
  { id: 'academic',     icon: '📝', pt: 'Inglês Acadêmico',        en: 'Academic English' },
  { id: 'popculture',   icon: '🎬', pt: 'Pop Culture',             en: 'Pop Culture' },
  { id: 'speaking',     icon: '🎙️', pt: 'Speaking Intensivo',      en: 'Speaking Intensive' },
  { id: 'exam',         icon: '🎓', pt: 'Preparação para Exames',  en: 'Exam Prep' },
]

const LEVELS = [
  { id: 'beginner',     pt: '🌱 Iniciante',       en: '🌱 Beginner' },
  { id: 'intermediate', pt: '🌿 Intermediário',    en: '🌿 Intermediate' },
  { id: 'advanced',     pt: '🌳 Avançado',         en: '🌳 Advanced' },
]

const GOALS = [
  { id: 'travel',   pt: '✈️ Viagem',           en: '✈️ Travel' },
  { id: 'work',     pt: '💼 Trabalho/Negócios', en: '💼 Work / Business' },
  { id: 'convo',    pt: '💬 Conversação geral', en: '💬 General conversation' },
  { id: 'exam',     pt: '🎓 Exames (IELTS etc)', en: '🎓 Exams (IELTS etc)' },
  { id: 'culture',  pt: '🎬 Cultura / Entretenimento', en: '🎬 Culture / Entertainment' },
  { id: 'other',    pt: '✨ Outro',              en: '✨ Other' },
]

const PLANS = [
  { id: 'mensal',      pt: 'Mensal',      en: 'Monthly' },
  { id: 'trimestral',  pt: 'Trimestral',  en: 'Quarterly' },
  { id: 'semestral',   pt: 'Semestral',   en: '6 months' },
  { id: 'anual',       pt: 'Anual',       en: 'Annual' },
]

export default function Register({ lang, onBack, onSuccess, courseStudents, upDb }) {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [phone,   setPhone]   = useState('')
  const [pass,    setPass]    = useState('')
  const [level,   setLevel]   = useState('')
  const [goal,    setGoal]    = useState('')
  const [journey, setJourney] = useState('')
  const [plan,    setPlan]    = useState('')
  const [payDay,  setPayDay]  = useState('')
  const [busy,    setBusy]    = useState(false)
  const [err,     setErr]     = useState('')
  const [done,    setDone]    = useState(false)

  const pt = lang === 'pt'

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !pass.trim() || !level || !goal || !journey || !plan || !payDay) {
      setErr(pt ? 'Preencha todos os campos.' : 'Please fill all fields.')
      return
    }
    const emailNorm = email.trim().toLowerCase()
    if (courseStudents.some(s => s.email === emailNorm)) {
      setErr(pt ? 'Este email já está cadastrado.' : 'This email is already registered.')
      return
    }
    setBusy(true)
    try {
      const hashed = await hashPassword(pass.trim())
      const id = `cs_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
      const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)]
      const newStudent = {
        id, name: name.trim(), email: emailNorm, phone: phone.trim(),
        password: hashed, level, goal, jid: journey, plan, payDay: Number(payDay),
        avatar, active: false, createdAt: new Date().toISOString().slice(0, 10),
      }
      const updated = [...courseStudents, newStudent]
      upDb({ courseStudents: updated })
      setDone(true)
    } finally {
      setBusy(false)
    }
  }

  const lbl = (text) => <label style={{ ...ir(600, 11), color: B.mid, textTransform: 'uppercase', letterSpacing: 0.5, display: 'block', marginBottom: 5 }}>{text}</label>

  if (done) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: 20 }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '44px 32px', maxWidth: 400, width: '100%', textAlign: 'center', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <p style={{ ...pp(800, 20), color: B.dark, marginBottom: 10 }}>{pt ? 'Cadastro recebido!' : 'Registration received!'}</p>
        <p style={{ ...ir(400, 14), color: B.mid, lineHeight: 1.6, marginBottom: 28 }}>
          {pt
            ? 'Assim que confirmarmos seu pagamento, Teacher Renata vai liberar seu acesso. Fique de olho no WhatsApp! 💬'
            : 'Once we confirm your payment, Teacher Renata will unlock your access. Keep an eye on WhatsApp! 💬'}
        </p>
        <a href="https://wa.me/5511986704076" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', background: '#25D366', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', marginBottom: 14 }}>
          WhatsApp Teacher Renata
        </a>
        <br />
        <button style={{ background: 'none', border: 'none', color: B.mid, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }} onClick={onBack}>
          {pt ? '← Voltar ao início' : '← Back to home'}
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: '24px 16px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '36px 28px', maxWidth: 480, width: '100%', boxShadow: '0 40px 80px rgba(44,24,16,0.3)', alignSelf: 'flex-start' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Logo h={48} />
        </div>
        <h2 style={{ ...pp(700, 18), color: B.dark, textAlign: 'center', marginBottom: 4 }}>
          {pt ? 'Criar conta' : 'Create account'}
        </h2>
        <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', marginBottom: 28 }}>
          {pt ? 'Preencha seus dados para começar' : 'Fill in your details to get started'}
        </p>

        {/* Dados pessoais */}
        <p style={{ ...pp(700, 11), color: B.marrom, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{pt ? 'Dados pessoais' : 'Personal info'}</p>

        <div style={{ marginBottom: 12 }}>
          {lbl(pt ? 'Nome completo' : 'Full name')}
          <input style={S.inp} placeholder={pt ? 'Seu nome completo' : 'Your full name'} value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: 12 }}>
          {lbl('Email')}
          <input style={S.inp} type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: 12 }}>
          {lbl(pt ? 'Celular (WhatsApp)' : 'Phone (WhatsApp)')}
          <input style={S.inp} type="tel" placeholder="(11) 99999-9999" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div style={{ marginBottom: 20 }}>
          {lbl(pt ? 'Senha' : 'Password')}
          <input style={S.inp} type="password" placeholder="••••••••" value={pass} onChange={e => setPass(e.target.value)} />
        </div>

        {/* Nível e objetivo */}
        <p style={{ ...pp(700, 11), color: B.marrom, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{pt ? 'Seu inglês' : 'Your English'}</p>

        <div style={{ marginBottom: 12 }}>
          {lbl(pt ? 'Nível atual' : 'Current level')}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {LEVELS.map(l => (
              <button key={l.id} onClick={() => setLevel(l.id)}
                style={{ flex: 1, minWidth: 100, padding: '10px 8px', borderRadius: 10, border: `2px solid ${level === l.id ? B.marrom : B.border}`, background: level === l.id ? B.marrBg : B.white, cursor: 'pointer', fontFamily: 'inherit', ...ir(600, 12), color: level === l.id ? B.dark : B.mid, transition: 'all 0.15s' }}>
                {pt ? l.pt : l.en}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          {lbl(pt ? 'Objetivo principal' : 'Main goal')}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {GOALS.map(g => (
              <button key={g.id} onClick={() => setGoal(g.id)}
                style={{ padding: '7px 12px', borderRadius: 20, border: `2px solid ${goal === g.id ? B.laranja : B.border}`, background: goal === g.id ? B.larBg : B.white, cursor: 'pointer', fontFamily: 'inherit', ...ir(600, 12), color: goal === g.id ? B.larD : B.mid, transition: 'all 0.15s' }}>
                {pt ? g.pt : g.en}
              </button>
            ))}
          </div>
        </div>

        {/* Jornada */}
        <p style={{ ...pp(700, 11), color: B.marrom, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{pt ? 'Jornada' : 'Journey'}</p>
        <div style={{ marginBottom: 20 }}>
          {lbl(pt ? 'Qual jornada você quer fazer?' : 'Which journey do you want?')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {JOURNEYS_LIST.map(j => (
              <button key={j.id} onClick={() => setJourney(j.id)}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 11, border: `2px solid ${journey === j.id ? B.marrom : B.border}`, background: journey === j.id ? B.marrBg : B.white, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.15s' }}>
                <span style={{ fontSize: 18 }}>{j.icon}</span>
                <span style={{ ...ir(600, 13), color: journey === j.id ? B.dark : B.mid }}>{pt ? j.pt : j.en}</span>
                {journey === j.id && <span style={{ marginLeft: 'auto', color: B.marrom, fontWeight: 900, fontSize: 14 }}>✓</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Plano e pagamento */}
        <p style={{ ...pp(700, 11), color: B.marrom, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{pt ? 'Plano & Pagamento' : 'Plan & Payment'}</p>

        <div style={{ marginBottom: 12 }}>
          {lbl(pt ? 'Plano' : 'Plan')}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PLANS.map(p => (
              <button key={p.id} onClick={() => setPlan(p.id)}
                style={{ flex: 1, minWidth: 90, padding: '10px 8px', borderRadius: 10, border: `2px solid ${plan === p.id ? B.laranja : B.border}`, background: plan === p.id ? B.larBg : B.white, cursor: 'pointer', fontFamily: 'inherit', ...ir(600, 12), color: plan === p.id ? B.larD : B.mid, transition: 'all 0.15s' }}>
                {pt ? p.pt : p.en}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          {lbl(pt ? 'Dia do pagamento (todo mês)' : 'Payment day (monthly)')}
          <select style={{ ...S.inp, cursor: 'pointer' }} value={payDay} onChange={e => setPayDay(e.target.value)}>
            <option value="">{pt ? 'Escolha o dia…' : 'Choose the day…'}</option>
            {Array.from({ length: 28 }, (_, i) => i + 1).map(d => (
              <option key={d} value={d}>{pt ? `Dia ${d}` : `Day ${d}`}</option>
            ))}
          </select>
        </div>

        {err && (
          <div style={{ background: '#FEE2E2', borderRadius: 10, padding: '10px 14px', marginBottom: 16, display: 'flex', gap: 8 }}>
            <span>⚠️</span>
            <p style={{ ...ir(600, 12), color: '#DC2626' }}>{err}</p>
          </div>
        )}

        <button style={{ ...S.btn(B.laranja), width: '100%', fontSize: 15, opacity: busy ? 0.7 : 1, cursor: busy ? 'wait' : 'pointer', marginBottom: 12 }}
          onClick={handleSubmit} disabled={busy}>
          {busy ? (pt ? 'Enviando…' : 'Sending…') : (pt ? 'Criar conta' : 'Create account')}
        </button>

        <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '8px 20px', fontSize: 12, color: B.mid, cursor: 'pointer', width: '100%' }} onClick={onBack}>
          {pt ? '← Voltar' : '← Back'}
        </button>
      </div>
    </div>
  )
}
