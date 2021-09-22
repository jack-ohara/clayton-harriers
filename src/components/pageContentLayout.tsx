import React, { ReactNode } from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #212020eb;
`

const Footer = styled.footer`
  margin: 2rem;
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
