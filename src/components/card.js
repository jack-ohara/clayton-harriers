import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { getLocalFormatFromString } from "../utils/dateFormatter"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import cardBannerSVG from "../images/card-banner.svg"

const cardStyles = css`
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

const LinkCardContainer = styled(Link)`
  ${cardStyles}
`

const NonLinkCardContainer = styled.div`
  ${cardStyles}
`

const CardImage = styled.img`
  max-height: 160px;
  margin: 0 auto 0.5rem auto;
  max-width: ${props => (props.useBannerImage ? "120%" : "100%")};
  flex-grow: 1;
`

const CardBox = styled.div`
  flex-grow: 1;

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
  const useBannerImage = !featuredImage && useDefaultImage

  const cardContent = (
    <Article>
      <CardImage
        useBannerImage={useBannerImage}
        src={useBannerImage ? cardBannerSVG : featuredImage}
        alt=""
      />
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
