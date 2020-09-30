import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem 0.5rem;
`

const LogoLink = styled(Link)`
  background-image: none;
`

const Header = () => {
  const logoData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "harriers-logo-transparent.png" }) {
        childImageSharp {
          fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <LogoLink to="/">
        <Img fixed={logoData.file.childImageSharp.fixed} />
      </LogoLink>
    </StyledHeader>
  )
}

export default Header
