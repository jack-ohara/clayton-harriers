import React from "react"
import { WpPost } from "../../types/WpPost"
import styled from "styled-components"
import PostPreviewRow from "../PostPreviewRow"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

interface Props {
  posts: WpPost[]
}

export default function NewsPreviews({ posts }: Props) {
  return (
    <ContentWrapper>
      {posts.map((p, idx) => (
        <PostPreviewRow
          post={p}
          key={`desktop-news-post-preview-${idx}`}
        ></PostPreviewRow>
      ))}
    </ContentWrapper>
  )
}
