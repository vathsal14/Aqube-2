import React from 'react'

const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: '🛡️',
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption and PCI-DSS compliance for all transactions.',
      details: ['AES-256 encryption', 'Secure tokenization', 'Regular security audits']
    },
    {
      icon: '🔍',
      title: 'Fraud Protection',
      description: 'Advanced AI-powered fraud detection with real-time monitoring.',
      details: ['Real-time alerts', 'Zero liability protection', '24/7 monitoring']
    },
    {
      icon: '🔐',
      title: 'Privacy First',
      description: 'Your gaming data stays private. We never sell your information.',
      details: ['GDPR compliant', 'Data encryption', 'Privacy by design']
    },
    {
      icon: '🏛️',
      title: 'RBI Compliant',
      description: 'Fully compliant with Reserve Bank of India regulations and Indian banking standards.',
      details: ['RBI approved', 'Local banking integration', 'INR native support']
    }
  ]

  return (
    <section id="security" className="py-20 bg-bg-gradient-depth relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-semantic-success/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            <span className="text-semantic-success">Security</span> & Trust
          </h2>
          <p className="text-body-lg text-text-secondary max-w-3xl mx-auto">
            Your financial security is our top priority. We've built AqubeXP with enterprise-grade security and transparency at its core.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="card-3d bg-bg-surface border border-semantic-success/20 rounded-xl p-8 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-h3 font-semibold mb-4 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-body text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Feature Details */}
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-semantic-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security Promise */}
        <div className="text-center">
          <div className="bg-bg-elevated border border-semantic-success/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-h3 font-semibold mb-6">Our Security Promise</h3>
            <p className="text-body text-text-secondary mb-6 leading-relaxed">
              Your trust is earned through transparency and security excellence. AqubeXP is built with enterprise-grade security, compliant with RBI regulations and international standards to protect your financial data and gaming information.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('cta')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-glow-purple"
            >
              Join with Confidence
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection
