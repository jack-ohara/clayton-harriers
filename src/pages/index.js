import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardPreviews from "../components/cardPreviews"
import { graphql } from "gatsby"
import HorizontalRule from "../utils/styles/HorizontalRule"
import BackgroundImage from "gatsby-background-image"

const H1 = styled.h1`
  font-size: 2.8rem;
  z-index: 1;
  color: #c8c8c8;
  text-shadow: 2px 2px #959393;
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 1rem;
`

const BackgroundImageContainer = styled.div`
  section {
    padding: 2rem 0;
  }
`

const IndexPage = ({ data }) => {
  const postsData = data.postsData

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

      <BackgroundImageContainer>
        <BackgroundImage
          Tag="section"
          fluid={data.mobileImage.childImageSharp.fluid}
          backgroundColor={`#F8F8F8`}
        >
          <H1 style={{ textAlign: "left" }}>
            <i>Welcome to The Clayton-Le-Moors Harriers</i>
          </H1>
        </BackgroundImage>
      </BackgroundImageContainer>

      <HorizontalRule />

      <CardPreviews posts={posts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    postsData: allMarkdownRemark(
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
    mobileImage: file(relativePath: { eq: "clayton-runner-landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
