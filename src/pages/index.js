import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardScroller from "../components/card/card-scroll"
import { graphql } from "gatsby"
import { mapCardFields } from "../utils/wpPostMapper"

const HeroSection = styled.section`
  background: url("/clayton-runner-no-noise.png") center top no-repeat;
  min-height: calc(100vh - 40px);
  display: grid;
  grid-template-rows: minmax(63vh, 1fr) auto;
`

const H1 = styled.h1`
  font-size: 6rem;
  z-index: 1;
  color: var(--light-grey);
  text-shadow: 2px 2px var(--clayton-orange);
  font-family: "Raleway", sans-serif;
  margin: 0;
  padding: 0 1.0875rem;
  -webkit-text-stroke: 1px var(--dark-grey);

  @media (max-width: 775px) {
    font-size: 3.5rem;
  }
`

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 16rem 1rem 4rem;
`

const ContentWrapper = styled.div`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 2rem;
  border-radius: 2px;
  background: var(--light-grey);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  transform: skewX(-10deg);

  & > * {
    transform: skewX(10deg);
  }

  @media (max-width: 775px) {
    font-size: 3.5rem;
  }
`

const LatestUpdatesWrapper = styled.div`
  margin-top: 6rem;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    overflow-x: auto;
  }
`

const IndexPage = ({ data }) => {
  const latestPosts = data.latestPostsData.nodes.map(e => mapCardFields(e))

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection>
        <BannerTextContainer>
          <H1>Clayton-Le-Moors Harriers</H1>

          <ContentWrapper
            dangerouslySetInnerHTML={{ __html: data.homePageContent.content }}
          />
        </BannerTextContainer>

        <LatestUpdatesWrapper>
          <CardScroller title="Latest Updates" posts={latestPosts} />
        </LatestUpdatesWrapper>
      </HeroSection>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    latestPostsData: allWpPost(
      limit: 12
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
