import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

// Trustpilot configuration - UPDATE THESE VALUES
const TRUSTPILOT_CONFIG = {
  rating: 4.5, // Your current rating
  reviews: 3, // Your total reviews
  url: 'https://nz.trustpilot.com/review/tech-reign.com' // Your Trustpilot URL
}

export const TrustpilotBadge: React.FC = () => {
  const renderStars = () => {
    const fullStars = Math.floor(TRUSTPILOT_CONFIG.rating)
    const hasHalfStar = TRUSTPILOT_CONFIG.rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span 
            key={i} 
            className="text-green-500 inline-block"
          >
            ★
          </span>
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span 
            key={i} 
            className="text-green-500 inline-block"
          >
            ★
          </span>
        )
      } else {
        stars.push(
          <span 
            key={i} 
            className="text-green-500/30 inline-block"
          >
            ★
          </span>
        )
      }
    }
    return stars
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 text-xs md:text-sm"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href={TRUSTPILOT_CONFIG.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 md:gap-2.5 text-white no-underline"
      >
        <div className="flex items-center text-xs md:text-sm">
          <span className="mr-1 text-green-500 text-base md:text-lg">
            ★
          </span>
          <span className="mr-1.5 md:mr-2 text-xs md:text-sm font-medium text-white/90">
            Trustpilot
          </span>
          <div className="flex items-center">
            {renderStars()}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-semibold text-white">
            {TRUSTPILOT_CONFIG.rating}
          </span>
          <span className="text-[9px] md:text-[10px] text-white/70">
            {TRUSTPILOT_CONFIG.reviews} reviews
          </span>
        </div>
        <div className="ml-1 rounded-full bg-white/10 p-0.5 md:p-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/70 transition-colors group-hover:text-white"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
    </motion.div>
  )
}
