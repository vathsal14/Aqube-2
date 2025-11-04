/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// Background Colors
				'bg-base': '#0a0a0a',
				'bg-surface': '#141414',
				'bg-elevated': '#1f1f1f',
				
				// Text Colors
				'text-primary': '#e5e5e5',
				'text-secondary': '#a3a3a3',
				'text-tertiary': '#737373',
				
				// Accent Colors
				'accent-primary': '#8b5cf6',
				'accent-secondary': '#3b82f6',
				'accent-glow': 'rgba(139, 92, 246, 0.6)',
				
				// Tier Colors
				'tier-bronze-start': '#cd7f32',
				'tier-bronze-end': '#e8b887',
				'tier-silver-start': '#b8b8b8',
				'tier-silver-end': '#e8e8e8',
				'tier-gold-start': '#d4af37',
				'tier-gold-end': '#f4e5b5',
				'tier-platinum-start': '#e5e4e2',
				'tier-platinum-mid': '#c0c0c0',
				'tier-platinum-end': '#a8a8a8',
				
				// Semantic Colors
				'semantic-success': '#00ffaa',
				'semantic-warning': '#f39c12',
				'semantic-error': '#e74c3c',
				
				// Original theme colors (kept for compatibility)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#8b5cf6',
					foreground: '#e5e5e5',
				},
				secondary: {
					DEFAULT: '#3b82f6',
					foreground: '#e5e5e5',
				},
				accent: {
					DEFAULT: '#ec4899',
					foreground: '#e5e5e5',
				},
				destructive: {
					DEFAULT: '#e74c3c',
					foreground: '#e5e5e5',
				},
				muted: {
					DEFAULT: '#737373',
					foreground: '#a3a3a3',
				},
				popover: {
					DEFAULT: '#1f1f1f',
					foreground: '#e5e5e5',
				},
				card: {
					DEFAULT: '#141414',
					foreground: '#e5e5e5',
				},
			},
			fontFamily: {
				'display': ['Outfit', 'Inter', '-apple-system', 'sans-serif'],
				'body': ['Inter', '-apple-system', 'sans-serif'],
				'mono': ['Space Mono', 'Courier New', 'monospace'],
			},
			fontSize: {
				'hero-3d': '96px',
				'h1': '64px',
				'h2': '48px',
				'h3': '32px',
				'body-lg': '20px',
				'body': '16px',
				'small': '14px',
				'mono-counter': '28px',
				// Mobile responsive scale
				'hero-3d-mobile': '56px',
				'h1-mobile': '40px',
				'h2-mobile': '32px',
			},
			spacing: {
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '32px',
				'xl': '48px',
				'2xl': '64px',
				'3xl': '96px',
				'4xl': '128px',
			},
			borderRadius: {
				'sm': '12px',
				'md': '20px',
				'lg': '24px',
				'xl': '32px',
				'full': '9999px',
			},
			boxShadow: {
				'far': '0 2px 8px rgba(0, 0, 0, 0.08)',
				'mid': '0 8px 24px rgba(0, 0, 0, 0.12)',
				'near': '0 16px 48px rgba(0, 0, 0, 0.18)',
				'nearest': '0 24px 64px rgba(0, 0, 0, 0.24)',
				'glow-purple': '0 8px 32px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%': { boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' },
					'100%': { boxShadow: '0 8px 32px rgba(139, 92, 246, 0.8)' },
				},
			},
			perspective: {
				'standard': '1000px',
				'reduced': '500px',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
