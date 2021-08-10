import React, { ReactNode } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { useAppContext } from "../state"
import { useIsDesktopMedia } from "../utils/useMediaQuery"

const Wrapper = styled.section`
  position: relative;
  min-height: 30vw;
  max-height: 70vh;
`

interface BgImageStyleProps {
  $isDesktopMedia: boolean
}

const BgImage = styled(GatsbyImage)<BgImageStyleProps>`
  left: 0;
  top: 0;
  width: 100%;
  max-height: inherit;
  min-height: inherit;

  img {
    object-fit: ${props => props.$isDesktopMedia && "none !important"};
    object-position: ${props => props.$isDesktopMedia && "0 -70px !important"};
  }
`

const ChildrenWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
`

interface Props {
  children: ReactNode
}

export default function BackgroundBanner({ children }: Props) {
  const [isDesktopMedia, hasRun] = useIsDesktopMedia()

  return hasRun ? (
    <StaticQuery
      query={graphql`
        query {
          bannerImage: file(
            relativePath: { eq: "clayton-runner-landscape.webp" }
          ) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      `}
      render={imageData => (
        <Wrapper>
          <BgImage
            image={imageData.bannerImage.childImageSharp.gatsbyImageData}
            alt="clayton runner landscape"
            loading="eager"
            $isDesktopMedia={isDesktopMedia}
          />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
      )}
    />
  ) : (
    <></>
  )
}
