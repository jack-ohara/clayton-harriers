import React from "react"
import { WpPost } from "../../types/WpPost"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const DesktopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Article = styled.article`
  max-width: var(--max-content-width);
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 8%), 0 0 2px hsl(0deg 0% 0% / 8%),
    0 0 4px hsl(0deg 0% 0% / 8%), 0 0 8px hsl(0deg 0% 0% / 8%),
    0 0 16px hsl(0deg 0% 0% / 8%);
  margin: 0.2rem -0.5rem;
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
  }
`

const StyledLink = styled(Link)`
  grid-column: 1;
  background-image: none;
  text-decoration: none;

  h3,
  h4 {
    text-decoration: underline;
    text-decoration-color: transparent;
    margin: 0;
    transition: text-decoration-color 100ms ease-in;
  }

  h3 {
    margin-bottom: 0.4rem;
  }

  h4 {
    color: var(--dark-grey);
  }
`

interface PostPreviewWrapperStyleProps {
  postHasImage: boolean
}

const PostPreviewWrapper = styled(Link)<PostPreviewWrapperStyleProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.postHasImage ? "3fr 40px 1fr" : "1fr"};
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;
  color: unset;
  text-decoration: unset;

  p {
    grid-column: 1 / span 2;
    grid-row: 2;
    margin: 0;
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
`

interface Props {
  posts: WpPost[]
}

export default function NewsPreviews({ posts }: Props) {
  const formatExcerpt = (excerpt: string, slug: string): JSX.Element => {
    return (
      <p>
        {excerpt?.replace("Continue reading →", "")}
        <Link to={slug}>Continue reading →</Link>
      </p>
    )
  }

  return (
    <DesktopContentWrapper>
      {posts.map((p, idx) => (
        <Article key={`desktop-news-post-preview-${idx}`}>
          <PostPreviewWrapper
            to={p.slug}
            postHasImage={Boolean(p.featuredImage?.image)}
          >
            <StyledLink to={p.slug}>
              <h3>{p.title}</h3>
              <h4>{p.author}</h4>
              <h4>{p.date}</h4>
            </StyledLink>
            {formatExcerpt(p.excerpt, p.slug)}
            {p.featuredImage?.image && (
              <PostPreviewimage
                image={p.featuredImage.image}
                alt={p.featuredImage.altText}
              />
            )}
          </PostPreviewWrapper>
        </Article>
      ))}
    </DesktopContentWrapper>
  )
}
