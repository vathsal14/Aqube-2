import React from 'react'

const EsportsSection: React.FC = () => {

  return (
    <section 
      id="esports" 
      className="py-20 bg-bg-base relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-secondary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-primary/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            <span className="gradient-text">Esports</span> Connect
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Take your gaming to the next level with exclusive tournament access, sponsorship opportunities, and connect with India's growing esports community.
          </p>
        </div>

        {/* Tournament Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Opportunities */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 font-semibold mb-6">Tournament Opportunities</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Monthly Qualifiers',
                    description: 'Online tournaments with prize pools from $5K to $50K',
                    requirement: 'Silver Tier+',
                    icon: '🎯'
                  },
                  {
                    title: 'Regional Championships',
                    description: 'In-person events with travel stipends and VIP access',
                    requirement: 'Gold Tier+',
                    icon: '🏆'
                  },
                  {
                    title: 'International Competitions',
                    description: 'World-stage events with professional contracts',
                    requirement: 'Platinum Tier',
                    icon: '🌍'
                  }
                ].map((opportunity, index) => (
                  <div key={index} className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{opportunity.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-2">{opportunity.title}</h4>
                        <p className="text-sm text-text-secondary mb-3">{opportunity.description}</p>
                        <div className="inline-block bg-accent-primary/20 border border-accent-primary/30 rounded-full px-3 py-1">
                          <span className="text-xs font-mono text-accent-primary font-semibold">
                            {opportunity.requirement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Sponsorship Program */}
          <div className="space-y-8">
            <div>
              <h3 className="text-h3 font-semibold mb-6">Sponsorship Program</h3>
              <div className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">💎</span>
                  </div>
                  <h4 className="text-h3 font-semibold mb-2">AqubeXP Pro Program</h4>
                  <p className="text-text-secondary">Exclusive partnerships for top-tier players</p>
                </div>

                <div className="space-y-4">
                  {[
                    'Monthly stipend: $2,000 - $10,000',
                    'Free AqubeXP Platinum Card',
                    'Priority tournament access',
                    'Personal gaming advisor',
                    'Equipment partnerships',
                    'Content creation support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                      <span className="text-body text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-glow-purple">
                    Apply for Pro Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India Esports Scene */}
        <div className="mb-20">
          <h3 className="text-h3 font-semibold text-center mb-12">India's Growing Esports Market</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: '₹73.1B',
                label: 'Gaming Market 2024',
                description: 'India is among the fastest-growing gaming markets globally'
              },
              {
                stat: '400M+',
                label: 'Indian Gamers',
                description: 'One of the world\'s largest gaming communities'
              },
              {
                stat: '35%',
                label: 'Annual Growth',
                description: 'Esports viewership growing rapidly in India'
              }
            ].map((item, index) => (
              <div key={index} className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-accent-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-h3 font-semibold text-text-primary mb-2">
                  {item.label}
                </div>
                <div className="text-small text-text-secondary">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl p-8 border border-accent-primary/20">
            <h3 className="text-h3 font-semibold mb-4">Ready to Join the Elite?</h3>
            <p className="text-body text-text-secondary mb-6">
              Start earning XP today and unlock access to tournaments, sponsorships, and a community of competitive gamers.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-glow-purple hover:scale-105"
            >
              Begin Your Esports Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EsportsSection
