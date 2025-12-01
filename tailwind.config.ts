import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F7FB',
        card: '#FFFFFF',
        divider: '#D6DFEA',
        primary: '#0284C7',
        accent: '#14B8A6',
        selection: '#E0F2FE',
        'success-bg': '#DCFCE7',
        'success-text': '#166534',
        'error-bg': '#FEE2E2',
        'error-text': '#DC2626',
        'warning-bg': '#FEF3C7',
        'warning-text': '#92400E',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
        'spin-slow': 'spin 1s linear infinite',
        marquee: 'marquee var(--marquee-duration, 4s) ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translate(-50%, -20px)' },
          to: { opacity: '1', transform: 'translate(-50%, 0)' },
        },
        marquee: {
          '0%, 10%': { transform: 'translateX(0)' },
          '45%, 55%': { transform: 'translateX(var(--scroll-distance, 0))' },
          '90%, 100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
