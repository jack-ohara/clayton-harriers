import React from "react"
import HorizontalCardScroll from "./horizontalCardScroll"
import { Post } from "../../../types/WpSharedTypes"
import GridCardScroll from "./gridCardScroll"
import styled from "styled-components"
import HorizontalRule from "../../../utils/styles/HorizontalRule"
import BannerImage from "../../../images/card-banner.svg"
import MobileComponent from "../../mobileComponent"
import DesktopComponent from "../../desktopComponent"

const StyledHR = styled(HorizontalRule)`
  margin-bottom: 0.2rem;
`

// Something weird is making the banner SVGs in the cards lose the colours
// but having one on this page seems to resolve the issue, so I shove
// it off the top of the page 🤦‍♂️
const HiddenBannerSvg = styled(BannerImage)`
  position: fixed;
  top: -500px;
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

      <HiddenBannerSvg />
      <MobileComponent>
        <HorizontalCardScroll posts={posts} />
      </MobileComponent>
      <DesktopComponent>
        <GridCardScroll posts={posts} />
      </DesktopComponent>
    </div>
  )
}
