import { Link } from "gatsby"
import styled from "styled-components"

interface StyledLinkProps {
  $small?: boolean
  $isActiveRoute: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: ${props => (props.$small ? "1.5rem" : "2rem")};
  padding: ${props => (props.$small ? "1rem 0" : "1.5rem 0")};
  font-weight: bold;
  letter-spacing: 0.5rem;
  transition: color 0.3s linear;
  background-image: none;
  color: ${props =>
    props.$isActiveRoute ? props.theme.colours.orange : "inherit"};

  @media (max-width: 576px) {
    font-size: ${props => (props.$small ? "1.2rem" : "1.5rem")};
  }

  &:hover,
  &:focus {
    background: lightgrey;
    outline: none;
  }
`

export default StyledLink
