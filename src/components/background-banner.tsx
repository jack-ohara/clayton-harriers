import React, { ReactNode } from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"

const Wrapper = styled.section`
  position: relative;
  min-height: 30vw;
  max-height: 70vh;
`

const BgImage = styled(GatsbyImage)`
  left: 0;
  top: 0;
  width: 100%;
  max-height: inherit;
  min-height: inherit;

  @media (min-width: 815px) {
    img {
      object-fit: none !important;
      object-position: center -70px !important;
    }
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
  return (
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
          />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
      )}
    />
  )
}
