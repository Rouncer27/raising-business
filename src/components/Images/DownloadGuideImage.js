import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const DownloadGuideImageStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    download: file(relativePath: { eq: "5-tips-to-drive-biz-cover.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const DownloadGuideImage = () => {
  const data = useStaticQuery(getData)
  const imageData = data.download.childImageSharp.fluid
  return (
    <DownloadGuideImageStyled>
      <Img
        fluid={imageData}
        alt="Download Guide - Raising A Business Podcast"
      />
    </DownloadGuideImageStyled>
  )
}

export default DownloadGuideImage
