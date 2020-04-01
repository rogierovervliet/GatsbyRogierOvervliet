require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Rogier Overvliet`,
    description: `Sociaal, betrouwbaar, verbindend & innovatief Wat heb ik te bieden? Personal Branding Hoe zie ik eruit? hoe kom ik voor de dag?  Als wij eerlijk zijn, doen jij en ik dit elke dag. We stellen onszelf meerdere keren per dag de vraag of wij wel de goede kleding aanhebben, of we wel het goede outfit … "home" verder lezen`,
    author: `Roland Branten`,
    siteUrl: `https://rogierovervliet.nl/`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "lw6wxlgx",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rogier Overvliet`,
        short_name: `Rogier`,
        start_url: `/`,
        background_color: `#424288`,
        theme_color: `#424288`,
        display: `standalone`,
        icon: `icon/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./sw-range-request-handler`)
      }
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ]
};
