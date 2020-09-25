import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

class NamedMetaObject {
  name: string
  content: string

  constructor(name: string, content: string) {
    this.name = name
    this.content = content
  }
}

class MetaObjectWithProperty {
  property: string
  content: string

  constructor(property: string, content: string) {
    this.property = property
    this.content = content
  }
}

type SeoProps = {
  description?: string
  lang?: string
  meta?: (NamedMetaObject | MetaObjectWithProperty)[]
  title: string
}

const SEO: FunctionComponent<SeoProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
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
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        new NamedMetaObject(`description`, metaDescription),
        new MetaObjectWithProperty("og:title", title),
        new MetaObjectWithProperty("og:description", metaDescription),
        new MetaObjectWithProperty("og:type", "website"),
        new NamedMetaObject(`twitter:card`, "summary"),
        new NamedMetaObject(`creator`, site.siteMetadata?.author || ``),
        new NamedMetaObject(`title`, title),
        new NamedMetaObject(`description`, metaDescription),
      ].concat(meta)}
    />
  )
}

export default SEO
