import React, { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const MobileContentWrapper = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`

export default function MobileComponent({ children }: Props) {
  return <MobileContentWrapper>{children}</MobileContentWrapper>
}
