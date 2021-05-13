import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const JuniorsHomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Juniors" />

      <h1>Clayton-le-moors Harriers Juniors</h1>

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
