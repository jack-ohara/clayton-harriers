import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledLink = styled(Link)`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 5px 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.03);
  }
`

const CardHeading = styled.h3`
  margin: 0.2em 0 0.5em 0;
`

const SimpleNavCard = ({ title, featuredImage, slug }) => {
  return (
    <StyledLink to={slug}>
      <CardHeading>{title}</CardHeading>
      <GatsbyImage image={featuredImage.image} alt={featuredImage.alt} />
    </StyledLink>
  )
}

export default SimpleNavCard
