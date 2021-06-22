import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const JuniorsHomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Juniors" />

      <PageHeader>Clayton-le-moors Harriers Juniors</PageHeader>

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </Layout>
  )
}

export default JuniorsHomePage

export const pageQuery = graphql`
  query JuniorsHomePageQuery {
    wpPage(slug: { eq: "junior" }) {
      content
    }
  }
`
