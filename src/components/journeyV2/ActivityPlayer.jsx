import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from '../Icon'
import Step, { EngageInput } from './Steps'
import { D, serifD, sansD, tx, card, chip, btn, ghostBtn, note, SKILL_META, L } from './ui'

const T = {
  week:      { pt: 'Semana', en: 'Week' },
  why:       { pt: 'Por que fazer isto', en: 'Why do this' },
  situation: { pt: 'Situação', en: 'Situation' },
  review:    { pt: 'Rever o material', en: 'Review the material' },
  done:      { pt: 'Atividade concluída', en: 'Activity complete' },
  nextAct:   { pt: 'Próxima atividade', en: 'Next activity' },
  toWeek:    { pt: 'Voltar para a semana', en: 'Back to the week' },
  again:     { pt: 'Refazer esta atividade', en: 'Do this activity again' },
  unsaved:   { pt: 'Você ainda não enviou seu texto. Se quiser, envie antes de continuar — ou toque em "Continuar" de novo para seguir assim mesmo.', en: "You haven't sent your text yet. You can send it first — or tap \"Continue\" again to move on anyway." },
  chooseBuddy: { pt: 'Para esta atividade, escolha com quem você vai conversar:', en: 'For this activity, choose who you will talk to:' },
  noBuddyYet:  { pt: 'Você ainda não escolheu ninguém na atividade 1 — tudo bem, escolha agora.', en: "You haven't chosen anyone in activity 1 yet — that's fine, choose now." },
}

// One activity, one step at a time. Navigation is the same for every
// activity; each step kind brings its own experience.
export default function ActivityPlayer({ activity, index, week, journey, lang, sid, jid, db, prod, buddy, buddyMessage, isDone, onDone, onExit, onOpenNext, nextActivity, minutes }) {
  const steps = activity.steps
  const [i, setI] = useState(0)
  const [finished, setFinished] = useState(false)
  const [state, setState] = useState({})
  const [warned, setWarned] = useState(false)
  const topRef = useRef(null)

  useEffect(() => { topRef.current?.scrollIntoView?.({ block: 'start', behavior: 'smooth' }) }, [i, finished])

  const step = steps[i]
  const st = state[step?.id] || {}
  const set = patch => setState(s => ({ ...s, [step.id]: { ...(s[step.id] || {}), ...patch } }))

  // last engage step before the current one → available to review
  const reviewStep = useMemo(() => steps.slice(0, i).reverse().find(s => s.kind === 'engage'), [steps, i])
  const needsBuddy = steps.some(s => s.ref || s.with?.ref)
  const people = Object.keys(journey.people || {})

  const unsaved = step?.kind === 'act' && step.saveAs && !prod.get(step.saveAs)
  const goNext = () => {
    if (unsaved && !warned) { setWarned(true); return }
    setWarned(false)
    if (i < steps.length - 1) setI(i + 1)
    else { setFinished(true); onDone() }
  }

  const ctx = { prod, buddy, buddyMessage, people: journey.people, week, journey, db, sid, jid }

  return (
    <div ref={topRef} data-testid="activity-player" data-activity={activity.id} style={{ scrollMarginTop: 80 }}>
      <button type="button" onClick={onExit} style={{ ...ghostBtn, marginBottom: 14 }}><Icon name="back" size={14} color={D.ink} />{tx(T.week, lang)} {week.week}</button>

      <div style={{ ...card, padding: '22px 24px', marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ ...sansD(700, 12), color: D.terra, textTransform: 'uppercase', letterSpacing: 0.6 }}>{tx(T.week, lang)} {week.week} · {index + 1}/{week.tasks.length}</span>
          {activity.skills.map(s => SKILL_META[s] && <span key={s} style={{ fontSize: 11.5, fontWeight: 600, color: D.mossDeep, background: D.mossSoft, padding: '3px 9px', borderRadius: 99, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name={SKILL_META[s].icon} size={11} color={D.mossDeep} />{SKILL_META[s][lang] || SKILL_META[s].en}</span>)}
          {minutes && <span style={{ fontSize: 12, color: D.muted, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="clock" size={12} color={D.muted} />~{minutes} {tx(L.minutes, lang)}</span>}
        </div>
        <h2 style={{ margin: 0, ...serifD(500, 26), color: D.ink }}>{tx(activity, lang)}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 12 }}>
          <div style={{ flex: '1 1 240px', fontSize: 14.5, lineHeight: 1.5 }}><b style={{ color: D.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.4 }}>{tx(T.situation, lang)}</b><br />{tx(activity.situation, lang)}</div>
          <div style={{ flex: '1 1 240px', fontSize: 14.5, lineHeight: 1.5 }}><b style={{ color: D.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.4 }}>{tx(T.why, lang)}</b><br />{tx(activity.purpose, lang)}</div>
        </div>
      </div>

      {!finished && (
        <>
          {/* step progress */}
          <div aria-label={`${tx(L.step, lang)} ${i + 1} ${tx(L.of, lang)} ${steps.length}`} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span data-testid="step-counter" style={{ fontSize: 12.5, color: D.muted, fontWeight: 600 }}>{tx(L.step, lang)} {i + 1} {tx(L.of, lang)} {steps.length}</span>
            <div style={{ display: 'flex', gap: 5, flex: 1 }}>
              {steps.map((s, k) => <div key={s.id} style={{ height: 5, flex: 1, borderRadius: 99, background: k < i ? D.moss : k === i ? D.terra : D.line, transition: 'background .2s' }} />)}
            </div>
          </div>

          {needsBuddy && !buddy && step && (step.ref || step.with?.ref) && (
            <div style={{ ...note('#FFF7EC', D.honey), marginBottom: 14 }}>
              <div style={{ marginBottom: 8 }}>{tx(T.noBuddyYet, lang)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {people.map(p => <button type="button" key={p} onClick={() => prod.save({ [step.ref || step.with.ref]: p })} style={chip(false, D.terra, D.terraSoft)}>{p}</button>)}
              </div>
            </div>
          )}

          {reviewStep && step.kind !== 'engage' && (
            <details style={{ marginBottom: 14 }}>
              <summary style={{ cursor: 'pointer', ...sansD(700, 13.5), color: D.terra }}>{tx(T.review, lang)}</summary>
              <div style={{ marginTop: 10 }}><EngageInput step={reviewStep} lang={lang} compact /></div>
            </details>
          )}

          <div style={{ ...card, padding: '22px 24px' }} data-testid="step" data-kind={step.kind} data-mode={step.mode || step.input?.type || ''} data-step={step.id}>
            <Step key={step.id} step={step} lang={lang} st={st} set={set} ctx={ctx} />
          </div>

          {warned && unsaved && <p role="status" style={{ ...note('#FFF7EC', D.honey), marginTop: 12 }}>{tx(T.unsaved, lang)}</p>}

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 16 }}>
            <button type="button" data-testid="step-back" onClick={() => { setWarned(false); i > 0 ? setI(i - 1) : onExit() }} style={ghostBtn}><Icon name="back" size={14} color={D.ink} />{tx(L.back, lang)}</button>
            <button type="button" data-testid="step-next" onClick={goNext} style={btn(i < steps.length - 1 ? D.terra : D.moss)}>
              {i < steps.length - 1 ? tx(L.next, lang) : tx(L.finish, lang)}<Icon name={i < steps.length - 1 ? 'next' : 'check'} size={15} color="#fff" />
            </button>
          </div>
        </>
      )}

      {finished && (
        <div data-testid="activity-done" style={{ ...card, padding: '28px 24px', textAlign: 'center' }}>
          <div style={{ width: 58, height: 58, borderRadius: 58, background: D.mossSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}><Icon name="check" size={28} color={D.moss} /></div>
          <h3 style={{ ...serifD(500, 24), margin: '14px 0 6px' }}>{tx(T.done, lang)}</h3>
          {activity.bridge && <p style={{ fontSize: 15, color: D.ink, lineHeight: 1.55, maxWidth: 520, margin: '0 auto' }}>{tx(activity.bridge, lang)}</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 20 }}>
            {nextActivity && <button type="button" data-testid="open-next" onClick={onOpenNext} style={btn(D.terra)}>{tx(T.nextAct, lang)}: {tx(nextActivity, lang)} <Icon name="next" size={15} color="#fff" /></button>}
            <button type="button" data-testid="to-week" onClick={onExit} style={ghostBtn}>{tx(T.toWeek, lang)}</button>
            <button type="button" onClick={() => { setFinished(false); setI(0) }} style={ghostBtn}><Icon name="reset" size={13} color={D.ink} />{tx(T.again, lang)}</button>
          </div>
        </div>
      )}
    </div>
  )
}
