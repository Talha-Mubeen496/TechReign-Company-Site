import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ArrowRight, Target, Users, Rocket, Zap, TrendingUp, Palette, Code, Video, Share2, Box, Search, Globe, Layers, Film, MessageSquare, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { Header } from '../components/Navigation/Header'
import { Footer } from '../components/Footer/Footer'

interface ServiceData {
  title: string
  subtitle: string
  icon: React.ReactNode
  overview: string
  features: Array<{ icon: React.ReactNode; title: string; description: string }>
  process: Array<{ step: number; title: string; description: string }>
  useCases: Array<{ title: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
}

// Service data for all services
const servicesData: Record<string, ServiceData> = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Build high-performing websites and web applications with modern technologies',
    icon: <Code size={48} />,
    overview: 'We create responsive, fast, and scalable websites and web applications using cutting-edge technologies. From simple landing pages to complex web platforms, we deliver solutions that provide exceptional user experiences and drive business growth.',
    features: [
      {
        icon: <Globe size={24} />,
        title: 'Responsive Design',
        description: 'Mobile-first websites that work seamlessly across all devices and screen sizes'
      },
      {
        icon: <Zap size={24} />,
        title: 'Fast Performance',
        description: 'Optimized code and architecture for lightning-fast load times and smooth interactions'
      },
      {
        icon: <Shield size={24} />,
        title: 'Secure & Scalable',
        description: 'Built with security best practices and architecture that scales with your business'
      },
      {
        icon: <Rocket size={24} />,
        title: 'Modern Stack',
        description: 'Latest technologies including React, Next.js, Node.js, and cloud infrastructure'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Planning & Design',
        description: 'We analyze your requirements and create wireframes, mockups, and technical specifications.'
      },
      {
        step: 2,
        title: 'Development',
        description: 'We build your website using best practices, clean code, and modern development workflows.'
      },
      {
        step: 3,
        title: 'Testing & Optimization',
        description: 'Rigorous testing across devices and browsers, plus performance optimization for speed.'
      },
      {
        step: 4,
        title: 'Launch & Maintenance',
        description: 'We deploy your site and provide ongoing support, updates, and improvements.'
      }
    ],
    useCases: [
      {
        title: 'Business Websites',
        description: 'Professional websites for businesses looking to establish a strong online presence.'
      },
      {
        title: 'E-commerce Platforms',
        description: 'Custom online stores with advanced features, payment integration, and inventory management.'
      },
      {
        title: 'Web Applications',
        description: 'Complex web apps for internal operations, customer portals, or SaaS products.'
      }
    ],
    faqs: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We primarily use React, Next.js, Node.js, and modern CSS frameworks. We choose technologies based on your specific project needs and requirements.'
      },
      {
        question: 'How long does a typical web development project take?',
        answer: 'Simple websites typically take 4-8 weeks, while complex web applications can take 12-24 weeks. Timeline depends on scope and requirements.'
      },
      {
        question: 'Do you provide hosting and domain setup?',
        answer: 'Yes, we can help with hosting setup, domain configuration, and ongoing maintenance services.'
      }
    ]
  },
  'seo': {
    title: 'SEO',
    subtitle: 'Boost your search engine rankings and organic visibility',
    icon: <TrendingUp size={48} />,
    overview: 'Our SEO services help your website rank higher in search results, driving qualified organic traffic and increasing visibility. We use data-driven strategies, technical optimization, and content marketing to improve your search engine performance and grow your business.',
    features: [
      {
        icon: <Search size={24} />,
        title: 'Keyword Research',
        description: 'In-depth keyword analysis to target the right terms for your business and audience'
      },
      {
        icon: <Target size={24} />,
        title: 'On-Page Optimization',
        description: 'Optimize page titles, meta descriptions, headers, and content for better rankings'
      },
      {
        icon: <TrendingUp size={24} />,
        title: 'Technical SEO',
        description: 'Site speed optimization, mobile-friendliness, structured data, and technical fixes'
      },
      {
        icon: <Rocket size={24} />,
        title: 'Content Strategy',
        description: 'SEO-focused content creation and optimization to attract and engage your target audience'
      }
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your current SEO performance, identifying opportunities and issues.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create a customized SEO strategy with target keywords, content plans, and optimization roadmap.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute on-page optimization, technical fixes, content creation, and link building campaigns.'
      },
      {
        step: 4,
        title: 'Monitoring & Reporting',
        description: 'Track rankings, traffic, and conversions with regular reports and strategy adjustments.'
      }
    ],
    useCases: [
      {
        title: 'Local Businesses',
        description: 'Perfect for businesses wanting to improve local search visibility and attract nearby customers.'
      },
      {
        title: 'E-commerce Sites',
        description: 'Optimize product pages and category pages to rank for high-value commercial keywords.'
      },
      {
        title: 'Content Websites',
        description: 'Build authority and drive traffic through strategic content optimization and link building.'
      }
    ],
    faqs: [
      {
        question: 'How long until I see SEO results?',
        answer: 'SEO is a long-term strategy. You may see initial improvements in 3-6 months, with significant results typically appearing in 6-12 months.'
      },
      {
        question: 'What\'s included in an SEO package?',
        answer: 'Our packages include keyword research, on-page optimization, technical SEO, content strategy, link building, and monthly reporting.'
      },
      {
        question: 'Do you guarantee #1 rankings?',
        answer: 'We can\'t guarantee specific rankings, but we use proven strategies and data-driven approaches to improve your search visibility and organic traffic.'
      }
    ]
  },
  'graphics-3d-designing': {
    title: 'Graphics and 3D Designing',
    subtitle: 'Create stunning visual designs and 3D models that bring your brand to life',
    icon: <Palette size={48} />,
    overview: 'We specialize in creating compelling visual designs and realistic 3D models for your brand. From logos and marketing materials to 3D product visualizations and animations, we combine creativity with technical excellence to deliver designs that captivate and inspire.',
    features: [
      {
        icon: <Palette size={24} />,
        title: '2D Graphics Design',
        description: 'Logos, branding, marketing materials, social media graphics, and print designs'
      },
      {
        icon: <Box size={24} />,
        title: '3D Modeling',
        description: 'Product visualization, architectural renders, character design, and 3D assets'
      },
      {
        icon: <Layers size={24} />,
        title: 'Animation & Motion',
        description: '3D animations, motion graphics, and dynamic visual content for digital platforms'
      },
      {
        icon: <Rocket size={24} />,
        title: 'Brand Assets',
        description: 'Complete visual identity packages including icons, illustrations, and brand guidelines'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Concept & Discovery',
        description: 'We understand your vision, brand, and goals to develop creative concepts and design directions.'
      },
      {
        step: 2,
        title: 'Design & Development',
        description: 'We create initial designs and 3D models, incorporating feedback and refining the concepts.'
      },
      {
        step: 3,
        title: 'Refinement',
        description: 'Iterate on designs based on your feedback, ensuring every detail meets your expectations.'
      },
      {
        step: 4,
        title: 'Delivery & Assets',
        description: 'Provide final files in all required formats, including source files and brand guidelines.'
      }
    ],
    useCases: [
      {
        title: 'Product Visualization',
        description: 'Perfect for e-commerce, marketing, and presentations needing realistic 3D product renders.'
      },
      {
        title: 'Brand Identity',
        description: 'Complete visual branding including logos, color schemes, typography, and design systems.'
      },
      {
        title: 'Marketing Materials',
        description: 'Eye-catching graphics, banners, social media content, and promotional materials.'
      }
    ],
    faqs: [
      {
        question: 'What file formats do you provide?',
        answer: 'We provide all standard formats including PNG, JPG, SVG, PDF, and source files (AI, PSD, Blender, etc.) based on your needs.'
      },
      {
        question: 'How long does a typical design project take?',
        answer: 'Simple graphics projects take 1-2 weeks, while comprehensive branding or 3D projects can take 4-8 weeks depending on complexity.'
      },
      {
        question: 'Can you work with existing brand guidelines?',
        answer: 'Absolutely! We can create new designs that align with your existing brand identity and guidelines.'
      }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    subtitle: 'Transform raw footage into compelling video content',
    icon: <Video size={48} />,
    overview: 'We turn your raw video footage into polished, engaging content that tells your story. Our video editing services include professional post-production, color grading, motion graphics, sound design, and optimization for various platforms to maximize your video\'s impact.',
    features: [
      {
        icon: <Film size={24} />,
        title: 'Professional Editing',
        description: 'Expert cutting, pacing, and storytelling to create compelling narratives'
      },
      {
        icon: <Palette size={24} />,
        title: 'Color Grading',
        description: 'Professional color correction and grading for cinematic, polished visuals'
      },
      {
        icon: <Zap size={24} />,
        title: 'Motion Graphics',
        description: 'Animated text, graphics, logos, and visual effects to enhance your videos'
      },
      {
        icon: <Rocket size={24} />,
        title: 'Multi-Platform Optimization',
        description: 'Optimized exports for YouTube, social media, web, and broadcast standards'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Footage Review',
        description: 'We review your raw footage, understand your vision, and plan the editing approach.'
      },
      {
        step: 2,
        title: 'Rough Cut',
        description: 'Create the initial edit with pacing, story structure, and key moments selected.'
      },
      {
        step: 3,
        title: 'Refinement',
        description: 'Add color grading, graphics, sound design, and fine-tune every detail.'
      },
      {
        step: 4,
        title: 'Final Delivery',
        description: 'Provide final video in all required formats and specifications for your platforms.'
      }
    ],
    useCases: [
      {
        title: 'Marketing Videos',
        description: 'Promotional videos, product demos, and advertising content for campaigns.'
      },
      {
        title: 'Social Media Content',
        description: 'Engaging short-form videos optimized for Instagram, TikTok, YouTube Shorts, and more.'
      },
      {
        title: 'Corporate Content',
        description: 'Company videos, training materials, presentations, and corporate communications.'
      }
    ],
    faqs: [
      {
        question: 'What video formats do you accept?',
        answer: 'We work with all common video formats including MP4, MOV, AVI, and raw camera files. We can also work with footage from professional cameras and mobile devices.'
      },
      {
        question: 'How long does video editing take?',
        answer: 'Editing time depends on video length and complexity. A simple 2-minute video typically takes 3-5 days, while complex projects can take 1-2 weeks.'
      },
      {
        question: 'Do you provide music and sound effects?',
        answer: 'Yes, we have access to royalty-free music libraries and can source appropriate music and sound effects, or you can provide your own.'
      }
    ]
  },
  'social-media-handling': {
    title: 'Social Media Handling',
    subtitle: 'Manage and grow your social media presence strategically',
    icon: <Share2 size={48} />,
    overview: 'We handle your complete social media strategy, from content creation and scheduling to community management and analytics. Our team helps you build a strong online presence, engage with your audience, and drive meaningful results across all major social platforms.',
    features: [
      {
        icon: <MessageSquare size={24} />,
        title: 'Content Creation',
        description: 'Engaging posts, graphics, videos, and stories tailored to each platform and audience'
      },
      {
        icon: <Target size={24} />,
        title: 'Strategy & Planning',
        description: 'Data-driven content calendars, posting schedules, and platform-specific strategies'
      },
      {
        icon: <Users size={24} />,
        title: 'Community Management',
        description: 'Respond to comments, messages, and engage with your audience to build relationships'
      },
      {
        icon: <TrendingUp size={24} />,
        title: 'Analytics & Reporting',
        description: 'Track performance, analyze metrics, and optimize strategies based on data insights'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Strategy Development',
        description: 'We analyze your brand, audience, and goals to create a comprehensive social media strategy.'
      },
      {
        step: 2,
        title: 'Content Planning',
        description: 'Develop content calendars, themes, and posting schedules for consistent, engaging content.'
      },
      {
        step: 3,
        title: 'Content Creation & Scheduling',
        description: 'Create and schedule content across platforms, ensuring consistent branding and messaging.'
      },
      {
        step: 4,
        title: 'Management & Optimization',
        description: 'Monitor engagement, respond to comments, analyze performance, and continuously optimize.'
      }
    ],
    useCases: [
      {
        title: 'Small Businesses',
        description: 'Perfect for businesses needing professional social media presence without in-house resources.'
      },
      {
        title: 'Growing Brands',
        description: 'Ideal for brands looking to scale their social media efforts and reach new audiences.'
      },
      {
        title: 'E-commerce Stores',
        description: 'Drive sales through product showcases, customer testimonials, and targeted campaigns.'
      }
    ],
    faqs: [
      {
        question: 'Which social media platforms do you manage?',
        answer: 'We manage all major platforms including Instagram, Facebook, Twitter/X, LinkedIn, TikTok, YouTube, and Pinterest. We customize strategies per platform.'
      },
      {
        question: 'How often will you post on my accounts?',
        answer: 'Posting frequency is customized based on your industry and platform best practices, typically 3-7 posts per week per platform.'
      },
      {
        question: 'Do I have approval over content before it\'s posted?',
        answer: 'Yes, we can set up approval workflows where you review and approve content before publishing, or we can handle posting directly based on your preference.'
      }
    ]
  },
  'web-3': {
    title: 'Web3',
    subtitle: 'Navigate the decentralized web with blockchain solutions',
    icon: <Box size={48} />,
    overview: 'We help businesses leverage Web3 technologies including blockchain, smart contracts, NFTs, and decentralized applications. From DeFi platforms to NFT marketplaces and blockchain integration, we provide cutting-edge Web3 solutions that open new possibilities for your business.',
    features: [
      {
        icon: <Shield size={24} />,
        title: 'Smart Contracts',
        description: 'Secure, audited smart contract development for DeFi, NFTs, and blockchain applications'
      },
      {
        icon: <Box size={24} />,
        title: 'NFT Development',
        description: 'NFT marketplace creation, minting systems, and NFT-based platforms and applications'
      },
      {
        icon: <Globe size={24} />,
        title: 'dApp Development',
        description: 'Decentralized applications (dApps) built on Ethereum, Polygon, and other blockchain networks'
      },
      {
        icon: <Rocket size={24} />,
        title: 'Blockchain Integration',
        description: 'Integrate blockchain functionality into existing applications and business processes'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Planning',
        description: 'We assess your Web3 goals and determine the best blockchain solutions for your needs.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Design the system architecture, choose blockchain networks, and plan the implementation.'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Build smart contracts, dApps, and blockchain integrations with rigorous security testing.'
      },
      {
        step: 4,
        title: 'Deployment & Support',
        description: 'Deploy to mainnet, provide documentation, and offer ongoing maintenance and support.'
      }
    ],
    useCases: [
      {
        title: 'NFT Projects',
        description: 'Create NFT collections, marketplaces, and platforms for digital art, collectibles, and more.'
      },
      {
        title: 'DeFi Applications',
        description: 'Build decentralized finance platforms, token systems, and blockchain-based financial services.'
      },
      {
        title: 'Enterprise Blockchain',
        description: 'Implement blockchain solutions for supply chain, authentication, and transparent business processes.'
      }
    ],
    faqs: [
      {
        question: 'Which blockchain networks do you work with?',
        answer: 'We work with major networks including Ethereum, Polygon, Solana, BSC, and others. We choose based on your specific requirements and use case.'
      },
      {
        question: 'Do you provide smart contract audits?',
        answer: 'We develop secure smart contracts following best practices, and can arrange third-party audits for additional security assurance.'
      },
      {
        question: 'How long does a Web3 project typically take?',
        answer: 'Timeline varies significantly based on complexity. Simple NFT projects take 4-8 weeks, while complex dApps can take 12-24 weeks or more.'
      }
    ]
  }
}

export const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const navigate = useNavigate()
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [serviceSlug])
  
  // Ensure page is visible immediately
  useEffect(() => {
    document.body.style.opacity = '1'
  }, [])
  
  // Get service data or redirect
  const service = serviceSlug ? servicesData[serviceSlug] : null
  
  if (!service) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Service not found</h1>
          <Link to="/" className="text-accent-teal hover:text-white">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const scrollToContact = () => {
    navigate('/#contact')
    setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }

  // Service schema for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.subtitle,
    "provider": {
      "@type": "Organization",
      "name": "TechReign Digital Studio",
      "url": "https://tech-reign.com",
      "logo": "https://tech-reign.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Pakistan"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      }
    },
    "serviceType": service.title,
    "url": `https://tech-reign.com/service/${serviceSlug}`
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tech-reign.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://tech-reign.com#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://tech-reign.com/service/${serviceSlug}`
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - TechReign Digital Studio</title>
        <meta name="description" content={service.subtitle} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary">
      {/* Background wrapper */}
      {/* Background is handled by body::before in style.css - removed duplicate */}
      
      <Header />
      
      <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-max">
            <div>
              <button
                onClick={() => {
                  navigate('/#services')
                  // Wait for navigation, then scroll
                  setTimeout(() => {
                    const el = document.getElementById('services')
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 80
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }, 100)
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-white mb-8"
              >
                <ArrowLeft size={16} />
                Back to Services
              </button>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet p-4 text-white shadow-soft">
                {service.icon}
              </div>
              <p className="heading-label mb-3">Service Details</p>
              <h1 className="primary-heading">{service.title}</h1>
              <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl">
                {service.subtitle}
              </p>
              <button
                onClick={scrollToContact}
                className="btn-primary mt-8"
              >
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              <div className="glass-card p-8 md:p-12">
                <h2 className="secondary-heading mb-4">Overview</h2>
                <p className="text-white/80 leading-relaxed">
                  {service.overview}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card p-6"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-violet p-3 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-3xl text-center mb-12"
            >
              <p className="heading-label mb-3">Our Process</p>
              <h2 className="secondary-heading">How We Work</h2>
            </motion.div>

            <div className="mx-auto max-w-4xl space-y-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet text-lg font-semibold text-white">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-3xl text-center mb-12"
            >
              <p className="heading-label mb-3">Perfect For</p>
              <h2 className="secondary-heading">Who This Service Is Ideal For</h2>
            </motion.div>

            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
              {service.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass-card p-6"
                >
                  <CheckCircle2 className="mb-4 text-accent-teal" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-white/80">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-3xl text-center mb-12"
            >
              <p className="heading-label mb-3">Questions?</p>
              <h2 className="secondary-heading">Frequently Asked Questions</h2>
            </motion.div>

            <div className="mx-auto max-w-3xl space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-white/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-3xl"
            >
              <div className="glass-card p-12 text-center">
                <h2 className="secondary-heading mb-4">Ready to Get Started?</h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Let's discuss how our {service.title.toLowerCase()} service can help your business grow.
                </p>
                <button
                  onClick={scrollToContact}
                  className="btn-primary"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  )
}
