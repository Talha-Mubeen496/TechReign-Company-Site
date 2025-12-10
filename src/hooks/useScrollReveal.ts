import { useEffect } from 'react'
import { useAnimation, type AnimationControls } from 'framer-motion'

export const useScrollReveal = (): AnimationControls => {
  const controls = useAnimation()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const delay = entry.target.dataset.delay ? Number(entry.target.dataset.delay) : 0
            controls.start((customDelay) => ({
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: 'easeOut', delay: customDelay ?? delay },
            }))
          }
        })
      },
      {
        threshold: 0.15,
      },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [controls])

  return controls
}



