import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

const BackgroundImage = () => {
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

export default BackgroundImage
