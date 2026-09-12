import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'
import { useMediaQuery } from '../../hooks/useMediaQuery'

// `to` is what crawlers follow. Section links stay real URLs so the internal
// link graph is visible to search engines; the click handler below only
// intercepts them to keep the smooth-scroll behaviour on the home page.
export const navItems = [
  { id: 'hero', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'mission', label: 'Mission', to: '/#mission' },
  { id: 'services', label: 'Services', to: '/#services' },
  { id: 'portfolio', label: 'Portfolio', to: '/#portfolio' },
  { id: 'pricing', label: 'Pricing', to: '/#pricing' },
  { id: 'testimonials', label: 'Testimonials', to: '/#testimonials' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

export type NavItem = (typeof navItems)[number]

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [logoFailed, setLogoFailed] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      // Only consider sections that actually exist on this page, so the active
      // state stays correct on routes that don't render the home sections.
      const offsets = navItems
        .map((item) => {
          const section = document.getElementById(item.id)
          if (!section) return null
          return { id: item.id, top: Math.abs(section.getBoundingClientRect().top) }
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null)

      const current = offsets.sort((a, b) => a.top - b.top)[0]
      if (current) setActive(current.id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  // Let the browser follow the href unless we're already on the page that
  // holds the target section, in which case scroll smoothly instead.
  const handleNavClick = (event: React.MouseEvent, item: NavItem) => {
    setOpen(false)
    const isSectionLink = item.to === '/' || item.to.startsWith('/#')
    if (!isSectionLink || !isHomePage) return
    event.preventDefault()
    scrollToSection(item.id)
  }

  // Scroll to the section named by the hash after arriving from another route.
  useEffect(() => {
    if (!isHomePage || !location.hash) return
    const id = location.hash.slice(1)
    const frame = requestAnimationFrame(() => scrollToSection(id))
    return () => cancelAnimationFrame(frame)
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
          <Link
            to="/"
            onClick={(event) => handleNavClick(event, navItems[0])}
            aria-label="TechReign Digital Studio — home"
            className="flex items-center gap-3 rounded-full px-2 py-1 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{ boxShadow: 'none', border: 'none' }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden shrink-0" style={{ boxShadow: 'none', border: 'none' }}>
              {logoFailed ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-sm font-semibold text-white">
                  TR
                </div>
              ) : (
                <img
                  src="/logo.png"
                  alt="TechReign Digital Studio logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  onError={() => setLogoFailed(true)}
                />
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
          </Link>

          {isDesktop ? (
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-4 text-xs font-medium text-white/70">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      onClick={(event) => handleNavClick(event, item)}
                      className={`relative block px-3 py-1 no-underline transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
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
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary magnetic no-underline">
                <span className="magnetic-inner text-xs">Get Started Today</span>
              </Link>
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
      {!isDesktop && (
        <MobileMenu
          open={open}
          onClose={() => setOpen(false)}
          onNavigate={handleNavClick}
          activeId={active}
          items={navItems}
        />
      )}
    </header>
  )
}
