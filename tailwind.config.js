/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1f2e',
        accent: '#F59E0B',
        'dark-bg': '#1a1f2e',
        'dark-text': '#e5e7eb',
        'dark-heading': '#f3f4f6',
        'light-primary': '#2563eb',
        'light-bg': {
          DEFAULT: '#ffffff',
          secondary: '#f9fafb',
          hover: '#eff6ff',
        },
        'light-text': {
          DEFAULT: '#374151',
          darker: '#111827',
          lighter: '#6b7280',
        },
        'light-border': '#e5e7eb',
        'light-accent': '#2563eb',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'popup': 'popup 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popup: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
};
