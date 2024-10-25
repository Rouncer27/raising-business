import React from "react"
import { useStaticQuery, graphql, Script } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import CookieConsent from "./Cookies/CookieConsent"
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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PMXLMD36X9"
      />
      <Script src="./scripts/ga.js" />
      <Script src="./scripts/cookies.js" />
      <GlobalStyles />

      <Header
        location={props.location}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        latestEpisode={data.latestEpisode.edges[0]}
      />

      <main>{children}</main>
      <CookieConsent />
      <Footer />
    </>
  )
}

export default Layout
