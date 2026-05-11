/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        primary: '#3d2817',
        accent: '#d97706',
        surface: '#faf5f0'
      }
    }
  },
  plugins: []
};
