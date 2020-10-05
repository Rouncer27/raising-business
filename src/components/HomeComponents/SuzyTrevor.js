import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const SuzyTrevorStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    suzytrev: file(relativePath: { eq: "suzy-trevor.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const SuzyTrevor = () => {
  const data = useStaticQuery(getData)
  const imageData = data.suzytrev.childImageSharp.fluid
  return (
    <SuzyTrevorStyled>
      <Img
        fluid={imageData}
        alt="Suzy and Trevor - Raising A Business Podcast"
      />
    </SuzyTrevorStyled>
  )
}

export default SuzyTrevor
