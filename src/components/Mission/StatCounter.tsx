import React from 'react'
import { useCountUp } from '../../hooks/useCountUp'

interface StatCounterProps {
  label: string
  end: number
}

export const StatCounter: React.FC<StatCounterProps> = ({ label, end }) => {
  const { value, ref } = useCountUp({ end, triggerOnce: true, startOnMount: false })
  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-soft">
      <div className="text-xl font-semibold text-text-primary md:text-2xl">{value}</div>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-text-secondary">{label}</p>
    </div>
  )
}



