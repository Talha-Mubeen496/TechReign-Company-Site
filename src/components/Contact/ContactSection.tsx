import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations'
import { ContactForm } from './ContactForm'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="heading-label mb-3">Contact</p>
          <h2 className="secondary-heading">Let&apos;s Connect</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Ready to bring your vision to life? We're here to listen and help. Whether you have a 
            project in mind, questions about our services, or just want to explore possibilities, 
            drop us a message. Let's start a conversation about your next big idea.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-card shadow-floating ring-1 ring-white/5 transition hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white/20"
          >
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-accent-blue/40 to-accent-violet/30 blur-[120px]" />
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-accent-teal/30 to-accent-blue/20 blur-[100px]" />
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft">
                <MessageCircle size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Let&apos;s Connect</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                We&apos;re here to discuss your vision and explore how we can bring it to life
                together. Share where you&apos;re headed—TechReign will help you get there.
              </p>
            </div>
            <button className="mt-6 inline-flex w-max items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-2 text-xs font-semibold text-white/80 shadow-soft transition hover:border-white/60 hover:text-white">
              Email Us
            </button>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-card shadow-floating ring-1 ring-white/5"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-accent-blue/40 to-accent-violet/30 blur-[140px]" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-accent-teal/30 to-accent-blue/20 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h3 className="mb-4 text-base font-semibold text-white">Send us a message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



