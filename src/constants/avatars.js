export const AVATARS = [
  'Lily','Felix','Zoe','Leo','Mia','Finn','Aria','Kai',
  'Nova','Eli','Luna','Ash','Iris','Jax','Cleo','Rio',
  'Sage','Orion','Eden','Reef','Sky','Oak','Ember','Wave',
  'Star','Dune','Bay','Sol','Bloom','Remy','Scarlett'
]

export const avatarUrl = seed =>
  `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf${seed === 'Scarlett' ? '&hair=long19,long20&hairColor=b55239' : ''}`
