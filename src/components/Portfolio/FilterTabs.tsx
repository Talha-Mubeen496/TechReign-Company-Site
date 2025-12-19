import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabs = ['All Work', 'Graphics and 3D', 'Web Development', 'Branding', 'Web3'] as const
export type PortfolioFilter = (typeof tabs)[number]

// Map category names to slugs
const categorySlugMap: Record<string, string> = {
  'Graphics and 3D': 'logo-design',
  'Web Development': 'web-development',
  'Branding': 'branding',
  'Web3': 'web3',
}

interface FilterTabsProps {
  active: PortfolioFilter
  onChange: (value: PortfolioFilter) => void
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ active, onChange }) => {
  const navigate = useNavigate()

  const handleTabClick = (tab: PortfolioFilter) => {
    onChange(tab)
    // If it's a category (not "All Work"), navigate to that category page
    if (tab !== 'All Work' && categorySlugMap[tab]) {
      navigate(`/portfolio/${categorySlugMap[tab]}`)
    }
  }

  return (
    <div className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 p-1 text-xs shadow-soft backdrop-blur">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className="relative rounded-full px-3.5 py-1.5 text-[11px] font-medium text-text-secondary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          {active === tab && (
            <motion.span
              layoutId="portfolio-tab"
              className="absolute inset-0 rounded-full bg-white/20"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active === tab ? 'text-text-primary' : ''}`}>{tab}</span>
        </button>
      ))}
    </div>
  )
}



