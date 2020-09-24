import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  font-size: 2.35em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>
      We Are
      <br />
      Clayton-Le-Moors <br /> Harriers
    </H1>
    <p>Welcome to our club!</p>
    <p>We'd love to have you</p>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
