// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '300px', //iphone 5/SE
      sm: '640px', // Extra addition
      md: '976px',
      lg: '1080px',
      xl: '1200px'
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1.125'],
      '6xl': ['3.75rem', '1.25'],
      '7xl': ['4.5rem', '1.25']
    },
    fontFamily: {
      sans: ['Apercu', 'sans-serif'],
      serif: ['Lora', 'serif']
    },
    extend: {
      colors: {
        'primary-light': '#F0F9ED',
        primary: '#728D72',
        'primary-medium': '#1B7171',
        'primary-dark': '#1B331C',
        'secondary-light': '#E7F7FF',
        secondary: '#DCECFF',
        'secondary-dark': '#A4B4D5',
        accent: '#97711B'
      }
    }
  },
  plugins: []
}
