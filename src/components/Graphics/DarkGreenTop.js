import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
        gatsbyImageData(width: 2500)
      }
    }
  }
`

const DarkGreenTop = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.background.childImageSharp.gatsbyImageData)
  return (
    <DarkGreenTopStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </DarkGreenTopStyled>
  )
}

export default DarkGreenTop
