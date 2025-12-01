import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Violet (Deepened & Refined)
        primary: {
          DEFAULT: '#7C3AED', // Deep Violet
          light: '#F3E8FF',   // Soft Violet
          deep: '#5B21B6',    // Darker Violet
        },
        // Accent Colors (More vibrant & saturated)
        accent: {
          cyan: '#0891B2',
          pink: '#DB2777',
          lime: '#65A30D',
          orange: '#EA580C',
        },
        // Background Colors (Cleaner & Softer)
        bg: {
          white: '#FFFFFF',
          lavender: '#FAF5FF',
          violet: '#F5F3FF',
          gray: '#F8FAFC',
        },
        surface: '#FFFFFF',
        // Text Colors (High Contrast)
        text: {
          primary: '#0F172A', // Slate 900
          secondary: '#475569', // Slate 600
          muted: '#94A3B8', // Slate 400
        },
        // Utility Colors
        border: '#E2E8F0', // Slate 200
        // Feedback Colors
        success: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#DC2626',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '20px',
        lg: '28px',
        xl: '36px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(124, 58, 237, 0.08), 0 0 0 1px rgba(124, 58, 237, 0.02)',
        card: '0 10px 30px -4px rgba(124, 58, 237, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
        hover: '0 20px 40px -4px rgba(124, 58, 237, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        active: '0 2px 10px rgba(124, 58, 237, 0.15)',
        badge: '0 2px 8px rgba(0, 0, 0, 0.08)',
        button: '0 8px 20px -4px rgba(124, 58, 237, 0.3)',
        'button-hover': '0 12px 24px -4px rgba(124, 58, 237, 0.4)',
        success: '0 8px 20px -4px rgba(22, 163, 74, 0.25)',
        error: '0 8px 20px -4px rgba(220, 38, 38, 0.25)',
        container: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        snap: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'fade-in': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 1.5s linear infinite',
        'success-pop': 'successPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        marquee: 'marquee var(--marquee-duration, 10s) linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translate(-50%, -20px) scale(0.95)' },
          to: { opacity: '1', transform: 'translate(-50%, 0) scale(1)' },
        },
        successPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 8px 20px -4px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 12px 24px -4px rgba(124, 58, 237, 0.45)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
