import { useEffect, useState } from 'react'

export function useIsMobile() {
  // check if device screen is mobile and DeviceOrientationAccessible is accessable in windows
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
    const isDeviceOrientationAccessible = 'DeviceOrientationEvent' in window

    setIsMobile(isMobileDevice && isDeviceOrientationAccessible)
  }, [])

  return isMobile
}
