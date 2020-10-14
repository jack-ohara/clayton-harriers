import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  text-align: left;
  padding: 3rem 2rem 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: 576px) {
    width: 100%;
  }
`

const ItemDivider = styled.hr`
  margin: 0;
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  padding: 1.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  background-image: none;
  color: ${props =>
    props.$isActiveRoute ? props.theme.colours.orange : "inherit"};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`

const MenuItem = ({ title, to }) => {
  const currentRoute = window.location.pathname
  const isActiveRoute =
    (currentRoute === "/" && currentRoute === to) ||
    (to !== "/" && currentRoute.startsWith(to))

  return (
    <StyledLink to={to} $isActiveRoute={isActiveRoute}>
      {title}
    </StyledLink>
  )
}

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem title="Home" to="/" />
      <ItemDivider />
      <MenuItem title="News &amp; Info" to="/news" />
      <ItemDivider />
      <MenuItem title="Training" to="/training" />
      <ItemDivider />
      <MenuItem title="Join Us" to="/join-us" />
    </StyledMenu>
  )
}

export default Menu
