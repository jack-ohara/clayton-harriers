import React, { ReactNode } from "react"
import styled from "styled-components"
import isActiveRoute from "../../../utils/isActiveRoute"
import StyledLink from "../../styledLink"

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    margin: 0.5em 0;

    li {
      list-style: none;
      margin: 0;
    }
  }
`

const DesktopMenuLink = styled(StyledLink)`
  padding: 0.8rem 1rem;
  line-height: 1rem;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: transparent;
  transition: text-decoration-color ease-in-out 100ms;
  letter-spacing: normal;

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
    <li>
      <DesktopMenuLink to={to} $isActiveRoute={isActive}>
        {children}
      </DesktopMenuLink>
    </li>
  )
}

export default function Menu() {
  return (
    <Nav>
      <ul>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="#">News &amp; Info</MenuItem>
        <MenuItem to="#">Juniors</MenuItem>
        <MenuItem to="/fixtures">Fixtures &amp; Results</MenuItem>
        <MenuItem to="#">About</MenuItem>
        <MenuItem to="#">Contact</MenuItem>
        <MenuItem to="/join-us">Join Us</MenuItem>
      </ul>
    </Nav>
  )
}
