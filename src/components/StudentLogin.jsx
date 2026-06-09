import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Logo from './Logo'

export default function StudentLogin({ t, lang, setLang, u, setU, p, setP, err, busy, onLogin, onBack, onRegister }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: 20 }}>
      <div style={{ background: B.white, borderRadius: 24, padding: '44px 36px', maxWidth: 380, width: '100%', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Logo h={52} />
        </div>
        <h2 style={{ ...pp(700, 18), color: B.dark, marginBottom: 4, textAlign: 'center' }}>
          {lang === 'pt' ? 'Entrar' : 'Sign in'}
        </h2>
        <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', marginBottom: 28 }}>
          {lang === 'pt' ? 'Aluna particular ou das Jornadas — mesma tela!' : 'Private or Journey student — same screen!'}
        </p>

        <div style={{ background: B.cream, borderRadius: 12, padding: '12px 14px', marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 14 }}>👩‍💻</span>
            <p style={{ ...ir(400, 12), color: B.mid, lineHeight: 1.5 }}>
              {lang === 'pt' ? <><strong style={{ color: B.dark }}>Aluna particular:</strong> entre com seu <strong>usuário</strong>.</> : <><strong style={{ color: B.dark }}>Private student:</strong> sign in with your <strong>username</strong>.</>}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 14 }}>🗺️</span>
            <p style={{ ...ir(400, 12), color: B.mid, lineHeight: 1.5 }}>
              {lang === 'pt' ? <><strong style={{ color: B.dark }}>Aluna das Jornadas:</strong> entre com seu <strong>email</strong>.</> : <><strong style={{ color: B.dark }}>Journey student:</strong> sign in with your <strong>email</strong>.</>}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>{lang === 'pt' ? 'Usuário ou email' : 'Username or email'}</label>
          <input style={S.inp} placeholder={lang === 'pt' ? 'seu_usuario ou email@email.com' : 'your_username or email@email.com'}
            value={u} onChange={e => setU(e.target.value)} onKeyDown={e => e.key === 'Enter' && onLogin()} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={S.lbl}>{lang === 'pt' ? 'Senha' : 'Password'}</label>
          <input type="password" style={S.inp} placeholder="••••••••"
            value={p} onChange={e => setP(e.target.value)} onKeyDown={e => e.key === 'Enter' && onLogin()} />
        </div>

        {err && (
          <div style={{ background: '#FEE2E2', borderRadius: 10, padding: '10px 14px', marginBottom: 16, display: 'flex', gap: 8 }}>
            <span>⚠️</span>
            <p style={{ ...ir(600, 12), color: '#DC2626' }}>{err}</p>
          </div>
        )}

        <button style={{ ...S.btn(B.laranja), width: '100%', marginBottom: 12, fontSize: 15, opacity: busy ? 0.7 : 1, cursor: busy ? 'wait' : 'pointer' }} onClick={onLogin} disabled={busy}>
          {busy ? (lang === 'pt' ? 'Entrando...' : 'Signing in...') : (lang === 'pt' ? 'Entrar' : 'Sign in')}
        </button>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, color: B.mid, cursor: 'pointer' }} onClick={onBack}>←</button>
          <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, color: B.mid, cursor: 'pointer' }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>{t.switchLang}</button>
        </div>

        <div style={{ borderTop: `1px solid ${B.border}`, marginTop: 20, paddingTop: 20, textAlign: 'center' }}>
          <p style={{ ...ir(400, 12), color: B.mid, marginBottom: 10 }}>
            {lang === 'pt' ? 'Ainda não tem conta?' : "Don't have an account yet?"}
          </p>
          <button style={{ width: '100%', padding: '11px', borderRadius: 12, border: `2px solid ${B.marrom}`, background: 'transparent', color: B.marrom, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins,sans-serif', marginBottom: 14 }}
            onClick={onRegister}>
            {lang === 'pt' ? 'Criar conta' : 'Create account'}
          </button>
          <p style={{ ...ir(400, 11), color: B.light, marginBottom: 8 }}>
            {lang === 'pt' ? 'Dúvidas? Fale comigo:' : 'Questions? Talk to me:'}
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <a href="https://wa.me/5511986704076?text=Olá%20Renata!%20Quero%20começar%20no%20TalkScape." target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: '#25D366', color: '#fff', borderRadius: 10, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/talkscape.byrenata" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: '#E1306C', color: '#fff', borderRadius: 10, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
