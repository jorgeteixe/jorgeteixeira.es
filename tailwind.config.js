module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter'
    },
    extend: {
      colors: {
        primary: '#FF5D8F',
        secondary: '#7F2CCB',
        yellow: '#FFD400'
      }
    }
  },
  plugins: []
}
