const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Raising a Business Podcast`,
    description: `This is a place where we will discuss what it is like to Raise a Business, as business owners trying to build something amazing, as a husband and wife team, as people strengthening relationships and growing as human beings.`,
    twitter: `@raisingabiz`,
    metaImg: `src/images/Raising-a-business-seo-meta-image.png`,
    siteLogo: `src/images/raising-a-business-footer.png`,
    siteUrl: `https://raisingabusiness.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raising A Business Podcast`,
        description: "Raising A Business Podcast. Everyone has a story.",
        short_name: `RABPodcast`,
        start_url: `/`,
        background_color: `#276a39`,
        theme_color: `#276a39`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://raisingabusiness.us2.list-manage.com/subscribe/post?u=22169751809ea4e2554316ccc&amp;id=310bea4c16",
      },
    },
    {
      resolve: "gatsby-source-buzzsprout",
      options: {
        token: process.env.BUZZSPROUT_TOKEN,
        podcastId: process.env.BUZZSPROUT_ID,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_URL,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://raisingabusiness.com/",
        sitemap: "https://raisingabusiness.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://raisingabusiness.com/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-PMXLMD36X9"],
      },
      pluginConfig: {
        head: true,
      },
    },
  ],
}
