import React, { useEffect } from "react"
import styled from "styled-components"
import Layout, { PageHeader } from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { addFormHandling } from "../utils/cf7-forms"

interface QueryResult {
  data: {
    wpPage: {
      title: string
      content: string
    }
  }
}

const TemplateWrapper = styled.section`
  td,
  th {
    padding: 0.5rem 0.2rem;
  }
`

const WpPage = ({
  data: {
    wpPage: { title, content },
  },
}: QueryResult) => {
  useEffect(() => {
    const cf7Form = document.querySelector(
      "form.wpcf7-form"
    ) as HTMLFormElement | null

    if (cf7Form) {
      addFormHandling(cf7Form)
    }
  }, [])

  return (
    <Layout>
      <TemplateWrapper>
        <SEO title={title} />

        <PageHeader>{title}</PageHeader>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </TemplateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
`

export default WpPage
