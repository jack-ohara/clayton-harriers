import React from "react"
import CardPreviews from "../../components/cardPreviews"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"
import { mapCardFields } from "../../utils/wpPostMapper"

const StyledHR = styled.hr`
  margin: 1.45rem 2rem;
`

const NewsPage = ({ data }) => {
  console.log(data)
  const posts = data.allWpPost.nodes.map(e => mapCardFields(e))

  return (
    <Layout>
      <SEO title="News &amp; Info" />

      <h1>News &amp; Info</h1>

      <StyledHR />

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query LastestNewsPostsQuery {
    allWpPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        title
        uri
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              publicURL
            }
            altText
          }
        }
        lastEditedBy {
          node {
            name
          }
        }
        content
        excerpt
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
`
