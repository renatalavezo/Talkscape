import { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import { D, sansD, tx, chip, note, ghostBtn } from './ui'
import { ttsSupported, loadVoices, pickVoice, speak } from './speech'

const T = {
  play:      { pt: 'Ouvir', en: 'Listen' },
  again:     { pt: 'Ouvir de novo', en: 'Listen again' },
  stop:      { pt: 'Parar', en: 'Stop' },
  loading:   { pt: 'Preparando o áudio…', en: 'Preparing audio…' },
  speed:     { pt: 'Velocidade', en: 'Speed' },
  show:      { pt: 'Ler o texto', en: 'Read the text' },
  hide:      { pt: 'Esconder o texto', en: 'Hide the text' },
  locked:    { pt: 'O texto aparece depois que você ouvir pela primeira vez.', en: 'The text appears after your first listen.' },
  noVoice:   { pt: 'Seu navegador não tem uma voz em inglês para tocar este áudio. Leia o texto abaixo — você pode continuar a atividade normalmente. (No Chrome, Edge ou Safari o áudio costuma funcionar.)', en: 'Your browser has no English voice to play this audio. Read the text below — you can continue the activity normally. (Audio usually works in Chrome, Edge or Safari.)' },
  failed:    { pt: 'Não foi possível tocar o áudio agora. O texto está liberado abaixo e você pode continuar. Se quiser, tente de novo.', en: "The audio couldn't play right now. The text is available below and you can continue. You can try again if you like." },
  synthetic: { pt: 'Voz sintética do navegador', en: "Browser's synthetic voice" },
}

// Plays a script with the browser's speech synthesis.
// transcript: 'always' (can open any time) | 'after-first' (unlocks once playback starts)
// If speech is unavailable or fails, the transcript opens automatically and
// nothing blocks the activity.
export default function AudioPlayer({ script, lang, voiceLang = 'en-GB', rates = [0.75, 0.9, 1], rate: initialRate, transcript = 'after-first', compact = false, label }) {
  const [status, setStatus] = useState(ttsSupported() ? 'loading' : 'unsupported')
  const [rate, setRate] = useState(initialRate ?? rates[Math.min(1, rates.length - 1)])
  const [started, setStarted] = useState(false)
  const [open, setOpen] = useState(false)
  const voiceRef = useRef(null)
  const stopRef = useRef(null)

  useEffect(() => {
    let alive = true
    if (!ttsSupported()) return
    loadVoices().then(vs => {
      if (!alive) return
      voiceRef.current = pickVoice(vs, voiceLang)
      setStatus(voiceRef.current ? 'ready' : 'novoice')
    })
    return () => { alive = false; stopRef.current?.() }
  }, [voiceLang])

  const failed = ['unsupported', 'novoice', 'error'].includes(status)
  const unlocked = transcript === 'always' || started || failed
  const showText = failed || open

  const play = () => {
    stopRef.current?.()
    setStatus('playing')
    stopRef.current = speak(script, {
      voice: voiceRef.current, rate,
      onStart: () => setStarted(true),
      onEnd: () => setStatus('ready'),
      onError: () => setStatus('error'),
    })
  }
  const stop = () => { stopRef.current?.(); setStatus('ready') }

  return (
    <div data-testid="audio-player" data-status={status} style={{ background: D.surfaceWarm, border: `1px solid ${D.line}`, borderRadius: 14, padding: compact ? '10px 12px' : '14px 16px' }}>
      {label && <div style={{ ...sansD(700, 13), color: D.ink, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="volume" size={15} color={D.terra} />{label}</div>}

      {!failed && (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          {status === 'playing'
            ? <button type="button" data-testid="audio-stop" onClick={stop} style={{ ...ghostBtn, background: D.terraSoft, borderColor: D.terra, color: D.terraDeep }}><Icon name="stop" size={14} color={D.terraDeep} />{tx(T.stop, lang)}</button>
            : <button type="button" data-testid="audio-play" onClick={play} disabled={status === 'loading'} style={{ ...ghostBtn, background: D.terra, borderColor: D.terra, color: '#fff', opacity: status === 'loading' ? 0.6 : 1 }}>
                <Icon name="play" size={14} color="#fff" />{status === 'loading' ? tx(T.loading, lang) : tx(started ? T.again : T.play, lang)}
              </button>}
          <div role="group" aria-label={tx(T.speed, lang)} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ fontSize: 12, color: D.muted }}>{tx(T.speed, lang)}</span>
            {rates.map(r => (
              <button type="button" key={r} data-testid={`rate-${r}`} aria-pressed={rate === r} onClick={() => setRate(r)}
                style={{ ...chip(rate === r, D.terra, D.terraSoft), padding: '4px 9px', fontSize: 12 }}>{r}×</button>
            ))}
          </div>
          {!compact && <span style={{ fontSize: 11.5, color: D.muted, fontStyle: 'italic' }}>{tx(T.synthetic, lang)}</span>}
        </div>
      )}

      {failed && <div data-testid="audio-fallback" role="status" style={{ ...note('#FFF7EC', D.honey), fontSize: 13.5, display: 'flex', gap: 8 }}>
        <Icon name="info" size={16} color={D.orange} style={{ marginTop: 2 }} />
        <span>{tx(status === 'error' ? T.failed : T.noVoice, lang)}</span>
      </div>}
      {status === 'error' && <button type="button" onClick={play} style={{ ...ghostBtn, marginTop: 8 }}><Icon name="refresh" size={13} color={D.ink} />{tx(T.again, lang)}</button>}

      {!failed && (unlocked
        ? <button type="button" data-testid="transcript-toggle" onClick={() => setOpen(o => !o)} style={{ ...ghostBtn, marginTop: 10, fontSize: 12.5 }}>
            <Icon name="eye" size={13} color={D.ink} />{tx(open ? T.hide : T.show, lang)}
          </button>
        : <div data-testid="transcript-locked" style={{ fontSize: 12, color: D.muted, marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}><Icon name="lock" size={12} color={D.muted} />{tx(T.locked, lang)}</div>)}

      {showText && <p data-testid="transcript" lang="en" style={{ margin: '10px 0 0', fontSize: 15, lineHeight: 1.6, color: D.ink, background: D.surface, borderRadius: 10, padding: '10px 12px', border: `1px solid ${D.line}` }}>{script}</p>}
    </div>
  )
}
