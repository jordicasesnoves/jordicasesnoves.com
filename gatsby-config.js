require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Jordi Casesnoves - Front-end Developer`,
    description: `Front-end developer based in Valencia (Spain)`,
    author: `@jordicasesnoves`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.GATSBY_SEGMENT_PROD_KEY,
        devKey: process.env.GATSBY_SEGMENT_DEV_KEY,
        trackPage: true,
        delayLoad: true,
        delayLoadTime: 1000,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jordi-casesnoves`,
        short_name: `jordi-cases`,
        start_url: `/`,
        background_color: "#ffffff",
        theme_color: "#49BA78",
        display: `minimal-ui`,
        icon: `src/images/jordi-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
