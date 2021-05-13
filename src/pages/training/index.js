import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const StyledLink = styled(Link)`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 90vw;
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.03);
  }
`

const CardHeading = styled.h3`
  margin: 0.2em 0 0.5em 0;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const NavCard = ({ title, featuredImage, slug }) => {
  return (
    <StyledLink to={slug}>
      <CardHeading>{title}</CardHeading>
      <GatsbyImage image={featuredImage.image} alt={featuredImage.alt} />
    </StyledLink>
  )
}

const TrainingPage = ({ data }) => {
  const getFeaturedImage = wpPage => {
    return {
      image: getImage(wpPage.featuredImage?.node.localFile),
      altText: wpPage.featuredImage?.node.altText,
    }
  }

  const seniorPageFeaturedImage = getFeaturedImage(
    data.allWpPage.nodes.find(e => e.slug === "training")
  )
  const juniorPageFeaturedImage = getFeaturedImage(
    data.allWpPage.nodes.find(e => e.slug === "junior-training")
  )

  return (
    <Layout>
      <SEO title="Training" />

      <h1>Training</h1>

      <CardContainer>
        <NavCard
          slug="/training/senior"
          featuredImage={seniorPageFeaturedImage}
          title="Senior Training"
        />

        <NavCard
          slug="/training/junior"
          featuredImage={juniorPageFeaturedImage}
          title="Junior Training"
        />
      </CardContainer>
    </Layout>
  )
}

export default TrainingPage

export const pageQuery = graphql`
  query TrainingIndexPageQuery {
    allWpPage(filter: { slug: { in: ["training", "junior-training"] } }) {
      nodes {
        slug
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
      }
    }
  }
`
