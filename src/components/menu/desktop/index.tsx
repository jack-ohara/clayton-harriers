import React, { ReactNode } from "react"
import styled from "styled-components"
import isActiveRoute from "../../../utils/isActiveRoute"
import StyledLink from "../../styledLink"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`

const DesktopMenuLink = styled(StyledLink)`
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color ease-in-out 100ms;

  &:hover {
    background: none;
    text-decoration-color: ${props => props.theme.colours.orange};
  }
`

interface MenuItemProps {
  to: string
  children: ReactNode
}

function MenuItem({ to, children }: MenuItemProps) {
  const isActive = isActiveRoute(to)

  return (
    <DesktopMenuLink to={to} $isActiveRoute={isActive}>
      {children}
    </DesktopMenuLink>
  )
}

export default function Menu() {
  return (
    <Nav>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="#">News &amp; Info</MenuItem>
      <MenuItem to="#">Juniors</MenuItem>
      <MenuItem to="/fixtures">Fixtures &amp; Results</MenuItem>
      <MenuItem to="#">About</MenuItem>
      <MenuItem to="#">Contact</MenuItem>
      <MenuItem to="/join-us">Join Us</MenuItem>
    </Nav>
  )
}
