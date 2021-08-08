import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BurgerButton from "./menu/mobile/burgerButton"
import MobileMenu from "./menu/mobile"
import DesktopMenu from "./menu/desktop"
import OutsideAlerter from "./eventOutsideWrapper"
import { useMediaQuery } from "react-responsive"

interface NavWrapperProps {
  $center: boolean
}

const NavWrapper = styled.div<NavWrapperProps>`
  flex-grow: ${props => (props.$center ? 1 : "initial")};
`

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
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" })

  return (
    <StyledHeader>
      <LogoLink to="/">
        <GatsbyImage
          image={images.harriersLogo.childImageSharp.gatsbyImageData}
          alt="Clayton Harriers logo"
          loading="eager"
        />
      </LogoLink>

      <NavWrapper $center={isDesktop}>
        <OutsideAlerter
          events={["mousedown", "scroll"]}
          handleEvent={() => setOpen(false)}
        >
          {isDesktop ? (
            <DesktopMenu />
          ) : (
            <>
              <BurgerButton open={open} setOpen={setOpen} />
              <MobileMenu open={open} setOpen={setOpen} />{" "}
            </>
          )}
        </OutsideAlerter>
      </NavWrapper>
    </StyledHeader>
  )
}
