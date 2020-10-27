import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/content"
import { Helmet } from "react-helmet"

export const DefaultTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ""}
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <hr />
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

const DefaultTemplatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DefaultTemplate
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