export const AVATARS = [
  'Lily','Felix','Zoe','Leo','Mia','Finn','Aria','Kai',
  'Nova','Eli','Luna','Ash','Iris','Jax','Cleo','Rio',
  'Sage','Orion','Eden','Reef','Sky','Oak','Ember','Wave',
  'Star','Dune','Bay','Sol','Bloom','Remy','Scarlett'
]

// Customization options for the avatar builder (DiceBear "adventurer" style)
export const AVATAR_OPTIONS = {
  skinColor:       ['f2d3b1','ecad80','ffdbb4','e5a073','9e5622','763900','614335'],
  hair:            [
    'short01','short02','short03','short04','short05','short06','short07','short08','short09','short10',
    'short11','short12','short13','short14','short15','short16','short17','short18','short19',
    'long01','long02','long03','long04','long05','long06','long07','long08','long09','long10','long11','long12','long13',
    'long14','long15','long16','long17','long18','long19','long20','long21','long22','long23','long24','long25','long26',
  ],
  hairColor:       ['0e0e0e','3a2317','562306','6a4e35','ac6511','cb6820','e5d7a3','b55239','afafaf','dba3be'],
  eyes:            ['variant01','variant04','variant07','variant09','variant12','variant16','variant21','variant26'],
  eyebrows:        ['variant01','variant05','variant08','variant10','variant12','variant15'],
  mouth:           ['variant01','variant05','variant10','variant15','variant19','variant22','variant26','variant30'],
  glasses:         ['none','variant01','variant02','variant03','variant04','variant05'],
  backgroundColor: ['b6e3f4','c0aede','d1d4f9','ffd5dc','ffdfbf','d8f5c8','ffeaa7','f5c6e8'],
}

export const DEFAULT_AVATAR_CONFIG = {
  seed: 'me',
  skinColor: 'ecad80',
  hair: 'short01',
  hairColor: '6a4e35',
  eyes: 'variant01',
  eyebrows: 'variant01',
  mouth: 'variant05',
  glasses: 'none',
  backgroundColor: 'b6e3f4',
}

// Builds a DiceBear URL. Accepts either a legacy seed string OR a config object.
export function avatarUrl(value) {
  // Legacy: plain seed string
  if (!value || typeof value === 'string') {
    const seed = value || 'Lily'
    return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf${seed === 'Scarlett' ? '&hair=long19,long20&hairColor=b55239' : ''}`
  }
  // Custom config object
  const o = { ...DEFAULT_AVATAR_CONFIG, ...value }
  const p = new URLSearchParams()
  p.set('seed', o.seed || 'me')
  p.set('skinColor', o.skinColor)
  p.set('hair', o.hair)
  p.set('hairColor', o.hairColor)
  p.set('eyes', o.eyes)
  p.set('eyebrows', o.eyebrows)
  p.set('mouth', o.mouth)
  p.set('backgroundColor', o.backgroundColor)
  if (o.glasses && o.glasses !== 'none') {
    p.set('glasses', o.glasses)
    p.set('glassesProbability', '100')
  } else {
    p.set('glassesProbability', '0')
  }
  return `https://api.dicebear.com/7.x/adventurer/svg?${p.toString()}`
}

// A random avatar config (used for the "shuffle" button)
export function randomAvatarConfig() {
  const pick = arr => arr[Math.floor(Math.random() * arr.length)]
  return {
    seed: Math.random().toString(36).slice(2, 8),
    skinColor: pick(AVATAR_OPTIONS.skinColor),
    hair: pick(AVATAR_OPTIONS.hair),
    hairColor: pick(AVATAR_OPTIONS.hairColor),
    eyes: pick(AVATAR_OPTIONS.eyes),
    eyebrows: pick(AVATAR_OPTIONS.eyebrows),
    mouth: pick(AVATAR_OPTIONS.mouth),
    glasses: pick(AVATAR_OPTIONS.glasses),
    backgroundColor: pick(AVATAR_OPTIONS.backgroundColor),
  }
}
