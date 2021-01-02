import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BurgerButton from "./menu/burgerButton"
import Menu from "./menu"
import OutsideAlerter from "./eventOutsideWrapper"

const StyledHeader = styled.header`
  padding: 0.5rem;
`

const LogoLink = styled(Link)`
  background-image: none;
`

const Header = () => {
  const images = useStaticQuery(graphql`
    query {
      harriersLogo: file(
        relativePath: { eq: "harriers-logo-transparent.png" }
      ) {
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
        <Img fixed={images.harriersLogo.childImageSharp.fixed} />
      </LogoLink>
      <OutsideAlerter
        events={["mousedown", "scroll"]}
        handleEvent={() => setOpen(false)}
      >
        <BurgerButton open={open} setOpen={setOpen} />

        <Menu open={open} setOpen={setOpen} />
      </OutsideAlerter>
    </StyledHeader>
  )
}

export default Header
