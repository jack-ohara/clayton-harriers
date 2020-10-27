import React from "react"
import { graphql } from "gatsby"
import CardPreviews from "../../components/cardPreviews"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const NewsPage = ({ data }) => {
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
      <SEO title="News &amp; Info" />

      <h1>News &amp; Info</h1>

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query LastestNewsPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            author
            title
            date
            tags
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