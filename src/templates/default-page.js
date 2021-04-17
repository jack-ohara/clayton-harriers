import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { HTMLContent } from "../components/content"
import { Helmet } from "react-helmet"
import DefaultPageTemplate from "../template-page-content/default-page-template"

const DefaultTemplatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DefaultPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default DefaultTemplatePage

export const pageQuery = graphql`
  query GetContentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
