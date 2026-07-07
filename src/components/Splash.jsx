import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp } from '../constants/styles'
import Logo from './Logo'

export default function Splash({ t, lang, setLang, onTeacher, onStudent, onExplore, onCourse }) {
  const [showTeacher, setShowTeacher] = useState(false)

  const btnBase = {
    padding: '16px 24px', borderRadius: 16, fontSize: 15,
    fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins,sans-serif',
    width: '100%', textAlign: 'center', lineHeight: 1.4, border: 'none',
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: '32px 20px' }}>
      <div style={{ marginBottom: 12 }}>
        <Logo h={95} contrast />
      </div>
      <p style={{ ...ir(400, 14), color: 'rgba(255,255,255,0.85)', marginBottom: 40, textAlign: 'center', maxWidth: 280 }}>
        {lang === 'pt' ? 'Inglês que transforma. Aulas que respeitam quem você é.' : 'English that transforms. Classes that respect who you are.'}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 320, marginBottom: 24 }}>
        <button onClick={onStudent} style={{ ...btnBase, background: B.white, color: B.marrom, boxShadow: '0 8px 24px rgba(44,24,16,0.25)' }}>
          {lang === 'pt' ? 'Já sou aluna' : "I'm already a student"}
        </button>
        <button onClick={onExplore} style={{ ...btnBase, background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>
          {lang === 'pt' ? 'Ainda não sou aluna' : "I'm not a student yet"}
        </button>
      </div>

      <button style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '6px 16px', fontSize: 12, color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontFamily: 'inherit', marginBottom: 24 }}
        onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}>
        {lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      </button>

      {!showTeacher ? (
        <button onClick={() => setShowTeacher(true)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit' }}>
          {lang === 'pt' ? 'acesso restrito' : 'restricted access'}
        </button>
      ) : (
        <button onClick={onTeacher} style={{ background: 'rgba(44,24,16,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, padding: '10px 20px', color: 'rgba(255,255,255,0.6)', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
          {lang === 'pt' ? 'Entrar como professora' : 'Teacher login'}
        </button>
      )}
    </div>
  )
}
