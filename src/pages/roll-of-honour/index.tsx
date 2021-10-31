import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import HorizontalRule from "../../utils/styles/HorizontalRule.js"
import styled from "styled-components"
import SimpleNavCard from "../../components/card/simpleNavCard"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { FeaturedImage } from "../../types/WpSharedTypes"

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const RohNavCard = styled(SimpleNavCard)`
  height: 300px;

  img {
    object-fit: cover;
    object-position: 50% 50%;
  }
`

interface Props {
  data: {
    allWpPage: {
      nodes: {
        title: string;
        slug: string;
        featuredImage: FeaturedImage
      }[]
    }
  }
}

const RollOfHonourPage = ({ data }: Props) => {
  const getFeaturedImage = (featuredImage: FeaturedImage) => {
    if (featuredImage) {
      return {
        image: getImage(featuredImage?.node.localFile),
        alt: featuredImage?.node.altText,
      }
    }

    return null
  }

  const getSlug = (pageSlug: string): string => {
    if (typeof window !== "undefined") {
      return `${window.location.pathname.replace(
        /(^.+)(\/)$/,
        "$1"
      )}/${pageSlug}`
    }

    return ""
  }

  return (
    <Layout>
      <SEO title="Roll Of Honour" />

      <PageHeader>Roll Of Honour</PageHeader>
      <HorizontalRule />

      Hello world
      <p>
        The runners in our club have achieved so many great things over the
        years and this page is here in recognition of those accolades.
      </p>

      <p>
        Below we've grouped together some of the achievements. This is an
        ever-growing list and no doubt, we've missed some people along the way.
        If you think you should be on any of the lists, please get in touch!
      </p>

      <CardContainer>
        {data.allWpPage.nodes.map((e, idx) => (
          <RohNavCard
            title={e.title}
            featuredImage={getFeaturedImage(e.featuredImage)}
            slug={getSlug(e.slug)}
            key={`roll-of-honour_${idx}`}
          />
        ))}
      </CardContainer>
    </Layout>
  )
}

export default RollOfHonourPage

export const pageQuery = graphql`
  query RollOfHonourPageQuery {
    allWpPage(
      filter: { uri: { regex: "/^/roll-of-honour/.+$/" } }
      sort: { fields: modified, order: ASC }
    ) {
      nodes {
        title
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
