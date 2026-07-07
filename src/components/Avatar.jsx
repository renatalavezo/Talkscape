import { avatarUrl } from '../constants/avatars'

export default function Avatar({ seed, size = 40 }) {
  return (
    <img
      src={avatarUrl(seed)}
      width={size}
      height={size}
      alt=""
      style={{ borderRadius: '50%', background: '#f0ebe4', flexShrink: 0, display: 'block' }}
    />
  )
}
