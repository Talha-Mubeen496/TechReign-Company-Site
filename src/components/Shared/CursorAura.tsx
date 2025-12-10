import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export const CursorAura: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const outlineRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    // Initialize at center - viewport coordinates ONLY
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let outlineX = mouseX
    let outlineY = mouseY
    let rafId: number | null = null
    let isAnimating = false
    let lastMouseX = mouseX
    let lastMouseY = mouseY

    // Update cursor - using ONLY viewport coordinates (scroll-independent)
    const updateCursor = () => {
      // Check if mouse has actually moved (reduce unnecessary updates)
      const hasMoved = Math.abs(mouseX - lastMouseX) > 0.1 || Math.abs(mouseY - lastMouseY) > 0.1
      
      if (!hasMoved && Math.abs(outlineX - mouseX) < 0.5 && Math.abs(outlineY - mouseY) < 0.5) {
        // Mouse stopped moving and outline caught up - stop animation
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
        isAnimating = false
        return
      }

      lastMouseX = mouseX
      lastMouseY = mouseY

      // Smooth interpolation for outline
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12

      // Set position using viewport coordinates - NEVER use scrollY or pageY
      // clientX/clientY are viewport-relative and scroll-independent
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      
      outline.style.left = `${outlineX}px`
      outline.style.top = `${outlineY}px`

      // Continue animation if needed
      if (isAnimating) {
        rafId = requestAnimationFrame(updateCursor)
      }
    }

    // Track mouse - ONLY use viewport coordinates
    const handleMouseMove = (e: MouseEvent) => {
      // IMPORTANT: clientX/Y are viewport coordinates - scroll-independent
      // NEVER use pageX/pageY (which include scroll offset)
      mouseX = e.clientX
      mouseY = e.clientY

      // Start animation if not already running
      if (!isAnimating) {
        isAnimating = true
        rafId = requestAnimationFrame(updateCursor)
      }
    }

    // Listen on window with capture to catch all events
    window.addEventListener('mousemove', handleMouseMove, { passive: true, capture: true })

    // Initial position
    updateCursor()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove, { capture: true })
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [mounted])

  if (!mounted) return null

  const cursorContent = (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-dot-outline" aria-hidden="true" />
    </>
  )

  // Portal to body - ensures it's outside any container
  return createPortal(cursorContent, document.body)
}
