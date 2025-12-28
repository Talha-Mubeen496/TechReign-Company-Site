import React from 'react'
import { Facebook, Instagram, Linkedin, } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

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
  }

  const usefulLinks = [
    { label: 'Home', id: 'hero', isLink: true },
    { label: 'About us', id: 'about', isLink: true },
    { label: 'Services', id: 'services', isLink: true },
    { label: 'Terms of service', id: '', isLink: false },
    { label: 'Privacy policy', id: '', isLink: false },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-[#040914] via-[#07112a] to-[#0a1737] text-text-secondary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-gradient-to-br from-accent-blue/40 to-blue-400/25 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent-blue/35 to-blue-400/25 blur-[160px]" />
      </div>
      <div className="container-max section-padding relative z-10 border-t border-white/10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden shrink-0">
                <img 
                  src="/logo.png" 
                  alt="TechReign Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) {
                      fallback.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-white text-sm font-semibold shadow-soft">
                  TR
                </div>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white">TechReign</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">
                  Digital Studio
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Creative software team building digital solutions that move brands forward.
            </p>
            <div className="mt-4 flex gap-2">
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/60"
                aria-label="Twitter link"
              >
                <Twitter size={14} />
              </a> */}
              <a
                href="https://www.facebook.com/profile.php?id=61585578450592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/60"
                aria-label="Facebook link"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.instagram.com/techreign_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/60"
                aria-label="Instagram link"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/techreign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/60"
                aria-label="LinkedIn link"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Useful Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  {item.isLink ? (
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="text-white/65 transition hover:text-white cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-white/65">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Our Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {['Web Development', 'SEO', 'Graphics and 3D Designing', 'Video Editing', 'Social Media Handling', 'Web 3'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-white/65">{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <div className="mt-3 space-y-1 text-sm text-white/70">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-2">
                <span className="font-semibold text-white">Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span> info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-primary-navy/80">
        <div className="container-max relative z-10 flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/65 md:flex-row">
          <p>© Copyright TechReign. All Rights Reserved.</p>
          <p>
            Designed by <span className="font-semibold text-white">TechReign</span>
          </p>
        </div>
      </div>
    </footer>
  )
}



