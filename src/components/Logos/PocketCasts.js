import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logo: file(relativePath: { eq: "PocketCasts.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`

const PocketCasts = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.logo.childImageSharp.gatsbyImageData)
  return (
    <LogoStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="PocketCasts - Click to listen to Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </LogoStyled>
  )
}

export default PocketCasts
