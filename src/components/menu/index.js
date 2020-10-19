import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
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
  font-size: ${props => (props.$small ? "1.5rem" : "2rem")};
  padding: ${props => (props.$small ? "1rem 0" : "1.5rem 0")};
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  background-image: none;
  color: ${props =>
    props.$isActiveRoute ? props.theme.colours.orange : "inherit"};

  @media (max-width: 576px) {
    font-size: 1.5rem;
    font-size: ${props => (props.$small ? "1.2rem" : "1.5rem")};
  }

  &:hover,
  &:focus {
    background: lightgrey;
    outline: none;
  }
`

const StyledButton = styled.button`
  font-size: 2rem;
  padding: 1.5rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  margin: 0;
  border: 0;
  background: inherit;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props =>
    props.$hasActiveChild ? props.theme.colours.orange : "inherit"};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    background: lightgrey;
    outline: none;
  }

  span div {
    width: 0.8rem;
    height: 0.2rem;
    background: ${props =>
      props.$hasActiveChild ? props.theme.colours.orange : "black"};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    top: 10px;
    right: 10px;

    :first-child {
      transform: ${props => (props.$open ? "rotate(0)" : "rotate(90deg)")};
      top: 13px;
    }
  }
`

const SubItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: max-height 0.2s ease-out;
  max-height: ${props => `${props.maxHeight}px`};
  overflow: hidden;
  padding-left: 1rem;
`

const MenuItem = ({ title, to, small }) => (
  <StyledLink to={to} $isActiveRoute={isActiveRoute(to)} $small={small}>
    {title}
  </StyledLink>
)

const CollapsableMenuItem = ({ title, children, resetOpen }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollHeight, setScrollHeight] = useState()
  const subItems = useRef(null)

  useEffect(() => {
    const hasActiveChild = Array.isArray(children)
      ? children.some(e => isActiveRoute(e.props.to))
      : isActiveRoute(children.props.to)

    setIsOpen(hasActiveChild)
  }, [resetOpen, children])

  return (
    <>
      <StyledButton
        onClick={e => {
          setScrollHeight(subItems.current.scrollHeight)
          setIsOpen(!isOpen)
        }}
        $open={isOpen}
      >
        {title}
        <span>
          <div />
          <div />
        </span>
      </StyledButton>
      <SubItemsContainer maxHeight={isOpen ? scrollHeight : 0} ref={subItems}>
        {children}
      </SubItemsContainer>
    </>
  )
}

const isActiveRoute = targetRoute => {
  if (typeof window === "undefined") {
    return false
  }

  const currentRoute = window.location.pathname
  return (
    (currentRoute === "/" && currentRoute === targetRoute) ||
    (targetRoute !== "/" && currentRoute.startsWith(targetRoute))
  )
}

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem title="Home" to="/" />
      <ItemDivider />
      <CollapsableMenuItem title="News &amp; Info" resetOpen={!open}>
        <MenuItem title="News" to="/news" small />
        <MenuItem title="Training" to="/training" small />
        <MenuItem title="Fixtures" to="/fixtures" small />
        <MenuItem title="Roll Of Honour" to="/roll-of-honour" small />
      </CollapsableMenuItem>
      <ItemDivider />
      <CollapsableMenuItem title="Juniors" resetOpen={!open}>
        <MenuItem title="Welcome" to="/juniors" small />
      </CollapsableMenuItem>
      <ItemDivider />
      <MenuItem title="About" to="/about" />
      <ItemDivider />
      <MenuItem title="Join Us" to="/join-us" />
      <ItemDivider />
      <MenuItem title="Contact" to="/contact" />
    </StyledMenu>
  )
}

export default Menu
