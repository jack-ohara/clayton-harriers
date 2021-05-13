import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const JuniorTrainingPage = ({ data: { wpPage } }) => {
  return (
    <Layout>
      <SEO title="Junior Training" />

      <h1>Junior Training</h1>

      <div dangerouslySetInnerHTML={{ __html: wpPage.content }} />
    </Layout>
  )
}

export default JuniorTrainingPage

export const pageQuery = graphql`
  query juniorTrainingPageQuery {
    wpPage(slug: { eq: "junior-training" }) {
      content
    }
  }
`
