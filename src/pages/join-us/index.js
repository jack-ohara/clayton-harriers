import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const JoinUsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Join Us" />

      <PageHeader>Join Us</PageHeader>

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  )
}

export default JoinUsPage

export const pageQuery = graphql`
  query JoinUsPageQuery {
    wpPage(slug: { eq: "join" }) {
      content
    }
  }
`
