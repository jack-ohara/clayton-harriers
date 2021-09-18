import React, { ReactNode } from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 1.45rem 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
`

interface PageContentLayoutProps {
  children: ReactNode
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
