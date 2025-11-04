import React, { useEffect, useRef, useState } from 'react'

interface StatCard {
  id: string
  value: string
  label: string
  description: string
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats: StatCard[] = [
    {
      id: 'india-market',
      value: '₹73.1B',
      label: 'India Gaming Market',
      description: 'Market size in 2024'
    },
    {
      id: 'india-players',
      value: '400M+',
      label: 'Indian Gamers',
      description: 'Active player base'
    },
    {
      id: 'spend-multiplier',
      value: '1.6x',
      label: 'Gamer Spending',
      description: 'Higher than non-gamers'
    },
    {
      id: 'transaction-frequency',
      value: '2.2x',
      label: 'Transaction Rate',
      description: 'More frequent purchases'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className="py-20 bg-bg-gradient-depth relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            Join <span className="gradient-text">400 Million Indian Gamers</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Indian gamers are reshaping the financial landscape. With India's gaming market growing at 35% annually, this powerful demographic deserves dedicated financial products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-8 text-center transform-gpu transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: `translateZ(${index * 30}px)` 
              }}
            >
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-mono font-bold text-accent-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-h3 font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-small text-text-secondary">
                  {stat.description}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner Glow */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-accent-primary/20 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center">
          <div className="bg-bg-elevated border border-accent-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold mb-4">Why Indian Gamers Matter</h3>
            <p className="text-body text-text-secondary leading-relaxed">
              Indian gamer cardholders don't just spend more—they spend smarter. With platforms like Ludo King, MPL, and international gaming services seeing explosive growth, gamers represent a highly engaged, financially active community ready for tailored financial products built specifically for the Indian market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
