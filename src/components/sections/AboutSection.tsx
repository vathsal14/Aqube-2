import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-bg-base relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
                Empowering <span className="gradient-text">Gamers Financially</span>
              </h2>
              <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                AqubeXP was born from a simple belief: gamers deserve financial products that understand their passion, reward their dedication, and fuel their competitive spirit.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                We've spent years studying gaming behaviors, spending patterns, and the unique needs of the gaming community. From casual mobile gamers to professional esports athletes, we've designed a credit card that grows with you.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              {[
                {
                  title: 'Financial Empowerment',
                  description: 'Provide gamers with tools to manage their digital and physical spending while earning meaningful rewards.'
                },
                {
                  title: 'Community Building',
                  description: 'Connect gamers through shared experiences, tournaments, and exclusive access to gaming events.'
                },
                {
                  title: 'Competitive Edge',
                  description: 'Fuel your gaming journey with XP rewards that translate into real-world gaming advantages.'
                }
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-bg-elevated rounded-lg border border-accent-primary/10">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{point.title}</h4>
                    <p className="text-small text-text-secondary">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="perspective-3d">
              {/* Gaming Stats Floating Cards */}
              <div className="space-y-6">
                <div className="card-3d bg-bg-surface border border-accent-primary/20 rounded-xl p-6 transform translate-x-8 translate-y-4">
                  <div className="text-2xl font-mono font-bold text-accent-primary mb-2">58%</div>
                  <div className="text-body text-text-secondary">of PC gaming revenue comes from microtransactions</div>
                </div>

                <div className="card-3d bg-bg-surface border border-accent-secondary/20 rounded-xl p-6 transform -translate-x-4 translate-y-0">
                  <div className="text-2xl font-mono font-bold text-accent-secondary mb-2">$80.9B</div>
                  <div className="text-body text-text-secondary">mobile in-app purchases in 2024</div>
                </div>

                <div className="card-3d bg-bg-surface border border-semantic-success/20 rounded-xl p-6 transform translate-x-4 -translate-y-4">
                  <div className="text-2xl font-mono font-bold text-semantic-success mb-2">75%</div>
                  <div className="text-body text-text-secondary">of online gaming revenue from microtransactions</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl p-8 border border-accent-primary/20">
            <h3 className="text-h3 font-semibold mb-4">Ready to Level Up Your Finances?</h3>
            <p className="text-body text-text-secondary mb-6">
              Join thousands of gamers who are already earning XP and unlocking rewards with AqubeXP.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-glow-purple hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
