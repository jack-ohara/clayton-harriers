import React from "react"
import HorizontalRule from "../../utils/styles/HorizontalRule.js"
import CardBannerSVG from "../../images/card-banner.svg"
import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Post } from "../../types/WpSharedTypes.js"

const cardStyles = css`
  border-radius: 5px;
  box-shadow: 0 0 1px hsl(0deg 0% 80% / 0.045), 0 0 2px hsl(0deg 0% 80% / 0.045),
    0 0 4px hsl(0deg 0% 80% / 0.045), 0 0 8px hsl(0deg 0% 80% / 0.045),
    0 0 16px hsl(0deg 0% 80% / 0.045);
  display: flex;
  flex-direction: column;
  width: 75vw;
  max-width: 350px;
  min-height: 100%;
  margin: 0.5rem 0;
  color: unset;
  text-decoration: none;
  transition: transform 180ms ease-in;
  overflow: hidden;

  img,
  svg {
    transition: transform 200ms ease-in !important;
  }

  &:hover img,
  &:active img,
  &:focus img,
  &:hover svg,
  &:active svg,
  &:focus svg {
    transform: scale(1.03);
    outline: none;
  }

  &:hover h4,
  &:active h4,
  &:focus h4,
  &:hover h5,
  &:active h5,
  &:focus h5 {
    text-decoration-color: unset;
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
  flex-grow: 1;
  max-height: 160px;

  @media (max-width: 1200px) {
    max-width: 120%;
  }
`

const FeaturedImage = styled(GatsbyImage)`
  ${sharedImageStyles}
  margin-bottom: 0.5rem;
`

const CardBox = styled.div`
  padding: 0.5rem 1rem;

  h4,
  h5 {
    text-decoration: underline;
    text-decoration-color: transparent;
    margin: 0;
    transition: text-decoration-color 100ms ease-in;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    color: var(--clayton-orange);
  }

  h5 {
    margin: 0 0 0.3rem 0;
    color: var(--dark-grey);
  }
`

const Article = styled.article<CardStyleProps>`
  flex-grow: 1;
  display: flex;
  flex-direction: ${props => (props.horizontalLayout ? "row" : "column")};
  align-content: center;
  justify-content: space-between;
`

interface ExcerptStyleProps {
  $height?: number | undefined
}

const Excerpt = styled.p<ExcerptStyleProps>`
  margin: 0;
  height: ${props => (props.$height ? `${props.$height}px` : "unset")};
`

interface CardStyleProps {
  horizontalLayout: boolean
}

export type CardProps = Post & { paragraphHeight?: number | undefined }

export default function Card({
  slug,
  featuredImage,
  title,
  author,
  date,
  excerpt,
  horizontalLayout = false,
  paragraphHeight = undefined,
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
        <Excerpt $height={paragraphHeight}>
          {excerpt?.replace(" Continue reading →", "")}
        </Excerpt>
      </CardBox>
    </Article>
  )

  return slug ? (
    <LinkCardContainer to={slug}>{cardContent}</LinkCardContainer>
  ) : (
    <NonLinkCardContainer>{cardContent}</NonLinkCardContainer>
  )
}
