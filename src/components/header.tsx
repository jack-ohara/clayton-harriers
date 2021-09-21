import { Link, graphql, StaticQuery } from "gatsby"
import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import OutsideAlerter from "./eventOutsideWrapper"
import NavMenu from "./menu"

const HeaderContainer = styled.div`
  width: 100%;
  background: var(--light-grey);
  border-bottom: 4px groove var(--clayton-orange);
`

const StyledHeader = styled.header`
  padding: 0.5rem 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1200px;
`

const LogoLink = styled(Link)`
  background-image: none;
`

export default function Header() {
  const [open, setOpen] = useState(false)

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
        <HeaderContainer>
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
              <NavMenu mobileMenuOpen={open} setMobileMenuOpen={setOpen} />
            </OutsideAlerter>
          </StyledHeader>
        </HeaderContainer>
      )}
    />
  )
}
