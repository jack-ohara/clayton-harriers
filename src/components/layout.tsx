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
  align-items: center;
  background: ${props => props.theme.colours.lightGrey};
`

interface LayoutProps {
  children: ReactNode
  setMaxWidth?: boolean
}

export const PageHeader = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
  color: var(--light-grey);
  -webkit-text-stroke: 1px black;
  text-shadow: 2px 2px var(--clayton-orange);
`

export default function Layout({ children, setMaxWidth = true }: LayoutProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <PageContentLayout setMaxWidth={setMaxWidth}>
          {children}
        </PageContentLayout>
      </Container>
    </ThemeProvider>
  )
}
