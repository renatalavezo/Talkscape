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

// Lenient keyword matching: student's answer just needs to contain any keyword word
function keywordMatch(studentText, keywords = []) {
  if (!studentText.trim()) return false
  const st = studentText.trim().toLowerCase()
  const stWords = st.split(/\s+/)
  return keywords.some(kw => {
    const k = kw.toLowerCase().trim()
    if (!k) return false
    // Direct substring match
    if (st.includes(k)) return true
    // Word-level match (handles inflections roughly)
    return stWords.some(w => w.startsWith(k.slice(0, Math.max(3, k.length - 2))))
  })
}

function ActivityItem({ act, lang, onNext, isLast }) {
  const [sel, setSel]           = useState(null)
  const [text, setText]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [correct, setCorrect]   = useState(null)
  const [pairs, setPairs]       = useState(() => {
    if (act.type === 'match') {
      return { lefts: act.pairs.map(p => p.left), rights: shuffle(act.pairs.map(p => p.right)), selected: null, matched: {} }
    }
    return null
  })

  const check = () => {
    let ok = false
    if (act.type === 'mc')   ok = sel === act.answerIdx
    if (act.type === 'tf')   ok = sel === act.answer
    if (act.type === 'fill') {
      const st = text.trim().toLowerCase()
      const ans = (act.answer || '').toLowerCase()
      ok = st === ans || keywordMatch(st, act.keywords || [ans])
    }
    if (act.type === 'translate' || act.type === 'text') {
      ok = keywordMatch(text, act.keywords?.length ? act.keywords : [act.answer].filter(Boolean))
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
    if (act.type === 'tf')        return act.answer ? 'True / Verdadeiro' : 'False / Falso'
    if (act.type === 'fill' || act.type === 'translate') return act.answer
    if (act.type === 'text')      return act.keywords?.join(', ')
    if (act.type === 'match')     return act.pairs.map(p => `${p.left} → ${p.right}`).join(' · ')
    return ''
  }

  const bg     = submitted ? (correct ? '#d1fae5' : '#fff4f4') : '#fff'
  const border = submitted ? (correct ? '#6ee7b7' : '#fca5a5') : B.border
  const canCheck = act.type === 'mc' ? sel !== null
    : act.type === 'tf' ? sel !== null
    : act.type === 'match' ? Object.keys(pairs?.matched || {}).length === (act.pairs?.length || 0)
    : text.trim().length > 0

  return (
    <div style={{ background: bg, borderRadius: 16, padding: 18, border: `1.5px solid ${border}`, transition: 'background 0.3s, border-color 0.3s' }}>
      <p style={{ fontWeight: 600, fontSize: 10, fontFamily: 'Poppins,sans-serif', color: B.mid, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.6 }}>
        {TYPE_LABELS[act.type]?.[lang] || act.type}
      </p>

      {act.instruction && (
        <p style={{ fontSize: 12, fontFamily: 'Inter,sans-serif', color: B.mid, fontStyle: 'italic', marginBottom: 8, lineHeight: 1.5 }}>
          💡 {act.instruction}
        </p>
      )}

      <p style={{ fontWeight: 600, fontSize: 15, fontFamily: 'Inter,sans-serif', color: B.dark, marginBottom: 16, lineHeight: 1.5 }}>{act.prompt}</p>

      {act.type === 'mc' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {act.options.map((opt, i) => (
            <button key={i} disabled={submitted} onClick={() => setSel(i)}
              style={{ textAlign: 'left', padding: '11px 15px', borderRadius: 11, fontSize: 14, fontFamily: 'Inter,sans-serif',
                border: `1.5px solid ${submitted && i === act.answerIdx ? '#059669' : sel === i ? B.laranja : B.border}`,
                background: submitted && i === act.answerIdx ? '#d1fae5' : submitted && i === sel && !correct ? '#fee2e2' : sel === i ? B.laranja + '18' : '#fff',
                color: B.dark, cursor: submitted ? 'default' : 'pointer', transition: 'all 0.15s' }}>
              <span style={{ fontWeight: 600, color: submitted && i === act.answerIdx ? '#059669' : sel === i && !submitted ? B.laranja : B.mid, marginRight: 8 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      )}

      {act.type === 'tf' && (
        <div style={{ display: 'flex', gap: 10 }}>
          {[true, false].map(v => (
            <button key={String(v)} disabled={submitted} onClick={() => setSel(v)}
              style={{ flex: 1, padding: '13px', borderRadius: 11,
                border: `1.5px solid ${submitted && v === act.answer ? '#059669' : sel === v ? B.laranja : B.border}`,
                background: submitted && v === act.answer ? '#d1fae5' : submitted && v === sel && !correct ? '#fee2e2' : sel === v ? B.laranja + '18' : '#fff',
                cursor: submitted ? 'default' : 'pointer', fontWeight: 700, fontSize: 14, fontFamily: 'Poppins,sans-serif', color: B.dark }}>
              {v ? (lang === 'pt' ? '✓ Verdadeiro' : '✓ True') : (lang === 'pt' ? '✗ Falso' : '✗ False')}
            </button>
          ))}
        </div>
      )}

      {(act.type === 'fill' || act.type === 'translate' || act.type === 'text') && (
        <textarea disabled={submitted} rows={act.type === 'text' ? 3 : 1}
          style={{ width: '100%', padding: '11px 13px', borderRadius: 11, border: `1.5px solid ${B.border}`,
            fontSize: 14, fontFamily: 'Inter,sans-serif', background: submitted ? '#f9fafb' : '#fff',
            boxSizing: 'border-box', resize: 'none', lineHeight: 1.5,
            outline: 'none' }}
          placeholder={lang === 'pt' ? 'Escreva sua resposta aqui...' : 'Write your answer here...'}
          value={text} onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !e.shiftKey && act.type !== 'text' && !submitted && canCheck && (e.preventDefault(), check())} />
      )}

      {act.type === 'match' && pairs && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <p style={{ fontSize: 11, fontFamily: 'Poppins,sans-serif', color: B.mid, fontWeight: 600, marginBottom: 2 }}>
              {lang === 'pt' ? '1. Selecione' : '1. Select'}
            </p>
            {pairs.lefts.map(left => (
              <button key={left} disabled={submitted} onClick={() => setPairs(p => ({ ...p, selected: left }))}
                style={{ padding: '9px 12px', borderRadius: 9, textAlign: 'left', fontSize: 13, fontFamily: 'Inter,sans-serif', fontWeight: 600,
                  border: `1.5px solid ${pairs.selected === left ? B.laranja : pairs.matched[left] ? B.oliva : B.border}`,
                  background: pairs.selected === left ? B.laranja + '18' : pairs.matched[left] ? '#eef2eb' : '#fff',
                  color: B.dark, cursor: 'pointer' }}>
                {left}
                {pairs.matched[left] && <span style={{ fontSize: 10, color: B.oliva, marginLeft: 4 }}>→ {pairs.matched[left]}</span>}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <p style={{ fontSize: 11, fontFamily: 'Poppins,sans-serif', color: B.mid, fontWeight: 600, marginBottom: 2 }}>
              {lang === 'pt' ? '2. Conecte' : '2. Connect'}
            </p>
            {pairs.rights.map(right => {
              const ml = Object.keys(pairs.matched).find(k => pairs.matched[k] === right)
              const correctPair = submitted && act.pairs.find(p => p.right === right)
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
                  style={{ padding: '9px 12px', borderRadius: 9, textAlign: 'left', fontSize: 13, fontFamily: 'Inter,sans-serif', fontWeight: 600,
                    border: `1.5px solid ${submitted && correctPair && pairs.matched[correctPair.left] === right ? '#059669' : ml ? B.oliva : B.border}`,
                    background: submitted && correctPair && pairs.matched[correctPair.left] === right ? '#d1fae5' : ml ? '#eef2eb' : '#fff',
                    color: B.dark, cursor: 'pointer' }}>
                  {right}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {!submitted ? (
          <button onClick={check} disabled={!canCheck}
            style={{ padding: '10px 24px', borderRadius: 20, background: B.laranja, border: 'none',
              color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: canCheck ? 'pointer' : 'default',
              opacity: canCheck ? 1 : 0.35 }}>
            {lang === 'pt' ? 'Verificar' : 'Check'}
          </button>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flex: 1 }}>
              <span style={{ fontSize: 22, lineHeight: 1 }}>{correct ? '🎉' : '💪'}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 13, fontFamily: 'Inter,sans-serif', color: correct ? '#059669' : '#dc2626' }}>
                  {correct
                    ? (lang === 'pt' ? 'Boa! Continua assim.' : 'Great job!')
                    : (lang === 'pt' ? 'Quase! Veja a resposta:' : 'Almost! See the answer:')}
                </p>
                {!correct && answerLabel() && (
                  <p style={{ fontSize: 12, fontFamily: 'Inter,sans-serif', color: B.mid, marginTop: 3, lineHeight: 1.5 }}>
                    <strong>{answerLabel()}</strong>
                  </p>
                )}
                {act.hint && (
                  <p style={{ fontSize: 12, fontFamily: 'Inter,sans-serif', color: B.mid, marginTop: 4, lineHeight: 1.5, fontStyle: 'italic' }}>
                    📌 {act.hint}
                  </p>
                )}
              </div>
            </div>
            <button onClick={onNext}
              style={{ padding: '10px 22px', borderRadius: 20, background: correct ? B.oliva : B.laranja, border: 'none',
                color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer', flexShrink: 0 }}>
              {isLast ? (lang === 'pt' ? 'Ver resultado →' : 'See results →') : (lang === 'pt' ? 'Próxima →' : 'Next →')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function ActivityModal({ acts, lang, taskText, context, onClose, upDb, sid, taskId }) {
  const [idx, setIdx]         = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone]       = useState(false)
  const [showContext, setShowContext] = useState(!!context)

  const handleResult = (ok) => {
    setResults(r => [...r, ok])
  }

  const handleNext = () => {
    if (idx + 1 >= acts.length) {
      const nr = [...results]
      setDone(true)
      const score = Math.round(nr.filter(Boolean).length / nr.length * 100)
      upDb({ [`actScore_${sid}_${taskId}`]: score })
    } else {
      setIdx(i => i + 1)
    }
  }

  const score = done ? Math.round(results.filter(Boolean).length / results.length * 100) : 0

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 1000 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: '#fff', borderRadius: '22px 22px 0 0', padding: '24px 20px 36px', width: '100%', maxWidth: 500, maxHeight: '92vh', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ flex: 1, marginRight: 12 }}>
            <p style={{ fontWeight: 700, fontSize: 15, fontFamily: 'Poppins,sans-serif', color: B.dark }}>
              🎯 {lang === 'pt' ? 'Atividades' : 'Activities'}
            </p>
            <p style={{ fontSize: 11, fontFamily: 'Inter,sans-serif', color: B.light, marginTop: 2, lineHeight: 1.4 }}>{taskText}</p>
          </div>
          <button onClick={onClose}
            style={{ background: B.bege, border: 'none', borderRadius: 20, padding: '6px 14px', cursor: 'pointer', fontSize: 13, color: B.mid, fontFamily: 'Inter,sans-serif', flexShrink: 0 }}>
            ✕
          </button>
        </div>

        {/* Context panel (shown before first question) */}
        {showContext && context && !done && (
          <div style={{ background: `linear-gradient(135deg, ${B.laranja}18, ${B.marrom}08)`, border: `1.5px solid ${B.laranja}44`, borderRadius: 14, padding: 18, marginBottom: 16 }}>
            <p style={{ fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', color: B.marrom, marginBottom: 8 }}>
              📖 {lang === 'pt' ? 'Antes de começar' : 'Before you start'}
            </p>
            <p style={{ fontSize: 13, fontFamily: 'Inter,sans-serif', color: B.dark, lineHeight: 1.7 }}>{context}</p>
            <button onClick={() => setShowContext(false)}
              style={{ marginTop: 14, padding: '10px 24px', borderRadius: 20, background: B.laranja, border: 'none', color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
              {lang === 'pt' ? 'Começar atividades →' : 'Start activities →'}
            </button>
          </div>
        )}

        {!showContext && !done && (
          <>
            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <p style={{ fontSize: 12, fontFamily: 'Inter,sans-serif', color: B.light, flexShrink: 0 }}>
                {lang === 'pt' ? `${idx + 1} de ${acts.length}` : `${idx + 1} of ${acts.length}`}
              </p>
              <div style={{ flex: 1, height: 5, background: B.bege, borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${((idx) / acts.length) * 100}%`, background: B.laranja, borderRadius: 99, transition: 'width 0.3s' }} />
              </div>
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                {results.map((r, i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: r ? '#059669' : '#dc2626' }} />
                ))}
              </div>
            </div>

            <ActivityItem key={idx} act={acts[idx]} lang={lang}
              onNext={handleNext}
              isLast={idx + 1 >= acts.length}
              onResult={handleResult}
            />
          </>
        )}

        {done && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>{score >= 80 ? '🏆' : score >= 60 ? '👏' : '💪'}</div>
            <p style={{ fontWeight: 800, fontSize: 32, fontFamily: 'Poppins,sans-serif', color: B.dark, marginBottom: 4 }}>{score}%</p>
            <p style={{ fontSize: 14, fontFamily: 'Inter,sans-serif', color: B.mid, marginBottom: 8 }}>
              {results.filter(Boolean).length}/{results.length} {lang === 'pt' ? 'corretas' : 'correct'}
            </p>
            <p style={{ fontSize: 14, fontFamily: 'Inter,sans-serif', color: B.mid, marginBottom: 28, lineHeight: 1.6 }}>
              {score >= 80
                ? (lang === 'pt' ? 'Excelente! Você dominou esse conteúdo.' : 'Excellent! You mastered this content.')
                : score >= 60
                ? (lang === 'pt' ? 'Bom trabalho! Revise os erros e tente de novo.' : 'Good job! Review the mistakes and try again.')
                : (lang === 'pt' ? 'Continue praticando! A repetição é a chave.' : 'Keep practicing! Repetition is key.')}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => { setIdx(0); setResults([]); setDone(false); setShowContext(!!context) }}
                style={{ padding: '11px 22px', borderRadius: 20, border: `2px solid ${B.laranja}`, background: 'transparent', color: B.laranja, fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
                {lang === 'pt' ? '↩ Tentar de novo' : '↩ Try again'}
              </button>
              <button onClick={onClose}
                style={{ padding: '11px 22px', borderRadius: 20, background: B.laranja, border: 'none', color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
