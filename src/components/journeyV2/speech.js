// Browser speech synthesis for v2 journeys. Every function degrades safely:
// callers get a status they can show, never an exception.

export const ttsSupported = () =>
  typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function'

// Voices load asynchronously in most browsers (Chrome fires `voiceschanged`).
export function loadVoices(timeout = 1500) {
  return new Promise(resolve => {
    if (!ttsSupported()) return resolve([])
    const synth = window.speechSynthesis
    let voices = []
    try { voices = synth.getVoices() || [] } catch { voices = [] }
    if (voices.length) return resolve(voices)
    let done = false
    const finish = () => {
      if (done) return
      done = true
      synth.removeEventListener?.('voiceschanged', finish)
      try { resolve(synth.getVoices() || []) } catch { resolve([]) }
    }
    synth.addEventListener?.('voiceschanged', finish)
    setTimeout(finish, timeout)
  })
}

const norm = v => (v.lang || '').replace('_', '-').toLowerCase()

// Preferred accent first, then any English voice. null = no English voice.
export function pickVoice(voices, lang = 'en-GB') {
  const want = lang.toLowerCase()
  return voices.find(v => norm(v) === want && v.localService)
    || voices.find(v => norm(v) === want)
    || voices.find(v => norm(v).startsWith('en-') && v.localService)
    || voices.find(v => norm(v).startsWith('en'))
    || null
}

// Short utterances: Chrome desktop stops long ones after ~15 s.
export function splitSentences(text) {
  const parts = text.match(/[^.!?]+[.!?]*/g)
  return (parts || [text]).map(s => s.trim()).filter(Boolean)
}

// Stress is written in capitals ("I'm a NURSE"); some voices would spell
// capitalised words letter by letter, so they are lower-cased for speech.
export const stressToSpeech = text =>
  text.replace(/\b[A-Za-z]*[A-Z]{2,}[A-Za-z]*\b/g, w => w.toLowerCase())

// Speak `text`. Returns a stop() function. Calls exactly one of onEnd/onError.
// A watchdog reports a failure when nothing starts (e.g. browser has the API but
// no working engine), so the UI can fall back to the transcript.
export function speak(text, { voice, rate = 1, onStart, onEnd, onError, startTimeout = 5000 } = {}) {
  if (!ttsSupported()) { onError?.('unsupported'); return () => {} }
  const synth = window.speechSynthesis
  let started = false, finished = false
  const end = (fn, arg) => { if (finished) return; finished = true; clearTimeout(watchdog); fn?.(arg) }
  const watchdog = setTimeout(() => { if (!started) { synth.cancel(); end(onError, 'timeout') } }, startTimeout)
  try {
    synth.cancel()
    const parts = splitSentences(text)
    parts.forEach((p, i) => {
      const u = new window.SpeechSynthesisUtterance(p)
      if (voice) { u.voice = voice; u.lang = voice.lang }
      u.rate = rate
      u.onstart = () => { if (!started) { started = true; onStart?.() } }
      u.onerror = e => {
        if (e?.error === 'interrupted' || e?.error === 'canceled') return
        end(onError, e?.error || 'error')
      }
      if (i === parts.length - 1) u.onend = () => end(onEnd)
      synth.speak(u)
    })
  } catch (e) {
    end(onError, 'exception')
  }
  return () => { finished = true; clearTimeout(watchdog); try { synth.cancel() } catch { /* ignore */ } }
}
