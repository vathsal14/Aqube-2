import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import AboutSection from '../components/sections/AboutSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import XPRingSection from '../components/sections/XPRingSection'
import RewardsTiersSection from '../components/sections/RewardsTiersSection'
import EsportsSection from '../components/sections/EsportsSection'
import SecuritySection from '../components/sections/SecuritySection'
import CTASection from '../components/sections/CTASection'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
      
      <main>
        {/* Hero Section - Interactive 3D Credit Card */}
        <HeroSection />
        
        {/* Stats Section - Floating Data Cards */}
        <StatsSection />
        
        {/* About Section - Mission & Vision */}
        <AboutSection />
        
        {/* How It Works - 4 Step Process */}
        <HowItWorksSection />
        
        {/* XP Ring - 3D Circular Progress */}
        <XPRingSection />
        
        {/* Rewards Tiers - 4 Interactive Medallions */}
        <RewardsTiersSection />
        
        {/* Esports Connect - Tournament Opportunities */}
        <EsportsSection />
        
        {/* Security & Trust */}
        <SecuritySection />
        
        {/* Join Beta CTA */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage
