import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

interface Props {
  description?: string
  lang?: string
  meta?:
    | React.DetailedHTMLProps<
        React.MetaHTMLAttributes<HTMLMetaElement>,
        HTMLMetaElement
      >[]
    | undefined
  title: string
}

export default function SEO({
  description = "",
  lang = "en",
  meta = [],
  title,
}: Props) {
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
      render={siteDate => {
        const defaultMeta:
          | React.DetailedHTMLProps<
              React.MetaHTMLAttributes<HTMLMetaElement>,
              HTMLMetaElement
            >[]
          | undefined = [
          {
            name: "description",
            content: description || siteDate.site.siteMetadata.description,
          },
          {
            property: "og:image",
            content:
              "https://claytonlemoors.org.uk/clayton-runner-no-noise.png",
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
        ]

        return (
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
            meta={meta ? meta.concat(defaultMeta) : defaultMeta}
          >
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Helmet>
        )
      }}
    />
  )
}
