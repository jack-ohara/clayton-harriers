import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin-bottoml: 1.45rem;
  padding: 1rem 0.5rem;
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
      <Link to="/">
        <Img fixed={logoData.file.childImageSharp.fixed} />
      </Link>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
