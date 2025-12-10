import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding section-sheen">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-3xl rounded-[36px] border border-white/10 bg-white/5 px-8 py-10 text-center shadow-soft backdrop-blur"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="heading-label mb-3">About</p>
          <h2 className="secondary-heading">About Us</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            We&apos;re a creative software team dedicated to building digital solutions that work.
            From web development and SEO to design, Figma, blockchain, ecommerce, and video editing
            — TechReign helps your business grow with innovation that feels effortless.
          </p>
        </motion.div>
      </div>
    </section>
  )
}



