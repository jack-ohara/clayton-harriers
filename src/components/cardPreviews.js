import React from "react"
import styled from "styled-components"
import Card from "./card"

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
