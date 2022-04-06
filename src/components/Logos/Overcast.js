import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LogoStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logo: file(relativePath: { eq: "Overcast.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`

const Overcast = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.logo.childImageSharp.gatsbyImageData)
  return (
    <LogoStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Overcast Podcasts - Click to listen to Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </LogoStyled>
  )
}

export default Overcast
