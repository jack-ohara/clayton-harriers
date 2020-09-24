import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import "./layout.css"

const Container = styled.div`
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContentWrapper>
        <main>{children}</main>
        <Footer>© {new Date().getFullYear()} Clayton-Le-Moors Harriers</Footer>
      </ContentWrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
