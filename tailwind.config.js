module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'shadow-primary',
    'shadow-secondary',
    'shadow-yellow',
    'bg-primary',
    'bg-secondary',
    'bg-yellow'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter'
    },
    extend: {
      colors: {
        primary: {
          light: '#FFCFDE',
          DEFAULT: '#FF5D8F',
          dark: '#C02455'
        },
        secondary: '#7F2CCB',
        yellow: '#FFD400'
      }
    }
  },
  plugins: []
}
