import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const SeniorTrainingPage = ({ data: { wpPage } }) => {
  return (
    <Layout>
      <SEO title="Senior Training" />

      <h1>Senior Training</h1>

      <div dangerouslySetInnerHTML={{ __html: wpPage.content }} />
    </Layout>
  )
}

export default SeniorTrainingPage

export const pageQuery = graphql`
  query seniorTrainingPageQuery {
    wpPage(slug: { eq: "training" }) {
      content
    }
  }
`
