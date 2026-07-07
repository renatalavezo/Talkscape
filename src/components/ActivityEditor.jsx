import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp, S } from '../constants/styles'
import Icon from './Icon'

const TYPES = [
  { id: 'mc',        en: 'Multiple Choice',   pt: 'Múltipla Escolha',  icon: '🔤' },
  { id: 'fill',      en: 'Fill in the Blank', pt: 'Complete a Frase',  icon: '✏️' },
  { id: 'tf',        en: 'True / False',      pt: 'Verdadeiro / Falso', icon: '⚖️' },
  { id: 'translate', en: 'Translation',       pt: 'Tradução',          icon: '🔁' },
  { id: 'match',     en: 'Match',             pt: 'Relacione',         icon: '🔗' },
  { id: 'text',      en: 'Written Answer',    pt: 'Resposta Escrita',  icon: '📝' },
]

function blank() {
  return {
    mc:        { type:'mc',        prompt:'', options:['','','',''], answerIdx:0 },
    fill:      { type:'fill',      prompt:'', answer:'' },
    tf:        { type:'tf',        prompt:'', answer:true },
    translate: { type:'translate', prompt:'', answer:'', keywords:'' },
    match:     { type:'match',     prompt:'', pairs:[{left:'',right:''},{left:'',right:''}] },
    text:      { type:'text',      prompt:'', keywords:'' },
  }
}

function uid() { return Math.random().toString(36).slice(2,9) }

function ActForm({ draft, setDraft, lang }) {
  const t = draft.type

  const setF = (k, v) => setDraft(d => ({ ...d, [k]: v }))
  const setOpt = (i, v) => setDraft(d => { const o = [...d.options]; o[i] = v; return { ...d, options: o } })
  const setPair = (i, k, v) => setDraft(d => { const p = [...d.pairs]; p[i] = { ...p[i], [k]: v }; return { ...d, pairs: p } })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div>
        <p style={{ ...S.lbl, marginBottom: 4 }}>{lang === 'pt' ? 'Enunciado / Pergunta' : 'Prompt / Question'}</p>
        <input style={{ ...S.inp, fontSize: 12 }} value={draft.prompt}
          onChange={e => setF('prompt', e.target.value)}
          placeholder={t === 'fill' ? (lang === 'pt' ? 'Use ___ para o espaço em branco' : 'Use ___ for the blank') : (lang === 'pt' ? 'Escreva a pergunta...' : 'Write the question...')} />
      </div>

      {t === 'mc' && (
        <div>
          <p style={{ ...S.lbl, marginBottom: 4 }}>{lang === 'pt' ? 'Opções (marque a correta)' : 'Options (mark the correct one)'}</p>
          {draft.options.map((opt, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <button onClick={() => setF('answerIdx', i)}
                style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${draft.answerIdx === i ? B.oliva : B.border}`, background: draft.answerIdx === i ? B.oliva : '#fff', cursor: 'pointer', flexShrink: 0 }} />
              <input style={{ ...S.inp, flex: 1, fontSize: 12, marginBottom: 0 }} value={opt}
                onChange={e => setOpt(i, e.target.value)} placeholder={`${lang === 'pt' ? 'Opção' : 'Option'} ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      {t === 'tf' && (
        <div>
          <p style={{ ...S.lbl, marginBottom: 6 }}>{lang === 'pt' ? 'Resposta correta' : 'Correct answer'}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {[true, false].map(v => (
              <button key={String(v)} onClick={() => setF('answer', v)}
                style={{ flex: 1, padding: '9px', borderRadius: 10, border: `2px solid ${draft.answer === v ? B.oliva : B.border}`, background: draft.answer === v ? '#eef2eb' : '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'Poppins,sans-serif', cursor: 'pointer', color: B.dark }}>
                {v ? (lang === 'pt' ? 'Verdadeiro' : 'True') : (lang === 'pt' ? 'Falso' : 'False')}
              </button>
            ))}
          </div>
        </div>
      )}

      {(t === 'fill' || t === 'translate') && (
        <div>
          <p style={{ ...S.lbl, marginBottom: 4 }}>{lang === 'pt' ? 'Resposta correta' : 'Correct answer'}</p>
          <input style={{ ...S.inp, fontSize: 12 }} value={draft.answer || ''}
            onChange={e => setF('answer', e.target.value)} placeholder={lang === 'pt' ? 'Resposta exata...' : 'Exact answer...'} />
          <p style={{ ...S.lbl, marginBottom: 4, marginTop: 6 }}>
            {lang === 'pt' ? 'Palavras-chave aceitas (separadas por vírgula)' : 'Accepted keywords (comma-separated)'}
          </p>
          <input style={{ ...S.inp, fontSize: 12 }} value={draft.keywords || ''}
            onChange={e => setF('keywords', e.target.value)} placeholder={lang === 'pt' ? 'Ex: goes, is going' : 'e.g. goes, is going'} />
        </div>
      )}

      {t === 'text' && (
        <div>
          <p style={{ ...S.lbl, marginBottom: 4 }}>
            {lang === 'pt' ? 'Palavras-chave para correção (separadas por vírgula)' : 'Keywords for correction (comma-separated)'}
          </p>
          <input style={{ ...S.inp, fontSize: 12 }} value={draft.keywords || ''}
            onChange={e => setF('keywords', e.target.value)} placeholder={lang === 'pt' ? 'Ex: hobby, like, enjoy' : 'e.g. hobby, like, enjoy'} />
        </div>
      )}

      {t === 'match' && (
        <div>
          <p style={{ ...S.lbl, marginBottom: 6 }}>{lang === 'pt' ? 'Pares (esquerda → direita)' : 'Pairs (left → right)'}</p>
          {draft.pairs.map((pair, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 6, alignItems: 'center' }}>
              <input style={{ ...S.inp, flex: 1, fontSize: 12, marginBottom: 0 }} value={pair.left}
                onChange={e => setPair(i, 'left', e.target.value)} placeholder={lang === 'pt' ? 'Esquerda' : 'Left'} />
              <span style={{ color: B.mid, fontSize: 12 }}>→</span>
              <input style={{ ...S.inp, flex: 1, fontSize: 12, marginBottom: 0 }} value={pair.right}
                onChange={e => setPair(i, 'right', e.target.value)} placeholder={lang === 'pt' ? 'Direita' : 'Right'} />
              {draft.pairs.length > 2 && (
                <button onClick={() => setDraft(d => ({ ...d, pairs: d.pairs.filter((_, j) => j !== i) }))}
                  style={{ background: '#FEE2E2', border: 'none', borderRadius: 6, padding: '5px 7px', cursor: 'pointer', color: '#DC2626', fontSize: 12 }}>✕</button>
              )}
            </div>
          ))}
          <button onClick={() => setDraft(d => ({ ...d, pairs: [...d.pairs, { left: '', right: '' }] }))}
            style={{ ...S.btn(B.bege), fontSize: 11, padding: '6px 12px', color: B.mid, marginTop: 2 }}>
            + {lang === 'pt' ? 'Adicionar par' : 'Add pair'}
          </button>
        </div>
      )}
    </div>
  )
}

function serializeAct(draft) {
  const base = { id: uid(), type: draft.type, prompt: draft.prompt.trim() }
  if (draft.type === 'mc') {
    return { ...base, options: draft.options.map(o => o.trim()), answerIdx: draft.answerIdx }
  }
  if (draft.type === 'tf') return { ...base, answer: draft.answer }
  if (draft.type === 'fill' || draft.type === 'translate') {
    const kw = (draft.keywords || '').split(',').map(k => k.trim()).filter(Boolean)
    return { ...base, answer: draft.answer.trim(), keywords: kw }
  }
  if (draft.type === 'text') {
    return { ...base, keywords: (draft.keywords || '').split(',').map(k => k.trim()).filter(Boolean) }
  }
  if (draft.type === 'match') {
    return { ...base, pairs: draft.pairs.filter(p => p.left.trim() && p.right.trim()).map(p => ({ left: p.left.trim(), right: p.right.trim() })) }
  }
  return base
}

export default function ActivityEditor({ acts = [], lang, onChange }) {
  const [adding, setAdding] = useState(false)
  const [selType, setSelType] = useState('mc')
  const [draft, setDraft] = useState(blank().mc)
  const [editIdx, setEditIdx] = useState(null)

  const startAdd = (type) => {
    setSelType(type)
    setDraft(blank()[type])
    setAdding(true)
    setEditIdx(null)
  }

  const startEdit = (i) => {
    const act = acts[i]
    const base = blank()[act.type]
    let d = { ...base, ...act }
    if (act.type === 'match') d.pairs = act.pairs?.length ? act.pairs : base.pairs
    if (act.type === 'fill' || act.type === 'translate' || act.type === 'text') {
      d.keywords = (act.keywords || []).join(', ')
    }
    setSelType(act.type)
    setDraft(d)
    setEditIdx(i)
    setAdding(true)
  }

  const save = () => {
    const serialized = serializeAct(draft)
    if (!serialized.prompt) return
    if (editIdx !== null) {
      const newActs = [...acts]
      newActs[editIdx] = { ...serialized, id: acts[editIdx].id }
      onChange(newActs)
    } else {
      onChange([...acts, serialized])
    }
    setAdding(false)
    setEditIdx(null)
  }

  const del = (i) => onChange(acts.filter((_, j) => j !== i))
  const move = (i, dir) => {
    const a = [...acts]
    const j = i + dir
    if (j < 0 || j >= a.length) return
    ;[a[i], a[j]] = [a[j], a[i]]
    onChange(a)
  }

  return (
    <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px dashed ${B.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <p style={{ ...pp(600, 11), color: B.marrom }}>🎯 {lang === 'pt' ? `Atividades (${acts.length})` : `Activities (${acts.length})`}</p>
      </div>

      {acts.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 8 }}>
          {acts.map((act, i) => {
            const info = TYPES.find(t => t.id === act.type)
            return (
              <div key={act.id || i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: B.cream, borderRadius: 8, padding: '7px 10px', border: `1px solid ${B.border}` }}>
                <span style={{ fontSize: 14 }}>{info?.icon}</span>
                <p style={{ ...ir(600, 11), color: B.dark, flex: 1 }}>{act.prompt}</p>
                <button onClick={() => move(i, -1)} disabled={i === 0}
                  style={{ background: 'none', border: 'none', cursor: i === 0 ? 'default' : 'pointer', color: B.light, fontSize: 13, padding: '2px 4px', opacity: i === 0 ? 0.3 : 1 }}>↑</button>
                <button onClick={() => move(i, 1)} disabled={i === acts.length - 1}
                  style={{ background: 'none', border: 'none', cursor: i === acts.length - 1 ? 'default' : 'pointer', color: B.light, fontSize: 13, padding: '2px 4px', opacity: i === acts.length - 1 ? 0.3 : 1 }}>↓</button>
                <button onClick={() => startEdit(i)}
                  style={{ background: B.bege, border: 'none', borderRadius: 5, padding: '4px 7px', cursor: 'pointer' }}>
                  <Icon name="edit" size={11} color={B.mid} />
                </button>
                <button onClick={() => del(i)}
                  style={{ background: '#FEE2E2', border: 'none', borderRadius: 5, padding: '4px 7px', cursor: 'pointer' }}>
                  <Icon name="delete" size={11} color="#DC2626" />
                </button>
              </div>
            )
          })}
        </div>
      )}

      {!adding && (
        <div>
          <p style={{ ...ir(400, 10), color: B.light, marginBottom: 6 }}>{lang === 'pt' ? 'Adicionar atividade:' : 'Add activity:'}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {TYPES.map(type => (
              <button key={type.id} onClick={() => startAdd(type.id)}
                style={{ padding: '5px 10px', borderRadius: 20, border: `1.5px solid ${B.border}`, background: '#fff', cursor: 'pointer', fontSize: 11, fontFamily: 'Poppins,sans-serif', fontWeight: 600, color: B.mid, display: 'flex', alignItems: 'center', gap: 4 }}>
                {type.icon} {lang === 'pt' ? type.pt : type.en}
              </button>
            ))}
          </div>
        </div>
      )}

      {adding && (
        <div style={{ background: B.cream, borderRadius: 10, padding: 14, border: `1.5px solid ${B.laranja}44` }}>
          <p style={{ ...pp(700, 12), color: B.marrom, marginBottom: 10 }}>
            {TYPES.find(t => t.id === selType)?.icon} {lang === 'pt' ? TYPES.find(t => t.id === selType)?.pt : TYPES.find(t => t.id === selType)?.en}
          </p>
          <ActForm draft={draft} setDraft={setDraft} lang={lang} />
          <div style={{ display: 'flex', gap: 7, marginTop: 12 }}>
            <button onClick={save}
              style={{ ...S.btn(B.oliva), fontSize: 11, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="check" size={13} color="#fff" />
              {lang === 'pt' ? (editIdx !== null ? 'Atualizar' : 'Salvar') : (editIdx !== null ? 'Update' : 'Save')}
            </button>
            <button onClick={() => { setAdding(false); setEditIdx(null) }}
              style={{ ...S.btn(B.light), fontSize: 11, padding: '8px 14px' }}>
              {lang === 'pt' ? 'Cancelar' : 'Cancel'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
