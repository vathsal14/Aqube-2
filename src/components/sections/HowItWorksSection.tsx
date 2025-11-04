import React, { useEffect, useRef, useState } from 'react'

interface Step {
  id: number
  title: string
  description: string
  icon: string
  xpReward: string
}

const HowItWorksSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const steps: Step[] = [
    {
      id: 1,
      title: 'Create Your Gamer ID',
      description: 'Set up your unique gamer profile and connect your gaming accounts across all platforms.',
      icon: '🎮',
      xpReward: '+100 XP'
    },
    {
      id: 2,
      title: 'Connect Gaming Profiles',
      description: 'Link your Steam, PlayStation, Xbox, Nintendo, and mobile gaming accounts securely.',
      icon: '🔗',
      xpReward: '+200 XP'
    },
    {
      id: 3,
      title: 'Earn XP & Rewards',
      description: 'Every purchase earns XP points. Use your card for gaming and everyday expenses.',
      icon: '⚡',
      xpReward: 'Ongoing'
    },
    {
      id: 4,
      title: 'Level Up & Unlock',
      description: 'Advance through Bronze, Silver, Gold, and Platinum tiers to unlock exclusive benefits.',
      icon: '🏆',
      xpReward: 'Tier Bonuses'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0')
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])])
          }
        })
      },
      { threshold: 0.5 }
    )

    const stepElements = sectionRef.current?.querySelectorAll('[data-step]')
    stepElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="py-20 bg-bg-gradient-depth relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Getting started with AqubeXP is as easy as leveling up in your favorite game. Follow these four simple steps to begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-step={index}
              className={`relative transition-all duration-700 ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Step Card */}
              <div className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-8 h-full relative overflow-hidden group">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-6 text-center">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-h3 font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-body text-text-secondary">
                    {step.description}
                  </p>
                  
                  {/* XP Reward Badge */}
                  <div className="inline-block bg-accent-primary/20 border border-accent-primary/30 rounded-full px-4 py-2">
                    <span className="text-sm font-mono text-accent-primary font-semibold">
                      {step.xpReward}
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-primary/30 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent-primary rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Floating XP Particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-primary/40 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent-secondary/40 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-bg-elevated border border-accent-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold mb-4">Start Your Gaming Financial Journey</h3>
            <p className="text-body text-text-secondary mb-6">
              Once you complete these steps, you'll start earning XP with every purchase and unlocking access to tournaments, exclusive content, and gaming rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('xp-ring')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-glow-purple"
              >
                See XP System
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('rewards-tiers')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View Rewards Tiers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
