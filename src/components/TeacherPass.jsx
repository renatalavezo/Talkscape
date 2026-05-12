import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Logo from './Logo'

export default function TeacherPass({ t, val, setVal, err, onSubmit, onBack }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja})` }}>
      <div className="fu" style={{ background: B.white, borderRadius: 24, padding: '44px 36px', maxWidth: 380, width: '92%', textAlign: 'center', boxShadow: '0 40px 80px rgba(44,24,16,0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><Logo h={48} /></div>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🔐</div>
        <h2 style={{ ...pp(700, 18), color: B.dark, marginBottom: 6 }}>{t.passLabel}</h2>
        <p style={{ ...ir(400, 12), color: B.light, marginBottom: 20 }}>{t.passHint}</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <input
            type="password"
            style={{ ...S.inp, flex: 1 }}
            placeholder="••••••••"
            value={val}
            onChange={e => setVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onSubmit()}
          />
          <button style={{ ...S.btn(B.marrom), padding: '11px 16px' }} onClick={onSubmit}>{t.enter}</button>
        </div>
        {err && <p style={{ ...ir(600, 12), color: B.marrom, marginBottom: 8 }}>⚠️ {t.wrongPass}</p>}
        <button
          style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '7px 20px', fontSize: 12, color: B.mid, cursor: 'pointer', marginTop: 8 }}
          onClick={onBack}
        >←</button>
      </div>
    </div>
  )
}
