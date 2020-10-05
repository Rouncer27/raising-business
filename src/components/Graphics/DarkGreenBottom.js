import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const DarkGreenBottomStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    background: file(
      relativePath: { eq: "raising-a-business-dark-bottom.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const DarkGreenBottom = () => {
  const data = useStaticQuery(getData)
  const imageData = data.background.childImageSharp.fluid
  return (
    <DarkGreenBottomStyled>
      <Img fluid={imageData} alt="Raising A Business Podcast" />
    </DarkGreenBottomStyled>
  )
}

export default DarkGreenBottom
