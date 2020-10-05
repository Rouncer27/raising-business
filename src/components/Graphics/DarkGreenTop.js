import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const DarkGreenTopStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    background: file(
      relativePath: { eq: "raising-a-business-background-dark-green.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const DarkGreenTop = () => {
  const data = useStaticQuery(getData)
  const imageData = data.background.childImageSharp.fluid
  return (
    <DarkGreenTopStyled>
      <Img fluid={imageData} alt="Raising A Business Podcast" />
    </DarkGreenTopStyled>
  )
}

export default DarkGreenTop
