import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import StyledLink from "../../styledLink"
import isActiveRoute from "../../../utils/isActiveRoute"

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
  z-index: 1000;

  @media (max-width: 576px) {
    width: 100%;
  }
`

const ItemDivider = styled.hr`
  margin: 0;
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

const MenuItem = ({ title, to, small, closeFunction }) => {
  const isActive = isActiveRoute(to)

  return (
    <StyledLink
      to={to}
      $isActiveRoute={isActive}
      $small={small}
      onClick={() => {
        isActive && closeFunction()
      }}
    >
      {title}
    </StyledLink>
  )
}

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

const getMenuItems = (menuItems, closeMenuFunction, isOpen) => {
  return menuItems.map(item => {
    return (
      <React.Fragment key={`menu-item-${item.label}`}>
        {item.childItems.nodes.length ? (
          <CollapsableMenuItem
            title={item.label}
            resetOpen={!isOpen}
            key={`collapsable-item-${item.label}`}
          >
            {item.childItems.nodes.map(child => (
              <MenuItem
                key={`child-item-${item.label}-${child.label}`}
                title={child.label}
                to={child.url}
                closeFunction={closeMenuFunction}
                small
              />
            ))}
          </CollapsableMenuItem>
        ) : (
          <MenuItem
            key={`collapsable-item-${item.label}`}
            title={item.label}
            to={item.url}
            closeFunction={closeMenuFunction}
          />
        )}

        <ItemDivider />
      </React.Fragment>
    )
  })
}

const Menu = ({ menuData, open, setOpen }) => {
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      const wasMenuButtonClick = document
        .querySelector("#menu-burger-button")
        .contains(event.target)

      if (!wasMenuButtonClick && !navRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })

  const closeMenuFunction = () => {
    setOpen(false)
  }

  return (
    <StyledMenu ref={navRef} open={open}>
      {getMenuItems(
        menuData.wpMenu.menuItems.nodes.filter(item => !item.parentId),
        closeMenuFunction,
        open
      )}
    </StyledMenu>
  )
}

export default Menu
