import React, { ReactNode } from "react"
import styled from "styled-components"

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px 1.45rem 15px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: var(--light-grey);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
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
