// Renderers for each v2 step kind. Each one receives:
//   step, lang, st (this step's local state), set (merge into it), ctx
// ctx = { prod, buddy, setBuddy, people, week, journey }
import { useMemo, useState } from 'react'
import Icon from '../Icon'
import AudioPlayer from './AudioPlayer'
import Recorder from './Recorder'
import ChatStep from './ChatStep'
import { D, serifD, sansD, tx, card, chip, btn, ghostBtn, textarea, note, L } from './ui'
import { ttsSupported, loadVoices, pickVoice, speak, stressToSpeech } from './speech'
import { comparison } from '../../constants/journeys/responses.js'
import { readJson } from './productions'

const OK = '#2F7A3E', OK_SOFT = '#E3F1E4', NO = '#B23A2E', NO_SOFT = '#FBE7E4'

// ── helpers ──────────────────────────────────────────────────────────────────

function hash(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h) }
function seededShuffle(arr, seed) {
  const a = [...arr]; let x = hash(seed) || 1
  for (let i = a.length - 1; i > 0; i--) { x = (x * 16807) % 2147483647; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

const isLetter = c => !!c && /[A-Za-z]/.test(c)
// Highlight `marks` inside `text`. Marks that start/end with a letter only match
// whole words ("a" does not light up the a in "nurse").
export function Marked({ text, marks = [] }) {
  const ranges = []
  for (const m of [...marks].filter(Boolean).sort((a, b) => b.length - a.length)) {
    let from = 0
    while (from <= text.length) {
      const i = text.indexOf(m, from)
      if (i === -1) break
      const end = i + m.length
      const okStart = !isLetter(m[0]) || !isLetter(text[i - 1])
      const okEnd = !isLetter(m[m.length - 1]) || !isLetter(text[end])
      if (okStart && okEnd && !ranges.some(r => i < r[1] && end > r[0])) ranges.push([i, end])
      from = i + 1
    }
  }
  ranges.sort((a, b) => a[0] - b[0])
  const out = []; let pos = 0
  ranges.forEach(([s, e], k) => {
    if (s > pos) out.push(text.slice(pos, s))
    out.push(<mark key={k} style={{ background: D.orangeSoft, color: D.terraDeep, fontWeight: 700, borderRadius: 4, padding: '0 2px' }}>{text.slice(s, e)}</mark>)
    pos = e
  })
  if (pos < text.length) out.push(text.slice(pos))
  return <>{out}</>
}

function Say({ step, lang }) {
  const s = tx(step.say, lang)
  return s ? <p style={{ ...sansD(600, 16, { lineHeight: 1.5 }), color: D.ink, margin: '0 0 16px' }}>{s}</p> : null
}

function Why({ why, ok, lang }) {
  if (!why && ok === undefined) return null
  return (
    <div style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.5, color: ok ? OK : ok === false ? NO : D.ink, display: 'flex', gap: 6 }}>
      <Icon name={ok ? 'checkCircle' : ok === false ? 'alert' : 'lightbulb'} size={14} color={ok ? OK : ok === false ? NO : D.orange} style={{ marginTop: 2 }} />
      <span>{tx(why, lang) || (ok ? (lang === 'pt' ? 'Isso!' : 'Yes!') : '')}</span>
    </div>
  )
}

function Insight({ insight, lang }) {
  if (!insight) return null
  return (
    <div style={{ ...note(D.mossSoft, D.sage), marginTop: 16, display: 'flex', gap: 9 }}>
      <Icon name="lightbulb" size={17} color={D.moss} style={{ marginTop: 2 }} />
      <span>{tx(insight, lang)}</span>
    </div>
  )
}

function Glossary({ items, lang }) {
  if (!items?.length) return null
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, marginBottom: 6 }}>{lang === 'pt' ? 'Glossário' : 'Glossary'}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {items.map(g => <span key={g.term} style={{ fontSize: 13, background: D.surfaceWarm, border: `1px solid ${D.line}`, borderRadius: 8, padding: '4px 9px' }}><b lang="en">{g.term}</b> — {g.pt}</span>)}
      </div>
    </div>
  )
}

function Checklist({ items, lang, st, set, field = 'checks', title = L.checklist }) {
  if (!items?.length) return null
  const ch = st[field] || {}
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ ...sansD(700, 13.5), color: D.ink, marginBottom: 8 }}>{tx(title, lang)}</div>
      {items.map((c, i) => (
        <label key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.45, marginBottom: 7, cursor: 'pointer' }}>
          <input type="checkbox" checked={!!ch[i]} onChange={() => set({ [field]: { ...ch, [i]: !ch[i] } })} style={{ marginTop: 3, accentColor: D.moss, width: 16, height: 16 }} />
          <span>{tx(c, lang)}</span>
        </label>
      ))}
    </div>
  )
}

function SpeakButton({ text, lang }) {
  const [state, setState] = useState('idle')
  if (!ttsSupported()) return null
  const go = async () => {
    setState('playing')
    const v = pickVoice(await loadVoices(), 'en-GB')
    if (!v) { setState('fail'); return }
    speak(stressToSpeech(text), { voice: v, rate: 0.85, onEnd: () => setState('idle'), onError: () => setState('fail') })
  }
  if (state === 'fail') return <span style={{ fontSize: 11.5, color: D.muted }}>{lang === 'pt' ? '(sem áudio)' : '(no audio)'}</span>
  return <button type="button" aria-label={lang === 'pt' ? 'Ouvir' : 'Listen'} onClick={go} style={{ ...ghostBtn, padding: '4px 8px' }}><Icon name="volume" size={13} color={D.terra} /></button>
}

// ── prepare ──────────────────────────────────────────────────────────────────
function Prepare({ step, lang, st, set }) {
  const picked = st.picked || []
  const toggle = o => set({ picked: step.multi ? (picked.includes(o) ? picked.filter(x => x !== o) : [...picked, o]) : [o] })
  return (
    <div>
      <Say step={step} lang={lang} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {step.options.map(o => <button type="button" key={o} lang="en" aria-pressed={picked.includes(o)} onClick={() => toggle(o)} style={chip(picked.includes(o))}>{o}</button>)}
      </div>
      {picked.length > 0 && step.after && <p style={{ ...note(), marginTop: 14 }}>{tx(step.after, lang)}</p>}
    </div>
  )
}

// ── engage ───────────────────────────────────────────────────────────────────
export function EngageInput({ step, lang, compact }) {
  const inp = step.input
  if (inp.type === 'messages') return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {inp.items.map((m, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div aria-hidden style={{ width: 34, height: 34, borderRadius: 34, background: D.terraSoft, color: D.terraDeep, display: 'flex', alignItems: 'center', justifyContent: 'center', ...sansD(800, 13), flexShrink: 0 }}>{m.from[0]}</div>
          <div style={{ background: D.surface, border: `1px solid ${D.line}`, borderRadius: '4px 14px 14px 14px', padding: '9px 13px', flex: 1 }}>
            <div style={{ ...sansD(700, 12.5), color: D.terra }}>{m.from}</div>
            <div lang="en" style={{ fontSize: compact ? 14 : 15, lineHeight: 1.55, color: D.ink, marginTop: 2 }}>{m.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
  if (inp.type === 'audio') return <AudioPlayer script={inp.script} lang={lang} voiceLang={inp.lang} rates={inp.rates} rate={inp.rate} transcript={compact ? 'always' : inp.transcript} compact={compact} />
  if (inp.type === 'text') return <div lang="en" style={{ ...note(D.surface), fontSize: 15, whiteSpace: 'pre-wrap' }}>{inp.body}</div>
  return null
}
function Engage({ step, lang }) {
  return <div><Say step={step} lang={lang} /><EngageInput step={step} lang={lang} /><Glossary items={step.glossary} lang={lang} /></div>
}

// ── check ────────────────────────────────────────────────────────────────────
function ChoiceQuestion({ q, qi, lang, st, set }) {
  const key = `q${qi}`
  const s = st[key] || {}
  if (q.multi) {
    const sel = s.sel || []
    return (
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 18px' }}>
        <legend lang="en" style={{ ...sansD(700, 15), color: D.ink, marginBottom: 8, padding: 0 }}>{q.text}</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {q.options.map((o, i) => {
            const on = sel.includes(i), shown = s.checked
            const color = shown ? (o.ok ? OK : on ? NO : D.line) : on ? D.moss : D.line
            return (
              <div key={i}>
                <button type="button" lang="en" aria-pressed={on} disabled={shown} onClick={() => set({ [key]: { ...s, sel: on ? sel.filter(x => x !== i) : [...sel, i] } })}
                  style={{ ...chip(on || (shown && o.ok), color, shown ? (o.ok ? OK_SOFT : on ? NO_SOFT : D.surface) : D.mossSoft), width: '100%', borderRadius: 11, cursor: shown ? 'default' : 'pointer' }}>
                  <Icon name={on ? 'checkCircle' : 'circle'} size={15} color={color} />{o.text}
                </button>
                {shown && (o.ok || on) && o.why && <Why why={o.why} ok={!!o.ok} lang={lang} />}
              </div>
            )
          })}
        </div>
        {!s.checked
          ? <button type="button" disabled={!sel.length} onClick={() => set({ [key]: { ...s, checked: true } })} style={{ ...ghostBtn, marginTop: 10, opacity: sel.length ? 1 : 0.5 }}>{tx(L.check, lang)}</button>
          : <button type="button" onClick={() => set({ [key]: {} })} style={{ ...ghostBtn, marginTop: 10 }}><Icon name="reset" size={13} color={D.ink} />{lang === 'pt' ? 'Tentar de novo' : 'Try again'}</button>}
      </fieldset>
    )
  }
  const tried = s.tried || []
  return (
    <fieldset style={{ border: 'none', padding: 0, margin: '0 0 18px' }}>
      <legend lang="en" style={{ ...sansD(700, 15), color: D.ink, marginBottom: 8, padding: 0 }}>{q.text}</legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {q.options.map((o, i) => {
          const t = tried.includes(i)
          return (
            <div key={i}>
              <button type="button" lang="en" onClick={() => !t && set({ [key]: { tried: [...tried, i] } })}
                style={{ ...chip(t, o.ok ? OK : NO, o.ok ? OK_SOFT : NO_SOFT), width: '100%', borderRadius: 11 }}>
                {t && <Icon name={o.ok ? 'check' : 'close'} size={14} color={o.ok ? OK : NO} />}{o.text}
              </button>
              {t && <Why why={o.why} ok={!!o.ok} lang={lang} />}
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}

function Match({ step, lang, st, set }) {
  const rights = useMemo(() => seededShuffle([...new Set(step.pairs.map(p => p.right))], step.id), [step])
  const ans = st.ans || {}
  const done = step.pairs.every(p => ans[p.left])
  return (
    <div>
      {step.glossary && <Glossary items={step.glossary} lang={lang} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: step.glossary ? 12 : 0 }}>
        {step.pairs.map(p => {
          const v = ans[p.left] || ''
          const res = st.checked ? v === p.right : undefined
          return (
            <label key={p.left} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, background: res === undefined ? D.surfaceWarm : res ? OK_SOFT : NO_SOFT, border: `1px solid ${res === undefined ? D.line : res ? OK : NO}`, borderRadius: 12, padding: '9px 12px' }}>
              <span lang="en" style={{ flex: '1 1 180px', fontSize: 15 }}>{p.left}</span>
              <select value={v} disabled={st.checked} onChange={e => set({ ans: { ...ans, [p.left]: e.target.value } })}
                style={{ fontFamily: 'inherit', fontSize: 14, padding: '7px 10px', borderRadius: 9, border: `1px solid ${D.line}`, background: D.surface }}>
                <option value="">{lang === 'pt' ? 'Quem?' : 'Who?'}</option>
                {rights.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              {res === false && <span style={{ fontSize: 13, color: NO }}>→ {p.right}</span>}
            </label>
          )
        })}
      </div>
      {!st.checked
        ? <button type="button" disabled={!done} onClick={() => set({ checked: true })} style={{ ...ghostBtn, marginTop: 12, opacity: done ? 1 : 0.5 }}>{tx(L.check, lang)}</button>
        : <><Why why={step.why} lang={lang} /><button type="button" onClick={() => set({ checked: false, ans: {} })} style={{ ...ghostBtn, marginTop: 10 }}><Icon name="reset" size={13} color={D.ink} />{lang === 'pt' ? 'Tentar de novo' : 'Try again'}</button></>}
    </div>
  )
}

function Order({ step, lang, st, set }) {
  const initial = useMemo(() => {
    let s = seededShuffle(step.items, step.id)
    if (s.every((x, i) => x === step.items[i])) s = [...s.slice(1), s[0]]
    return s
  }, [step])
  const order = st.order || initial
  const move = (i, d) => { const o = [...order]; [o[i], o[i + d]] = [o[i + d], o[i]]; set({ order: o, checked: false }) }
  return (
    <div>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {order.map((it, i) => {
          const res = st.checked ? it === step.items[i] : undefined
          return (
            <li key={it} style={{ display: 'flex', alignItems: 'center', gap: 8, background: res === undefined ? D.surfaceWarm : res ? OK_SOFT : NO_SOFT, border: `1px solid ${res === undefined ? D.line : res ? OK : NO}`, borderRadius: 11, padding: '7px 10px' }}>
              <span style={{ ...sansD(800, 13), color: D.muted, width: 18 }}>{i + 1}</span>
              <span lang="en" style={{ flex: 1, fontSize: 15 }}>{it}</span>
              <button type="button" aria-label="up" disabled={i === 0} onClick={() => move(i, -1)} style={{ ...ghostBtn, padding: '4px 7px', opacity: i === 0 ? 0.35 : 1 }}><Icon name="up" size={14} color={D.ink} /></button>
              <button type="button" aria-label="down" disabled={i === order.length - 1} onClick={() => move(i, 1)} style={{ ...ghostBtn, padding: '4px 7px', opacity: i === order.length - 1 ? 0.35 : 1 }}><Icon name="down" size={14} color={D.ink} /></button>
            </li>
          )
        })}
      </ol>
      {!st.checked
        ? <button type="button" onClick={() => set({ checked: true, order })} style={{ ...ghostBtn, marginTop: 12 }}>{tx(L.check, lang)}</button>
        : <>
            <Why why={step.why} ok={order.every((x, i) => x === step.items[i])} lang={lang} />
            {!order.every((x, i) => x === step.items[i]) && <button type="button" onClick={() => set({ order: step.items, checked: true })} style={{ ...ghostBtn, marginTop: 10 }}>{lang === 'pt' ? 'Mostrar a ordem' : 'Show the order'}</button>}
          </>}
    </div>
  )
}

function OpenChoice({ step, lang, ctx }) {
  const cur = ctx.prod.text(step.saveAs)
  const why = ctx.prod.text(`${step.saveAs}-why`)
  const [draft, setDraft] = useState(why)
  const choose = p => ctx.prod.save({ [step.saveAs]: p })
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {step.options.map(p => (
          <button type="button" key={p} aria-pressed={cur === p} onClick={() => choose(p)} style={chip(cur === p, D.terra, D.terraSoft)}>
            <span aria-hidden style={{ width: 22, height: 22, borderRadius: 22, background: D.terraSoft, color: D.terraDeep, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...sansD(800, 11) }}>{p[0]}</span>{p}
          </button>
        ))}
      </div>
      {cur && step.reasons && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, color: D.muted, marginBottom: 6 }}>{lang === 'pt' ? 'Por quê?' : 'Why?'}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {step.reasons.map(r => <button type="button" key={r} lang="en" aria-pressed={why === r} onClick={() => ctx.prod.save({ [`${step.saveAs}-why`]: r })} style={chip(why === r)}>{r}</button>)}
          </div>
        </div>
      )}
      {cur && step.write && (
        <div style={{ marginTop: 14 }}>
          <textarea lang="en" rows={2} value={draft} onChange={e => setDraft(e.target.value)} placeholder={`I'd like to talk to ${cur} because…`} style={textarea} />
          <button type="button" onClick={() => ctx.prod.save({ [`${step.saveAs}-why`]: draft })} disabled={!draft.trim()} style={{ ...ghostBtn, marginTop: 8, opacity: draft.trim() ? 1 : 0.5 }}><Icon name="save" size={13} color={D.ink} />{tx(L.save, lang)}{why && draft === why ? ' ✓' : ''}</button>
        </div>
      )}
      {cur && step.after && <p style={{ ...note(), marginTop: 14 }}>{tx(step.after, lang)}</p>}
    </div>
  )
}

function Check({ step, lang, st, set, ctx }) {
  return (
    <div>
      <Say step={step} lang={lang} />
      {step.mode === 'choice' && step.questions.map((q, qi) => <ChoiceQuestion key={qi} q={q} qi={qi} lang={lang} st={st} set={set} />)}
      {step.mode === 'match' && <Match step={step} lang={lang} st={st} set={set} />}
      {step.mode === 'order' && <Order step={step} lang={lang} st={st} set={set} />}
      {step.mode === 'open-choice' && <OpenChoice step={step} lang={lang} ctx={ctx} />}
    </div>
  )
}

// ── notice ───────────────────────────────────────────────────────────────────
function Notice({ step, lang }) {
  return (
    <div>
      <Say step={step} lang={lang} />
      {step.parts && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {step.parts.map((p, i) => (
            <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', alignItems: 'baseline', background: D.surfaceWarm, borderRadius: 11, padding: '9px 12px', border: `1px solid ${D.line}` }}>
              <span style={{ ...sansD(700, 11.5), textTransform: 'uppercase', letterSpacing: 0.4, color: D.terra, minWidth: 150 }}>{tx(p.label, lang)}</span>
              <span lang="en" style={{ fontSize: 15, flex: '1 1 220px' }}>{p.text}</span>
            </div>
          ))}
        </div>
      )}
      {step.examples && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: step.parts ? 12 : 0 }}>
          {step.examples.map((e, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: D.surface, border: `1px solid ${D.line}`, borderRadius: 11, padding: '9px 12px' }}>
              <span lang="en" style={{ flex: 1, fontSize: 15.5 }}><Marked text={e.text} marks={e.mark} /></span>
              {step.speak && <SpeakButton text={e.text} lang={lang} />}
            </div>
          ))}
        </div>
      )}
      <Insight insight={step.insight} lang={lang} />
    </div>
  )
}

// ── try (speak) ──────────────────────────────────────────────────────────────
function Try({ step, lang, st, set }) {
  return (
    <div>
      <Say step={step} lang={lang} />
      {step.frame && (
        <div style={{ ...note(), marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, marginBottom: 6 }}>{lang === 'pt' ? 'Seu plano' : 'Your plan'}</div>
          <ol lang="en" style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, fontSize: 15 }}>{step.frame.map((f, i) => <li key={i}>{f}</li>)}</ol>
        </div>
      )}
      <Recorder lang={lang} />
      <Checklist items={step.selfCheck} lang={lang} st={st} set={set} title={{ pt: 'Ouça sua gravação (ou pense no que falou):', en: 'Listen to your recording (or think about what you said):' }} />
      {step.model && (
        <div style={{ marginTop: 14 }}>
          <button type="button" onClick={() => set({ showModel: !st.showModel })} style={ghostBtn}><Icon name="eye" size={13} color={D.ink} />{tx(st.showModel ? L.hideEx : L.example, lang)}</button>
          {st.showModel && <div style={{ marginTop: 10 }}><AudioPlayer script={step.model} lang={lang} transcript="always" compact rates={[0.75, 0.9, 1]} rate={0.9} /></div>}
        </div>
      )}
    </div>
  )
}

// ── act (write / frame) ──────────────────────────────────────────────────────
function Act({ step, lang, st, set, ctx }) {
  const saved = ctx.prod.get(step.saveAs)
  const prefill = step.mode === 'frame' ? step.frame.join('\n') : ''
  const value = st.draft ?? saved?.text ?? prefill
  const [savedNow, setSavedNow] = useState(false)
  const attempted = !!saved || savedNow
  const model = step.models ? (step.models[ctx.buddy] || Object.values(step.models)[0]) : step.model
  // In a frame, a word fills the next blank; otherwise it is added at the end.
  const insert = s => set({ draft: step.mode === 'frame' && value.includes('___')
    ? value.replace('___', s)
    : (value && !/\s$/.test(value) ? value + ' ' : value) + s })
  const starters = step.mode === 'frame' ? null : step.starters
  const blanks = value.includes('___')
  const save = () => { ctx.prod.save({ [step.saveAs]: value }); setSavedNow(true); set({ draft: value }) }
  const dirty = !saved || saved.text !== value

  return (
    <div>
      <Say step={step} lang={lang} />
      {step.audience && (
        <div style={{ fontSize: 13, color: D.muted, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="send" size={13} color={D.muted} />{lang === 'pt' ? 'Para:' : 'To:'} <b style={{ color: D.ink }}>{tx(step.audience, lang)}{step.ref && ctx.buddy ? ` — ${ctx.buddy}` : ''}</b>
        </div>
      )}
      {step.ref && ctx.buddyMessage && (
        <div style={{ ...note(D.surface), marginBottom: 12, fontSize: 14 }}>
          <div style={{ ...sansD(700, 12), color: D.terra }}>{ctx.buddy}</div><span lang="en">{ctx.buddyMessage}</span>
        </div>
      )}
      {step.mode === 'frame' && <p style={{ fontSize: 13, color: D.muted, margin: '0 0 8px' }}>{lang === 'pt' ? 'Troque cada ___ pelas suas informações.' : 'Replace each ___ with your information.'}</p>}
      <textarea data-testid={`act-${step.saveAs}`} lang="en" rows={step.mode === 'frame' ? 6 : 5} value={value} onChange={e => set({ draft: e.target.value })} style={textarea}
        placeholder={lang === 'pt' ? 'Escreva aqui…' : 'Write here…'} />

      {(starters || step.wordBank) && (
        <details style={{ marginTop: 10 }} open={step.mode === 'frame'}>
          <summary style={{ cursor: 'pointer', ...sansD(700, 13.5), color: D.terra }}>{tx(L.ideas, lang)}</summary>
          {starters && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
            {starters.map(s => <button type="button" key={s} lang="en" onClick={() => insert(s)} style={{ ...chip(false), fontSize: 12.5, padding: '5px 10px' }}>+ {s}</button>)}
          </div>}
          {step.wordBank && <>
            <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, margin: '10px 0 6px' }}>{tx(L.wordBank, lang)}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {step.wordBank.map(w => <button type="button" key={w} lang="en" onClick={() => insert(w)} style={{ ...chip(false, D.moss), fontSize: 12.5, padding: '4px 9px', background: D.surfaceWarm }}>{w}</button>)}
            </div>
          </>}
        </details>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginTop: 12 }}>
        <button type="button" data-testid={`save-${step.saveAs}`} onClick={save} disabled={!value.trim() || !dirty} style={{ ...btn(D.moss), opacity: value.trim() && dirty ? 1 : 0.5 }}>
          <Icon name="send" size={14} color="#fff" />{saved ? (lang === 'pt' ? 'Salvar alterações' : 'Save changes') : (lang === 'pt' ? 'Enviar' : 'Send')}
        </button>
        {saved && !dirty && <span data-testid={`saved-${step.saveAs}`} style={{ fontSize: 13, color: OK, display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="check" size={14} color={OK} />{tx(L.saved, lang)}</span>}
        {blanks && <span style={{ fontSize: 13, color: D.orange }}>{lang === 'pt' ? 'Ainda tem ___ para completar.' : 'There are still ___ to fill in.'}</span>}
      </div>
      {saved && step.note && <p style={{ fontSize: 13, color: D.muted, margin: '8px 0 0' }}>{tx(step.note, lang)}</p>}

      <Checklist items={step.checklist} lang={lang} st={st} set={set} />

      {model && (
        <div style={{ marginTop: 14 }}>
          {attempted
            ? <button type="button" onClick={() => set({ showModel: !st.showModel })} style={ghostBtn}><Icon name="eye" size={13} color={D.ink} />{tx(st.showModel ? L.hideEx : L.example, lang)}</button>
            : <span style={{ fontSize: 12.5, color: D.muted }}>{lang === 'pt' ? 'Depois de enviar, você pode ver um exemplo para comparar.' : 'After you send, you can see an example to compare.'}</span>}
          {attempted && st.showModel && <div lang="en" style={{ ...note(D.surface), marginTop: 10, fontSize: 15 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, marginBottom: 4 }}>{lang === 'pt' ? 'Um exemplo possível — o seu não precisa ser igual' : 'One possible example — yours does not need to match'}</div>{model}</div>}
        </div>
      )}
      {saved?.history?.length > 0 && (
        <details style={{ marginTop: 12 }}>
          <summary style={{ cursor: 'pointer', fontSize: 13, color: D.muted }}>{lang === 'pt' ? 'Ver sua versão anterior' : 'See your previous version'}</summary>
          <div lang="en" style={{ ...note(), marginTop: 8, fontSize: 14, whiteSpace: 'pre-wrap' }}>{saved.history[0].text}</div>
        </details>
      )}
    </div>
  )
}

// ── compare (then and now) ───────────────────────────────────────────────────
function Compare({ step, lang, ctx }) {
  const c = comparison(ctx.db, ctx.sid, ctx.jid, step.before, step.after)
  const box = (title, text, testid) => (
    <div style={{ flex: '1 1 260px', ...note(D.surface) }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, marginBottom: 6 }}>{title}</div>
      <div data-testid={testid} lang="en" style={{ whiteSpace: 'pre-wrap', fontSize: 15 }}>{text || '—'}</div>
    </div>
  )
  return (
    <div>
      <Say step={step} lang={lang} />
      {c.missingBefore && <p data-testid="compare-missing" style={{ ...note('#FFF7EC', D.honey), marginBottom: 12 }}>{tx(step.ifMissing, lang)}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {box(c.missingBefore ? (lang === 'pt' ? 'Exemplo da semana 1' : 'Week 1 example') : (lang === 'pt' ? 'Semana 1' : 'Week 1'), c.missingBefore ? step.fallbackText : c.before.text, 'compare-before')}
        {box(lang === 'pt' ? 'Hoje' : 'Today', c.after?.text, 'compare-after')}
      </div>
      <ul style={{ marginTop: 14, paddingLeft: 20, lineHeight: 1.7 }}>{step.prompts.map((p, i) => <li key={i}>{tx(p, lang)}</li>)}</ul>
    </div>
  )
}

// ── reflect ──────────────────────────────────────────────────────────────────
const SCALE = [
  { v: 'notYet', pt: 'Ainda não', en: 'Not yet' },
  { v: 'withHelp', pt: 'Com ajuda', en: 'With help' },
  { v: 'yes', pt: 'Sim!', en: 'Yes!' },
]
export const reflectSlot = week => `w${week}-reflect`

function Reflect({ step, lang, ctx }) {
  const slot = reflectSlot(ctx.week.week)
  const saved = readJson(ctx.prod.text(slot)) || {}
  const [r, setR] = useState({ canDo: saved.canDo || {}, helped: saved.helped || [], note: saved.note || '' })
  const items = step.canDo === 'week' ? ctx.week.canDo : (ctx.journey.outline || []).map(o => o.canDo)
  const dirty = JSON.stringify(r) !== JSON.stringify({ canDo: saved.canDo || {}, helped: saved.helped || [], note: saved.note || '' })
  const save = () => ctx.prod.save({ [slot]: JSON.stringify(r) })
  return (
    <div>
      <Say step={step} lang={lang} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((c, i) => (
          <div key={i} style={{ background: D.surfaceWarm, border: `1px solid ${D.line}`, borderRadius: 12, padding: '10px 12px' }}>
            <div style={{ fontSize: 14.5, marginBottom: 8 }}>{tx(c, lang)}</div>
            <div role="radiogroup" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {SCALE.map(s => <button type="button" role="radio" aria-checked={r.canDo[i] === s.v} key={s.v} onClick={() => setR({ ...r, canDo: { ...r.canDo, [i]: s.v } })} style={{ ...chip(r.canDo[i] === s.v), fontSize: 12.5, padding: '5px 11px' }}>{s[lang] || s.en}</button>)}
            </div>
          </div>
        ))}
      </div>
      {step.prompt && <>
        <div style={{ ...sansD(700, 14), margin: '16px 0 8px' }}>{tx(step.prompt, lang)}</div>
        {step.options && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {step.options.map(o => { const on = r.helped.includes(o); return <button type="button" key={o} lang="en" aria-pressed={on} onClick={() => setR({ ...r, helped: on ? r.helped.filter(x => x !== o) : [...r.helped, o] })} style={{ ...chip(on), fontSize: 12.5, padding: '5px 11px' }}>{o}</button> })}
        </div>}
        <textarea rows={2} value={r.note} onChange={e => setR({ ...r, note: e.target.value })} placeholder={lang === 'pt' ? 'Quer anotar algo? (opcional)' : 'Anything to note? (optional)'} style={{ ...textarea, marginTop: 10, fontSize: 14 }} />
      </>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12 }}>
        <button type="button" data-testid="save-reflect" onClick={save} disabled={!dirty} style={{ ...btn(D.moss), opacity: dirty ? 1 : 0.5 }}><Icon name="save" size={14} color="#fff" />{lang === 'pt' ? 'Guardar minha reflexão' : 'Save my reflection'}</button>
        {!dirty && Object.keys(r.canDo).length > 0 && <span style={{ fontSize: 13, color: OK }}>✓ {tx(L.saved, lang)}</span>}
      </div>
      {step.note && <p style={{ ...note(D.mossSoft, D.sage), marginTop: 14 }}>{tx(step.note, lang)}</p>}
    </div>
  )
}

// ── dispatcher ───────────────────────────────────────────────────────────────
export default function Step(props) {
  const k = props.step.kind
  if (k === 'prepare') return <Prepare {...props} />
  if (k === 'engage') return <Engage {...props} />
  if (k === 'check') return <Check {...props} />
  if (k === 'notice') return <Notice {...props} />
  if (k === 'try') return <Try {...props} />
  if (k === 'act') return <Act {...props} />
  if (k === 'chat') return <ChatStep {...props} />
  if (k === 'compare') return <Compare {...props} />
  if (k === 'reflect') return <Reflect {...props} />
  return null
}

export { card, serifD }
