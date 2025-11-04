import React, { useEffect, useRef, useState } from 'react'

interface Tier {
  id: string
  name: string
  color: string
  unlockRequirement: string
  benefits: string[]
  level: number
}

const RewardsTiersSection: React.FC = () => {
  const [visibleTiers, setVisibleTiers] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  // Mock data for rewards tiers
  const tiers: Tier[] = [
    {
      id: 'bronze',
      name: 'Bronze',
      color: 'linear-gradient(135deg, #cd7f32, #e8b887)',
      unlockRequirement: '0 XP',
      benefits: [
        '2x XP on gaming purchases',
        'Basic card protection',
        'Monthly gaming deals',
        'Standard customer support'
      ],
      level: 1
    },
    {
      id: 'silver',
      name: 'Silver',
      color: 'linear-gradient(135deg, #b8b8b8, #e8e8e8)',
      unlockRequirement: '1,000 XP',
      benefits: [
        '3x XP on gaming purchases',
        'Enhanced fraud protection',
        'Priority access to new games',
        'Dedicated gaming support'
      ],
      level: 2
    },
    {
      id: 'gold',
      name: 'Gold',
      color: 'linear-gradient(135deg, #d4af37, #f4e5b5)',
      unlockRequirement: '5,000 XP',
      benefits: [
        '4x XP on gaming purchases',
        'Premium card features',
        'Early tournament access',
        'VIP customer service',
        'Exclusive merchandise discounts'
      ],
      level: 3
    },
    {
      id: 'platinum',
      name: 'Platinum',
      color: 'linear-gradient(135deg, #e5e4e2, #c0c0c0, #a8a8a8)',
      unlockRequirement: '15,000 XP',
      benefits: [
        '5x XP on all purchases',
        'Concierge gaming services',
        'Esports tournament VIP access',
        'Beta feature access',
        'Personal gaming advisor'
      ],
      level: 4
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tierIndex = parseInt(entry.target.getAttribute('data-tier') || '0')
            setVisibleTiers(prev => [...new Set([...prev, tierIndex])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const tierElements = sectionRef.current?.querySelectorAll('[data-tier]')
    tierElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="rewards-tiers" 
      className="py-20 bg-bg-gradient-depth relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            Unlock <span className="gradient-text">Legendary Rewards</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Progress through our tier system and unlock increasingly powerful rewards. Each tier builds upon the last, creating the ultimate gaming financial experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              data-tier={index}
              className={`relative transition-all duration-700 ${
                visibleTiers.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transform: `translateZ(${index * 50}px)` 
              }}
            >
              {/* Tier Card */}
              <div className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl overflow-hidden h-full relative group">
                {/* Tier Header */}
                <div 
                  className="h-32 p-6 flex items-center justify-center relative"
                  style={{
                    background: tier.color,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                    <div className="text-sm font-mono text-white/80">{tier.unlockRequirement}</div>
                  </div>
                  
                  {/* Tier Level Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{tier.level}</span>
                  </div>
                </div>

                {/* Tier Benefits */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-text-secondary">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-accent-primary/10">
                    <div className="text-xs text-text-tertiary mb-2">Current Status</div>
                    <div className="w-full bg-bg-elevated rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min((index + 1) * 25, 100)}%`,
                          background: tier.color
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-text-tertiary mt-1">
                      {index === 0 ? 'Unlocked' : `${100 - (index + 1) * 25}% to unlock`}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: tier.color,
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                ></div>
              </div>

              {/* Connection Line (except last item) */}
              {index < tiers.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-primary/50 to-transparent z-20">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-accent-primary rounded-full shadow-glow-purple"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-bg-elevated border border-accent-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold mb-4">Start Your Tier Journey Today</h3>
            <p className="text-body text-text-secondary mb-6">
              Begin earning XP immediately and unlock your first tier. Every purchase brings you closer to exclusive gaming rewards and privileges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('cta')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-glow-purple hover:scale-105"
              >
                Join Beta Program
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('esports')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                Explore Esports Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RewardsTiersSection
