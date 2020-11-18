import React from "react"

import SEO from "../components/SEO"
import ContentIntro from "../components/DownloadGuide/ContentIntro"
import MobileNav from "../components/MobileNav/MobileNav"

const DownloadGuide = props => {
  return (
    <>
      <SEO title="Raising a Business Podcast - Download Guide" />
      <MobileNav />
      <ContentIntro />
    </>
  )
}

export default DownloadGuide
