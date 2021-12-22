// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Apercu', 'sans-serif'],
      serif: ['Canela', 'serif']
    }
  },
  plugins: [require('tailwind-plugin-line-clamp')]
}
