import { useEffect, useState } from 'react'

const MAX_MOBILE_SCREEN_WIDTH = 900

export const useResize = () => {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth < MAX_MOBILE_SCREEN_WIDTH)

  const handleResize = () => setIsPhone(window.innerWidth < MAX_MOBILE_SCREEN_WIDTH)

  useEffect(() => {
    // handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return { isPhone }
}
