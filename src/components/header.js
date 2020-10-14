import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BurberButton from "./menu/burgerButton"
import Menu from "./menu"

const StyledHeader = styled.header`
  padding: 1rem 0.5rem;
`

const LogoLink = styled(Link)`
  background-image: none;
`

const ImageWrapper = styled.div`
  text-align: right;
  padding-right: 1rem;
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

  const [open, setOpen] = React.useState(false)
  const node = React.useRef()

  return (
    <StyledHeader>
      <LogoLink to="/">
        <Img fixed={logoData.file.childImageSharp.fixed} />
      </LogoLink>
      <div ref={node}>
        <BurberButton open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  )
}

export default Header
