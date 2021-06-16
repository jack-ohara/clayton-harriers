import React from "react"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import { graphql } from "gatsby"
import { WpPageQueryResult } from "../../types/WpPage.js"

interface Props {
  data: WpPageQueryResult
}

export default function FixturesPage({ data }: Props) {
  return (
    <Layout>
      <SEO title="Fixtures &amp; Results" />

      <h1>Fixtures &amp; Results</h1>

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query FixturesPageQuery {
    wpPage(slug: { eq: "fixtures-and-results" }) {
      content
    }
  }
`

// An example query for getting the events from the graphql schema:
//
// query MyQuery {
//   allWpEvent {
//     nodes {
//       link
//       slug
//       title
//       startDate
//       endDate
//       showMap
//       showMapLink
//       linkedData {
//         organizer {
//           name
//         }
//       }
//       timezone
//       uri
//       url
//       author {
//         node {
//           firstName
//           lastName
//           uri
//         }
//       }
//     }
//   }
// }
