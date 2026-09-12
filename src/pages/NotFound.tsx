import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'
import { Seo } from '../seo/Seo'

const suggestions = [
  { label: 'Our services', to: '/#services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact us', to: '/contact' },
]

/**
 * Catch-all for URLs that match no route.
 *
 * Previously these rendered an empty page: App had no `path="*"`, so React
 * matched nothing and painted a bare document with no header, footer or way
 * back. <Seo> returns noindex for any path missing from the route manifest, so
 * a mistyped or stale URL cannot be indexed as thin content.
 */
export const NotFound: React.FC = () => {
  const location = useLocation()

  return (
    <>
      <Seo path={location.pathname} />
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
        <Header />
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          <section className="section-padding">
            <div className="container-max text-center">
              <p className="heading-label mb-3">Error 404</p>
              <h1 className="primary-heading mb-4">This page doesn&apos;t exist</h1>
              <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                The link may be out of date, or the address mistyped. Everything below is
                still where you left it.
              </p>

              <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-magenta px-6 py-3 text-sm font-semibold text-white no-underline shadow-soft transition hover:brightness-110"
                >
                  Back to home
                </Link>
                {suggestions.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-text-secondary no-underline transition hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
