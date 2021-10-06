import React from "react"
import styled from "styled-components"
import { Post } from "../types/WpSharedTypes"
import PostPreviewRow from "./PostPreviewRow"

const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
`

interface Props {
  fixtures: Post[]
}

export default function FixturePreviews({ fixtures }: Props) {
  return (
    <Container>
      {fixtures.map(fixture => (
        <PostPreviewRow
          post={fixture}
          key={`event-or-fixture-${fixture.title}`}
        />
      ))}
    </Container>
  )
}
