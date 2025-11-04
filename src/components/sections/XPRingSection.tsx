import React, { useEffect, useRef, useState } from 'react'

const XPRingSection: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [xpCount, setXpCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const currentXP = 2450
  const nextTierXP = 5000
  const progressPercentage = (currentXP / nextTierXP) * 100

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Animate the progress
          setTimeout(() => setProgress(progressPercentage), 500)
          // Animate the XP counter
          let count = 0
          const increment = currentXP / 50
          const counter = setInterval(() => {
            count += increment
            if (count >= currentXP) {
              setXpCount(currentXP)
              clearInterval(counter)
            } else {
              setXpCount(Math.floor(count))
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <section 
      ref={sectionRef}
      id="xp-ring" 
      className="py-20 bg-bg-base relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - XP Ring */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative perspective-3d">
              {/* Main XP Ring */}
              <div className="relative w-80 h-80">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 200 200"
                >
                  {/* Background Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="rgba(139, 92, 246, 0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  
                  {/* Progress Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke="url(#xp-gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                    className="transition-all duration-1000 ease-out"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))'
                    }}
                  />
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="xp-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-3">
                      <span className="gradient-text">5x</span>
                    </div>
                    <div className="text-small text-text-secondary">Gaming Purchases</div>
                    <div className="text-xs text-accent-primary font-semibold mt-2">
                      Boost Your XP
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-bg-elevated border border-accent-primary/20 rounded-full flex items-center justify-center shadow-near animate-float">
                <span className="text-2xl">🏆</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-bg-elevated border border-semantic-success/20 rounded-full flex items-center justify-center shadow-mid animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-lg">⚡</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
                <span className="gradient-text">Gamify</span> Your Spending
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                Turn every purchase into gaming rewards. Your AqubeXP card transforms everyday spending into XP points, unlocking exclusive gaming benefits and tier upgrades.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                From game downloads to streaming subscriptions, every transaction brings you closer to premium rewards, tournament access, and VIP gaming experiences.
              </p>
            </div>

            {/* XP Earning Rates */}
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-text-primary">XP Earning Rates</h3>
              {[
                { category: 'Gaming Purchases', rate: '5x XP', color: 'text-accent-primary' },
                { category: 'Dining & Food', rate: '3x XP', color: 'text-accent-secondary' },
                { category: 'Streaming Services', rate: '3x XP', color: 'text-accent-secondary' },
                { category: 'All Other Purchases', rate: '1x XP', color: 'text-text-secondary' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-bg-elevated rounded-lg border border-accent-primary/10">
                  <span className="text-body text-text-primary">{item.category}</span>
                  <span className={`font-mono font-semibold ${item.color}`}>{item.rate}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('rewards-tiers')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-accent-primary hover:bg-accent-primary/90 text-white p-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-glow-purple"
              >
                View All Rewards
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('cta')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white p-4 rounded-lg font-semibold transition-all duration-200"
              >
                Join Beta Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default XPRingSection
