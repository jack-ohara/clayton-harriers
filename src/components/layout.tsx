import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import "./layout.css"
import { siteTheme } from "../utils/theme"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${props => props.theme.colours.lightGrey};
`

const ContentWrapper = styled.div`
  margin: 0 30px;
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

const Layout: FunctionComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={siteTheme}>
      <Container>
        <Header />
        <ContentWrapper>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()} Clayton-Le-Moors Harriers
          </Footer>
        </ContentWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
