import React, { useState, useEffect } from 'react'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-100 h-18 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-base/95 backdrop-blur-lg border-b border-accent-primary/10' 
          : 'bg-bg-base/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-display font-bold gradient-text hover:scale-105 transition-transform"
          >
            AqubeXP
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-text-secondary hover:text-text-primary transition-colors font-medium"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('rewards-tiers')}
            className="text-text-secondary hover:text-text-primary transition-colors font-medium"
          >
            Rewards
          </button>
          <button
            onClick={() => scrollToSection('esports')}
            className="text-text-secondary hover:text-text-primary transition-colors font-medium"
          >
            Esports
          </button>
          <button
            onClick={() => scrollToSection('cta')}
            className="bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-glow-purple hover:scale-105"
          >
            Join Beta
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-elevated border-b border-accent-primary/10">
          <div className="px-8 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('rewards-tiers')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              Rewards
            </button>
            <button
              onClick={() => scrollToSection('esports')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              Esports
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Join Beta
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
