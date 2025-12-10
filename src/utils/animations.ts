import type { Variants } from 'framer-motion'

// Optimized easing curves for smooth animations
const smoothEase = [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smoother feel
const springEase = [0.43, 0.13, 0.23, 0.96] // Spring-like animation

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.35,
      ease: smoothEase,
    } 
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.4,
      ease: smoothEase,
    } 
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 }, // Reduced distance
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: springEase,
    } 
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 }, // Reduced distance
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.5, 
      ease: springEase,
    } 
  },
}

export const floatingAnimation = {
  y: [0, -8, 0], // Reduced movement for subtlety
  transition: {
    duration: 4, // Slower for elegance
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// New optimized animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3,
      ease: springEase,
    } 
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.35,
      ease: smoothEase,
    } 
  },
}

// 3D tilt animation variant
export const tilt3D = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    }
  }
}

// Page transition variants - optimized for instant render
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: smoothEase }
}

// Page slide transition
export const pageSlide = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3, ease: smoothEase }
}

// Page fade with scale
export const pageFadeScale = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.3, ease: smoothEase }
}
