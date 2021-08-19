import React, { CSSProperties, MouseEventHandler } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import HorizontalRule from "../../../utils/styles/HorizontalRule"
import { Post } from "../../../types/WpSharedTypes"
import { Link } from "gatsby"
import Card from "../card"

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

  a {
    margin-left: auto;
    margin-right: auto;
    min-width: 95%;
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
    <Slider {...settings}>
      {batches.map((b, idx) => (
        <div key={`grid-scroll-${idx}`}>
          <CardContainer>
            {b.map((post, index) => (
              <Card {...post} key={`grid-scroll-card-$${index}`} />
            ))}
          </CardContainer>
        </div>
      ))}
    </Slider>
  )
}
