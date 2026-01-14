import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Navigation/Header'
import { HeroSection } from '../components/Hero/HeroSection'
import { AboutSection } from '../components/About/AboutSection'
import { MissionSection } from '../components/Mission/MissionSection'
import { ServicesSection } from '../components/Services/ServicesSection'
import { PortfolioSection } from '../components/Portfolio/PortfolioSection'
import { PricingSection } from '../components/Pricing/PricingSection'
import { TestimonialsSection } from '../components/Testimonials/TestimonialsSection'
import { ContactSection } from '../components/Contact/ContactSection'
import { Footer } from '../components/Footer/Footer'
export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>TechReign - Digital Studio for Business Growth</title>
        <meta name="description" content="TechReign digital studio offers web development, ecommerce, SEO, branding, digital marketing, web3 and more services to elevate your business success." />
        <meta name="keywords" content="web development, SEO services, 3D design, digital studio, TechReign, custom websites, growth strategy, Tech Reign" />
        <meta property="og:title" content="TechReign – Digital Studio" />
        <meta property="og:description" content="Web development, SEO, brand design, 3D visuals & Web3 solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech-reign.com" />
        <meta property="og:image" content="https://tech-reign.com/logo.png" />
        {/* <link rel="canonical" href="https://tech-reign.com"/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechReign – Digital Studio" />
        <meta name="twitter:description" content="Web development, SEO, brand design, 3D visuals & Web3 solutions for modern businesses." />
        <meta name="twitter:image" content="https://tech-reign.com/logo.png" />
      </Helmet>
      <div className="min-h-screen w-full overflow-x-hidden text-text-primary relative">
        {/* Background is handled by body::before in style.css - removed duplicate */}
        <Header />
        <main className="relative w-full overflow-x-hidden pt-20 md:pt-24">
          <HeroSection />
          <AboutSection />
          <MissionSection />
          <ServicesSection />
          <PortfolioSection />
          <PricingSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

