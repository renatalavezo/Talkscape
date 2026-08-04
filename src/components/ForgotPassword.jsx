import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Logo from './Logo'
import Icon from './Icon'

// "Esqueci minha senha": the student sends a reset request. Since the app has no
// email backend, the request is stored for Teacher Renata, who resets it from
// her dashboard. We always show the same confirmation so no one can probe which
// emails have an account.
export default function ForgotPassword({ lang, onSubmit, onBack }) {
  const pt = lang === 'pt'
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = () => {
    if (!email.trim()) return
    onSubmit(email.trim())
    setDone(true)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: 20 }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '44px 36px', maxWidth: 380, width: '100%', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Logo h={52} />
        </div>

        {!done ? (
          <>
            <h2 style={{ ...pp(700, 18), color: B.dark, marginBottom: 6, textAlign: 'center' }}>
              {pt ? 'Esqueci minha senha' : 'Forgot my password'}
            </h2>
            <p style={{ ...ir(400, 12.5), color: B.mid, marginBottom: 22, textAlign: 'center' }}>
              {pt
                ? 'Digite seu email. A Teacher Renata vai redefinir sua senha e falar com você.'
                : "Enter your email. Teacher Renata will reset your password and contact you."}
            </p>

            <div style={{ marginBottom: 20 }}>
              <label style={S.lbl}>Email</label>
              <input style={S.inp} type="email" placeholder="seu@email.com"
                value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} />
            </div>

            <button style={{ ...S.btn(B.laranja), width: '100%', marginBottom: 12, fontSize: 15 }} onClick={submit}>
              {pt ? 'Enviar pedido' : 'Send request'}
            </button>
            <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 12, padding: '10px', width: '100%', fontSize: 13, color: B.mid, cursor: 'pointer', fontFamily: 'Poppins,sans-serif' }} onClick={onBack}>
              {pt ? 'Voltar ao login' : 'Back to login'}
            </button>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="check" size={26} color="#16A34A" />
              </div>
            </div>
            <h2 style={{ ...pp(700, 18), color: B.dark, marginBottom: 8, textAlign: 'center' }}>
              {pt ? 'Pedido enviado!' : 'Request sent!'}
            </h2>
            <p style={{ ...ir(400, 12.5), color: B.mid, marginBottom: 20, textAlign: 'center' }}>
              {pt
                ? 'A Teacher Renata vai redefinir sua senha e te avisar. Se precisar de rapidez, fale com ela no WhatsApp.'
                : 'Teacher Renata will reset your password and let you know. For a faster reply, message her on WhatsApp.'}
            </p>
            <a href="https://wa.me/5511986704076?text=Ol%C3%A1%20Renata!%20Esqueci%20minha%20senha%20do%20TalkScape."
              target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '11px 18px', background: '#25D366', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', marginBottom: 12 }}>
              WhatsApp
            </a>
            <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 12, padding: '10px', width: '100%', fontSize: 13, color: B.mid, cursor: 'pointer', fontFamily: 'Poppins,sans-serif' }} onClick={onBack}>
              {pt ? 'Voltar ao login' : 'Back to login'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
