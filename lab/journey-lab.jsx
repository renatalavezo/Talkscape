// DEV-ONLY lab for the v2 journey player (served by `npm run dev` at
// /lab/journey.html; not part of the production build). Runs the real player
// against an in-memory db, so a whole week can be walked through at any level
// without Firebase. Query params simulate browser limitations:
//   ?tts=off  → no speechSynthesis      ?rec=off → no MediaRecorder
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/global.css'
import JourneyV2 from '../src/components/journeyV2/JourneyV2'
import JourneyV2TeacherView from '../src/components/journeyV2/JourneyV2TeacherView'
import { CORE_PILOT } from '../src/constants/journeys/pilot.js'
import { CEFR_ORDER } from '../src/constants/journeyLevels.js'
import { D } from '../src/constants/dashColors'

const q = new URLSearchParams(location.search)
if (q.get('tts') === 'off') { delete window.speechSynthesis; delete window.SpeechSynthesisUtterance }
if (q.get('rec') === 'off') { delete window.MediaRecorder }

const SID = '1700000000999'
const STORE = 'journey-lab-db'
const load = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {} } catch { return {} } }

function Lab() {
  const [db, setDb] = useState(load)
  const [cefr, setCefr] = useState(q.get('level') || 'A2')
  const [lang, setLang] = useState(q.get('lang') || 'pt')
  const [teacher, setTeacher] = useState(q.get('view') === 'teacher')
  const upDb = patch => setDb(p => {
    const n = { ...p, ...patch }
    try { localStorage.setItem(STORE, JSON.stringify(n)) } catch { /* ignore */ }
    return n
  })
  window.__labDb = db
  const checked = db[`jsd_${SID}`] || {}
  const reset = () => { localStorage.removeItem(STORE); setDb({}) }
  return (
    <div style={{ minHeight: '100vh', background: D.cream, fontFamily: "'Hanken Grotesk',sans-serif", color: D.ink }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 5, background: D.ink, color: '#fff', padding: '10px 16px', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', fontSize: 13 }}>
        <b>Journey lab</b>
        <label>CEFR <select data-testid="lab-level" value={cefr} onChange={e => setCefr(e.target.value)}>{CEFR_ORDER.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>UI <select data-testid="lab-lang" value={lang} onChange={e => setLang(e.target.value)}><option value="pt">pt</option><option value="en">en</option></select></label>
        <button data-testid="lab-reset" onClick={reset}>Apagar progresso</button>
        <label><input type="checkbox" data-testid="lab-teacher" checked={teacher} onChange={e => setTeacher(e.target.checked)} /> Visão da professora</label>
        <span style={{ opacity: 0.7 }}>tts: {window.speechSynthesis ? 'on' : 'off'} · rec: {window.MediaRecorder ? 'on' : 'off'} · dados só neste navegador</span>
      </div>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '24px 16px 80px' }}>
        {teacher
          ? <JourneyV2TeacherView journey={CORE_PILOT} lang={lang} sid={SID} db={db} cefr={cefr} checked={checked} />
          : <JourneyV2 key={cefr + lang} journey={CORE_PILOT} lang={lang} sid={SID} db={db} upDb={upDb} cefr={cefr}
              checked={checked} markDone={id => upDb({ [`jsd_${SID}`]: { ...checked, [id]: true } })} />}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><Lab /></StrictMode>)
