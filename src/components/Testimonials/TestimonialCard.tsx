import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  quote: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  quote,
}) => {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-white/12 via-transparent to-white/5 p-card shadow-floating ring-1 ring-white/5 transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/24 hover:via-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-8 left-4 h-32 w-32 rounded-full bg-gradient-to-br from-accent-violet/35 to-accent-blue/30 blur-3xl" />
        <div className="absolute -bottom-6 right-4 h-28 w-28 rounded-full bg-gradient-to-br from-accent-teal/35 to-accent-blue/30 blur-3xl" />
      </div>
      <div className="relative z-10">
        <div className="mb-4 flex gap-1 text-accent-teal">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} size={14} className="fill-current" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-white/80">“{quote}”</p>
      </div>
      <div className="relative z-10 mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-teal text-white shadow-soft">
          <span className="text-[10px] font-semibold">{name.slice(0, 1)}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/70">
            {role}, {company}
          </p>
        </div>
      </div>
    </article>
  )
}



