import React, { useState } from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const usefulLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

// Sitewide links into the service pages. Without these the service routes are
// reachable only from the sitemap, which gets them crawled but not ranked.
const serviceLinks = [
  { label: 'Web Development', slug: 'web-development' },
  { label: 'SEO', slug: 'seo' },
  { label: 'Graphics and 3D Designing', slug: 'graphics-3d-designing' },
  { label: 'Video Editing', slug: 'video-editing' },
  { label: 'Social Media Handling', slug: 'social-media-handling' },
  { label: 'Web3', slug: 'web-3' },
  { label: 'SchoolAims', slug: 'school-management' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585578450592', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/techreign_/', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/techreign', Icon: Linkedin },
]

export const Footer: React.FC = () => {
  const [logoFailed, setLogoFailed] = useState(false)

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
                {logoFailed ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-sm font-semibold text-white shadow-soft">
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
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/60"
                  aria-label={`TechReign on ${label}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Useful Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-white/65 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Our Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/service/${service.slug}`}
                    className="text-white/65 transition hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">
              <Link to="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
            </h4>
            <div className="mt-3 space-y-1 text-sm text-white/70">
              <p className="mt-2">
                <span className="font-semibold text-white">Phone:</span>{' '}
                <a href="tel:+923209105983" className="transition hover:text-white">
                  +92-320-9105983
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:info@tech-reign.com" className="transition hover:text-white">
                  info@tech-reign.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-primary-navy/80">
        <div className="container-max relative z-10 flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/65 md:flex-row">
          <p>© {new Date().getFullYear()} TechReign Digital Studio. All Rights Reserved.</p>
          <p>
            Designed and Developed by <span className="font-semibold text-white">TechReign - Digital Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
