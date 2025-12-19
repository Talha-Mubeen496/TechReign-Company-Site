import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { FilterTabs } from './FilterTabs'
import type { PortfolioFilter } from './FilterTabs'
import { ProjectCard } from './ProjectCard'

// One portfolio card per category
const categoryPortfolio = [
  { id: 1, title: 'Graphics and 3D', tag: 'GRAPHICS AND 3D', year: '2025', category: 'Graphics and 3D', categorySlug: 'logo-design' },
  { id: 2, title: 'Web Development', tag: 'WEB DEVELOPMENT', year: '2025', category: 'Web Development', categorySlug: 'web-development' },
  { id: 3, title: 'Branding', tag: 'BRANDING', year: '2025', category: 'Branding', categorySlug: 'branding' },
  { id: 4, title: 'Web3', tag: 'WEB3', year: '2025', category: 'Web3', categorySlug: 'web3' },
]

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<PortfolioFilter>('All Work')

  const filtered =
    filter === 'All Work' ? categoryPortfolio : categoryPortfolio.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="heading-label mb-3">Portfolio</p>
          <h2 className="secondary-heading">Check Our Portfolio</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Explore our collection of creative work across web development, branding, graphics, and 
            e-commerce and Web3 solutions. Each project represents our commitment to quality, innovation, and 
            delivering exceptional results that exceed expectations.
          </p>
          <FilterTabs
            active={filter}
            onChange={setFilter}
          />
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ isolation: 'isolate' }}
        >
          <AnimatePresence mode="wait">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                  layout: { duration: 0.4 }
                }}
                style={{ willChange: 'transform, opacity' }}
              >
              <ProjectCard
                title={project.title}
                tag={project.tag}
                year={project.year}
                slug={project.categorySlug}
              />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}


