import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  currentPrice: string
  originalPrice?: string
  features: string[]
  popular?: boolean
}

const serviceCategories = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'seo', label: 'SEO' },
  { id: 'graphics-3d', label: 'Graphics & 3D' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'web3', label: 'Web 3' },
]

const pricingData: Record<string, PricingPlan[]> = {
  'web-development': [
    {
      name: 'Startup Website Package',
      description: 'Perfect for small businesses and startups getting started online.',
      currentPrice: '$499',
      originalPrice: '$938',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        '3 months support',
      ],
    },
    {
      name: 'Standard Website Package',
      description: 'Ideal for growing businesses with more complex needs.',
      currentPrice: '$1,299',
      originalPrice: '$1,938',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'E-commerce integration',
        'Content management',
        '6 months support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Website Package',
      description: 'Complete solution for large-scale operations and custom applications.',
      currentPrice: '$2,499',
      originalPrice: '$3,738',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Dedicated developer',
        'Priority support',
        'Advanced security',
        'Ongoing maintenance',
      ],
    },
  ],
  'seo': [
    {
      name: 'Basic SEO Package',
      description: 'Essential SEO services for small businesses.',
      currentPrice: '$299',
      originalPrice: '$598',
      features: [
        'Keyword research',
        'On-page optimization',
        'Meta tags optimization',
        'Basic analytics setup',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional SEO Package',
      description: 'Comprehensive SEO strategy for competitive markets.',
      currentPrice: '$799',
      originalPrice: '$1,498',
      features: [
        'Complete SEO audit',
        'Advanced keyword strategy',
        'Content optimization',
        'Link building',
        'Competitor analysis',
        'Monthly reporting & updates',
      ],
      popular: true,
    },
    {
      name: 'Enterprise SEO Package',
      description: 'Full-scale SEO management for large businesses.',
      currentPrice: '$1,999',
      originalPrice: '$2,998',
      features: [
        'Full SEO management',
        'Dedicated SEO specialist',
        'Content marketing',
        'Technical SEO',
        'International SEO',
        'Weekly reporting',
      ],
    },
  ],
  'graphics-3d': [
    {
      name: 'Logo Design Package',
      description: 'Professional logo design for your brand.',
      currentPrice: '$199',
      originalPrice: '$398',
      features: [
        '3 logo concepts',
        '2 revision rounds',
        'Vector files (AI, EPS)',
        'PNG & JPG formats',
        'Color variations',
      ],
    },
    {
      name: 'Brand Identity Package',
      description: 'Complete branding solution with logo and guidelines.',
      currentPrice: '$699',
      originalPrice: '$1,298',
      features: [
        'Logo design',
        'Brand guidelines',
        'Business card design',
        'Letterhead design',
        'Social media templates',
        'Unlimited revisions',
      ],
      popular: true,
    },
    {
      name: '3D Design Package',
      description: 'High-quality 3D renders and visualizations.',
      currentPrice: '$999',
      originalPrice: '$1,798',
      features: [
        '3D modeling',
        'Product visualization',
        'Multiple angles',
        'High-resolution renders',
        'Animation options',
      ],
    },
  ],
  'video-editing': [
    {
      name: 'Basic Video Package',
      description: 'Simple video editing and production.',
      currentPrice: '$399',
      originalPrice: '$798',
      features: [
        'Up to 2 minutes',
        'Basic color correction',
        'Music & sound effects',
        'Text overlays',
        'Social media formats',
      ],
    },
    {
      name: 'Professional Video Package',
      description: 'Advanced video production with high-quality editing.',
      currentPrice: '$999',
      originalPrice: '$1,798',
      features: [
        'Up to 5 minutes',
        'Advanced editing',
        'Motion graphics',
        'Voiceover recording',
        'Multiple formats',
        '2 revision rounds',
      ],
      popular: true,
    },
    {
      name: 'Premium Video Package',
      description: 'Full production with cinematic quality.',
      currentPrice: '$1,999',
      originalPrice: '$3,498',
      features: [
        'Unlimited duration',
        'Cinematic editing',
        'Custom animations',
        'Professional voiceover',
        'Color grading',
        'Unlimited revisions',
      ],
    },
  ],
  'social-media': [
    {
      name: 'Basic Social Media Package',
      description: 'Essential social media management.',
      currentPrice: '$299',
      originalPrice: '$598',
      features: [
        '2 platforms',
        '8 posts per month',
        'Content creation',
        'Basic analytics',
        'Community management',
      ],
    },
    {
      name: 'Professional Social Media Package',
      description: 'Comprehensive social media strategy and management.',
      currentPrice: '$799',
      originalPrice: '$1,498',
      features: [
        '4 platforms',
        '16 posts per month',
        'Content strategy',
        'Video content',
        'Advanced analytics',
        'Influencer outreach',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Social Media Package',
      description: 'Full-scale social media management for large brands.',
      currentPrice: '$1,999',
      originalPrice: '$3,498',
      features: [
        'All platforms',
        'Daily posting',
        'Dedicated manager',
        'Paid ad management',
        'Crisis management',
        'Custom reporting',
      ],
    },
  ],
  'web3': [
    {
      name: 'NFT Collection Package',
      description: 'Complete NFT collection design and smart contract.',
      currentPrice: '$2,999',
      originalPrice: '$4,998',
      features: [
        'NFT artwork design',
        'Smart contract development',
        'Minting website',
        'Metadata setup',
        'Community setup',
      ],
    },
    {
      name: 'Blockchain App Package',
      description: 'Custom blockchain application development.',
      currentPrice: '$9,999',
      originalPrice: '$15,998',
      features: [
        'Smart contract development',
        'DApp frontend',
        'Wallet integration',
        'Security audit',
        'Deployment & testing',
      ],
      popular: true,
    },
    {
      name: 'Enterprise Web3 Package',
      description: 'Complete Web3 solution for enterprises.',
      currentPrice: 'Custom',
      features: [
        'Custom blockchain solution',
        'Token development',
        'Full-stack DApp',
        'Security & compliance',
        'Dedicated team',
        'Ongoing support',
      ],
    },
  ],
}

export const PricingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('web-development')

  const currentPlans = pricingData[activeCategory] || pricingData['web-development']

  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="heading-label mb-3">Pricing</p>
          <h2 className="secondary-heading">Choose Your Package</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            Transparent pricing for all our services. Select a category to see available packages.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-accent-blue via-accent-violet to-accent-magenta text-white shadow-soft scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          {currentPlans && currentPlans.length > 0 && (
            <motion.div
              key={activeCategory}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={`${activeCategory}-${plan.name}-${index}`}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`group relative overflow-hidden rounded-3xl border ${
                    plan.popular
                      ? 'border-accent-blue/50 bg-gradient-to-br from-white/15 via-white/8 to-white/5 shadow-soft scale-105 lg:scale-110'
                      : 'border-white/10 bg-white/5'
                  } p-8 transition-all duration-300 hover:shadow-floating hover:-translate-y-2`}
                >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}

              <div className="relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-white/70">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">{plan.currentPrice}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="mt-1">
                      <span className="text-lg text-white/50 line-through">{plan.originalPrice}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check
                          size={18}
                          className={plan.popular ? 'text-accent-teal' : 'text-white/60'}
                        />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    sessionStorage.setItem('selectedPlan', plan.name)
                    sessionStorage.setItem('selectedCategory', activeCategory)
                    window.location.href = '/#contact'
                  }}
                  className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-blue via-accent-violet to-accent-magenta text-white shadow-soft hover:shadow-lg hover:scale-105'
                      : 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  plan.popular
                    ? 'bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-violet/10'
                    : 'bg-gradient-to-br from-white/5 via-transparent to-white/5'
                }`}
              />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

