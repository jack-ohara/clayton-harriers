import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import BurberButton from "./menu/burgerButton"
import Menu from "./menu"
import OutsideAlerter from "./clickOutsideWrapper"

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

  const [open, setOpen] = useState(false)
  const node = useRef()

  return (
    <StyledHeader>
      <LogoLink to="/">
        <Img fixed={logoData.file.childImageSharp.fixed} />
      </LogoLink>
      <div ref={node}>
        <BurberButton open={open} setOpen={setOpen} />

        <OutsideAlerter
          events={["mousedown", "scroll"]}
          handleEvent={() => setOpen(false)}
        >
          <Menu open={open} setOpen={setOpen} />
        </OutsideAlerter>
      </div>
    </StyledHeader>
  )
}

export default Header
