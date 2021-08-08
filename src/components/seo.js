import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({ description = "", lang = "en", meta = [], title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={siteDate => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={
            siteDate.site.siteMetadata?.title
              ? `%s | ${siteDate.site.siteMetadata?.title}`
              : ""
          }
          meta={[
            {
              name: "description",
              content: description || siteDate.site.siteMetadata.description,
            },
            { property: "og:title", content: title },
            {
              property: "og:description",
              content: description || siteDate.site.siteMetadata.description,
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            {
              name: "twitter:creator",
              content: siteDate.site.siteMetadata?.author || ``,
            },
            { name: "twitter:title", content: title },
            {
              name: "twitter:description",
              content: description || siteDate.site.siteMetadata.description,
            },
          ].concat(meta)}
        />
      )}
    />
  )
}

export default SEO
