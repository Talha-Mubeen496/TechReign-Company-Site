// Different page transition presets you can use

export const transitionPresets = {
  // Simple fade (current)
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
  },

  // Fade with slide
  slideFade: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  },

  // Scale fade
  scaleFade: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.04 },
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  },

  // Vertical slide
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }
  },

  // Blur fade (premium feel)
  blurFade: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(10px)' },
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },

  // 3D flip (dynamic)
  flip: {
    initial: { opacity: 0, rotateY: -15, perspective: 1000 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 15 },
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
  },

  // Smooth reveal
  reveal: {
    initial: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    animate: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
    exit: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  }
}

