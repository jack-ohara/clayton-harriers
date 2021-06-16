import React from "react"
import HorizontalRule from "../../utils/styles/HorizontalRule.js"
import cardBannerSVG from "../../images/card-banner.svg"
import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { getLocalFormatFromString } from "../../utils/dateFormatter"

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
  }
`

const LinkCardContainer = styled(Link)`
  ${cardStyles}
`

const NonLinkCardContainer = styled.div`
  ${cardStyles}
`

const BannerImage = styled.img`
  margin: 0 auto 0.5rem auto;
  max-height: 160px;
  max-width: 120%;
  flex-grow: 1;
`

const FeaturedImage = styled(GatsbyImage)`
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

const Article = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`

const Card = ({
  slug,
  featuredImage,
  title,
  author,
  date,
  excerpt,
  useDefaultImage,
}) => {
  const useBannerImage = !featuredImage?.image && useDefaultImage

  const cardImage = useBannerImage ? (
    <BannerImage
      src={cardBannerSVG}
      alt="Clayton-le-moors Harriers banner logo"
    />
  ) : (
    <FeaturedImage image={featuredImage?.image} alt={featuredImage?.altText} />
  )

  const cardContent = (
    <Article>
      {cardImage}
      <CardBox>
        <h4>{title}</h4>
        <h5>{author}</h5>
        <h5>{getLocalFormatFromString(date)}</h5>
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

export default Card
