/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme') 

module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      'DMsans': ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-900': '#111827',
        'gray-800': '#1F2937',
        'gray-700': '#374151',
        'gray-600': '#4B5563',
        'gray-500': '#6B7280',
        'gray-400': '#9CA3AF',
        'gray-300': '#D1D5DB',
        'gray-200': '#E5E7EB',
        'gray-100': '#F3F4F6',
        'gray-50': '#F9FAFB',
      },
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
        'rale': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
