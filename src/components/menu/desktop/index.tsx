import { graphql, StaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import isActiveRoute from "../../../utils/isActiveRoute"
import StyledLink, { MenuItemStyles } from "../../styledLink"

const NavItemTitle = styled.div`
  ${MenuItemStyles}
  padding: 0;
  font-size: 1.2rem;
  margin-bottom: 3px;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  cursor: default;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  & > ul {
    display: flex;
    margin: 0.5em 0;
    align-items: center;

    & > li {
      list-style: none;
      margin: 0;
      position: relative;
      padding: 0 0.7rem;
      z-index: 10;
    }

    & > li:first-of-type {
      padding-left: 0;
    }

    & > li:last-of-type {
      padding-right: 0;
    }
  }
`

interface DesktopMenuLinkStyleProps {
  $showBackground: boolean
}

const DesktopMenuLink = styled(StyledLink)<DesktopMenuLinkStyleProps>`
  font-size: ${props => (props.$small ? "1rem" : "1.2rem")};
  letter-spacing: normal;
  padding: 0.8rem 0;
  transition: text-decoration-color ease-in-out 120ms;
  text-decoration: underline;
  text-decoration-thickness: ${props => (props.$small ? "2px" : "3px")};
  text-decoration-color: transparent;

  &:hover,
  &:focus {
    background: ${props => !props.$showBackground && "none"};
    text-decoration-color: ${props => props.theme.colours.orange};
  }
`

interface MenuItemProps {
  to: string
  showBackgroundOnHover?: boolean
  small?: boolean
  children: ReactNode
}

function MenuItem({
  to,
  showBackgroundOnHover = false,
  small = false,
  children,
}: MenuItemProps) {
  const isActive = isActiveRoute(to)

  return (
    <li>
      <DesktopMenuLink
        to={to}
        $isActiveRoute={isActive}
        $showBackground={showBackgroundOnHover}
        $small={small}
      >
        {children}
      </DesktopMenuLink>
    </li>
  )
}

interface DropdownListProps {
  children: JSX.Element | JSX.Element[]
}

function DropdownList({ children }: DropdownListProps) {
  return <ul>{children}</ul>
}

interface DropdownMenuItemProps {
  title: string
  children: JSX.Element | JSX.Element[]
}

const DropdownLi = styled.li`
  ul {
    display: flex;
    margin: 0.4rem 0 0.5em 0;
    max-height: 0;
    position: absolute;
    flex-direction: column;
    overflow: hidden;
    transition: max-height linear 200ms;
    z-index: 1;
    background: var(--light-grey);
    width: max-content;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    min-width: 150px;

    li {
      margin: 0;
      display: flex;

      a {
        padding: 0.5rem;
        padding-right: 0.8rem;
      }
    }

    li:first-of-type a {
      padding-top: 0.5rem;
    }

    li:last-of-type a {
      padding-bottom: 0.5rem;
    }
  }

  &:hover ul,
  &:focus-within ul {
    max-height: 500px;
  }

  &:hover svg,
  &:focus-within svg {
    transform: rotate(0.25turn);
    fill: var(--clayton-orange);
  }

  a {
    padding: 0;
    flex-grow: 1;
  }
`

const getMenuItems = menuItems => {
  return menuItems.map(item => {
    return (
      <React.Fragment key={`menu-item-${item.label}`}>
        {item.childItems.nodes.length ? (
          <DropdownMenuItem
            title={item.label}
            key={`dropdown-item-${item.label}`}
          >
            {item.childItems.nodes.map(child => (
              <MenuItem
                key={`child-item-${item.label}-${child.label}`}
                to={child.url}
                showBackgroundOnHover
                small
              >
                {child.label}
              </MenuItem>
            ))}
          </DropdownMenuItem>
        ) : (
          <MenuItem key={`collapsable-item-${item.label}`} to={item.url}>
            {item.label}
          </MenuItem>
        )}
      </React.Fragment>
    )
  })
}

interface DropdownArrowStyles {
  $isActiveRoute: boolean
}

const DropdownArrow = styled.svg<DropdownArrowStyles>`
  margin-right: 0.3rem;
  height: 8px;
  width: 8px;
  fill: ${props =>
    props.$isActiveRoute ? "var(--clayton-orange)" : "initial"};
  transition: all linear 200ms;
`

function DropdownMenuItem({ title, children }: DropdownMenuItemProps) {
  const hasActiveChild = Array.isArray(children)
    ? children.some(e => e && isActiveRoute(e.props.to))
    : isActiveRoute(children.props.to)

  return (
    <DropdownLi>
      <NavItemTitle $isActiveRoute={hasActiveChild}>
        <DropdownArrow $isActiveRoute={hasActiveChild}>
          <polygon points="0,0 0,8 8,4" />
        </DropdownArrow>
        {"  "}
        {title}
      </NavItemTitle>
      <DropdownList>{children}</DropdownList>
    </DropdownLi>
  )
}

interface Props {
  menuData: { wpMenu: { menuItems: { nodes: any[] } } }
}

export default function Menu({
  menuData: {
    wpMenu: {
      menuItems: { nodes },
    },
  },
}: Props) {
  return (
    <Nav>
      <ul>
        <MenuItem to="/">Home</MenuItem>
        <DropdownMenuItem title="News &amp; Info">
          <MenuItem to="/news" showBackgroundOnHover small>
            News
          </MenuItem>
          <MenuItem to="/training" showBackgroundOnHover small>
            Training
          </MenuItem>
          <MenuItem to="/roll-of-honour" showBackgroundOnHover small>
            Roll Of Honour
          </MenuItem>
        </DropdownMenuItem>
        <DropdownMenuItem title="Juniors">
          <MenuItem to="/juniors" showBackgroundOnHover small>
            Welcome
          </MenuItem>
        </DropdownMenuItem>
        <MenuItem to="/fixtures">Fixtures &amp; Results</MenuItem>
        {getMenuItems(nodes.filter(item => !item.parentId))}
        <MenuItem to="/join-us">Join Us</MenuItem>
      </ul>
    </Nav>
  )
}
