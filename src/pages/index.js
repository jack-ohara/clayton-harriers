import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardPreviews from "../components/cardPreviews"
import { graphql } from "gatsby"

const H1 = styled.h1`
  font-size: 2.7rem;
  z-index: 1;
  color: #c8c8c8;
  text-shadow: 2px 2px #959393;
  font-family: "Raleway", sans-serif;
  margin-top: 17px;
`

const IndexPage = ({ data }) => {
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
      <SEO title="Home" />
      <H1 style={{ textAlign: "left" }}>
        <i>Welcome to The Clayton-Le-Moors Harriers</i>
      </H1>

      <hr />

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LastestPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 8
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
