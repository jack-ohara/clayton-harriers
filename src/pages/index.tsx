import React, { FunctionComponent } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Banner from "../components/banner"

const H1 = styled.h1`
  position: relative;
  font-size: 11vw;
  z-index: 1;
  color: #ffffff;
  text-shadow: 2px 2px #fd6b0a;
  font-family: "Timmana", sans-serif;
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 110px;
  right: 0;
  width: 100vw;
`

const BannerWrapper = styled.div`
  margin-left: auto;
  max-width: 65%;
`

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>
        We Are The
        <br />
        Clayton-Le-Moors <br /> Harriers
      </H1>
      <BannerContainer>
        <BannerWrapper>
          <Banner />
        </BannerWrapper>
      </BannerContainer>
      <p>Welcome to our club!</p>
      <p>We'd love to have you</p>
    </Layout>
  )
}

export default IndexPage
