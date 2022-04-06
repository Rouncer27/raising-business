import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"

const SuzyStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    suzy: file(relativePath: { eq: "suzy-rounce.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1250)
      }
    }
  }
`

const Suzy = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.suzy.childImageSharp.gatsbyImageData)

  return (
    <SuzyStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Suzy Rounce - Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </SuzyStyled>
  )
}

export default Suzy
