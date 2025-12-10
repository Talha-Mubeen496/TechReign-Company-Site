import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  serviceSlug: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, serviceSlug }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/service/${serviceSlug}`)
  }

  return (
    <motion.article
      variants={fadeInUp}
      onClick={handleClick}
      whileHover={{ 
        y: -4, 
        scale: 1.01,
      }}
      whileTap={{ scale: 0.98 }}
      className="service-card group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-white/14 via-white/4 to-transparent p-card shadow-floating ring-1 ring-white/5 h-full flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-label={`Learn more about ${title}`}
      style={{ 
        willChange: 'transform', 
        isolation: 'isolate',
      }}
    >
      <motion.div 
        className="pointer-events-none absolute inset-0 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute -right-6 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-accent-blue/50 to-accent-violet/40 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-gradient-to-br from-accent-teal/40 to-accent-blue/30 blur-3xl" />
      </motion.div>
      <motion.div 
        className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft mb-4"
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon}
      </motion.div>
      <div className="relative space-y-2 flex-1">
        <h3 className="text-lg font-semibold text-white group-hover:text-accent-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/80 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
      <motion.div 
        className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent-teal"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        Learn more
        <motion.span
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.article>
  )
}



