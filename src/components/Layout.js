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
    }
  `)
  const children = props.children

  return (
    <>
      <GlobalStyles />

      <Header
        location={props.location}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
