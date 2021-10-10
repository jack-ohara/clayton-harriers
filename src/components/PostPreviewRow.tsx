import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Post } from "../types/WpSharedTypes"

const Article = styled.article`
  max-width: var(--max-content-width);
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 8%), 0 0 2px hsl(0deg 0% 0% / 8%),
    0 0 4px hsl(0deg 0% 0% / 8%), 0 0 8px hsl(0deg 0% 0% / 8%),
    0 0 16px hsl(0deg 0% 0% / 8%);
  margin: 0.2rem 0;
  padding: 0.5rem;
  border-radius: 6px;

  &:hover h3,
  &:focus h3,
  &:hover h4,
  &:focus h4 {
    outline: none;
    text-decoration-color: unset;
  }

  @media (max-width: 1200px) {
    border-radius: 0;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
`

interface PostPreviewWrapperStyleProps {
  $postHasImage: boolean
}

const PostPreviewWrapper = styled(Link)<PostPreviewWrapperStyleProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.$postHasImage ? "3fr 40px 1fr" : "1fr"};
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;
  color: unset;
  text-decoration: unset;

  p {
    grid-column: 1 / span 2;
    grid-row: 2;
    margin: 0;

    @media (max-width: 500px) {
      grid-column: 1 / span 3;
    }
  }
`

const InfoArea = styled.div`
  grid-column: 1;
  grid-row: 1;
  background-image: none;
  text-decoration: none;

  @media (max-width: 500px) {
    grid-column: 1 / span 2;
  }

  h3,
  h4 {
    text-decoration: underline;
    text-decoration-color: transparent;
    margin: 0;
    transition: text-decoration-color 100ms ease-in;
  }

  h3 {
    margin-bottom: 0.4rem;
    color: var(--clayton-orange);
  }

  h4 {
    color: var(--dark-grey);
  }
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
  post: Post
}

export default function PostPreviewRow({ post }: Props) {
  const formatExcerpt = (
    excerpt: string | undefined
  ): JSX.Element | undefined => {
    return excerpt ? (
      <p>{excerpt?.replace("Continue reading →", "")}</p>
    ) : undefined
  }

  console.log(post.slug)

  return (
    <Article>
      <PostPreviewWrapper
        to={post.slug}
        $postHasImage={Boolean(post.featuredImage?.image)}
      >
        <InfoArea>
          <h3>{post.title}</h3>
          <h4>{post.author}</h4>
          <h4>{post.date}</h4>
        </InfoArea>
        {formatExcerpt(post.excerpt)}
        {post.featuredImage?.image && (
          <PostPreviewimage
            image={post.featuredImage.image}
            alt={post.featuredImage.altText}
          />
        )}
      </PostPreviewWrapper>
    </Article>
  )
}
