import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardPreviews from "../components/cardPreviews"
import { graphql, Link } from "gatsby"
import HorizontalRule from "../utils/styles/HorizontalRule"
import BackgroundImage from "gatsby-background-image"

const H1 = styled.h1`
  font-size: 2.6rem;
  z-index: 1;
  color: ${props => props.theme.colours.lightGrey};
  text-shadow: 2px 2px ${props => props.theme.colours.orange};
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0 1.0875rem;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  padding-top: 4.8rem;

  * {
    text-align: center;
  }
`

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  padding: 0.5rem 1.1rem;
  background: ${props => props.theme.colours.lightGrey};
  border-radius: 3px;
  margin: 0.5rem auto 0.5rem auto;
  color: ${props => props.theme.colours.orange};
  text-decoration: none;
`

const StyledHR = styled(HorizontalRule)`
  margin: 1.45rem 0;
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

  const backgroundImage = (
    <StyledBackgroundImage
      Tag="section"
      fluid={data.mobileImage.childImageSharp.fluid}
      backgroundColor={`#F8F8F8`}
    >
      <BannerTextContainer>
        <H1>Clayton-Le-Moors Harriers</H1>

        <StyledLink to="/join-us">Join Us</StyledLink>
      </BannerTextContainer>
    </StyledBackgroundImage>
  )

  return (
    <Layout bannerImage={backgroundImage}>
      <SEO title="Home" />

      <StyledHR />

      <h3>Latest Updates</h3>
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
