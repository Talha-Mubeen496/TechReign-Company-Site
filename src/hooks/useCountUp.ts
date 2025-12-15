import { useEffect, useState, useRef } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  startOnMount?: boolean
  triggerOnce?: boolean
}

export const useCountUp = ({ 
  end, 
  duration = 1.6, 
  startOnMount = true,
  triggerOnce = true 
}: UseCountUpOptions) => {
  const [value, setValue] = useState(startOnMount ? 0 : end)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   if (!startOnMount) return
  //   if (triggerOnce && hasAnimated) return

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
  //           setHasAnimated(true)
            
  //           let frame: number
  //           const start = performance.now()

  //           const tick = (now: number) => {
  //             const progress = Math.min((now - start) / (duration * 1000), 1)
  //             const easeOutQuart = 1 - Math.pow(1 - progress, 4)
  //             setValue(Math.floor(easeOutQuart * end))
  //             if (progress < 1) {
  //               frame = requestAnimationFrame(tick)
  //             } else {
  //               setValue(end)
  //             }
  //           }

  //           frame = requestAnimationFrame(tick)
  //         }
  //       })
  //     },
  //     { threshold: 0.3 }
  //   )

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current)
  //   }

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [duration, end, startOnMount, triggerOnce, hasAnimated])
  useEffect(() => {
  if (!startOnMount) return
  if (triggerOnce && hasAnimated) return

  let frame: number | null = null

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setHasAnimated(true)

          const start = performance.now()

          const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setValue(Math.floor(easeOutQuart * end))

            if (progress < 1) {
              frame = requestAnimationFrame(tick)
            } else {
              setValue(end)
            }
          }

          frame = requestAnimationFrame(tick)
        }
      })
    },
    { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [duration, end, startOnMount, triggerOnce, hasAnimated])

  return { value, ref: elementRef }
}



