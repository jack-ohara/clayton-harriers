import React from "react"
import styled from "styled-components"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import Content from "../components/content"

const TemplateWrapper = styled.section`
  table {
    font-size: 0.85rem;
  }

  td,
  th {
    padding: 0.5rem 0.2rem;
  }
`

const DefaultPageTemplate = ({ content, contentComponent, title, helmet }) => {
  const PostContent = contentComponent || Content

  return (
    <TemplateWrapper>
      {helmet || ""}
      <h1>{title}</h1>
      <HorizontalRule />
      <PostContent content={content} />
    </TemplateWrapper>
  )
}

export default DefaultPageTemplate
