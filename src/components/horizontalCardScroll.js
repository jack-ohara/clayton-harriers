import React from "react"
import styled from "styled-components"
import HorizontalRule from "../utils/styles/HorizontalRule"
import Card from "./card"

const Container = styled.div``

const Title = styled.h3``

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px 0 40px 0;

  a {
    min-width: 65vw;
    min-height: 100%;
  }
`

const CardWrapper = styled.div`
  padding: 0 10px;
`

const StyledHR = styled(HorizontalRule)`
  margin-bottom: 0.2rem;
`

const HoriztonalCardScroll = ({ title, posts }) => (
  <Container>
    <Title style={{ textAlign: "left" }}>{title}</Title>
    <StyledHR />

    <CardContainer>
      {posts.map((post, index) => (
        <CardWrapper>
          <Card key={index} {...post} />
        </CardWrapper>
      ))}
    </CardContainer>
  </Container>
)

export default HoriztonalCardScroll
