import React from "react"
import styled from "styled-components"
import { Post } from "../../../types/WpSharedTypes"
import Card from "../card"

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px 0 40px 0;
`

const CardWrapper = styled.div`
  padding: 0 10px;
`

interface Props {
  posts: Post[]
}

export default function HoriztonalCardScroll({ posts }: Props) {
  return (
    <CardContainer>
      {posts.map((post, index) => (
        <CardWrapper key={index}>
          <Card {...post} />
        </CardWrapper>
      ))}
    </CardContainer>
  )
}
