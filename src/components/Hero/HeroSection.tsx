import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, slideInRight, staggerContainer } from '../../utils/animations'
import { StatCard } from './StatCard'
import { StatsBar } from './StatsBar'

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100], { clamp: true })
  const parallaxY2 = useTransform(scrollY, [0, 500], [0, 120], { clamp: true })

  return (
    <section id="hero" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div 
          className="absolute -left-40 top-[-10%] h-72 w-72 rounded-full bg-accent-blue/10 blur-2xl"
          style={{ 
            y: parallaxY2,
            willChange: 'transform',
          }}
        />
        <motion.div 
          className="absolute right-[-10%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent-blue/15 blur-2xl"
          style={{ 
            y: parallaxY,
            willChange: 'transform',
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp}>
            <p className="heading-label mb-4">Bring Your Business Ideas to Life</p>
           <h1 className="primary-heading max-w-xl text-white">
              Digital Studio For Business{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-blue via-blue-400 to-accent-blue bg-clip-text text-transparent">
                Growth
              </span>
              <span className="absolute inset-x-0 bottom-0 h-2 translate-y-1 rounded-full bg-accent-blue/15" />
              </span>
              .
          </h1>
          {/* <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-white/60 md:text-[11px]">
  Web Development • SEO • Brand Design • 3D Experiences
</p> */}
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              TechReign is a digital experience studio that designs and builds high‑converting websites,
              search‑optimized content, and premium 3D visuals to help ambitious businesses grow online.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-primary magnetic">
                <span className="magnetic-inner text-xs md:text-sm">Get Started Today</span>
              </button>
              <button className="btn-outline text-xs md:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                Explore how we work
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-white/70 md:text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1 font-medium text-white/80">
                Web Development
              </span>
              <span>SEO & Growth Strategy</span>
              <span>Brand Design & Figma</span>
              <span>3d Experinces</span>
              <span>Brand Design & Figma</span>
              <span>Web3· Blockchain</span>
              <span>Ecommerce</span>
            </div>

            <StatsBar />
          </motion.div>

          <motion.div
            className="relative"
            variants={slideInRight}
            data-reveal
          >
            <div className="relative">
              <div className="glass-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141B32] via-[#1C2A4A] to-[#081325] shadow-floating">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(95,108,255,0.4),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(95,108,255,0.35),transparent_55%)] opacity-80" />
                <div className="relative z-10 p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                        TechReign Studio
                      </p>
                      <p className="mt-1 text-xs text-white/80">
                        Creative software team in a bright, collaborative space.
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-right">
                      <span className="text-xs font-medium text-white/80">Live session</span>
                      <span className="mt-0.5 h-1.5 w-10 rounded-full bg-gradient-to-r from-accent-blue to-blue-400" />
                    </div>
                  </div>

                  <div className="grid gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur">
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-white/85">
                      <div className="rounded-xl bg-white/5 p-2">
                        <p className="text-[9px] text-white/60">Planning</p>
                        <p className="mt-1 font-semibold">Strategy Sprint</p>
                        <p className="mt-1 text-[9px] text-white/60">3 stakeholders</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-2">
                        <p className="text-[9px] text-white/60">Design</p>
                        <p className="mt-1 font-semibold">Product Wireframes</p>
                        <p className="mt-1 text-[9px] text-white/60">Figma + Prototypes</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-2">
                        <p className="text-[9px] text-white/60">Build</p>
                        <p className="mt-1 font-semibold">MVP Launch</p>
                        <p className="mt-1 text-[9px] text-white/60">90 days</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-white/75">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full border border-neutral-white/30 bg-gradient-to-br from-blue-300 to-blue-400" />
                        <div className="h-6 w-6 rounded-full border border-neutral-white/30 bg-gradient-to-br from-blue-400 to-blue-500" />
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-white/30 bg-black/30 text-[9px]">
                          +3
                        </div>
                      </div>
                      <p>Remote-first, globally distributed collaborators.</p>
                    </div>
                  </div>
                </div>
              </div>

              <StatCard />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



