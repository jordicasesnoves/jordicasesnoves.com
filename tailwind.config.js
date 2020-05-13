// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Work\\ Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        "7": "1.75rem",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
        "hover-text": "var(--text-hover)",
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#767676",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
