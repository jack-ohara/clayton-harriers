import React, { ReactNode } from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { siteTheme } from "../utils/theme"
import GlobalStyles from "../utils/styles/GlobalStyles"
import PageContentLayout from "./pageContentLayout"
import "typeface-source-sans-pro"
import "typeface-raleway"

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.theme.colours.lightGrey};
`

interface LayoutProps {
  bannerImage?: JSX.Element
  children: ReactNode
}

export const PageHeader = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  text-shadow: 1px 1px white, 2px 2px var(--clayton-orange);
`

export default function Layout({ bannerImage, children }: LayoutProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        {bannerImage}
        <PageContentLayout>{children}</PageContentLayout>
      </Container>
    </ThemeProvider>
  )
}
