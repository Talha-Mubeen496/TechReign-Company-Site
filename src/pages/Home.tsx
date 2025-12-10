import React from 'react'
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
  return (
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
  )
}

