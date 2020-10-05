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
    logo: file(relativePath: { eq: "raising-a-business-podcast.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 850) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logo.childImageSharp.fluid
  return (
    <LogoStyled>
      <Img fluid={imageData} alt="Raising A Business Podcast" />
    </LogoStyled>
  )
}

export default Logo
