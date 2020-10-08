module.exports = {
  siteMetadata: {
    title: `Raising a Business Podcast`,
    description: `This is a place where we will discuss what it is like to Raise a Business, as business owners trying to build something amazing, as a husband and wife team, as people strengthening relationships and growing as human beings.`,
    author: `@raisingabiz`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#276a39`,
        theme_color: `#276a39`,
        display: `minimal-ui`,
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
        token: "c220bb365fcd86c87a589ea79f0446a6",
        podcastId: "1395172",
      },
    },
  ],
}
