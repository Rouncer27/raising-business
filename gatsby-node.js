const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        allEpisodes: allBuzzsproutPodcastEpisode(
          filter: { private: { eq: false } }
        ) {
          edges {
            node {
              id
              slug
              private
            }
          }
        }
      }
    `)

    const episodes = data.allEpisodes.edges
    episodes.forEach(({ node }) => {
      createPage({
        path: `/episodes/${node.slug}`,
        component: path.resolve(`./src/templates/Episode.js`),
        context: {
          id: node.id,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving data", err)
  }
}
