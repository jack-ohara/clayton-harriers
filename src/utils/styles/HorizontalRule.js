import styled from "styled-components"

const HorizontalRule = styled.hr`
  background: linear-gradient(
    90deg,
    #bbbbbb 25%,
    ${props => props.theme.colours.lightGrey} 100%
  );
`

export default HorizontalRule;