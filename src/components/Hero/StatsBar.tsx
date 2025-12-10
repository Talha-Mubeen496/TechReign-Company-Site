import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import { motion } from 'framer-motion'

const StatItem: React.FC<{ label: string; end: number; suffix?: string }> = ({
  label,
  end,
  suffix = '+',
}) => {
  const { value, ref } = useCountUp({ end, triggerOnce: true, startOnMount: false })
  return (
    <div ref={ref} className="flex flex-col items-start gap-1">
      <motion.div 
        className="text-xl font-semibold text-text-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        {value}
        {suffix}
      </motion.div>
      <p className="text-xs text-white/70">{label}</p>
    </div>
  )
}

export const StatsBar: React.FC = () => {
  return (
    <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur md:grid-cols-3 md:px-6 md:py-5">
      <StatItem label="Projects delivered with measurable outcomes" end={500} />
      <StatItem label="Client success rate across engagements" end={98} suffix="%" />
      <StatItem label="Years designing and shipping digital products" end={10} suffix="+" />
    </div>
  )
}



