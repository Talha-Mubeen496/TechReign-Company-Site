import React from 'react'
import { motion } from 'framer-motion'
import { Code, TrendingUp, Palette, Video, Share2, Box } from 'lucide-react'
import { ServiceCard } from './ServiceCard'
import { fadeInUp, staggerContainer } from '../../utils/animations'

const services = [
  {
    icon: <Code size={20} />,
    title: 'Web Development',
    description: 'Build high-performing websites and web applications with modern technologies, responsive design, and seamless user experiences.',
    serviceSlug: 'web-development',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'SEO',
    description: 'Boost your search engine rankings and organic visibility with data-driven SEO strategies that drive qualified traffic to your site.',
    serviceSlug: 'seo',
  },
  {
    icon: <Palette size={20} />,
    title: 'Graphics and 3D Designing',
    description: 'Create stunning visual designs, 3D models, and graphics that bring your brand to life with creativity and technical excellence.',
    serviceSlug: 'graphics-3d-designing',
  },
  {
    icon: <Video size={20} />,
    title: 'Video Editing',
    description: 'Transform raw footage into compelling video content with professional editing, motion graphics, and post-production expertise.',
    serviceSlug: 'video-editing',
  },
  {
    icon: <Share2 size={20} />,
    title: 'Social Media Handling',
    description: 'Manage and grow your social media presence with strategic content planning, engagement, and community building across all platforms.',
    serviceSlug: 'social-media-handling',
  },
  {
    icon: <Box size={20} />,
    title: 'Web 3',
    description: 'Navigate the decentralized web with blockchain solutions, smart contracts, NFT development, and Web3 integration services.',
    serviceSlug: 'web-3',
  },
]

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding section-sheen">
      <div className="container-max">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="heading-label mb-3">Services</p>
          <h2 className="secondary-heading">Comprehensive digital services for your business.</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            From web development to social media management, TechReign provides end-to-end digital
            solutions that drive growth and elevate your brand presence.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div key={service.serviceSlug} variants={fadeInUp}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                serviceSlug={service.serviceSlug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
