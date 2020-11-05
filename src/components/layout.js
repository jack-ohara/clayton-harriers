import React from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { siteTheme } from "../utils/theme"
import GlobalStyles from "../utils/styles/GlobalStyles"
import "typeface-source-sans-pro"
import "typeface-timmana"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.theme.colours.lightGrey};
`

const ContentWrapper = styled.div`
  max-width: 1260px;
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

const Layout = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
    <GlobalStyles />
    <Container>
      <Header />
      <ContentWrapper>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()} Clayton-Le-Moors Harriers</Footer>
      </ContentWrapper>
    </Container>
  </ThemeProvider>
)

export default Layout
