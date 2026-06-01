import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Logo from './Logo'
import Icon from './Icon'

export default function CourseLogin({ lang, u, setU, p, setP, err, onLogin, onBack }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: '32px 20px' }}>
      <div style={{ marginBottom: 24 }}>
        <Logo h={72} contrast />
      </div>

      <div style={{ background: B.white, borderRadius: 24, padding: 32, width: '100%', maxWidth: 380, boxShadow: '0 24px 60px rgba(44,24,16,0.35)' }}>
        <h2 style={{ ...pp(800, 20), color: B.dark, marginBottom: 4 }}>
          {lang === 'pt' ? 'Acesso ao curso' : 'Course access'}
        </h2>
        <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 24 }}>
          {lang === 'pt' ? 'Entre com seu email e senha de acesso.' : 'Sign in with your email and password.'}
        </p>

        <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>Email</p>
        <input
          style={{ ...S.inp, marginBottom: 12 }}
          type="email"
          placeholder="seuemail@email.com"
          value={u}
          onChange={e => setU(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onLogin()}
        />

        <p style={{ ...ir(600, 12), color: B.mid, marginBottom: 6 }}>
          {lang === 'pt' ? 'Senha' : 'Password'}
        </p>
        <input
          style={{ ...S.inp, marginBottom: 20 }}
          type="password"
          placeholder="••••••••"
          value={p}
          onChange={e => setP(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onLogin()}
        />

        {err && (
          <div style={{ background: '#FEE2E2', borderRadius: 10, padding: '10px 14px', marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <Icon name="alert" size={14} color="#DC2626" style={{ marginTop: 1, flexShrink: 0 }} />
            <p style={{ ...ir(600, 12), color: '#DC2626' }}>{err}</p>
          </div>
        )}

        <button style={{ ...S.btn(B.laranja), width: '100%', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }} onClick={onLogin}>
          <Icon name="next" size={16} color="#fff" />
          {lang === 'pt' ? 'Entrar' : 'Sign in'}
        </button>

        <button style={{ ...S.btn(B.bege), width: '100%', fontSize: 14, color: B.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={onBack}>
          <Icon name="back" size={14} color={B.dark} />
          {lang === 'pt' ? 'Voltar' : 'Back'}
        </button>

        <p style={{ ...ir(400, 11), color: B.light, textAlign: 'center', marginTop: 16 }}>
          {lang === 'pt' ? 'Não tem acesso ainda?' : "Don't have access yet?"}
        </p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8, flexWrap: 'wrap' }}>
          <a href="https://wa.me/5511986704076?text=Olá%20Renata!%20Quero%20acesso%20ao%20curso." target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: '#25D366', color: '#fff', borderRadius: 10, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
            WhatsApp
          </a>
          <a href="https://www.instagram.com/talkscape.byrenata" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: '#E1306C', color: '#fff', borderRadius: 10, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
