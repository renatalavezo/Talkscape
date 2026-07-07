import { useState } from 'react'
import { B } from '../constants/colors'
import { pp, ir } from '../constants/styles'
import { avatarUrl, AVATAR_OPTIONS, DEFAULT_AVATAR_CONFIG, randomAvatarConfig } from '../constants/avatars'
import Icon from './Icon'

// Turn whatever is stored (legacy seed string or config object) into an editable config
function toConfig(value) {
  if (value && typeof value === 'object') return { ...DEFAULT_AVATAR_CONFIG, ...value }
  return { ...DEFAULT_AVATAR_CONFIG }
}

export default function AvatarBuilder({ value, onSave, lang }) {
  const [cfg, setCfg] = useState(() => toConfig(value))
  const [cat, setCat] = useState('skinColor')
  const [saved, setSaved] = useState(false)

  const CATS = [
    { key: 'skinColor',       label: lang === 'pt' ? 'Pele' : 'Skin',         type: 'color' },
    { key: 'hair',            label: lang === 'pt' ? 'Cabelo' : 'Hair',       type: 'preview' },
    { key: 'hairColor',       label: lang === 'pt' ? 'Cor do cabelo' : 'Hair color', type: 'color' },
    { key: 'eyes',            label: lang === 'pt' ? 'Olhos' : 'Eyes',        type: 'preview' },
    { key: 'eyebrows',        label: lang === 'pt' ? 'Sobrancelhas' : 'Brows', type: 'preview' },
    { key: 'mouth',           label: lang === 'pt' ? 'Boca' : 'Mouth',        type: 'preview' },
    { key: 'glasses',         label: lang === 'pt' ? 'Óculos' : 'Glasses',    type: 'preview' },
    { key: 'backgroundColor', label: lang === 'pt' ? 'Fundo' : 'Background',  type: 'color' },
  ]

  const activeCat = CATS.find(c => c.key === cat)
  const set = (key, val) => { setCfg(c => ({ ...c, [key]: val })); setSaved(false) }

  return (
    <div>
      {/* Live preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <div style={{ position: 'relative' }}>
          <img src={avatarUrl(cfg)} width={104} height={104} alt=""
            style={{ borderRadius: '50%', background: '#f0ebe4', border: `3px solid ${B.laranja}`, display: 'block' }} />
          <button onClick={() => { setCfg(randomAvatarConfig()); setSaved(false) }}
            title={lang === 'pt' ? 'Sortear' : 'Shuffle'}
            style={{ position: 'absolute', bottom: -2, right: -2, width: 34, height: 34, borderRadius: '50%', background: B.marrom, border: '2px solid #fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="refresh" size={15} color="#fff" />
          </button>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14, justifyContent: 'center' }}>
        {CATS.map(c => (
          <button key={c.key} onClick={() => setCat(c.key)}
            style={{ padding: '6px 12px', borderRadius: 20, border: 'none', cursor: 'pointer', fontFamily: 'Poppins,sans-serif', fontSize: 11.5, fontWeight: 700,
              background: cat === c.key ? B.laranja : B.bege, color: cat === c.key ? '#fff' : B.mid }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Options for active category */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(56px, 1fr))', gap: 10, marginBottom: 18 }}>
        {AVATAR_OPTIONS[cat].map(opt => {
          const selected = cfg[cat] === opt
          if (activeCat.type === 'color') {
            return (
              <button key={opt} onClick={() => set(cat, opt)}
                style={{ width: '100%', aspectRatio: '1', borderRadius: '50%', cursor: 'pointer',
                  background: `#${opt}`, border: selected ? `3px solid ${B.laranja}` : `2px solid ${B.border}`,
                  boxShadow: selected ? `0 0 0 3px ${B.laranja}33` : 'none', transition: 'all 0.12s' }} />
            )
          }
          // preview type: render a mini avatar with this option applied
          return (
            <button key={opt} onClick={() => set(cat, opt)}
              style={{ padding: 2, borderRadius: 12, cursor: 'pointer', background: selected ? B.laranja + '18' : '#fff',
                border: selected ? `2.5px solid ${B.laranja}` : `1.5px solid ${B.border}`, transition: 'all 0.12s', position: 'relative' }}>
              <img src={avatarUrl({ ...cfg, [cat]: opt })} width={48} height={48} alt=""
                style={{ borderRadius: 10, display: 'block', width: '100%', height: 'auto' }} />
              {cat === 'glasses' && opt === 'none' && (
                <span style={{ position: 'absolute', bottom: 3, left: '50%', transform: 'translateX(-50%)', fontSize: 8, fontWeight: 700, fontFamily: 'Poppins,sans-serif', color: B.mid, background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: '0 4px' }}>
                  {lang === 'pt' ? 'sem' : 'none'}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {saved && (
        <p style={{ ...ir(600, 12), color: B.oliva, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
          <Icon name="check" size={13} color={B.oliva} />{lang === 'pt' ? 'Avatar salvo!' : 'Avatar saved!'}
        </p>
      )}
      <button onClick={() => { onSave(cfg); setSaved(true) }}
        style={{ width: '100%', padding: '12px', borderRadius: 12, border: 'none', background: B.laranja, color: '#fff', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
        <Icon name="save" size={15} color="#fff" />{lang === 'pt' ? 'Salvar meu avatar' : 'Save my avatar'}
      </button>
    </div>
  )
}
