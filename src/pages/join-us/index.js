import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

const JoinUsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Join Us" />

      <h1>Join Us</h1>

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
