import React from "react"
import { WpPost } from "../../types/WpPost"
import MobileComponent from "../mobileComponent"
import CardPreviews from "../card/cardPreviews"
import DesktopComponent from "../desktopComponent"
import styled from "styled-components"
import { Link } from "gatsby"
import HorizontalRule from "../../utils/styles/HorizontalRule"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledLink = styled(Link)`
  text-decoration: none;
  background-image: none;

  &:hover,
  &:focus {
    background: lightgrey;
    outline: none;
    text-decoration: underline;
  }

  h3,
  h4 {
    margin: 0;
  }

  h3 {
    margin-bottom: 0.4rem;
  }

  h4:last-of-type {
    margin-bottom: 0.6rem;
  }
`

const PostPreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostPreviewimage = styled(GatsbyImage)`
  max-height: 150px;
  width: 20%;
  border-radius: 1%;
`

interface Props {
  posts: WpPost[]
}

export default function NewsPreviews({ posts }: Props) {
  return (
    <>
      <MobileComponent>
        <CardPreviews posts={posts} />
      </MobileComponent>
      <DesktopComponent>
        {posts.map((p, idx) => (
          <article key={`desktop-news-post-preview-${idx}`}>
            <PostPreviewWrapper>
              <div>
                <StyledLink to={p.slug}>
                  <h3>{p.title}</h3>
                  <h4>{p.author}</h4>
                  <h4>{p.date}</h4>
                </StyledLink>
                <p>{p.excerpt}</p>
              </div>
              {p.featuredImage?.image && (
                <PostPreviewimage
                  image={p.featuredImage.image}
                  alt={p.featuredImage.altText}
                />
              )}
            </PostPreviewWrapper>
            <HorizontalRule />
          </article>
        ))}
      </DesktopComponent>
    </>
  )
}
