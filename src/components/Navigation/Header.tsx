import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Mission' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [logoLoaded, setLogoLoaded] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  // Try multiple logo file paths
  const logoPaths = ['/logo.png', '/logo.svg', '/logo.jpg', '/logo.webp', '/Logo.png', '/Logo.svg']
  const [currentLogoPath, setCurrentLogoPath] = useState(logoPaths[0])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      const offsets = navItems.map((item) => {
        const section = document.getElementById(item.id)
        if (!section) return { id: item.id, top: 0 }
        const rect = section.getBoundingClientRect()
        return { id: item.id, top: Math.abs(rect.top) }
      })
      const current = offsets.sort((a, b) => a.top - b.top)[0]
      if (current) setActive(current.id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    // If not on home page, navigate to home first
    if (!isHomePage) {
      navigate(`/#${id}`)
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setOpen(false)
  }
  
  // Handle hash navigation after route change
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.hash, isHomePage])

  return (
    <header className="fixed inset-x-0 top-0 z-40" style={{ boxShadow: 'none', borderBottom: 'none' }}>
      <motion.div
        className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8"
        animate={{
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
        }}
        style={{ boxShadow: 'none', border: 'none' }}
      >
        <motion.nav
          className={`flex items-center justify-between rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-2xl md:px-6`}
          style={{ boxShadow: 'none', border: 'none' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Primary"
        >
          <button
            onClick={() => {
              if (isHomePage) {
                scrollTo('hero')
              } else {
                navigate('/')
              }
            }}
            className="flex items-center gap-3 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{ boxShadow: 'none', border: 'none' }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden shrink-0" style={{ boxShadow: 'none', border: 'none' }}>
              {logoLoaded ? (
                <img 
                  src={currentLogoPath} 
                  alt="TechReign Logo" 
                  className="h-full w-full object-contain"
                />
              ) : (
                <>
                  <img 
                    src={currentLogoPath} 
                    alt="TechReign Logo" 
                    className="h-full w-full object-contain"
                    onLoad={() => setLogoLoaded(true)}
                    onError={() => {
                      const currentIndex = logoPaths.indexOf(currentLogoPath)
                      if (currentIndex < logoPaths.length - 1) {
                        setCurrentLogoPath(logoPaths[currentIndex + 1])
                      } else {
                        // Fallback to text logo
                        setLogoLoaded(false)
                      }
                    }}
                  />
                  {!logoLoaded && currentLogoPath === logoPaths[logoPaths.length - 1] && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-white text-sm font-semibold">
                      TR
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display text-sm font-semibold tracking-wide text-white">
                TechReign
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Digital Studio
              </span>
            </div>
          </button>

          {isDesktop ? (
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-4 text-xs font-medium text-white/70">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`relative px-3 py-1 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                        active === item.id ? 'text-white' : ''
                      }`}
                    >
                      {item.label}
                      {active === item.id && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-accent-blue"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary magnetic"
              >
                <span className="magnetic-inner text-xs">Get Started Today</span>
              </button>
            </div>
          ) : (
            <motion.button
              onClick={() => setOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <motion.div
                initial={false}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          )}
        </motion.nav>
      </motion.div>
      {!isDesktop && <MobileMenu open={open} onNavigate={scrollTo} activeId={active} items={navItems} />}
    </header>
  )
}



