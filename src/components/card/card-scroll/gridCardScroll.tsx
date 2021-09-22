import React, { CSSProperties, MouseEventHandler } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { Post } from "../../../types/WpSharedTypes"
import Card from "../card"

const StyledSlider = styled(Slider)`
  width: 91%;
  margin: 0 auto 1rem;
  max-width: var(--max-content-width);
  border-radius: 4px;
  box-shadow: 0 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 0 16px 16px hsl(0deg 0% 0% / 0.075);
`

const ArrowDiv = styled.div`
  &.slick-arrow {
    height: 2rem;
    width: 2rem;

    &.slick-next {
      right: -3rem;
    }

    &.slick-prev {
      left: -3rem;
    }

    &:hover:before,
    &:focus:before {
      opacity: 1;
    }

    &:before {
      color: var(--clayton-orange);
      font-size: 2rem;
      opacity: 0.75;
    }
  }
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  padding: 1rem 0;
  gap: 1.25rem;

  a {
    margin-left: auto;
    margin-right: auto;
    min-width: 95%;
  }

  a:nth-child(odd) {
    margin-right: 0;
  }

  a:nth-child(even) {
    margin-left: 0;
  }

  a:nth-child(1),
  a:nth-child(2) {
    margin-bottom: 0;
  }

  a:nth-last-child(1),
  a:nth-last-child(2) {
    margin-top: 0;
  }
`

interface ArrowProps {
  className?: string
  style?: CSSProperties | undefined
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

function Arrow({ className, style, onClick }: ArrowProps) {
  return (
    <ArrowDiv
      className={className}
      style={{ ...style }}
      onClick={onClick}
      tabIndex={0}
    />
  )
}

function getPostBatches(posts: Post[]): Post[][] {
  let result: Post[][] = new Array<Array<Post>>()

  for (let index = 0; index < posts.length; index += 4) {
    result.push(posts.slice(index, index + 4))
  }

  return result
}

interface Props {
  posts: Post[]
}

export default function GridCardScroll({ posts }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  }

  const batches = getPostBatches(posts)

  return (
    <StyledSlider {...settings}>
      {batches.map((b, idx) => (
        <div key={`grid-scroll-${idx}`}>
          <CardContainer>
            {b.map((post, index) => (
              <Card {...post} key={`grid-scroll-card-$${index}`} />
            ))}
          </CardContainer>
        </div>
      ))}
    </StyledSlider>
  )
}
