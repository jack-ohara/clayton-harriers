import React from "react"
import { WpPost } from "../../types/WpPost"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import PostPreviewRow from "../PostPreviewRow"

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostPreviewimage = styled(GatsbyImage)`
  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
  max-height: 200px;
  border-radius: 1%;
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0)
  );

  margin: -0.5rem;

  @media (max-width: 500px) {
    grid-row: 1;
  }
`

interface Props {
  posts: WpPost[]
}

export default function NewsPreviews({ posts }: Props) {
  const formatExcerpt = (excerpt: string): JSX.Element => {
    return <p>{excerpt?.replace("Continue reading →", "")}</p>
  }

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
