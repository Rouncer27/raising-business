import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const MeetBackgroundStyled = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    background: file(
      relativePath: { eq: "raising-a-business-meet-background.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 2500)
      }
    }
  }
`

const MeetBackground = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.background.childImageSharp.gatsbyImageData)
  return (
    <MeetBackgroundStyled>
      <GatsbyImage
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </MeetBackgroundStyled>
  )
}

export default MeetBackground
