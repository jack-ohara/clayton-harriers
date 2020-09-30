import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Banner from "../components/banner"

const TitleArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
`

const H1 = styled.h1`
  position: relative;
  font-size: 13vw;
  z-index: 1;
  color: #c8c8c8;
  text-shadow: 2px 2px #959393;
  font-family: "Timmana", sans-serif;
  margin: 0;
  grid-area: 1 / 1 / 2 / 1;
  margin-top: 17px;
`
const BannerWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <TitleArea> */}
      <H1>
        We Are The
        <br />
        Clayton-Le-Moors <br /> Harriers
      </H1>
      {/* <BannerWrapper>
          <Banner />
        </BannerWrapper> */}
      {/* </TitleArea> */}
      <p>Welcome to our club!</p>
      <p>We'd love to have you</p>
    </Layout>
  )
}

export default IndexPage
