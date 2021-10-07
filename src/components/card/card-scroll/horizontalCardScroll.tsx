import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Post } from "../../../types/WpSharedTypes"
import Card from "../card"

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px 0 40px 0;
`

const CardWrapper = styled.div`
  padding: 0 10px;
`

interface Props {
  posts: Post[]
}

export default function HoriztonalCardScroll({ posts }: Props) {
  const [maxParagraphHeight, setMaxParagraphHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      const allParagraphs = [
        ...containerRef.current.querySelectorAll(":scope div p"),
      ]
      const maxHeight = Math.max(...allParagraphs.map(el => el.scrollHeight))

      setMaxParagraphHeight(maxHeight)
    }
  })

  return (
    <CardContainer ref={containerRef}>
      {posts.map((post, index) => (
        <CardWrapper key={index}>
          <Card {...post} paragraphHeight={maxParagraphHeight} />
        </CardWrapper>
      ))}
    </CardContainer>
  )
}
