import React from 'react'

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Rewards', href: '#rewards-tiers' },
      { name: 'Esports', href: '#esports' },
      { name: 'Security', href: '#security' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Support', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const contactInfo = [
    { label: 'Email', value: 'info@aqube.xyz', icon: '📧' },
    { label: 'Phone', value: '+91 9121184320', icon: '📞' },
    { label: 'Location', value: 'Hyderabad, India', icon: '📍' }
  ]

  const scrollToSection = (sectionId: string) => {
    // Remove # if present
    const cleanId = sectionId.replace('#', '')
    
    // Try to find existing section first
    const element = document.getElementById(cleanId)
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // For links without corresponding sections, show a subtle notification
      console.log(`Navigation to ${cleanId} - section not found, showing info`)
      
      // Create a temporary notification for better UX
      const notification = document.createElement('div')
      notification.textContent = `${sectionId.replace('#', '').replace('-', ' ')} section coming soon!`
      notification.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-accent-primary text-white px-4 py-2 rounded-lg text-sm z-50 animate-fade-in'
      
      document.body.appendChild(notification)
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification)
        }
      }, 3000)
    }
  }

  return (
    <footer className="bg-bg-base border-t border-accent-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold gradient-text mb-4">
                AqubeXP
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                The gaming credit card designed for Indian gamers. Empowering India's gaming community through innovative financial products tailored for the local market.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="font-semibold text-text-primary">Contact Us</h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-lg">{contact.icon}</span>
                    <div>
                      <div className="text-xs text-text-tertiary">{contact.label}</div>
                      <div className="text-sm text-text-secondary">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm focus:outline-none focus:text-accent-primary focus:underline"
                    aria-describedby={!document.getElementById(link.href.replace('#', '')) ? `product-${index}-info` : undefined}
                  >
                    {link.name}
                  </button>
                  {!document.getElementById(link.href.replace('#', '')) && (
                    <span id={`product-${index}-info`} className="sr-only">
                      This section will be available soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm focus:outline-none focus:text-accent-primary focus:underline"
                    aria-describedby={!document.getElementById(link.href.replace('#', '')) ? `company-${index}-info` : undefined}
                  >
                    {link.name}
                  </button>
                  {!document.getElementById(link.href.replace('#', '')) && (
                    <span id={`company-${index}-info`} className="sr-only">
                      This section will be available soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm focus:outline-none focus:text-accent-primary focus:underline"
                    aria-describedby={!document.getElementById(link.href.replace('#', '')) ? `legal-${index}-info` : undefined}
                  >
                    {link.name}
                  </button>
                  {!document.getElementById(link.href.replace('#', '')) && (
                    <span id={`legal-${index}-info`} className="sr-only">
                      This section will be available soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
