import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import HoriztonalCardScroll from "../components/horizontalCardScroll"
import { graphql, Link } from "gatsby"
import { mapCardFields } from "../utils/wpPostMapper"

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
  min-height: 235px;

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

const StyledHR = styled.hr`
  margin: 1.45rem 2rem;
`

const ContentWrapper = styled.div`
  margin-bottom: 1.45em;
`

const IndexPage = ({ data }) => {
  const latestPosts = data.latestPostsData.nodes.map(e => mapCardFields(e))

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

      <ContentWrapper
        dangerouslySetInnerHTML={{ __html: data.homePageContent.content }}
      />

      <HoriztonalCardScroll
        title="Latest Updates"
        posts={latestPosts}
        useDefaultCardImage
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    latestPostsData: allWpPost(
      limit: 8
      sort: { fields: date, order: DESC }
      filter: { status: { eq: "publish" } }
    ) {
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
    homePageContent: wpPage(slug: { eq: "new-site-home-page" }) {
      content
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
