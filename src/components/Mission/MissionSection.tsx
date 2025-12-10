import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, slideInLeft } from '../../utils/animations'
import { StatCounter } from './StatCounter'
import { AwardBadge } from './AwardBadge'

export const MissionSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="mission" className="section-padding">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="heading-label mb-3">Mission</p>
            <h2 className="secondary-heading max-w-xl">
              Delivering excellence with purpose and innovation.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              Our team combines passion and expertise to deliver outstanding results, turning ideas
              into meaningful outcomes that make a difference.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              We blend creativity, technology, and strategy to build solutions that drive real
              impact. From web development and design to SEO, blockchain, and ecommerce, TechReign
              turns ambitious concepts into results that matter.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCounter
                label="Years Experience"
                end={15}
              />
              <StatCounter
                label="Projects Completed"
                end={850}
              />
              <StatCounter
                label="Happy Clients"
                end={240}
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            style={{ y }}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="glass-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#151E3F] via-[#1E2C5F] to-[#070F24]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(95,108,255,0.35),transparent_50%),radial-gradient(circle_at_90%_100%,rgba(37,208,200,0.35),transparent_55%)] opacity-80" />
              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
                      Collaboration
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      A diverse team aligning around your next big launch.
                    </p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white">
                    Live workshop
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-[11px] text-white/85">
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 shadow-inner shadow-black/30">
                    <span>Discovery & Research</span>
                    <span className="rounded-full bg-gradient-to-r from-[#2FE4C7] to-[#13B8F0] px-2 py-0.5 text-[10px] font-semibold text-[#04121F]">
                      01
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 shadow-inner shadow-black/30">
                    <span>Experience & Interface Design</span>
                    <span className="rounded-full bg-gradient-to-r from-[#9E7BFF] to-[#E86BFF] px-2 py-0.5 text-[10px] font-semibold text-[#1A0A2C]">
                      02
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white/10 px-3 py-2 shadow-inner shadow-black/30">
                    <span>Engineering & Optimization</span>
                    <span className="rounded-full bg-gradient-to-r from-[#FFD86F] to-[#FF6F91] px-2 py-0.5 text-[10px] font-semibold text-[#2A0A0F]">
                      03
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <AwardBadge />
          </motion.div>
        </div>
      </div>
    </section>
  )
}



