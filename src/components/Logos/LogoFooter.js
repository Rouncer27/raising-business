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
    logo: file(relativePath: { eq: "raising-a-business-footer.png" }) {
      childImageSharp {
        gatsbyImageData(width: 850)
      }
    }
  }
`

const LogoFooter = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.logo.childImageSharp.gatsbyImageData)
  return (
    <LogoStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </LogoStyled>
  )
}

export default LogoFooter
