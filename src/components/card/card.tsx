import React from "react"
import HorizontalRule from "../../utils/styles/HorizontalRule.js"
import CardBannerSVG from "../../images/card-banner.svg"
import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Post } from "../../types/WpSharedTypes.js"

const cardStyles = css`
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.03);
    outline: none;
  }
`

const LinkCardContainer = styled(Link)`
  ${cardStyles}
`

const NonLinkCardContainer = styled.div`
  ${cardStyles}
`

const sharedImageStyles = css`
  border-radius: 5px 5px 0 0;
  height: 160px;

  img {
    border-radius: 5px 5px 0 0;
  }

  @media (min-width: 815px) {
    height: 250px;
  }
`

const BannerImage = styled(CardBannerSVG)`
  ${sharedImageStyles}
  margin: 0 auto 0.5rem auto;
  max-width: 120%;
  flex-grow: 1;
`

const FeaturedImage = styled(GatsbyImage)`
  ${sharedImageStyles}
  margin-bottom: 0.5rem;
`

const CardBox = styled.div`
  flex-grow: 1;
  padding: 0.5rem 1rem;

  h4 {
    margin: 0 0 0.5rem 0;
  }

  h5 {
    margin: 0 0 0.3rem 0;
  }
`

const Article = styled.article<CardStyleProps>`
  flex-grow: 1;
  display: flex;
  flex-direction: ${props => (props.horizontalLayout ? "row" : "column")};
  align-content: center;
  justify-content: space-between;
`

interface CardStyleProps {
  horizontalLayout: boolean
}

type CardProps = Post

export default function Card({
  slug,
  featuredImage,
  title,
  author,
  date,
  excerpt,
  horizontalLayout = false,
}: CardProps) {
  const cardImage = !featuredImage?.image ? (
    <BannerImage alt="Clayton-le-moors Harriers banner logo" />
  ) : (
    <FeaturedImage image={featuredImage.image} alt={featuredImage.altText} />
  )

  const cardContent = (
    <Article horizontalLayout={horizontalLayout}>
      {cardImage}
      <CardBox>
        <h4>{title}</h4>
        <h5>{author}</h5>
        <h5>{date}</h5>
        <HorizontalRule />
        {excerpt}
      </CardBox>
    </Article>
  )

  return slug ? (
    <LinkCardContainer to={slug}>{cardContent}</LinkCardContainer>
  ) : (
    <NonLinkCardContainer>{cardContent}</NonLinkCardContainer>
  )
}
