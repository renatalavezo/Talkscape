// End-to-end test of the v2 journey player in a real browser (Chromium).
// Walks week 1 of the Core pilot at every level, and checks audio, recording
// and their fallbacks. Uses the dev-only lab page (lab/journey.html).
//
//   npm run e2e:journey            (needs Playwright + Chromium installed;
//                                   locally: npx playwright install chromium)
// Screenshots go to $E2E_SHOTS (default: OS temp dir).
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createServer } from 'vite'

async function loadPlaywright() {
  try { return await import('playwright') } catch { /* fall back to a global install */ }
  const root = execSync('npm root -g').toString().trim()
  return import(pathToFileURL(join(root, 'playwright', 'index.mjs')).href)
}
const { chromium } = await loadPlaywright()
const SHOTS = process.env.E2E_SHOTS || tmpdir()

const server = await createServer({ server: { port: 5188, strictPort: false }, logLevel: 'error' })
await server.listen()
const BASE = server.resolvedUrls.local[0].replace(/\/$/, '')
const results = []
const pass = (name, detail = '') => { results.push(`✓ ${name}${detail ? ` — ${detail}` : ''}`) }

// Fake speech engine: lets us verify playback, speed and transcript unlock
// deterministically (headless Chromium on Linux ships without voices).
const FAKE_TTS = `
  window.__tts = []
  class FakeUtt { constructor(t) { this.text = t; this.rate = 1 } }
  const voices = [{ name: 'Fake GB', lang: 'en-GB', localService: true }]
  const synth = { getVoices: () => voices, addEventListener() {}, removeEventListener() {}, cancel() {},
    speak(u) { window.__tts.push({ text: u.text, rate: u.rate }); setTimeout(() => { u.onstart && u.onstart({}); setTimeout(() => u.onend && u.onend({}), 30) }, 10) } }
  Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true })
  window.SpeechSynthesisUtterance = FakeUtt`
// Engine that exists but never starts (seen on some Linux browsers).
const STUCK_TTS = `
  class FakeUtt { constructor(t) { this.text = t } }
  const synth = { getVoices: () => [{ name: 'X', lang: 'en-US' }], addEventListener() {}, removeEventListener() {}, cancel() {}, speak() {} }
  Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true })
  window.SpeechSynthesisUtterance = FakeUtt`

async function newPage(browser, { init, url = '', viewport = { width: 1100, height: 900 }, permissions } = {}) {
  const ctx = await browser.newContext({ viewport, permissions })
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errors.push(m.text()) })
  if (init) await page.addInitScript(init)
  await page.goto(`${BASE}/lab/journey.html${url}`)
  await page.waitForSelector('[data-testid=journey-v2]')
  return { page, ctx, errors }
}
const db = page => page.evaluate(() => window.__labDb)
const SID = '1700000000999'

// Do something reasonable on the current step, then move on.
async function playStep(page, texts) {
  const step = page.locator('[data-testid=step]')
  const kind = await step.getAttribute('data-kind')
  const mode = await step.getAttribute('data-mode')
  if (kind === 'prepare') await step.locator('button').first().click()
  if (kind === 'check' && mode === 'choice') {
    for (const fs of await step.locator('fieldset').all()) await fs.locator('button').first().click()
  }
  if (kind === 'check' && mode === 'match') {
    for (const sel of await step.locator('select').all()) await sel.selectOption({ index: 1 })
    await step.getByRole('button', { name: /Verificar|Check/ }).click()
  }
  if (kind === 'check' && mode === 'order') await step.getByRole('button', { name: /Verificar|Check/ }).click()
  if (kind === 'check' && mode === 'open-choice') {
    await step.getByRole('button', { name: /Lucas/ }).click()
    const reason = step.locator('button[aria-pressed]', { hasText: 'same hobby' })
    if (await reason.count()) await reason.click()
    const why = step.locator('textarea')
    if (await why.count()) { await why.fill("I'd like to talk to Lucas because he is Brazilian too."); await step.getByRole('button', { name: /Salvar|Save/ }).click() }
  }
  if (kind === 'act') {
    const ta = step.locator('textarea')
    const slot = (await ta.getAttribute('data-testid')).replace('act-', '')
    await ta.fill(texts[slot] || 'Hi Lucas! What is Pipoca like?')
    await step.locator(`[data-testid=save-${slot}]`).click()
    await step.locator(`[data-testid=saved-${slot}]`).waitFor()
    const ex = step.getByRole('button', { name: /Ver um exemplo|See an example/ })
    if (await ex.count()) await ex.click()
  }
  if (kind === 'chat') {
    for (let n = 0; n < 12; n++) {
      if (await step.locator('[data-testid=chat-done]').count()) break
      const input = step.locator('[data-testid=chat-input]')
      const q = (await input.getAttribute('data-expects')) === 'question'
      await input.fill(q ? 'Do you like your dog? What is Pipoca like?' : "I'm a nurse, and I want to travel.")
      await step.locator('[data-testid=chat-send]').click()
      await step.locator('[data-testid=chat-feedback]').waitFor()
      await step.locator('[data-testid=chat-continue]').click()
    }
    await step.locator('[data-testid=chat-done]').waitFor()
  }
  if (kind === 'reflect') {
    for (const g of await step.getByRole('radiogroup').all()) await g.getByRole('radio').nth(1).click()
    await step.locator('[data-testid=save-reflect]').click()
  }
  return { kind, mode }
}

async function walkWeek(page, level) {
  const texts = {
    'w1-intro': "Hi everyone! I'm Ana, from Recife. I'm a nurse. I love music — ask me about forró! This year I want to travel.",
    'w1-reply': "Hi Lucas! I'm from Brazil too. What is Pipoca like?",
    'w1-dm': 'Hi Lucas! We are in the same time zone — how about Tuesday at 7 p.m.? If not, tell me a better time.',
  }
  const kinds = []
  for (let a = 1; a <= 5; a++) {
    if (a === 1) await page.click('[data-testid=open-core-w1-a1]')
    const counter = await page.locator('[data-testid=step-counter]').innerText()
    const total = Number(counter.match(/(\d+)\s*$/)[1])
    for (let s = 0; s < total; s++) {
      kinds.push((await playStep(page, texts)).kind)
      await page.click('[data-testid=step-next]')
    }
    await page.locator('[data-testid=activity-done]').waitFor()
    if (a < 5) await page.click('[data-testid=open-next]')
    else await page.click('[data-testid=to-week]')
  }
  await page.locator('[data-testid=week-done]').waitFor()
  return kinds
}

const browser = await chromium.launch({ args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] })
try {
  // 1. Whole week, every level (fake voice, real recorder)
  for (const level of ['A1', 'A2', 'B1', 'B2', 'C1']) {
    const { page, ctx, errors } = await newPage(browser, { init: FAKE_TTS, url: `?level=${level}`, permissions: ['microphone'] })
    await page.evaluate(() => localStorage.clear())
    const expected = { A1: 'A1', A2: 'A2', B1: 'B1', B2: 'B2', C1: 'B2' }[level]
    assert.equal(await page.getAttribute('[data-testid=journey-v2]', 'data-level'), expected)
    const kinds = await walkWeek(page, level)
    const d = await db(page)
    const done = d[`jsd_${SID}`] || {}
    assert.equal(Object.keys(done).length, 5, `${level}: 5 activities marked done`)
    const r = d[`jrsp_${SID}_core2`]
    assert.equal(r['w1-buddy'].text, 'Lucas')
    assert.ok(r['w1-intro'].first.text.startsWith("Hi everyone! I'm Ana"), `${level}: intro saved with first version`)
    assert.ok(r['w1-reply'].text.includes('Pipoca'))
    assert.ok(JSON.parse(r['w1-reflect'].text).canDo[0] === 'withHelp', `${level}: reflection saved`)
    if (level === 'B2' || level === 'C1') assert.ok(r['w1-dm'], `${level}: private message saved`)
    else assert.ok(!r['w1-dm'], `${level}: no private-message step`)
    if (level === 'B1') assert.ok(r['w1-buddy-why'].text.includes('Brazilian'), 'B1 writes own reason')
    assert.deepEqual(errors, [], `${level}: no console errors`)
    await page.screenshot({ path: join(SHOTS, `week-done-${level}.png`), fullPage: true })
    // teacher's read-only view shows the version applied and the saved texts
    await page.click('[data-testid=lab-teacher]')
    const tv = page.locator('[data-testid=journey-v2-teacher]')
    await tv.waitFor()
    assert.ok(!(await tv.innerText()).includes("Hi everyone! I'm Ana"), `${level}: texts are NOT shown automatically`)
    assert.match(await tv.locator('[data-testid=teacher-prod-count]').innerText(), /tem \d+ produç/, `${level}: says productions exist`)
    assert.match(await tv.locator('[data-testid=teacher-progress]').innerText(), /^5\/5/, `${level}: progress`)
    assert.ok((await tv.locator('[data-testid=teacher-selfassessment]').innerText()).includes('com ajuda'), `${level}: self-assessment shown`)
    assert.match(await tv.locator('[data-testid=teacher-range]').innerText(), /A1–B1, com versão de extensão até B2/)
    assert.equal(await tv.locator('[data-testid=teacher-level-note]').count(), level === 'C1' ? 1 : 0, `${level}: above-range note only for C1`)
    if (level === 'C1') assert.match(await tv.locator('[data-testid=teacher-level-note]').innerText(), /usam a versão B2 porque[\s\S]*A decisão é sua/)
    await tv.locator('[data-testid=teacher-prod-toggle]').click()
    assert.ok((await tv.locator('[data-testid=teacher-prod-list]').innerText()).includes("Hi everyone! I'm Ana"), `${level}: texts appear only after the explicit action`)
    if (level === 'C1') await page.screenshot({ path: join(SHOTS, 'teacher-C1.png'), fullPage: true })
    await page.click('[data-testid=lab-teacher]')
    pass(`Semana 1 completa em ${level}`, `nível aplicado ${expected}, ${kinds.length} passos, produções e reflexão salvas`)
    await ctx.close()
  }

  // 2. Chat: partner reacts to the student's own question; possible reply shown after sending
  {
    const { page, ctx } = await newPage(browser, { init: FAKE_TTS, url: '?level=A2' })
    await page.evaluate(() => localStorage.clear()); await page.reload(); await page.waitForSelector('[data-testid=journey-v2]')
    await page.click('[data-testid=open-core-w1-a5]')
    await page.getByRole('button', { name: 'Lucas' }).click()   // no buddy yet → inline choice
    const chat = page.locator('[data-testid=step]')
    assert.equal(await chat.locator('[data-testid=chat-feedback]').count(), 0, 'no model before sending')
    await chat.locator('[data-testid=chat-ideas]').click()
    const starter = chat.locator('button', { hasText: "I'm a/an …" })
    await starter.click()
    assert.equal(await chat.locator('[data-testid=chat-input]').inputValue(), "I'm a/an ", 'starter inserts a partial phrase only')
    for (const msg of ["I'm a teacher.", 'Because I want to travel.', 'Is your dog Pipoca very loud?']) {
      await chat.locator('[data-testid=chat-input]').fill(msg)
      await chat.locator('[data-testid=chat-send]').click()
      await chat.locator('[data-testid=chat-continue]').click()
    }
    const them = await chat.locator('[data-testid=chat-them]').allInnerTexts()
    assert.ok(them.some(t => t.includes('Pipoca is a mix')), 'reply pool matched the question about the dog')
    await chat.locator('[data-testid=chat-input]').fill('maybe')
    await chat.locator('[data-testid=chat-send]').click()
    await page.screenshot({ path: join(SHOTS, 'chat.png'), fullPage: true })
    pass('Conversa', 'aluna escreve, frase inicial é parcial, resposta possível só depois de enviar, personagem reage à pergunta dela')
    await ctx.close()
  }

  // 3. Audio with a working voice: 3 speeds, transcript unlocks after first listen (A2), always available (A1)
  {
    const { page, ctx } = await newPage(browser, { init: FAKE_TTS, url: '?level=A2' })
    await page.click('[data-testid=open-core-w1-a3]'); await page.click('[data-testid=step-next]')
    const ap = page.locator('[data-testid=audio-player]')
    await ap.locator('[data-testid=transcript-locked]').waitFor()
    assert.equal(await ap.locator('[data-testid^=rate-]').count(), 3, 'three speeds')
    await ap.locator('[data-testid="rate-0.75"]').click()
    await ap.locator('[data-testid=audio-play]').click()
    await ap.locator('[data-testid=transcript-toggle]').waitFor()
    const tts = await page.evaluate(() => window.__tts)
    assert.ok(tts.length > 3 && tts.every(u => u.rate === 0.75), 'script split in sentences, chosen speed applied')
    await ap.locator('[data-testid=transcript-toggle]').click()
    await ap.locator('[data-testid=transcript]').waitFor()
    await ctx.close()
    const a1 = await newPage(browser, { init: FAKE_TTS, url: '?level=A1' })
    await a1.page.click('[data-testid=open-core-w1-a3]'); await a1.page.click('[data-testid=step-next]')
    await a1.page.locator('[data-testid=transcript-toggle]').waitFor()
    assert.equal(await a1.page.locator('[data-testid=transcript-locked]').count(), 0, 'A1: transcript available before listening')
    await a1.ctx.close()
    pass('Áudio com voz', '3 velocidades, frases curtas, transcrição liberada após a 1ª escuta (A1: sempre)')
  }

  // 4. Audio fallbacks: no API, no English voice (real headless Chromium), engine that never starts
  for (const [label, opts] of [
    ['sem speechSynthesis', { url: '?level=A2&tts=off' }],
    ['sem voz em inglês (Chromium real)', { url: '?level=A2' }],
    ['motor de voz travado', { url: '?level=A2', init: STUCK_TTS }],
  ]) {
    const { page, ctx, errors } = await newPage(browser, opts)
    await page.click('[data-testid=open-core-w1-a3]'); await page.click('[data-testid=step-next]')
    const ap = page.locator('[data-testid=audio-player]')
    if (opts.init === STUCK_TTS) { await ap.locator('[data-testid=audio-play]').click(); await page.waitForTimeout(5500) }
    await ap.locator('[data-testid=audio-fallback]').waitFor()
    await ap.locator('[data-testid=transcript]').waitFor()
    await page.click('[data-testid=step-next]')
    assert.equal(await page.getAttribute('[data-testid=step]', 'data-step'), 's3', 'can continue')
    if (opts.init === STUCK_TTS) await page.screenshot({ path: join(SHOTS, 'audio-fallback.png'), fullPage: true })
    assert.deepEqual(errors, [])
    pass(`Áudio: ${label}`, 'mensagem clara + transcrição + atividade continua')
    await ctx.close()
  }

  // 5. Recorder: record → listen → delete → record again (fake microphone)
  {
    const { page, ctx, errors } = await newPage(browser, { init: FAKE_TTS, url: '?level=A2', permissions: ['microphone'] })
    await page.click('[data-testid=open-core-w1-a3]')
    for (let k = 0; k < 4; k++) await page.click('[data-testid=step-next]')
    const rec = page.locator('[data-testid=recorder]')
    await rec.locator('[data-testid=rec-start]').click()
    await rec.locator('[data-testid=rec-stop]').waitFor(); await page.waitForTimeout(1200)
    await rec.locator('[data-testid=rec-stop]').click()
    await rec.locator('[data-testid=rec-audio]').waitFor()
    const src = await rec.locator('[data-testid=rec-audio]').getAttribute('src')
    assert.ok(src.startsWith('blob:'), 'recording kept as a local blob')
    const dur = await rec.locator('[data-testid=rec-audio]').evaluate(a => new Promise(r => { if (a.readyState >= 1) r(a.duration); else a.onloadedmetadata = () => r(a.duration); setTimeout(() => r(-1), 3000) }))
    await rec.locator('[data-testid=rec-delete]').click()
    assert.equal(await rec.locator('[data-testid=rec-audio]').count(), 0, 'deleted')
    await rec.locator('[data-testid=rec-start]').click(); await page.waitForTimeout(600)
    await rec.locator('[data-testid=rec-stop]').click()
    await rec.locator('[data-testid=rec-audio]').waitFor()
    const d = await db(page)
    assert.ok(!JSON.stringify(d).includes('blob:'), 'recording never reaches the db')
    assert.deepEqual(errors, [])
    pass('Gravação', `gravar → ouvir (${dur === Infinity ? 'stream' : dur.toFixed?.(1) + 's'}) → apagar → regravar; nada salvo no banco`)
    await ctx.close()
  }

  // 6. Recorder fallbacks: no MediaRecorder, microphone denied
  for (const [label, opts, expected] of [
    ['sem MediaRecorder', { url: '?level=A2&rec=off' }, 'unsupported'],
    ['microfone negado', { url: '?level=A2', permissions: [] }, 'denied'],
  ]) {
    const b2 = expected === 'denied' ? await chromium.launch() : browser
    const { page, ctx, errors } = await newPage(b2, { ...opts, init: FAKE_TTS })
    await page.click('[data-testid=open-core-w1-a3]')
    for (let k = 0; k < 4; k++) await page.click('[data-testid=step-next]')
    const rec = page.locator('[data-testid=recorder]')
    if (expected === 'denied') await rec.locator('[data-testid=rec-start]').click()
    await rec.locator('[data-testid=recorder-message]').waitFor()
    const status = await rec.getAttribute('data-status')
    assert.ok(expected === 'unsupported' ? status === 'unsupported' : ['denied', 'error'].includes(status), `${label}: ${status}`)
    await page.click('[data-testid=step-next]')
    await page.locator('[data-testid=activity-done]').waitFor()
    assert.deepEqual(errors, [])
    pass(`Gravação: ${label}`, `status "${status}", mensagem clara, atividade concluída`)
    await ctx.close()
    if (b2 !== browser) await b2.close()
  }

  // 7. Persistence and versions: reload keeps the text; editing keeps the first version
  {
    const { page, ctx } = await newPage(browser, { init: FAKE_TTS, url: '?level=A2' })
    await page.evaluate(() => localStorage.clear()); await page.reload(); await page.waitForSelector('[data-testid=journey-v2]')
    await page.click('[data-testid=open-core-w1-a4]')
    const ta = page.locator('[data-testid=act-w1-intro]')
    await ta.fill('Hi everyone! First try.'); await page.click('[data-testid=save-w1-intro]')
    await page.reload(); await page.waitForSelector('[data-testid=journey-v2]')
    await page.click('[data-testid=open-core-w1-a4]')
    assert.equal(await ta.inputValue(), 'Hi everyone! First try.', 'saved text comes back after reload')
    await ta.fill('Hi everyone! Second, better try.'); await page.click('[data-testid=save-w1-intro]')
    await page.getByText(/Ver sua versão anterior/).click()
    await page.getByText('Hi everyone! First try.').waitFor()
    const r = (await db(page))[`jrsp_${SID}_core2`]['w1-intro']
    assert.equal(r.first.text, 'Hi everyone! First try.'); assert.equal(r.text, 'Hi everyone! Second, better try.')
    // unsaved text: one gentle warning, then lets the student move on
    await ta.fill('Changed but not sent')
    await page.click('[data-testid=step-next]')
    assert.equal(await page.getAttribute('[data-testid=step]', 'data-step'), 's2')
    pass('Salvamento', 'texto volta após recarregar; edição guarda a 1ª versão e a anterior fica visível')
    await ctx.close()
  }

  // 8. Mobile width and English UI
  {
    const { page, ctx, errors } = await newPage(browser, { init: FAKE_TTS, url: '?level=B1&lang=en', viewport: { width: 390, height: 844 } })
    await page.screenshot({ path: join(SHOTS, 'mobile-week.png'), fullPage: true })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    assert.ok(overflow <= 1, `no horizontal scroll on mobile (${overflow}px)`)
    await page.click('[data-testid=open-core-w1-a1]'); await page.click('[data-testid=step-next]')
    await page.getByText("Read the messages").waitFor()
    await page.screenshot({ path: join(SHOTS, 'mobile-messages.png'), fullPage: true })
    assert.deepEqual(errors, [])
    pass('Celular (390px) e interface em inglês', 'sem rolagem lateral; instruções em EN')
    await ctx.close()
  }
} finally {
  await browser.close()
  await server.close()
}
console.log(results.join('\n'))
console.log(`e2e-journey: ${results.length} scenarios passed · screenshots in ${SHOTS}`)
