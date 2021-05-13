import React, { useState, useEffect } from "react"
import CardPreviews from "../../components/cardPreviews"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"
import { mapCardFields } from "../../utils/wpPostMapper"
import { useInView } from "react-intersection-observer"

const StyledHR = styled.hr`
  margin: 1.45rem 2rem;
`

const postsBlockSize = 10

const NewsPage = ({ data }) => {
  const [posts, setPosts] = useState(
    data.allWpPost.nodes.slice(0, postsBlockSize).map(e => mapCardFields(e))
  )
  const [postsRevealed, setPostsRevealed] = useState(postsBlockSize)
  const [ref, inView] = useInView({})

  useEffect(() => {
    loadMorePosts()
  }, [inView])

  const loadMorePosts = () => {
    const nextPosts = data.allWpPost.nodes
      .slice(postsRevealed, postsRevealed + postsBlockSize)
      .map(e => mapCardFields(e))

    setPosts(prevPosts => [...prevPosts, ...nextPosts])
    setPostsRevealed(prev => prev + postsBlockSize)
  }

  return (
    <Layout>
      <SEO title="News &amp; Info" />

      <h1>News &amp; Info</h1>

      <StyledHR />

      <CardPreviews posts={posts} />

      <div ref={ref} />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query LastestNewsPostsQuery {
    allWpPost(sort: { fields: date, order: DESC }) {
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
