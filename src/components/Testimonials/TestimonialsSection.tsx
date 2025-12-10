import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    name: 'Alex Carter',
    role: 'Founder',
    company: 'Northline Commerce',
    quote:
      'TechReign moved us from idea to launch with a clarity and pace I’ve never seen before. The site is fast, beautiful, and genuinely drives revenue.',
  },
  {
    name: 'Priya Desai',
    role: 'VP of Product',
    company: 'Brightwave Labs',
    quote:
      'Their team feels like an extension of ours—thoughtful in strategy, sharp in design, and meticulous in implementation.',
  },
  {
    name: 'Daniel Kim',
    role: 'Marketing Director',
    company: 'Aurora Health',
    quote:
      'From SEO to UX, everything they shipped was grounded in data and empathy. We saw a meaningful lift in qualified leads within weeks.',
  },
] as const

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding section-sheen">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="heading-label mb-3">Testimonials</p>
          <h2 className="secondary-heading">What They Say</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Don't just take our word for it. Hear from teams who trusted TechReign with their most 
            important launches. From startups to established businesses, we've helped transform ideas 
            into powerful digital experiences that drive real results.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



