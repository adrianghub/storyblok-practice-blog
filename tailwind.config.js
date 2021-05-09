module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
],
darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': 'Roboto, Arial, sans-serif',
      'serif': 'Merriweather, Georgia, serif'
    },
    extend: {
    },
  },
  variants: {},
  plugins: [],
}