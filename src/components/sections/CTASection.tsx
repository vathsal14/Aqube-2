import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

interface FormData {
  email: string
}

interface FormErrors {
  email?: string
}

interface SubmissionState {
  isSuccess: boolean
  isError: boolean
  errorMessage?: string
}

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSuccess: false,
    isError: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmissionState({ isSuccess: false, isError: false })
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('beta_signups')
        .insert([{
          email: formData.email.trim().toLowerCase(),
          gaming_platform: 'not_specified',
          is_indian_user: true
        }])
      
      if (error) {
        // Handle duplicate email error
        if (error.code === '23505') {
          setSubmissionState({
            isSuccess: false,
            isError: true,
            errorMessage: 'This email is already registered for the beta program.'
          })
        } else {
          throw error
        }
      } else {
        // Success
        setSubmissionState({ isSuccess: true, isError: false })
        
        // Reset form after showing success message
        setTimeout(() => {
          setSubmissionState({ isSuccess: false, isError: false })
          setFormData({ email: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmissionState({
        isSuccess: false,
        isError: true,
        errorMessage: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="cta" 
      className="py-20 bg-bg-base relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-3d">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main CTA Content */}
        <div className="mb-12">
          <h2 className="text-h1-mobile md:text-h1 font-display font-bold mb-6">
            Start Earning <span className="gradient-text">XP Today</span>
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Join the AqubeXP Beta Program and be among the first gamers to experience the future of gaming finance. Limited spots available.
          </p>
        </div>

        {/* Beta Access Card */}
        <div className="card-3d bg-bg-elevated border border-accent-primary/20 rounded-xl p-8 mb-8 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl"></div>
          
          <div className="relative z-10">
            {!submissionState.isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Error Message */}
                {submissionState.isError && (
                  <div className="bg-semantic-error/10 border border-semantic-error/30 rounded-lg p-4">
                    <p className="text-semantic-error text-sm text-center">
                      {submissionState.errorMessage}
                    </p>
                  </div>
                )}
                
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-left text-sm font-semibold text-text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-bg-surface border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none transition-all ${
                      errors.email 
                        ? 'border-semantic-error focus:border-semantic-error focus:ring-2 focus:ring-semantic-error/20' 
                        : 'border-accent-primary/20 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20'
                    }`}
                    placeholder="gamer@email.com"
                    disabled={isSubmitting}
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-semantic-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 transform-gpu ${
                    isSubmitting 
                      ? 'bg-bg-elevated cursor-not-allowed' 
                      : 'bg-accent-primary hover:bg-accent-primary/90 hover:shadow-glow-purple'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining Beta...
                    </span>
                  ) : (
                    'Join Beta'
                  )}
                </button>

                <p className="text-xs text-text-tertiary text-center">
                  By joining, you agree to receive beta updates and gaming-related offers. We respect your privacy.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-semantic-success/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-h3 font-semibold text-text-primary">
                  Welcome to the Beta!
                </h3>
                <p className="text-body text-text-secondary">
                  Thank you for joining AqubeXP Beta. You'll receive an email with next steps within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-accent-primary/20 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Beta Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '🎯',
              title: 'Early Access',
              description: 'Be the first to test new features and earn exclusive beta rewards'
            },
            {
              icon: '⚡',
              title: 'VIP Support',
              description: 'Direct line to our development team and priority customer service'
            },
            {
              icon: '🏆',
              title: 'Founding Member',
              description: 'Special recognition and exclusive benefits for early supporters'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h4 className="font-semibold text-text-primary">{benefit.title}</h4>
              <p className="text-sm text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Final Incentive */}
        <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-xl p-6">
          <p className="text-body text-text-secondary">
            <span className="font-semibold text-accent-primary">Limited Time:</span> Beta members receive 10,000 bonus XP upon card activation and exclusive access to our esports tournament series.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
