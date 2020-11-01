import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description = "", lang = "en", meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: site.siteMetadata?.author || `` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: metaDescription },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2"
        as="font"
        crossorigin
      />
      <link
        rel="preload"
        href="https://fonts.gstatic.com/s/timmana/v5/6xKvdShfL9yK-rvpOmzRKQ.woff2"
        as="font"
        crossorigin
      />
    </Helmet>
  )
}

export default SEO
