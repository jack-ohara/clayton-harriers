import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledLink = styled(Link)`
  border-radius: 3px;
  box-shadow: 0 0 1px hsl(0deg 0% 80% / 0.045), 0 0 2px hsl(0deg 0% 80% / 0.045),
    0 0 4px hsl(0deg 0% 80% / 0.045), 0 0 8px hsl(0deg 0% 80% / 0.045),
    0 0 16px hsl(0deg 0% 80% / 0.045);
  display: grid;
  align-items: flex-end;
  margin: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  max-height: 375px;

  img {
    transition: transform 200ms ease-in !important;
  }

  &:hover img,
  &:active img,
  &:focus img {
    transform: scale(1.03);
    outline: none;
  }

  &:hover h3,
  &:active h3,
  &:focus h3 {
    text-decoration-color: unset;
  }
`

const Image = styled(GatsbyImage)`
  grid-area: 1/1;
  width: 100%;
`

const HeadingContainer = styled.span`
  grid-area: 1/1;
  padding: 1rem;
  transform: skewX(-10deg);
  border-radius: 2px;
  background-color: var(--black);
  color: var(--clayton-orange);
  z-index: 10;
  margin: 0 auto 1rem auto;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  & > * {
    transform: skewX(10deg);
  }
`

const CardHeading = styled.h3`
  margin: 0;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 100ms ease-in;
`

const SimpleNavCard = ({ title, featuredImage, slug }) => {
  return (
    <StyledLink to={slug}>
      <HeadingContainer>
        <CardHeading>{title}</CardHeading>
      </HeadingContainer>
      {featuredImage && (
        <Image image={featuredImage.image} alt={featuredImage.alt} />
      )}
    </StyledLink>
  )
}

export default SimpleNavCard
