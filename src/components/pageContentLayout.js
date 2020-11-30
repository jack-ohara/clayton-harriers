import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1,
  h2,
  h3 {
    text-align: center;
  }
`

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
`
const PageContentLayout = ({ children }) => {
  return (
    <ContentWrapper>
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()} Clayton-Le-Moors Harriers</Footer>
    </ContentWrapper>
  )
}

export default PageContentLayout
