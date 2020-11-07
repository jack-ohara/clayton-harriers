import React from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { siteTheme } from "../utils/theme"
import GlobalStyles from "../utils/styles/GlobalStyles"
import PageContentLayout from "./pageContentLayout"
import "typeface-source-sans-pro"
import "typeface-timmana"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.theme.colours.lightGrey};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
    <GlobalStyles />
    <Container>
      <Header />
      <PageContentLayout>{children}</PageContentLayout>
    </Container>
  </ThemeProvider>
)

export default Layout
