import React from "react"
import { WpPost } from "../../types/WpPost"
import MobileComponent from "../mobileComponent"
import CardPreviews from "../card/cardPreviews"
import DesktopComponent from "../desktopComponent"
import styled from "styled-components"
import { Link } from "gatsby"
import HorizontalRule from "../../utils/styles/HorizontalRule"
import { GatsbyImage } from "gatsby-plugin-image"

const DesktopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  article {
    max-width: var(--max-content-width);
  }
`

const HR = styled(HorizontalRule)`
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  grid-column: 1;
  text-decoration: none;
  background-image: none;

  /* &:hover,
  &:focus {
    background: var(--light-grey);
  } */

  &:hover > *,
  &:focus > * {
    outline: none;
    text-decoration: underline;
  }

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    margin-top: 1.45rem;
    margin-bottom: 0.4rem;
  }

  h4 {
    color: var(--dark-grey);
  }
`

interface PostPreviewWrapperStyleProps {
  postHasImage: boolean
}

const PostPreviewWrapper = styled.div<PostPreviewWrapperStyleProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.postHasImage ? "3fr 40px 1fr" : "1fr"};
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1em;

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
`

interface Props {
  posts: WpPost[]
}

export default function NewsPreviews({ posts }: Props) {
  const formatExcerpt = (excerpt: string, slug: string): JSX.Element => {
    return (
      <p>
        {excerpt.replace("Continue reading →", "")}
        <Link to={slug}>Continue reading →</Link>
      </p>
    )
  }

  return (
    <>
      <MobileComponent>
        <CardPreviews posts={posts} />
      </MobileComponent>
      <DesktopComponent>
        <DesktopContentWrapper>
          {posts.map((p, idx) => (
            <article key={`desktop-news-post-preview-${idx}`}>
              <PostPreviewWrapper
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
              <HR />
            </article>
          ))}
        </DesktopContentWrapper>
      </DesktopComponent>
    </>
  )
}
