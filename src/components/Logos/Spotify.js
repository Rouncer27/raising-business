import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logo: file(relativePath: { eq: "spotify.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Spotify = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logo.childImageSharp.fluid
  return (
    <LogoStyled>
      <Img
        fluid={imageData}
        alt="Spotify Podcasts - Click to listen to Raising A Business Podcast"
      />
    </LogoStyled>
  )
}

export default Spotify
