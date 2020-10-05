import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BGImage from "gatsby-background-image"

const getData = graphql`
  {
    background: file(
      relativePath: { eq: "raising-a-business-background.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BackgroundImage = () => {
  const data = useStaticQuery(getData)
  const imageData = data.background.childImageSharp.fluid
  return (
    <>
      <BGImage className="mainbgImage" tag="div" fluid={imageData} />
    </>
  )
}

export default BackgroundImage
