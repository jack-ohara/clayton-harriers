import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardPreviews from "../components/cardPreviews"
import { graphql } from "gatsby"

const H1 = styled.h1`
  font-size: 13vw;
  z-index: 1;
  color: #c8c8c8;
  text-shadow: 2px 2px #959393;
  font-family: "Timmana", sans-serif;
  margin: 0;
  grid-area: 1 / 1 / 2 / 1;
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
      <H1>
        We Are The
        <br />
        Clayton-Le-Moors <br /> Harriers
      </H1>

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LastestPostsQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            author
            title
            date
            tags
            featuredimage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
