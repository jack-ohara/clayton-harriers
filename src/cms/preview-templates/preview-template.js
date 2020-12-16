import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../../utils/styles/GlobalStyles"
import { siteTheme } from "../../utils/theme"
import PageContentLayout from "../../components/pageContentLayout"
import "typeface-source-sans-pro"
import "typeface-raleway"

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colours.lightGrey};
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const DesktopView = styled.div`
  min-height: 800px;
  min-width: 100%;
  display: flex;
`

const MobileView = styled.div`
  max-height: 736px;
  min-height: 736px;
  width: 414px;
  overflow: auto;
  padding: 1rem 0 0 0;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 8px 20px;
  display: flex;
`

const PreviewTemplate = ({ card, children }) => {
  const [previewMode, setPreviewMode] = useState("desktop")

  const getDisplayedPreview = () => {
    switch (previewMode) {
      case "desktop":
        return (
          <DesktopView>
            <PageContentLayout>{children}</PageContentLayout>
          </DesktopView>
        )

      case "mobile":
        return (
          <MobileView>
            <PageContentLayout>{children}</PageContentLayout>
          </MobileView>
        )

      case "card-preview":
        return card

      default:
        return null
    }
  }

  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyles />
      <Container>
        <div>
          <label>
            Preview Mode:
            <select
              value={previewMode}
              onChange={e => {
                setPreviewMode(e.target.value)
              }}
            >
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
              <option value="card-preview">Card Preview</option>
            </select>
          </label>
        </div>
        <ContentWrapper>{getDisplayedPreview()}</ContentWrapper>
      </Container>
    </ThemeProvider>
  )
}

export default PreviewTemplate
