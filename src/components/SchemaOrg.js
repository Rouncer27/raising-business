import React from "react"
import { Helmet } from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "CreativeWork",
        "@id": "https://raisingabusiness.com/",
        name: "Raising A Business Podcast",
        alternateName: "Raising A Business Podcast",
        image: logo,
        telephone: "",
        email: "hello@raisingabusiness.com",
        sameAs: [
          "https://www.instagram.com/raisingabiz/",
          "https://twitter.com/raisingabiz",
        ],
        url: "https://raisingabusiness.com/",
        description: description,
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
