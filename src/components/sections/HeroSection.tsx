import React, { useEffect, useRef, useState, useCallback } from 'react'

const HeroSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  // Performance monitoring - detect low-end devices
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Simple performance check - if device doesn't support hardware acceleration
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    
    const isLowEnd = prefersReducedMotion || !gl || (gl.getParameter(gl.MAX_TEXTURE_SIZE) as number) < 4096
    setIsLowEndDevice(isLowEnd)
  }, [])

  // Optimized mouse movement handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current || isLowEndDevice) return

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    // Throttle to 60fps using requestAnimationFrame
    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      // Reduced rotation range for performance
      const rotateX = Math.max(Math.min(mouseY / 80, 6), -6)
      const rotateY = Math.max(Math.min(mouseX / 80, 12), -12)

      setMousePosition({ x: rotateX, y: rotateY })
    })
  }, [isLowEndDevice])

  const handleMouseLeave = useCallback(() => {
    if (isLowEndDevice) return
    setMousePosition({ x: 2, y: 0 })
  }, [isLowEndDevice])

  useEffect(() => {
    const cardElement = cardRef.current
    if (!cardElement || isLowEndDevice) return

    // Use passive event listeners for better performance
    cardElement.addEventListener('mousemove', handleMouseMove, { passive: true })
    cardElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      cardElement.removeEventListener('mousemove', handleMouseMove)
      cardElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave, isLowEndDevice])

  const handleCardClick = () => {
    if (isLowEndDevice) {
      // Simplified interaction for low-end devices
      scrollToCTA()
      return
    }
    setIsFlipped(!isFlipped)
  }

  const scrollToCTA = () => {
    const element = document.getElementById('cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-bg-base to-bg-gradient-depth overflow-hidden"
    >
      {/* Background Parallax Elements - Simplified for performance */}
      <div className="absolute inset-0 perspective-3d">
        <div className={`absolute inset-0 ${isLowEndDevice ? '' : 'opacity-60'} bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]`}></div>
        <div className={`absolute inset-0 ${isLowEndDevice ? '' : 'opacity-60'} bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]`}></div>
      </div>

      {/* Grid Pattern Background - Reduced complexity */}
      {!isLowEndDevice && (
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-2 h-full pt-24">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-accent-primary/20"></div>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-hero-3d-mobile md:text-hero-3d font-display font-bold leading-tight mb-6">
            <span className="block">Power Up Your Game.</span>
            <span className="block gradient-text">Power Up Your Life.</span>
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            The first gaming credit card designed for gamers, by gamers. Earn XP with every purchase and unlock exclusive rewards, tournaments, and esports opportunities.
          </p>
        </div>

        {/* 3D Interactive Credit Card - Performance Optimized */}
        <div className={`relative perspective-3d perspective-3d-mobile mb-12 ${isLowEndDevice ? '' : 'transform-gpu'}`}>
          <div
            ref={cardRef}
            className={`card-3d w-80 h-52 mx-auto cursor-pointer ${
              isLowEndDevice ? 'transform-none' : 'transform-gpu'
            } ${isFlipped && !isLowEndDevice ? 'rotateY-180' : ''}`}
            onClick={handleCardClick}
            style={!isLowEndDevice ? {
              transformStyle: 'preserve-3d',
              willChange: 'transform',
              transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`
            } : {}}
          >
            {/* Card Front */}
            <div 
              className={`absolute inset-0 w-full h-full rounded-xl shadow-glow-purple ${
                isLowEndDevice ? '' : 'backface-hidden'
              }`}
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                willChange: isLowEndDevice ? 'auto' : 'transform',
                backfaceVisibility: isLowEndDevice ? 'visible' : 'hidden'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between text-white">
                {/* Card Header */}
                <div className="flex justify-between items-start">
                  <div className="text-lg font-bold">AqubeXP</div>
                  <div className="w-8 h-6 bg-yellow-400 rounded"></div>
                </div>

                {/* Card Content */}
                <div>
                  <div className="text-sm opacity-80 mb-1">CARDHOLDER NAME</div>
                  <div className="text-xl font-mono tracking-wider mb-4">GAMER ID #001</div>
                  <div className="flex justify-between items-end">
                    <div className="text-sm opacity-80">VALID THRU</div>
                    <div className="text-lg font-mono">12/28</div>
                  </div>
                </div>

                {/* Tier Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  PLATINUM
                </div>
              </div>
            </div>

            {/* Card Back */}
            <div 
              className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 ${
                isLowEndDevice ? '' : 'transform rotateY-180 backface-hidden'
              }`}
              style={{
                backfaceVisibility: isLowEndDevice ? 'visible' : 'hidden'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between text-white">
                {/* Magnetic Strip */}
                <div className="h-8 bg-black rounded"></div>

                {/* Card Details */}
                <div className="space-y-4">
                  <div className="bg-white/10 h-12 rounded flex items-center px-3 text-xs">
                    CVV: 123
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm opacity-80 mb-2">Tap to Apply</div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        scrollToCTA()
                      }}
                      className="bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-glow-purple"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero CTA */}
        <div className="animate-slide-up">
          <button
            onClick={scrollToCTA}
            className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-glow-purple hover:scale-105"
          >
            Start Earning XP Today
          </button>
        </div>
      </div>


    </section>
  )
}

export default HeroSection
