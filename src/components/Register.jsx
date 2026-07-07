import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import { AVATARS } from '../constants/avatars'
import { hashPassword } from '../utils'
import Logo from './Logo'
import Icon from './Icon'

export default function Register({ lang, onBack, students, upDb }) {
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass,  setPass]  = useState('')
  const [busy,  setBusy]  = useState(false)
  const [err,   setErr]   = useState('')
  const [done,  setDone]  = useState(false)

  const pt = lang === 'pt'

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !pass.trim()) {
      setErr(pt ? 'Preencha todos os campos.' : 'Please fill all fields.')
      return
    }
    const emailNorm = email.trim().toLowerCase()
    if (students.some(s => (s.email || '').toLowerCase() === emailNorm)) {
      setErr(pt ? 'Este email já está cadastrado.' : 'This email is already registered.')
      return
    }
    setBusy(true)
    try {
      const hashed  = await hashPassword(pass.trim())
      const id      = `st_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`
      const avatar  = AVATARS[Math.floor(Math.random() * AVATARS.length)]
      const username = name.trim().toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '') + '_' + id.slice(-4)
      const newStudent = {
        id, name: name.trim(), email: emailNorm, phone: phone.trim(),
        username, password: hashed, avatar, active: false,
        createdAt: new Date().toISOString().slice(0, 10),
      }
      upDb({ students: [...students, newStudent] })
      setDone(true)
    } finally {
      setBusy(false)
    }
  }

  if (done) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: 20 }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '44px 32px', maxWidth: 400, width: '100%', textAlign: 'center', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><Icon name="checkCircle" size={56} color={B.oliva} /></div>
        <p style={{ ...pp(800, 20), color: B.dark, marginBottom: 10 }}>
          {pt ? 'Cadastro recebido!' : 'Registration received!'}
        </p>
        <p style={{ ...ir(400, 14), color: B.mid, lineHeight: 1.6, marginBottom: 28 }}>
          {pt
            ? 'Teacher Renata vai entrar em contato para liberar seu acesso. Fique de olho no WhatsApp!'
            : 'Teacher Renata will reach out to set up your access. Keep an eye on WhatsApp!'}
        </p>
        <a href="https://wa.me/5511986704076" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 22px', background: '#25D366', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', marginBottom: 16 }}>
          WhatsApp Teacher Renata
        </a>
        <br />
        <button style={{ background: 'none', border: 'none', color: B.mid, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }} onClick={onBack}>
          {pt ? '← Voltar ao login' : '← Back to login'}
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: 20 }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '40px 30px', maxWidth: 400, width: '100%', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Logo h={48} />
        </div>
        <h2 style={{ ...pp(700, 18), color: B.dark, textAlign: 'center', marginBottom: 4 }}>
          {pt ? 'Quero começar!' : 'I want to start!'}
        </h2>
        <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', marginBottom: 28 }}>
          {pt ? 'Deixa seus dados e Teacher Renata entra em contato' : 'Leave your details and Teacher Renata will reach out'}
        </p>

        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>{pt ? 'Nome completo' : 'Full name'}</label>
          <input style={S.inp} placeholder={pt ? 'Seu nome completo' : 'Your full name'}
            value={name} onChange={e => setName(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>Email</label>
          <input style={S.inp} type="email" placeholder="seu@email.com"
            value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>{pt ? 'Celular (WhatsApp)' : 'Phone (WhatsApp)'}</label>
          <input style={S.inp} type="tel" placeholder="(11) 99999-9999"
            value={phone} onChange={e => setPhone(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={S.lbl}>{pt ? 'Crie uma senha' : 'Create a password'}</label>
          <input style={S.inp} type="password" placeholder="••••••••"
            value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
        </div>

        {err && (
          <div style={{ background: '#FEE2E2', borderRadius: 10, padding: '10px 14px', marginBottom: 14, display: 'flex', gap: 8 }}>
            <Icon name="warning" size={14} color="#DC2626" />
            <p style={{ ...ir(600, 12), color: '#DC2626' }}>{err}</p>
          </div>
        )}

        <button style={{ ...S.btn(B.laranja), width: '100%', fontSize: 15, marginBottom: 12, opacity: busy ? 0.7 : 1, cursor: busy ? 'wait' : 'pointer' }}
          onClick={handleSubmit} disabled={busy}>
          {busy ? (pt ? 'Enviando…' : 'Sending…') : (pt ? 'Enviar cadastro' : 'Submit')}
        </button>
        <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '8px 20px', fontSize: 12, color: B.mid, cursor: 'pointer', width: '100%' }}
          onClick={onBack}>
          {pt ? '← Voltar' : '← Back'}
        </button>
      </div>
    </div>
  )
}
