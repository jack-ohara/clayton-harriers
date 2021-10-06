import React, { ReactNode } from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #212020eb;
  color: var(--light-grey);
`

interface ContentWrapperStyleProps {
  setMaxWidth: boolean
}

const ContentWrapper = styled.main<ContentWrapperStyleProps>`
  width: 100%;
  max-width: ${props =>
    props.setMaxWidth ? "var(--max-content-width)" : "unset"};
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

const Footer = styled.footer`
  margin: 2rem;
  text-align: center;
`

interface PageContentLayoutProps {
  children: ReactNode
  setMaxWidth: boolean
}

export default function PageContentLayout({
  children,
  setMaxWidth,
}: PageContentLayoutProps) {
  return (
    <PageWrapper>
      <ContentWrapper setMaxWidth={setMaxWidth}>{children}</ContentWrapper>
      <Footer>© {new Date().getFullYear()} Clayton-Le-Moors Harriers</Footer>
    </PageWrapper>
  )
}
