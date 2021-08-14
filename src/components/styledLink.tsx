import { Link } from "gatsby"
import styled, { css } from "styled-components"

interface MenuItemProps {
  $small?: boolean
  $isActiveRoute: boolean
}

export const MenuItemStyles = css<MenuItemProps>`
  font-size: ${props => (props.$small ? "1.5rem" : "2rem")};
  padding: ${props => (props.$small ? "1rem 0" : "1.5rem 0")};
  font-weight: bold;
  line-height: 1rem;
  letter-spacing: 0.5rem;
  color: ${props =>
    props.$isActiveRoute ? props.theme.colours.orange : "inherit"};

  @media (max-width: 576px) {
    font-size: ${props => (props.$small ? "1.2rem" : "1.5rem")};
  }
`

const StyledLink = styled(Link)`
  ${MenuItemStyles}
  text-decoration: none;
  background-image: none;

  &:hover,
  &:focus {
    background: lightgrey;
    outline: none;
  }
`

export default StyledLink
