/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["EB Garamond", "serif"],
        sans: ["Outfit", "sans-serif"]
      },
      colors: {
        body: "#37503C",
        primary: "#5B8363",
        secondary: "#bcd1c0",
        background: "#F1EBE1"
      }
    }
  },
  plugins: []
};
