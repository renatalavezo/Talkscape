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

        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>Email</label>
          <input style={S.inp} placeholder="seu@email.com"
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
          <p style={{ ...ir(400, 11), color: B.light, marginBottom: 10 }}>
            {lang === 'pt' ? 'Dúvidas? Fale comigo:' : 'Questions? Talk to me:'}
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <a href="https://wa.me/5511986704076?text=Olá%20Renata!%20Quero%20começar%20no%20TalkScape." target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: '#25D366', color: '#fff', borderRadius: 50, fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', boxShadow: '0 4px 14px rgba(37,211,102,0.35)', letterSpacing: 0.2 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/talkscape.byrenata" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', color: '#fff', borderRadius: 50, fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', boxShadow: '0 4px 14px rgba(220,39,67,0.35)', letterSpacing: 0.2 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
