import { Link, graphql, StaticQuery } from "gatsby"
import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import OutsideAlerter from "./eventOutsideWrapper"
import NavMenu from "./menu"

const StyledHeader = styled.header`
  padding: 0.5rem 0;
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
              <NavMenu mobileMenuOpen={open} setMobileMenuOpen={setOpen} />
            </OutsideAlerter>
          </StyledHeader>
        </div>
      )}
    />
  )
}
