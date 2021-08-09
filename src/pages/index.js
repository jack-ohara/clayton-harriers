import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundBanner from "../components/background-banner"
import HoriztonalCardScroll from "../components/horizontalCardScroll"
import { graphql, Link } from "gatsby"
import { mapCardFields } from "../utils/wpPostMapper"

const H1 = styled.h1`
  font-size: calc(2.4rem + 2vw);
  z-index: 1;
  color: ${props => props.theme.colours.lightGrey};
  text-shadow: 2px 2px ${props => props.theme.colours.orange};
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0 1.0875rem;
`

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const StyledLink = styled(Link)`
  padding: 0.5rem 1.1rem;
  background: ${props => props.theme.colours.lightGrey};
  border-radius: 3px;
  margin: 0.5rem auto 0.5rem auto;
  color: ${props => props.theme.colours.orange};
  text-decoration: none;
`

const ContentWrapper = styled.div`
  margin-top: 1.45em;
  margin-bottom: 1.45em;
`

const IndexPage = ({ data }) => {
  const latestPosts = data.latestPostsData.nodes.map(e => mapCardFields(e))

  const backgroundImage = (
    <BackgroundBanner>
      <BannerTextContainer>
        <H1>Clayton-Le-Moors Harriers</H1>

        <StyledLink to="/join-us">Join Us</StyledLink>
      </BannerTextContainer>
    </BackgroundBanner>
  )

  return (
    <Layout bannerImage={backgroundImage}>
      <SEO title="Home" />

      <ContentWrapper
        dangerouslySetInnerHTML={{ __html: data.homePageContent.content }}
      />

      <HoriztonalCardScroll title="Latest Updates" posts={latestPosts} />
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
  }
`
