import React, { useEffect } from 'react'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'
import { ContactSection } from '../components/Contact/ContactSection'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { Mail, PhoneCall, MapPin, Clock, Sparkles, Zap, Globe, Rocket, HelpCircle } from 'lucide-react'

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
      <Header />
      <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
        <section className="section-padding relative min-h-[70vh] flex items-center">
          {/* Cinematic animated background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-60 -left-60 h-96 w-96 rounded-full bg-gradient-to-br from-accent-blue/40 via-accent-violet/30 to-transparent blur-[180px] animate-pulse" />
            <div className="absolute top-10 right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-teal/35 via-accent-blue/25 to-transparent blur-[200px] animate-pulse" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-accent-violet/30 via-accent-magenta/20 to-transparent blur-[160px] animate-pulse" style={{ animationDelay: '1.6s' }} />
            <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-teal/25 to-accent-blue/15 blur-[140px] animate-pulse" style={{ animationDelay: '2.4s' }} />
            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-teal/60 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent-violet/60 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-accent-blue/60 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }} />
          </div>

          <div className="container-max relative z-10">
            <motion.div
              className="mx-auto max-w-5xl text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center gap-3 mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-accent-teal drop-shadow-[0_0_12px_rgba(95,108,255,0.8)]" size={24} />
                <p className="heading-letter text-accent-teal drop-shadow-[0_0_8px_rgba(95,108,255,0.6)]">Start the Conversation</p>
                <Sparkles className="text-accent-teal drop-shadow-[0_0_12px_rgba(95,108,255,0.8)]" size={24} />
              </motion.div>
              <h1 className="primary-heading mb-6">
                <span className="block bg-gradient-to-r from-white via-accent-teal to-accent-blue bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(95,108,255,0.4)]">
                  Let’s create something
                </span>
                <span className="block bg-gradient-to-r from-accent-violet via-accent-magenta to-accent-blue bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(198,92,245,0.4)]" style={{ animationDelay: '0.5s' }}>
                  remarkable together
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl max-w-3xl mx-auto">
                Whether it’s a bold idea, a complex challenge, or the next big thing—your vision deserves a team that truly gets it.
                Reach out today and we’ll map out a clear path to launch, usually within 24 hours.
              </p>
              <motion.div 
                className="mt-8 flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-accent-teal/60 to-transparent w-24" />
                <span className="text-sm font-medium text-accent-teal uppercase tracking-[0.3em] drop-shadow-[0_0_8px_rgba(95,108,255,0.6)]">We respond every day</span>
                <div className="h-px bg-gradient-to-r from-transparent via-accent-teal/60 to-transparent w-24" />
              </motion.div>
              <motion.div
                className="mt-10 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-teal/20 to-accent-blue/20 border border-accent-teal/40 backdrop-blur-sm"
                >
                  <Zap className="text-accent-teal" size={18} />
                  <span className="text-accent-teal font-medium">Lightning Fast</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-violet/20 to-accent-magenta/20 border border-accent-violet/40 backdrop-blur-sm"
                >
                  <Rocket className="text-accent-violet" size={18} />
                  <span className="text-accent-violet font-medium">Proven Experts</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-teal/20 border border-accent-blue/40 backdrop-blur-sm"
                >
                  <Globe className="text-accent-blue" size={18} />
                  <span className="text-accent-blue font-medium">Worldwide Ready</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden glass-card p-6 md:p-7 flex items-start gap-4 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 group-hover:text-accent-teal transition-colors duration-300">
                    Email Us
                  </p>
                  <p className="mt-1 text-sm font-medium text-white break-all">
                    info@tech-reign.com
                  </p>
                  <p className="mt-2 text-xs text-white/50 group-hover:text-accent-teal/70 transition-colors duration-300">
                    Direct line to our founders
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden glass-card p-6 md:p-7 flex items-start gap-4 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 via-transparent to-accent-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <PhoneCall size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 group-hover:text-accent-violet transition-colors duration-300">
                    Schedule a Call
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Book a complimentary 30-min strategy session
                  </p>
                  <p className="mt-2 text-xs text-white/50 group-hover:text-accent-violet/70 transition-colors duration-300">
                    No strings attached
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden glass-card p-6 md:p-7 flex items-start gap-4 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 group-hover:text-accent-teal transition-colors duration-300">
                    Where We Work
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Remote-first, timezone-flexible
                  </p>
                  <p className="mt-2 text-xs text-white/50 group-hover:text-accent-teal/70 transition-colors duration-300">
                    Serving 15+ countries
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden glass-card p-6 md:p-7 flex items-start gap-4 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 via-transparent to-accent-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Clock size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 group-hover:text-accent-violet transition-colors duration-300">
                    Always On
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Within 24 hours (Mon–Sun)
                  </p>
                  <p className="mt-2 text-xs text-white/50 group-hover:text-accent-violet/70 transition-colors duration-300">
                    Even on holidays
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section with parallax */}
        <section className="section-padding relative overflow-hidden">
          {/* Subtle parallax background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-accent-teal/10 to-accent-blue/5 blur-[120px] animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-accent-violet/10 to-accent-magenta/5 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container-max relative z-10">
            <motion.div
              className="mx-auto max-w-4xl text-center mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="heading-label mb-3">FAQ</p>
              <h2 className="secondary-heading">Everything You Need to Know</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                Clear answers about our services, process, pricing, and how we bring your vision to life.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-teal transition-colors duration-300">What services do you offer?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      We’re a full-service digital studio specializing in <span className="text-accent-teal font-medium">web development</span>, <span className="text-accent-violet font-medium">SEO</span>, <span className="text-accent-blue font-medium">graphics & 3D design</span>, <span className="text-accent-teal font-medium">video editing</span>, <span className="text-accent-violet font-medium">social media management</span>, and <span className="text-accent-blue font-medium">Web3 solutions</span>. Every project is custom-tailored to your industry, goals, and technical requirements.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-violet transition-colors duration-300">How long does a typical project take?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      Timelines vary by complexity: <span className="text-accent-teal font-medium">simple websites (4–8 weeks)</span>, <span className="text-accent-violet font-medium">complex platforms (12–24 weeks)</span>, and <span className="text-accent-blue font-medium">design projects (1–4 weeks)</span>. We provide detailed project roadmaps during our initial strategy call and keep you updated at every milestone.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-teal transition-colors duration-300">What’s your pricing structure?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      We offer <span className="text-accent-teal font-medium">fixed-price packages</span> for standard services and <span className="text-accent-violet font-medium">custom quotes</span> for complex projects. Pricing depends on scope, timeline, and specific requirements. We believe in transparent pricing—no hidden fees, ever. Contact us for a detailed proposal tailored to your needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-violet transition-colors duration-300">Do you work with international clients?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      Absolutely. We’re a <span className="text-accent-teal font-medium">remote-first studio</span> proudly serving clients across <span className="text-accent-violet font-medium">15+ countries</span>. We’re experienced in working across time zones and provide flexible communication channels including Slack, Zoom, and email to ensure smooth collaboration.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-teal/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(95,108,255,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-teal to-accent-blue text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-teal transition-colors duration-300">What happens after I reach out?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      We’ll respond <span className="text-accent-teal font-medium">within 24 hours</span> to schedule a complimentary 30-minute strategy call. We’ll discuss your goals, scope, and timeline, then provide a detailed proposal with clear next steps. No pressure, just clarity—whether we work together or not, you’ll leave with actionable insights.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass-card p-7 md:p-9 border border-white/10 hover:border-accent-violet/30 shadow-[0_20px_60px_rgba(4,7,18,0.35)] hover:shadow-[0_25px_80px_rgba(198,92,245,0.25)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet text-white shadow-soft flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-violet transition-colors duration-300">Do you offer ongoing support?</h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      Yes. We provide <span className="text-accent-teal font-medium">3–6 months of complimentary support</span> with all projects, plus optional <span className="text-accent-violet font-medium">retainer packages</span> for ongoing maintenance, updates, and strategy. We’re committed to your long-term success, not just the launch.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
