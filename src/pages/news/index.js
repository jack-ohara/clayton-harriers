import React, { useState, useEffect } from "react"
import NewsPreviews from "../../components/news/newsPreviews"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import { mapCardFields } from "../../utils/wpPostMapper"
import { useInView } from "react-intersection-observer"

const postsBlockSize = 10

const NewsPage = ({ data }) => {
  const [posts, setPosts] = useState(
    data.allWpPost.nodes
      .slice(0, postsBlockSize)
      .map(e => mapCardFields(e, "/news"))
  )
  const [postsRevealed, setPostsRevealed] = useState(postsBlockSize)
  const [ref, inView] = useInView({})

  useEffect(() => {
    loadMorePosts()
  }, [inView])

  const loadMorePosts = () => {
    let nextPosts = data.allWpPost.nodes.slice(
      postsRevealed,
      postsRevealed + postsBlockSize
    )

    nextPosts = nextPosts.map(e => mapCardFields(e, "/news"))

    setPosts(prevPosts => [...prevPosts, ...nextPosts])
    setPostsRevealed(prev => prev + postsBlockSize)
  }

  return (
    <Layout>
      <SEO title="News &amp; Info" />

      <div>
        <PageHeader>News &amp; Info</PageHeader>

        <NewsPreviews posts={posts} />
      </div>

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
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
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
