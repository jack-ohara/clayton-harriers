import React, { ReactNode } from "react"
import styled from "styled-components"

interface Props {
  children: ReactNode
  className?: string | undefined
}

const DesktopContentWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`

export default function DesktopComponent({ children, className }: Props) {
  return (
    <DesktopContentWrapper className={className}>
      {children}
    </DesktopContentWrapper>
  )
}
