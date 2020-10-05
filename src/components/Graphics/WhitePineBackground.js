import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BGImage from "gatsby-background-image"

const getData = graphql`
  {
    background: file(relativePath: { eq: "whitepine-tree-background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const WhitePineBackground = () => {
  const data = useStaticQuery(getData)
  const imageData = data.background.childImageSharp.fluid
  return (
    <>
      <BGImage className="mainbgImage" tag="div" fluid={imageData} />
    </>
  )
}

export default WhitePineBackground
