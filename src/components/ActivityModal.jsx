import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp } from '../constants/styles'

const TYPE_LABELS = {
  mc:        { en: 'Multiple Choice',   pt: 'Múltipla Escolha' },
  fill:      { en: 'Fill in the Blank', pt: 'Complete a Frase' },
  tf:        { en: 'True or False',     pt: 'Verdadeiro ou Falso' },
  translate: { en: 'Translation',       pt: 'Tradução' },
  match:     { en: 'Match',             pt: 'Relacione' },
  text:      { en: 'Written Answer',    pt: 'Resposta Escrita' },
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function ActivityItem({ act, lang, onResult }) {
  const [sel, setSel]       = useState(null)
  const [text, setText]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect]    = useState(null)
  const [pairs, setPairs]   = useState(() => {
    if (act.type === 'match') {
      return { lefts: act.pairs.map(p => p.left), rights: shuffle(act.pairs.map(p => p.right)), selected: null, matched: {} }
    }
    return null
  })

  const check = () => {
    let ok = false
    if (act.type === 'mc')        ok = sel === act.answerIdx
    if (act.type === 'tf')        ok = sel === act.answer
    if (act.type === 'fill')      ok = text.trim().toLowerCase() === (act.answer || '').toLowerCase()
    if (act.type === 'translate' || act.type === 'text') {
      const kw = (act.keywords?.length ? act.keywords : [act.answer]).map(k => (k || '').toLowerCase())
      ok = kw.some(k => k && text.trim().toLowerCase().includes(k))
    }
    if (act.type === 'match') {
      ok = Object.keys(pairs.matched).length === act.pairs.length &&
        act.pairs.every(p => pairs.matched[p.left] === p.right)
    }
    setCorrect(ok)
    setSubmitted(true)
    onResult(ok)
  }

  const answerLabel = () => {
    if (act.type === 'mc')        return act.options[act.answerIdx]
    if (act.type === 'tf')        return act.answer ? 'True' : 'False'
    if (act.type === 'fill' || act.type === 'translate') return act.answer
    if (act.type === 'text')      return act.keywords?.join(', ')
    return ''
  }

  const bg = submitted ? (correct ? '#d1fae5' : '#fee2e2') : '#fff'
  const border = submitted ? (correct ? '#6ee7b7' : '#fca5a5') : B.border

  return (
    <div style={{ background: bg, borderRadius: 14, padding: 16, border: `1.5px solid ${border}` }}>
      <p style={{ ...pp(600, 10), color: B.mid, marginBottom: 7, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {TYPE_LABELS[act.type]?.[lang] || act.type}
      </p>
      <p style={{ ...ir(600, 14), color: B.dark, marginBottom: 14 }}>{act.prompt}</p>

      {act.type === 'mc' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {act.options.map((opt, i) => (
            <button key={i} disabled={submitted} onClick={() => setSel(i)}
              style={{ textAlign: 'left', padding: '10px 14px', borderRadius: 10, fontSize: 13, fontFamily: 'Inter,sans-serif',
                border: `1.5px solid ${submitted && i === act.answerIdx ? '#059669' : sel === i ? B.laranja : B.border}`,
                background: submitted && i === act.answerIdx ? '#d1fae5' : sel === i ? B.laranja + '22' : '#fff',
                color: B.dark, cursor: submitted ? 'default' : 'pointer' }}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {act.type === 'tf' && (
        <div style={{ display: 'flex', gap: 10 }}>
          {[true, false].map(v => (
            <button key={String(v)} disabled={submitted} onClick={() => setSel(v)}
              style={{ flex: 1, padding: '11px', borderRadius: 10,
                border: `1.5px solid ${submitted && v === act.answer ? '#059669' : sel === v ? B.laranja : B.border}`,
                background: submitted && v === act.answer ? '#d1fae5' : sel === v ? B.laranja + '22' : '#fff',
                cursor: submitted ? 'default' : 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'Poppins,sans-serif', color: B.dark }}>
              {v ? (lang === 'pt' ? 'Verdadeiro ✓' : 'True ✓') : (lang === 'pt' ? 'Falso ✗' : 'False ✗')}
            </button>
          ))}
        </div>
      )}

      {(act.type === 'fill' || act.type === 'translate' || act.type === 'text') && (
        <input disabled={submitted}
          style={{ width: '100%', padding: '11px 13px', borderRadius: 10, border: `1.5px solid ${B.border}`,
            fontSize: 13, fontFamily: 'Inter,sans-serif', background: submitted ? '#f9fafb' : '#fff', boxSizing: 'border-box' }}
          placeholder={lang === 'pt' ? 'Sua resposta...' : 'Your answer...'}
          value={text} onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !submitted && text.trim() && check()} />
      )}

      {act.type === 'match' && pairs && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {pairs.lefts.map(left => (
              <button key={left} disabled={submitted} onClick={() => setPairs(p => ({ ...p, selected: left }))}
                style={{ padding: '9px 11px', borderRadius: 9, textAlign: 'left', fontSize: 12, fontFamily: 'Inter,sans-serif', fontWeight: 600,
                  border: `1.5px solid ${pairs.selected === left ? B.laranja : pairs.matched[left] ? B.oliva : B.border}`,
                  background: pairs.selected === left ? B.laranja + '22' : pairs.matched[left] ? '#eef2eb' : '#fff',
                  color: B.dark, cursor: 'pointer' }}>
                {left}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {pairs.rights.map(right => {
              const ml = Object.keys(pairs.matched).find(k => pairs.matched[k] === right)
              return (
                <button key={right} disabled={submitted}
                  onClick={() => {
                    if (!pairs.selected || submitted) return
                    setPairs(p => {
                      const m = { ...p.matched }
                      Object.keys(m).forEach(k => { if (m[k] === right) delete m[k] })
                      m[p.selected] = right
                      return { ...p, matched: m, selected: null }
                    })
                  }}
                  style={{ padding: '9px 11px', borderRadius: 9, textAlign: 'left', fontSize: 12, fontFamily: 'Inter,sans-serif', fontWeight: 600,
                    border: `1.5px solid ${ml ? B.oliva : B.border}`,
                    background: ml ? '#eef2eb' : '#fff',
                    color: B.dark, cursor: 'pointer' }}>
                  {right}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {!submitted && (
        <button onClick={check} disabled={act.type === 'mc' ? sel === null : act.type === 'tf' ? sel === null : act.type === 'match' ? Object.keys(pairs?.matched || {}).length < (act.pairs?.length || 0) : !text.trim()}
          style={{ marginTop: 14, padding: '9px 22px', borderRadius: 20, background: B.laranja, border: 'none',
            color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer',
            opacity: (act.type === 'mc' ? sel === null : act.type === 'tf' ? sel === null : act.type === 'match' ? Object.keys(pairs?.matched || {}).length < (act.pairs?.length || 0) : !text.trim()) ? 0.4 : 1 }}>
          {lang === 'pt' ? 'Verificar' : 'Check'}
        </button>
      )}

      {submitted && (
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>{correct ? '🎉' : '❌'}</span>
          <div>
            <p style={{ fontWeight: 700, fontSize: 13, fontFamily: 'Inter,sans-serif', color: correct ? '#059669' : '#dc2626' }}>
              {correct ? (lang === 'pt' ? 'Correto!' : 'Correct!') : (lang === 'pt' ? 'Não foi dessa vez!' : 'Not this time!')}
            </p>
            {!correct && answerLabel() && (
              <p style={{ fontSize: 12, fontFamily: 'Inter,sans-serif', color: B.mid, marginTop: 2 }}>
                {lang === 'pt' ? 'Resposta: ' : 'Answer: '}<strong>{answerLabel()}</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ActivityModal({ acts, lang, taskText, onClose, upDb, sid, taskId }) {
  const [idx, setIdx]       = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone]     = useState(false)

  const handleResult = (ok) => {
    const nr = [...results, ok]
    setResults(nr)
    const isLast = idx + 1 >= acts.length
    if (isLast) {
      setDone(true)
      const score = Math.round(nr.filter(Boolean).length / nr.length * 100)
      upDb({ [`actScore_${sid}_${taskId}`]: score })
    } else {
      setTimeout(() => setIdx(i => i + 1), 1000)
    }
  }

  const score = done ? Math.round(results.filter(Boolean).length / results.length * 100) : 0

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 1000 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: '22px 22px 0 0', padding: '24px 20px 32px', width: '100%', maxWidth: 500, maxHeight: '88vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ flex: 1, marginRight: 12 }}>
            <p style={{ ...pp(700, 15), color: B.dark }}>{lang === 'pt' ? '🎯 Atividades' : '🎯 Activities'}</p>
            <p style={{ ...ir(400, 11), color: B.light, marginTop: 2 }}>{taskText}</p>
          </div>
          <button onClick={onClose}
            style={{ background: B.bege, border: 'none', borderRadius: 20, padding: '6px 13px', cursor: 'pointer', fontSize: 13, color: B.mid, fontFamily: 'Inter,sans-serif' }}>
            ✕
          </button>
        </div>

        {!done ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <p style={{ ...ir(400, 12), color: B.light }}>
                {lang === 'pt' ? `Questão ${idx + 1} de ${acts.length}` : `Question ${idx + 1} of ${acts.length}`}
              </p>
              <div style={{ display: 'flex', gap: 5 }}>
                {acts.map((_, i) => (
                  <div key={i} style={{ width: 9, height: 9, borderRadius: 5,
                    background: i < results.length ? (results[i] ? '#059669' : '#dc2626') : i === idx ? B.laranja : B.border }} />
                ))}
              </div>
            </div>
            <ActivityItem key={idx} act={acts[idx]} lang={lang} onResult={handleResult} />
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: 52, marginBottom: 14 }}>{score >= 80 ? '🏆' : score >= 50 ? '👏' : '💪'}</div>
            <p style={{ ...pp(700, 30), color: B.dark, marginBottom: 6 }}>{score}%</p>
            <p style={{ ...ir(400, 14), color: B.mid, marginBottom: 24 }}>
              {score >= 80 ? (lang === 'pt' ? 'Excelente trabalho!' : 'Excellent work!') :
               score >= 50 ? (lang === 'pt' ? 'Bom trabalho! Continue!' : 'Good job! Keep going!') :
               (lang === 'pt' ? 'Continue praticando!' : 'Keep practicing!')}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => { setIdx(0); setResults([]); setDone(false) }}
                style={{ padding: '10px 22px', borderRadius: 20, border: `2px solid ${B.laranja}`, background: 'transparent', color: B.laranja, fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
                {lang === 'pt' ? 'Tentar de novo' : 'Try again'}
              </button>
              <button onClick={onClose}
                style={{ padding: '10px 22px', borderRadius: 20, background: B.laranja, border: 'none', color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
