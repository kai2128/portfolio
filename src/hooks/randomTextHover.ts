import { useEffect } from 'react'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export function useRandomTextHover<T extends HTMLElement>(elRef: React.RefObject<T>) {
  let interval: NodeJS.Timer

  function randomizeText(originalText: string) {
    let iteration = 0

    clearInterval(interval)
    interval = setInterval(() => {
      if (elRef.current?.innerText === null) {
        clearInterval(interval)
        return
      }
      elRef.current!.innerText = originalText
        ?.split('')
        .map((_, i) => {
          if (i < iteration)
            return originalText[i]
          return letters[Math.floor(Math.random() * 26)]
        }).join('')

      if (iteration >= originalText.length)
        clearInterval(interval)

      iteration += 1 / 3
    }, 50)
  }

  useEffect(() => {
    const originalText = elRef.current!.innerText
    elRef.current?.addEventListener('mouseenter', () => randomizeText(originalText))
    return () => {
      elRef.current?.removeEventListener('mouseenter', () => randomizeText(originalText))
    }
  }, [])
}
