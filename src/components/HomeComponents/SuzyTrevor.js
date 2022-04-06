import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const SuzyTrevorStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    suzytrev: file(relativePath: { eq: "suzy-trevor.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`

const SuzyTrevor = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.suzytrev.childImageSharp.gatsbyImageData)
  return (
    <SuzyTrevorStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </SuzyTrevorStyled>
  )
}

export default SuzyTrevor
