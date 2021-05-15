import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import { graphql } from "gatsby"

const TemplateWrapper = styled.section`
  table {
    font-size: 0.85rem;
  }
  td,
  th {
    padding: 0.5rem 0.2rem;
  }
`

const WpPage = ({
  data: {
    wpPage: { title, content, id },
  },
}) => {
  console.log()
  return (
    <Layout>
      <TemplateWrapper>
        <SEO title={title} />

        <h1>{title}</h1>

        <HorizontalRule />

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </TemplateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default WpPage
