import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    name: '- AWG -',
    role: 'Founder',
    company: "NFToria",
    quote:
      "Amazing Work of Art. They've developed NFT collection for me and minted it on Ethereum Blockchain. I'm amazed by the professionalism these guys showed and they DO DELIVER what they promise.",
    trustpilotUrl: 'https://nz.trustpilot.com/users/695cecc96148eaf77a26db3b', // Add your Trustpilot URL here
  },
  {
    name: 'Serenus Style Co',
    role: 'VP of Product',
    company: 'ChainCanvas',
    quote:
      "Amazing 3D work and Branding. I'm amazed by the team of designers that they have. I've never been more satisfied by the quality of work that they've provided. I've launched a merchandise a while ago and they're one of the first few people who have boosted the amount of sales by the quality of designs. Hats off to you guys!!!!",
    trustpilotUrl: 'https://nz.trustpilot.com/users/695ce5a6d7ccaa62338b6abf', // Add your Trustpilot URL here
  },
  {
    name: 'AbatedEmperor',
    role: 'Marketing Director',
    company: 'VoidLabs',
    quote:
      "I've been extremely satisfied with their services and i have been working with them on a project since June of 2025. So far, they have been very co-operative. I highly recommend anyone who's looking to avail any kind of digital service, this is an all-in-one platform for you. CHECK THEM OUT!",
    trustpilotUrl: 'https://nz.trustpilot.com/users/64d120224cd09d0012b96add', // Add your Trustpilot URL here
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



