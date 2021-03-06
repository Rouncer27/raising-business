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
    logo: file(relativePath: { eq: "apple-podcasts.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Apple = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logo.childImageSharp.fluid
  return (
    <LogoStyled>
      <Img
        fluid={imageData}
        alt="Apple Podcasts - Click to listen to Raising A Business Podcast"
      />
    </LogoStyled>
  )
}

export default Apple
