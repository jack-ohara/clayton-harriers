import React from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { siteTheme } from "../utils/theme"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.theme.colours.lightGrey};
  font-family: "Source Sans Pro", sans-serif;
`

const ContentWrapper = styled.div`
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Footer = styled.footer`
  margin-top: 2rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
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
