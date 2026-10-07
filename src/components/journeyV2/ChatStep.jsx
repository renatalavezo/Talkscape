import { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import { D, sansD, tx, chip, btn, ghostBtn, textarea, note, L } from './ui'
import { resolveThem, nextYouTurn, looksLikeQuestion } from '../../constants/journeys/chat.js'
import { ttsSupported, loadVoices, pickVoice, speak } from './speech'

const T = {
  send:     { pt: 'Enviar', en: 'Send' },
  possible: { pt: 'Uma resposta possível (existem muitas!)', en: 'One possible reply (there are many!)' },
  selfCheck:{ pt: 'Confira a sua:', en: 'Check yours:' },
  cont:     { pt: 'Continuar a conversa', en: 'Continue the conversation' },
  noQ:      { pt: 'Era a sua vez de perguntar — sua mensagem não parece uma pergunta. Tudo bem enviar assim, mas que tal terminar com "?"', en: "It was your turn to ask — your message doesn't look like a question. You can send it anyway, but how about ending with \"?\"" },
  ended:    { pt: 'Conversa concluída. Você pode recomeçar e tentar respostas diferentes.', en: 'Conversation finished. You can start again and try different replies.' },
  restart:  { pt: 'Recomeçar conversa', en: 'Start again' },
  with:     { pt: 'Conversa com', en: 'Chat with' },
  pickFirst:{ pt: 'Com quem você quer conversar?', en: 'Who do you want to talk to?' },
}

function Bubble({ who, text, name }) {
  const me = who === 'you'
  return (
    <div style={{ display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start', animation: 'fadeUp .25s ease both' }}>
      <div data-testid={me ? 'chat-you' : 'chat-them'} lang="en" style={{ maxWidth: '82%', background: me ? D.moss : D.surface, color: me ? '#fff' : D.ink, border: me ? 'none' : `1px solid ${D.line}`, borderRadius: me ? '14px 4px 14px 14px' : '4px 14px 14px 14px', padding: '9px 13px', fontSize: 15, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
        {!me && <div style={{ ...sansD(700, 12), color: D.terra, marginBottom: 2 }}>{name}</div>}
        {text}
      </div>
    </div>
  )
}

// Simulated conversation. The student always types their own turns; starters
// are partial phrases on request; the model appears only after sending.
export default function ChatStep({ step, lang, ctx }) {
  const person = ctx.buddy || step.with?.default
  const turns = step.turns
  const [log, setLog] = useState([])
  const [pos, setPos] = useState(0)          // index of the pending `you` turn
  const [draft, setDraft] = useState('')
  const [fb, setFb] = useState(null)          // feedback after sending { you, text }
  const [ideas, setIdeas] = useState(false)
  const [checks, setChecks] = useState({})
  const voiceRef = useRef(undefined)
  const endRef = useRef(null)

  // play partner turns up to the next `you` turn
  const advance = (from, lastText, baseLog) => {
    const stop = nextYouTurn(turns, from)
    const add = turns.slice(from, stop).map(t => ({ who: 'them', text: resolveThem(t.them, person, lastText) }))
    setLog([...baseLog, ...add])
    setPos(stop)
  }
  useEffect(() => { advance(0, '', []) }, [person]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { endRef.current?.scrollIntoView?.({ block: 'nearest' }) }, [log, fb])

  if (!person) return null
  const cur = turns[pos]?.you
  const done = pos >= turns.length && !fb

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setLog(l => [...l, { who: 'you', text }])
    setFb({ you: cur, text })
    setDraft(''); setIdeas(false); setChecks({})
  }
  const cont = () => { const last = fb.text; setFb(null); advance(pos + 1, last, log) }
  const restart = () => { setFb(null); setDraft(''); advance(0, '', []) }

  const listen = async text => {
    if (voiceRef.current === undefined) voiceRef.current = pickVoice(await loadVoices(), 'en-GB')
    if (voiceRef.current) speak(text, { voice: voiceRef.current, rate: 0.9 })
  }
  const model = fb?.you ? (fb.you.models ? (fb.you.models[person] || Object.values(fb.you.models)[0]) : fb.you.model) : null

  return (
    <div>
      {tx(step.say, lang) && <p style={{ ...sansD(600, 15.5, { lineHeight: 1.5 }), color: D.ink, margin: '0 0 14px' }}>{tx(step.say, lang)}</p>}
      <div style={{ background: D.surfaceWarm, border: `1px solid ${D.line}`, borderRadius: 16, padding: 14 }}>
        <div style={{ ...sansD(700, 12.5), color: D.muted, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="feedback" size={14} color={D.muted} />{tx(T.with, lang)} {person}
        </div>
        <div data-testid="chat-log" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {log.map((m, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, flexDirection: m.who === 'you' ? 'row-reverse' : 'row' }}>
              <div style={{ flex: 1 }}><Bubble who={m.who} text={m.text} name={person} /></div>
              {m.who === 'them' && ttsSupported() && <button type="button" aria-label={lang === 'pt' ? 'Ouvir mensagem' : 'Listen to message'} onClick={() => listen(m.text)} style={{ ...ghostBtn, padding: '4px 7px' }}><Icon name="volume" size={12} color={D.terra} /></button>}
            </div>
          ))}
        </div>

        {fb && (
          <div data-testid="chat-feedback" style={{ ...note(D.surface), marginTop: 12 }}>
            {fb.you?.expects === 'question' && !looksLikeQuestion(fb.text) && <p style={{ margin: '0 0 8px', fontSize: 13.5, color: D.orange }}>{tx(T.noQ, lang)}</p>}
            {model && <><div style={{ fontSize: 12, fontWeight: 700, color: D.muted }}>{tx(T.possible, lang)}</div><div lang="en" style={{ fontSize: 15, margin: '3px 0 10px', fontStyle: 'italic' }}>{model}</div></>}
            {fb.you?.criteria?.length > 0 && <>
              <div style={{ fontSize: 12, fontWeight: 700, color: D.muted, marginBottom: 5 }}>{tx(T.selfCheck, lang)}</div>
              {fb.you.criteria.map((c, i) => (
                <label key={i} style={{ display: 'flex', gap: 8, fontSize: 14, marginBottom: 4, cursor: 'pointer' }}>
                  <input type="checkbox" checked={!!checks[i]} onChange={() => setChecks(s => ({ ...s, [i]: !s[i] }))} style={{ accentColor: D.moss }} />{tx(c, lang)}
                </label>
              ))}
            </>}
            <button type="button" data-testid="chat-continue" onClick={cont} style={{ ...btn(D.terra), marginTop: 8, fontSize: 13.5, padding: '9px 16px' }}>{tx(T.cont, lang)} <Icon name="next" size={14} color="#fff" /></button>
          </div>
        )}

        {cur && !fb && (
          <div style={{ marginTop: 12 }}>
            <textarea data-testid="chat-input" data-expects={cur.expects} lang="en" rows={2} value={draft} onChange={e => setDraft(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder={lang === 'pt' ? 'Escreva sua mensagem…' : 'Write your message…'} style={textarea} />
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <button type="button" data-testid="chat-send" onClick={send} disabled={!draft.trim()} style={{ ...btn(D.moss), opacity: draft.trim() ? 1 : 0.5, fontSize: 13.5, padding: '9px 16px' }}><Icon name="send" size={14} color="#fff" />{tx(T.send, lang)}</button>
              <button type="button" data-testid="chat-ideas" onClick={() => setIdeas(v => !v)} style={ghostBtn}><Icon name="lightbulb" size={13} color={D.orange} />{tx(L.ideas, lang)}</button>
            </div>
            {ideas && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
              {cur.starters.map(s => <button type="button" key={s} lang="en" onClick={() => setDraft(d => (d && !/\s$/.test(d) ? d + ' ' : d) + s.replace(/…$/, '').trimEnd() + ' ')} style={{ ...chip(false), fontSize: 12.5, padding: '5px 10px' }}>{s}</button>)}
            </div>}
          </div>
        )}

        {done && (
          <div data-testid="chat-done" style={{ marginTop: 12, fontSize: 14, color: D.muted, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            <Icon name="checkCircle" size={16} color={D.moss} />{tx(T.ended, lang)}
            <button type="button" onClick={restart} style={ghostBtn}><Icon name="reset" size={13} color={D.ink} />{tx(T.restart, lang)}</button>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  )
}
