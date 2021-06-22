import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import HorizontalRule from "../../utils/styles/HorizontalRule.js"
import styled from "styled-components"
import SimpleNavCard from "../../components/card/simpleNavCard"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const RollOfHonourPage = ({ data }) => {
  const getFeaturedImage = featuredImage => {
    if (featuredImage) {
      return {
        image: getImage(featuredImage?.node.localFile),
        alt: featuredImage?.node.altText,
      }
    }

    return {
      image: data.defaultFeaturedImage.childImageSharp.gatsbyImageData,
      alt: "Clayton-le-moors Harriers logo",
    }
  }

  const getSlug = pageSlug => {
    if (typeof window !== "undefined") {
      return `${window.location.pathname}/${pageSlug}`
    }

    return ""
  }

  return (
    <Layout>
      <SEO title="Roll Of Honour" />

      <PageHeader>Roll Of Honour</PageHeader>
      <HorizontalRule />

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
          <SimpleNavCard
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
    allWpPage(filter: { uri: { regex: "/^/roll-of-honour/.+$/" } }) {
      nodes {
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
            altText
          }
        }
      }
    }
    defaultFeaturedImage: file(
      relativePath: { eq: "harriers-logo-transparent.png" }
    ) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], placeholder: BLURRED)
      }
    }
  }
`

// export const pageQuery = graphql`
//   query RollOfHonourPostsQuery {
//     allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: DESC }
//       filter: { fields: { slug: { regex: "/roll-of-honour/" } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 300)
//           frontmatter {
//             title
//             date
//             featuredImage
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
