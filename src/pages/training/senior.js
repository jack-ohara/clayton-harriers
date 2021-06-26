import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const SeniorTrainingPage = ({ data: { wpPage } }) => {
  return (
    <Layout>
      <SEO title="Senior Training" />

      <PageHeader>Senior Training</PageHeader>

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
