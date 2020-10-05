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
    logo: file(relativePath: { eq: "icon-instagram.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logo.childImageSharp.fluid
  return (
    <LogoStyled>
      <Img
        fluid={imageData}
        alt="Instagram Account - Raising A Business Podcast"
      />
    </LogoStyled>
  )
}

export default Instagram
