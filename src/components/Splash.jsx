import { B } from '../constants/colors'
import { ir, pp } from '../constants/styles'
import Logo from './Logo'

export default function Splash({ t, lang, setLang, onTeacher, onStudent }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})` }}>
      <div className="fu" style={{ background: B.white, borderRadius: 24, padding: '44px 36px', maxWidth: 400, width: '92%', textAlign: 'center', boxShadow: '0 40px 80px rgba(44,24,16,0.35)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <Logo h={55} />
        </div>
        <p style={{ ...ir(400, 13), color: B.light, marginBottom: 28 }}>
          {lang === 'pt' ? 'Acompanhe sua jornada com sua professora' : 'Track your journey with your teacher'}
        </p>
        <p style={{ ...pp(600, 12), color: B.light, marginBottom: 14, textTransform: 'uppercase', letterSpacing: 1 }}>{t.who}</p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <button
            style={{ padding: '11px 18px', background: B.oliva, color: '#fff', border: 'none', borderRadius: 14, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingTop: 16, paddingBottom: 16 }}
            onClick={onTeacher}
          >
            <span style={{ fontSize: 30 }}>👩‍🏫</span>
            <span style={{ ...pp(700, 12), color: '#fff' }}>{t.teacher}</span>
          </button>
          <button
            style={{ padding: '11px 18px', background: B.marrom, color: '#fff', border: 'none', borderRadius: 14, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingTop: 16, paddingBottom: 16 }}
            onClick={onStudent}
          >
            <span style={{ fontSize: 30 }}>🎒</span>
            <span style={{ ...pp(700, 12), color: '#fff' }}>{t.student}</span>
          </button>
        </div>
        <button
          style={{ background: 'none', border: `1.5px solid ${B.border}`, borderRadius: 20, padding: '7px 20px', fontSize: 12, color: B.mid, cursor: 'pointer' }}
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        >
          {lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        </button>
      </div>
    </div>
  )
}
