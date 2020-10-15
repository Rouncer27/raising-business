import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      latestEpisode: allBuzzsproutPodcastEpisode(
        limit: 1
        filter: { private: { eq: false } }
      ) {
        edges {
          node {
            artist
            artwork_url
            audio_url
            title
            slug
          }
        }
      }
    }
  `)
  const children = props.children
  return (
    <>
      <GlobalStyles />

      <Header
        location={props.location}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        latestEpisode={data.latestEpisode.edges[0]}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
