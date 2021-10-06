import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import SimpleNavCard from "../../components/card/simpleNavCard"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

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

      <PageHeader>Training</PageHeader>

      <CardContainer>
        <SimpleNavCard
          slug="/training/senior"
          featuredImage={seniorPageFeaturedImage}
          title="Senior Training"
        />

        <SimpleNavCard
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
