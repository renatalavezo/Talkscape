import { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import { D, tx, note, ghostBtn } from './ui'

const T = {
  record:   { pt: 'Gravar', en: 'Record' },
  stop:     { pt: 'Parar', en: 'Stop' },
  again:    { pt: 'Gravar de novo', en: 'Record again' },
  del:      { pt: 'Apagar', en: 'Delete' },
  asking:   { pt: 'Pedindo acesso ao microfone…', en: 'Asking for microphone access…' },
  privacy:  { pt: 'Sua gravação fica só neste aparelho, para você se ouvir. Ela não é enviada nem salva — some quando você sai da atividade.', en: 'Your recording stays on this device so you can listen to yourself. It is not sent or saved — it disappears when you leave the activity.' },
  unsupported: { pt: 'Este navegador não permite gravar aqui. Tudo bem: ensaie em voz alta mesmo assim — o importante é falar. Se quiser se ouvir, use o gravador do celular.', en: "This browser can't record here. That's fine: rehearse out loud anyway — speaking is what matters. To hear yourself, use your phone's voice recorder." },
  denied:   { pt: 'O navegador não deu acesso ao microfone. Você pode permitir nas configurações do navegador e tentar de novo — ou seguir ensaiando em voz alta, sem gravar.', en: "The browser didn't allow microphone access. You can allow it in the browser settings and try again — or keep rehearsing out loud without recording." },
  error:    { pt: 'Não foi possível gravar agora. Você pode tentar de novo ou continuar ensaiando em voz alta.', en: "Recording didn't work right now. You can try again or keep rehearsing out loud." },
}

const MAX_SECONDS = 180

export const recordingSupported = () =>
  typeof window !== 'undefined' && typeof window.MediaRecorder === 'function' && !!navigator.mediaDevices?.getUserMedia

function pickMime() {
  const MR = window.MediaRecorder
  if (typeof MR.isTypeSupported !== 'function') return undefined
  return ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'].find(t => MR.isTypeSupported(t))
}

// Practice recorder: record → listen → delete / record again. Never uploads.
export default function Recorder({ lang }) {
  const [status, setStatus] = useState(recordingSupported() ? 'idle' : 'unsupported')
  const [url, setUrl] = useState(null)
  const [secs, setSecs] = useState(0)
  const recRef = useRef(null), streamRef = useRef(null), timerRef = useRef(null), urlRef = useRef(null)

  const releaseStream = () => { streamRef.current?.getTracks().forEach(t => t.stop()); streamRef.current = null }
  const clearUrl = () => { if (urlRef.current) URL.revokeObjectURL(urlRef.current); urlRef.current = null; setUrl(null) }

  useEffect(() => () => {
    clearInterval(timerRef.current)
    try { if (recRef.current?.state === 'recording') recRef.current.stop() } catch { /* ignore */ }
    releaseStream()
    if (urlRef.current) URL.revokeObjectURL(urlRef.current)
  }, [])

  const start = async () => {
    clearUrl()
    setStatus('asking')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mime = pickMime()
      const rec = new window.MediaRecorder(stream, mime ? { mimeType: mime } : undefined)
      const chunks = []
      rec.ondataavailable = e => { if (e.data?.size) chunks.push(e.data) }
      rec.onstop = () => {
        clearInterval(timerRef.current)
        releaseStream()
        if (!chunks.length) { setStatus('error'); return }
        const blob = new Blob(chunks, { type: rec.mimeType || mime || 'audio/webm' })
        urlRef.current = URL.createObjectURL(blob)
        setUrl(urlRef.current)
        setStatus('recorded')
      }
      rec.onerror = () => { clearInterval(timerRef.current); releaseStream(); setStatus('error') }
      recRef.current = rec
      rec.start()
      setSecs(0)
      setStatus('recording')
      timerRef.current = setInterval(() => setSecs(s => {
        if (s + 1 >= MAX_SECONDS) { try { rec.stop() } catch { /* ignore */ } }
        return s + 1
      }), 1000)
    } catch (e) {
      releaseStream()
      setStatus(e?.name === 'NotAllowedError' || e?.name === 'SecurityError' ? 'denied' : 'error')
    }
  }
  const stop = () => { try { recRef.current?.stop() } catch { setStatus('error') } }
  const del = () => { clearUrl(); setStatus('idle') }

  const msg = status === 'unsupported' ? T.unsupported : status === 'denied' ? T.denied : status === 'error' ? T.error : null

  return (
    <div data-testid="recorder" data-status={status} style={{ background: D.surfaceWarm, border: `1px solid ${D.line}`, borderRadius: 14, padding: '14px 16px' }}>
      {msg && <div role="status" data-testid="recorder-message" style={{ ...note('#FFF7EC', D.honey), fontSize: 13.5, display: 'flex', gap: 8, marginBottom: status === 'unsupported' ? 0 : 10 }}>
        <Icon name="info" size={16} color={D.orange} style={{ marginTop: 2 }} /><span>{tx(msg, lang)}</span></div>}

      {status !== 'unsupported' && (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
            {status === 'recording'
              ? <button type="button" data-testid="rec-stop" onClick={stop} style={{ ...ghostBtn, background: D.terraSoft, borderColor: D.terra, color: D.terraDeep }}>
                  <span style={{ width: 9, height: 9, borderRadius: 9, background: '#C0392B' }} />{tx(T.stop, lang)} · {secs}s
                </button>
              : <button type="button" data-testid="rec-start" onClick={start} disabled={status === 'asking'} style={{ ...ghostBtn, background: D.moss, borderColor: D.moss, color: '#fff' }}>
                  <Icon name="speaking" size={14} color="#fff" />{status === 'asking' ? tx(T.asking, lang) : tx(url ? T.again : T.record, lang)}
                </button>}
            {url && status === 'recorded' && (
              <button type="button" data-testid="rec-delete" onClick={del} style={ghostBtn}><Icon name="delete" size={13} color={D.clay} />{tx(T.del, lang)}</button>
            )}
          </div>
          {url && <audio data-testid="rec-audio" controls src={url} style={{ width: '100%', marginTop: 10 }} />}
          <p style={{ fontSize: 12, color: D.muted, margin: '10px 0 0', lineHeight: 1.5 }}>{tx(T.privacy, lang)}</p>
        </>
      )}
    </div>
  )
}
