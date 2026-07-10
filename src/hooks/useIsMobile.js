import { useState, useEffect } from 'react'

// Returns true when the viewport is at or below `bp` px wide.
// Used to switch inline-styled dashboards to a stacked mobile layout.
export function useIsMobile(bp = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= bp : false
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= bp)
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [bp])
  return isMobile
}
