import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BurberButton from "./menu/burgerButton"
import Menu from "./menu"
import OutsideAlerter from "./eventOutsideWrapper"

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

  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
      <LogoLink to="/">
        <Img fixed={logoData.file.childImageSharp.fixed} />
      </LogoLink>
      <OutsideAlerter
        events={["mousedown", "scroll"]}
        handleEvent={() => setOpen(false)}
      >
        <BurberButton open={open} setOpen={setOpen} />

        <Menu open={open} />
      </OutsideAlerter>
    </StyledHeader>
  )
}

export default Header
