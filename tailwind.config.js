/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'talrn-blue': '#2563EB',
        'talrn-blue-dark': '#1E40AF',
        'talrn-yellow': '#FBBF24',
        'talrn-dark': '#111827',
        'talrn-gray-light': '#F3F4F6',
      },
      animation: {
        'scroll-x': 'scroll-x 40s linear infinite',
        'scroll-x-reverse': 'scroll-x-reverse 40s linear infinite',
        'marquee-scroll': 'marquee-scroll 10s linear infinite',
        'marquee-scroll-reverse': 'marquee-scroll-reverse 10s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-x-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
};