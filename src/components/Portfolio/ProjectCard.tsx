import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  tag: string
  year: string
  slug: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, tag, year, slug }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/portfolio/${slug}`)
  }

  return (
    <motion.article
      whileHover={{ 
        y: -8, 
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-label={`View ${title} project details`}
      style={{ 
        willChange: 'transform', 
        isolation: 'isolate',
      }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-dark via-primary-navy to-black">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(52,152,219,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(26,188,156,0.55),transparent_55%)]"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.div 
          className="relative z-10 flex h-full flex-col justify-between p-4 text-neutral-white"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex items-center justify-between text-[11px]">
            <motion.span 
              className="rounded-full bg-black/40 px-2 py-0.5 uppercase tracking-[0.18em]"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
            <span className="rounded-full bg-white/10 px-2 py-0.5">{year}</span>
          </div>
          <div>
            <p className="text-sm text-neutral-white/80 group-hover:text-neutral-white transition-colors duration-300">
              Case Study
            </p>
            <h3 className="mt-1 text-lg font-semibold group-hover:text-accent-teal transition-colors duration-300">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="flex items-center justify-between px-4 py-3 text-xs text-white/70"
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        transition={{ duration: 0.2 }}
      >
        <p className="group-hover:text-white/80 transition-colors duration-300">
          End-to-end strategy, UX, UI, and build.
        </p>
        <motion.span 
          className="text-[11px] font-semibold text-accent-blue"
          whileHover={{ x: 4, color: '#26d0ce' }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          View details →
        </motion.span>
      </motion.div>
    </motion.article>
  )
}



