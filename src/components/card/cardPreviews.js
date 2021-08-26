import React from "react"
import styled from "styled-components"
import Card from "./card"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  a:first-child {
    margin-top: 0;
  }

  a:last-child {
    margin-bottom: 0;
  }
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
