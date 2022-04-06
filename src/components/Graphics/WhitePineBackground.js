import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getData = graphql`
  {
    background: file(relativePath: { eq: "whitepine-tree-background.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2500)
      }
    }
  }
`

const WhitePineBackground = () => {
  const data = useStaticQuery(getData)
  const imageDisplay = getImage(data.background.childImageSharp.gatsbyImageData)
  return (
    <>
      <GatsbyImage
        className="mainbgImage"
        image={imageDisplay}
        alt="Raising A Business Podcast"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    </>
  )
}

export default WhitePineBackground
