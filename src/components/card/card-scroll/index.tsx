import React from "react"
import HorizontalCardScroll from "./horizontalCardScroll"
import { Post } from "../../../types/WpSharedTypes"
import { Media } from "../../../utils/useMediaBreakpoints"
import GridCardScroll from "./gridCardScroll"
import styled from "styled-components"
import HorizontalRule from "../../../utils/styles/HorizontalRule"

const StyledHR = styled(HorizontalRule)`
  margin-bottom: 0.2rem;
`

interface Props {
  title: string
  posts: Post[]
}

export default function CardScroll({ title, posts }: Props) {
  return (
    <div>
      <h3 style={{ textAlign: "left" }}>{title}</h3>
      <StyledHR />

      <Media at="sm">
        <HorizontalCardScroll posts={posts} />
      </Media>
      <Media greaterThan="sm">
        <GridCardScroll posts={posts} />
      </Media>
    </div>
  )
}
