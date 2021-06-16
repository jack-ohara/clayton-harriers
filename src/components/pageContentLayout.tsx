import React from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.45rem;
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

interface PageContentLayoutProps {
  children: JSX.Element
}

export default function PageContentLayout({
  children,
}: PageContentLayoutProps) {
  return (
    <ContentWrapper>
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()} Clayton-Le-Moors Harriers</Footer>
    </ContentWrapper>
  )
}
