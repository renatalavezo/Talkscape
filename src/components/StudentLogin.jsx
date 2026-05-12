import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Logo from './Logo'

export default function StudentLogin({ t, lang, setLang, u, setU, p, setP, err, onLogin, onBack }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})` }}>
      <div className="fu" style={{ background: B.white, borderRadius: 24, padding: '44px 36px', maxWidth: 380, width: '92%', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}><Logo h={52} /></div>
        <h2 style={{ ...pp(700, 18), color: B.dark, marginBottom: 4, textAlign: 'center' }}>{t.loginTitle}</h2>
        <p style={{ ...ir(400, 13), color: B.light, textAlign: 'center', marginBottom: 24 }}>{t.loginSub}</p>
        <div style={{ marginBottom: 12 }}>
          <label style={S.lbl}>{t.userLabel}</label>
          <input style={S.inp} placeholder={t.userLabel} value={u} onChange={e => setU(e.target.value)} onKeyDown={e => e.key === 'Enter' && onLogin()} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={S.lbl}>{t.passLabel2}</label>
          <input type="password" style={S.inp} placeholder="••••••••" value={p} onChange={e => setP(e.target.value)} onKeyDown={e => e.key === 'Enter' && onLogin()} />
        </div>
        {err && <p style={{ ...ir(600, 12), color: B.marrom, marginBottom: 12, textAlign: 'center' }}>⚠️ {err}</p>}
        <button style={{ ...S.btn(B.marrom), width: '100%', marginBottom: 12, fontSize: 14 }} onClick={onLogin}>{t.loginBtn}</button>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, color: B.mid, cursor: 'pointer' }} onClick={onBack}>←</button>
          <button style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '6px 16px', fontSize: 12, color: B.mid, cursor: 'pointer' }} onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>{t.switchLang}</button>
        </div>
        <p style={{ ...ir(400, 11), color: B.light, textAlign: 'center', marginTop: 16 }}>{t.noAccountHint}</p>
      </div>
    </div>
  )
}
