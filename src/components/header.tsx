import { Link, graphql, StaticQuery } from "gatsby"
import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BurgerButton from "./menu/mobile/burgerButton"
import MobileMenu from "./menu/mobile"
import DesktopMenu from "./menu/desktop"
import OutsideAlerter from "./eventOutsideWrapper"
import { useMediaQuery } from "react-responsive"

const StyledHeader = styled.header`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`

const LogoLink = styled(Link)`
  background-image: none;
`

export default function Header() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" })

  return (
    <StaticQuery
      query={graphql`
        query {
          harriersLogo: file(
            relativePath: { eq: "harriers-logo-transparent.png" }
          ) {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, width: 65, placeholder: BLURRED)
            }
          }
        }
      `}
      render={imageData => (
        <div>
          <StyledHeader>
            <LogoLink to="/">
              <GatsbyImage
                image={imageData.harriersLogo.childImageSharp.gatsbyImageData}
                alt="Clayton Harriers logo"
                loading="eager"
              />
            </LogoLink>

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
          </StyledHeader>
        </div>
      )}
    />
  )
}
