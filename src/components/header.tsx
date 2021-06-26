import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BurgerButton from "./menu/burgerButton"
import Menu from "./menu"
import OutsideAlerter from "./eventOutsideWrapper"

const StyledHeader = styled.header`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoLink = styled(Link)`
  background-image: none;
`

export default function Header() {
  const images = useStaticQuery(graphql`
    query {
      harriersLogo: file(
        relativePath: { eq: "harriers-logo-transparent.png" }
      ) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1, width: 65, placeholder: BLURRED)
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)

  return (
    <StyledHeader>
      <LogoLink to="/">
        <GatsbyImage
          image={images.harriersLogo.childImageSharp.gatsbyImageData}
          alt="Clayton Harriers logo"
          loading="eager"
        />
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
