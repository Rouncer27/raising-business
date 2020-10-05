import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const SuzyStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    suzy: file(relativePath: { eq: "suzy-rounce.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 850) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Suzy = () => {
  const data = useStaticQuery(getData)
  const imageData = data.suzy.childImageSharp.fluid
  return (
    <SuzyStyled>
      <Img fluid={imageData} alt="Suzy Rounce - Raising A Business Podcast" />
    </SuzyStyled>
  )
}

export default Suzy
