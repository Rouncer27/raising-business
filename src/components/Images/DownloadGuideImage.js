import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const DownloadGuideImageStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    download: file(relativePath: { eq: "5-tips-to-drive-biz-cover.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1500)
      }
    }
  }
`

const DownloadGuideImage = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.download.childImageSharp.gatsbyImageData)
  return (
    <DownloadGuideImageStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </DownloadGuideImageStyled>
  )
}

export default DownloadGuideImage
