import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const TemplateWrapper = styled.section`
  table {
    font-size: 0.85rem;
  }
  td,
  th {
    padding: 0.5rem 0.2rem;
  }
`

const WpPost = ({
  data: {
    wpPost: { title, content, id },
  },
}) => {
  console.log()
  return (
    <Layout>
      <TemplateWrapper>
        <Helmet titleTemplate="%s">
          <title>{`${title}`}</title>
        </Helmet>

        <h1>{title}</h1>

        <HorizontalRule />

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </TemplateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPost
