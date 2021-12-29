// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F0F9ED',
        primary: '#728D72',
        'primary-dark': '#1B331C',
        'secondary-light': '#E7F7FF',
        secondary: '#DCECFF',
        'secondary-dark': '#A4B4D5',
        accent: '#97711B'
      }
    },
    fontFamily: {
      sans: ['Apercu', 'sans-serif'],
      serif: ['Lora', 'serif']
    }
  },
  plugins: [require('tailwind-plugin-line-clamp')]
}
