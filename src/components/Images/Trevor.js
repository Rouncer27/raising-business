import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const TrevorStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    trev: file(relativePath: { eq: "trevor-rounce.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1250)
      }
    }
  }
`

const Trevor = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.trev.childImageSharp.gatsbyImageData)
  return (
    <TrevorStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Trevor Rounce - Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </TrevorStyled>
  )
}

export default Trevor
