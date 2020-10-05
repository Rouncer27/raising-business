import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const MeetBackground = () => {
  const data = useStaticQuery(getData)
  const imageData = data.background.childImageSharp.fluid
  return (
    <MeetBackgroundStyled>
      <Img fluid={imageData} alt="Raising A Business Podcast" />
    </MeetBackgroundStyled>
  )
}

export default MeetBackground
