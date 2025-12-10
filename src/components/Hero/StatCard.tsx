import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { floatingAnimation } from '../../utils/animations'

export const StatCard: React.FC = () => {
  return (
    <motion.div
      className="pointer-events-auto glass-card absolute -bottom-6 right-6 flex max-w-xs items-center gap-3 border border-accent-blue/50 bg-white/5 px-4 py-3 shadow-floating"
      style={{ boxShadow: '0 24px 70px rgba(95, 108, 255, 0.4)' }}
      animate={floatingAnimation}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-blue/20 text-accent-blue">
        <ArrowUpRight size={18} />
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-medium tracking-[0.22em] text-text-secondary uppercase">
          Revenue Growth
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-semibold text-text-primary">+45%</span>
          <span className="text-[11px] text-text-secondary">avg. in 6 months</span>
        </div>
      </div>
    </motion.div>
  )
}



