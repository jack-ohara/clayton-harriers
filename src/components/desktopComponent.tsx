import React, { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
}

const DesktopContentWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`

export default function DesktopComponent({ children }: Props) {
  return <DesktopContentWrapper>{children}</DesktopContentWrapper>
}
