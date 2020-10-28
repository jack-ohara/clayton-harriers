import { graphql } from "gatsby"
import React from "react"
import CardPreviews from "../../components/cardPreviews"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const RollOfHonourPage = ({ data }) => {
  const { allMarkdownRemark: postsData } = data

  const posts = postsData.edges.map(e => {
    let post = {}

    for (let key in e.node.frontmatter) {
      post[key] = e.node.frontmatter[key]
    }

    post["slug"] = e.node.fields.slug
    post["excerpt"] = e.node.excerpt

    return post
  })

  return (
    <Layout>
      <SEO title="Roll Of Honour" />

      <h1>Roll Of Honour</h1>
      <hr />

      <p>
        The runners in our club have achieved so many great things over the
        years and this page is here in recognition of those accolades.
      </p>

      <p>
        Below we've grouped together some of the achievements. This is an
        ever-growing list and no doubt, we've missed some people along the way.
        If you think you should be on any of the lists, please get in touch!
      </p>

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default RollOfHonourPage

export const pageQuery = graphql`
  query RollOfHonourPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { slug: { regex: "/roll-of-honour/" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            title
            date
            featuredImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
