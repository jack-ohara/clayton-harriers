import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { getLocalFormatFromString } from "../utils/dateFormatter"

const CardContainer = styled(Link)`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 8px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.05);
  }
`

const CardImage = styled.img`
  max-height: 200px;
  margin: 0 auto 0.5rem auto;
`

const CardBox = styled.div`
  h4 {
    margin: 0 0 0.5rem 0;
  }

  h5 {
    margin: 0 0 0.3rem 0;
  }

  hr {
    background: linear-gradient(
      90deg,
      #bbbbbb 25%,
      ${props => props.theme.colours.lightGrey} 100%
    );
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
`

const Card = ({ slug, featuredImage, title, author, date, excerpt }) => {
  return (
    <CardContainer to={slug}>
      <Article>
        <CardImage src={featuredImage} alt="" loading="lazy" />
        <CardBox>
          <h4>{title}</h4>
          <h5>{author}</h5>
          <h5>{getLocalFormatFromString(date)}</h5>
          <hr />
          {excerpt}
        </CardBox>
      </Article>
    </CardContainer>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CardPreviews = ({ posts }) => {
  return (
    <Container>
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
    </Container>
  )
}

export default CardPreviews
