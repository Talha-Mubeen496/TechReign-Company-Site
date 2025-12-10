import React from 'react'
import { Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { floatingAnimation, slideInRight } from '../../utils/animations'

export const AwardBadge: React.FC = () => {
  return (
    <motion.div
      className="absolute -bottom-6 right-4 flex max-w-xs items-center gap-3 rounded-3xl border border-white/15 bg-gradient-to-r from-[#ffffff] via-[#EEF3FF] to-[#CFE3FF] px-5 py-3 text-primary-dark shadow-floating"
      variants={slideInRight}
      animate={floatingAnimation}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5F6CFF] to-[#C65CF5] text-white shadow-soft">
        <Trophy size={20} />
      </div>
      <div className="py-2 pr-2">
        <p className="text-xs font-semibold tracking-wide text-primary-dark">Award Winning</p>
        <p className="mt-1 text-[11px] text-primary-royal/70">
          Recognized for excellence in digital innovation and product craftsmanship.
        </p>
      </div>
    </motion.div>
  )
}



