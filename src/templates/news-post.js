import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/content"
import { Helmet } from "react-helmet"
import { kebabCase } from "lodash"
import styled from "styled-components"

const HorizontalRule = styled.hr`
  background: linear-gradient(
    90deg,
    #bbbbbb 25%,
    ${props => props.theme.colours.lightGrey} 100%
  );
`

export const NewsPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  author,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ""}
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <h4>
              {author} | {date}
            </h4>
            <HorizontalRule />
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | News">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        tags
        author
      }
    }
  }
`
