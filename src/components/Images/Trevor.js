import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const TrevorStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    trev: file(relativePath: { eq: "trevor-rounce.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 850) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Trevor = () => {
  const data = useStaticQuery(getData)
  const imageData = data.trev.childImageSharp.fluid
  return (
    <TrevorStyled>
      <Img fluid={imageData} alt="Trevor Rounce - Raising A Business Podcast" />
    </TrevorStyled>
  )
}

export default Trevor
