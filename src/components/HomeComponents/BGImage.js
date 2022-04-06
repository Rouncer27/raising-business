import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const BGImageStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    background: file(
      relativePath: { eq: "raising-a-business-background.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 2500)
      }
    }
  }
`

const BGImage = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.background.childImageSharp.gatsbyImageData)
  return (
    <BGImageStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </BGImageStyled>
  )
}

export default BGImage
