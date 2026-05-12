import { B } from '../constants/colors'

export default function Logo({ h = 44, contrast = false }) {
  const orange = contrast ? '#FFB347' : B.laranja
  const green  = contrast ? '#AACF8A' : B.oliva
  const brown  = contrast ? '#F5D0B0' : B.marrom
  const pink   = contrast ? B.rosa    : B.rosaD
  const text1  = contrast ? '#FF8C42' : B.laranja
  const text2  = contrast ? '#fff'    : B.oliva
  const script = contrast ? B.rosa    : B.rosaD
  const w = h * (240 / 132)

  return (
    <svg width={w} height={h} viewBox="0 0 240 132" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <rect x="52" y="40" width="9"  height="30" rx="1" fill={brown}/>
      <rect x="63" y="30" width="9"  height="40" rx="1" fill={brown} opacity=".85"/>
      <rect x="74" y="36" width="8"  height="34" rx="1" fill={green} opacity=".9"/>
      <circle cx="92" cy="65" r="13" fill={orange}/>
      <ellipse cx="112" cy="78" rx="38" ry="20" fill={green}/>
      <ellipse cx="150" cy="82" rx="34" ry="17" fill={green} opacity=".8"/>
      <path d="M40 80 Q80 70 120 80 Q160 90 200 78" stroke={brown} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 86 Q80 76 120 86 Q160 96 200 84" stroke={pink}  strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M175 28 Q185 22 188 30 Q181 27 175 28Z" fill={contrast ? '#FFE9A0' : '#D4B896'}/>
      <path d="M167 48 Q172 45 177 48" stroke={pink} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M163 54 Q170 51 177 54" stroke={pink} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <text x="38"  y="112" fontFamily="Poppins,sans-serif" fontWeight="900" fontSize="28" fill={text1} letterSpacing="-0.5">TALK</text>
      <text x="102" y="112" fontFamily="Poppins,sans-serif" fontWeight="900" fontSize="28" fill={text2} letterSpacing="-0.5">SCAPE</text>
      <text x="95"  y="130" fontFamily="Dancing Script,cursive" fontWeight="700" fontSize="18" fill={script}>by Renata</text>
    </svg>
  )
}
