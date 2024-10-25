import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Script } from "gatsby"
import SchemaOrg from "./SchemaOrg"

function SEO({ description, lang, meta, title, metaImg, location }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitter
            siteLogo
            metaImg
            siteUrl
          }
        }
        siteLogo: file(relativePath: { eq: "raising-a-business-footer.png" }) {
          publicURL
        }

        defaultFb: file(
          relativePath: { eq: "Raising-a-business-seo-meta-image.png" }
        ) {
          publicURL
        }
      }
    `
  )

  const language = lang ? lang : "en"

  const isBlogPost = false

  const siteLogoUrl = `${site.siteMetadata.siteUrl}${siteLogo.publicURL}`
  const defaultSocialMetaImage = `${site.siteMetadata.siteUrl}${defaultFb.publicURL}`
  // Check and see if there is a page specific description, it there is us it, if not use the default one.
  const metaDescription = description
    ? description
    : site.siteMetadata.description
  // Check and see if there is a page specific meta seo image, it there is us it, if not use the default one.
  const socialShareImage = metaImg ? metaImg : defaultSocialMetaImage
  // Get the canonical url and if there is a location passed in for specific pages, add that to the end of it. //
  const canonicalUrl = `${site.siteMetadata.siteUrl}${
    location !== undefined ? location : ""
  }`

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${site.siteMetadata.title}`}
        htmlAttributes={{ lang: language }}
      >
        <title>{title}</title>
        {/* Fav Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content={metaDescription} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={socialShareImage} />
        <meta property="og:image:alt" content={metaDescription} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={`en_US`} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={socialShareImage} />
      </Helmet>
      <SchemaOrg
        isBlogPost={false}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={siteLogoUrl}
        logo={siteLogoUrl}
        description={description}
        datePublished="October 15, 2020"
        canonicalUrl="https://raisingabusiness.com/"
        author=""
        organization={site.siteMetadata.title}
        defaultTitle={site.siteMetadata.title}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
