import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Eye, Award } from 'lucide-react'

interface ProjectCardProps {
  title: string
  tag: string
  year: string
  slug: string
  category: string
}

// Original project data structure with optimizations
const PROJECT_DATA = {
  'Graphics and 3D': {
    images: ['/thumbnail/brand1.webp', '/thumbnail/graph1.avif', '/thumbnail/graph2.avif'],
    description: 'Brand identity and 3D visualization for tech startup',
    metrics: [],
    technologies: [],
    client: 'TechVentures Inc.',
    status: 'completed' as const
  },
  'Web Development': {
    images: ['/thumbnail/web1.webp', '/thumbnail/web2.webp'],
    description: 'Modern web application with advanced features and responsive design',
    metrics: [],
    technologies: [],
    client: 'ShopSphere',
    status: 'completed' as const
  },
  'Branding': {
    images: ['/thumbnail/brand2.webp', '/thumbnail/brand1.webp'],
    description: 'Complete brand redesign and digital strategy',
    metrics: [],
    technologies: [],
    client: 'Luxe Fashion',
    status: 'completed' as const
  },
  'Web3': {
    images: ['/thumbnail/web3_1.webp', '/thumbnail/web3_2.webp', '/thumbnail/web3_3.jpg'],
    description: 'DeFi platform with smart contracts and NFT marketplace',
    metrics: [],
    technologies: [],
    client: 'DeFiHub',
    status: 'ongoing' as const
  }
} as const

type ProjectCategory = keyof typeof PROJECT_DATA

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, tag, year, slug, category }) => {
  const navigate = useNavigate()
  const project = PROJECT_DATA[category as ProjectCategory]
  
  // State for image cycling
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  
  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images.length
      )
    }, 3000)
    
    return () => clearInterval(interval)
  }, [category, project.images.length])
  
  // Memoized click handler
  const handleClick = useCallback(() => {
    navigate(`/portfolio/${slug}`)
  }, [navigate, slug])
  
  // Memoized keydown handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }, [handleClick])
  
  // Memoized image indicators
  const imageIndicators = useMemo(() => 
    project.images.map((_, index) => (
      <motion.div
        key={index}
        className="w-2 h-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/30"
        animate={{
          scale: currentImageIndex === index ? [1.2, 0.8, 1.2, 0.8] : [1, 1, 1, 1],
          backgroundColor: currentImageIndex === index ? '#26d0ce' : 'rgba(255,255,255,0.3)'
        }}
        transition={{ duration: 0.3 }}
      />
    )), [project.images, currentImageIndex])

  return (
    <motion.article
      whileHover={{ y: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur"
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View ${title} project details`}
      style={{ willChange: 'transform', isolation: 'isolate' }}
    >
      {/* Project Image Section with Cycling */}
      <div className="relative h-56 overflow-hidden">
        {/* Images with crossfade animation */}
        <AnimatePresence mode="wait">
          {project.images.map((image, index) => (
            <motion.img
              key={image}
              src={image} 
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.05
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
          ))}
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imageIndicators}
        </div>
        
        {/* Floating Content */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-between p-4 text-white"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {/* Top Tags */}
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center gap-2">
              <motion.span 
                className="rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.18em] border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
              {project.status === 'ongoing' && (
                <motion.span 
                  className="rounded-full bg-accent-teal/20 backdrop-blur-sm px-2 py-1 text-[10px] text-accent-teal border border-accent-teal/30"
                  whileHover={{ scale: 1.05 }}
                >
                  ● Ongoing
                </motion.span>
              )}
            </motion.div>
            <span className="rounded-full bg-white/10 backdrop-blur-sm px-2 py-1 text-xs">{year}</span>
          </div>
          
          {/* Bottom Title */}
          <div>
            <p className="text-xs text-white/70 group-hover:text-white transition-colors duration-300">
              {project.client}
            </p>
            <h3 className="mt-1 text-lg font-semibold group-hover:text-accent-teal transition-colors duration-300">
              {title}
            </h3>
          </div>
        </motion.div>
        
        {/* Quick Actions Overlay */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
        >
          <div className="flex gap-2">
            <motion.button
              className="rounded-full bg-black/60 backdrop-blur-sm p-2 border border-white/20"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={14} />
            </motion.button>
            <motion.button
              className="rounded-full bg-black/60 backdrop-blur-sm p-2 border border-white/20"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={14} />
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Description */}
        <p className="text-sm text-white/70 mb-3 line-clamp-2">
          {project.description}
        </p>
        
        {/* Footer */}
        <motion.div 
          className="flex items-center justify-between pt-3 border-t border-white/10"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Award size={12} className="text-accent-teal" />
            <p className="text-xs text-white/60">
              Premium Quality Work
            </p>
          </div>
          <motion.span 
            className="text-[11px] font-semibold text-accent-blue flex items-center gap-1"
            whileHover={{ x: 4, color: '#26d0ce' }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            View case study
            <span>→</span>
          </motion.span>
        </motion.div>
      </div>
    </motion.article>
  )
}



