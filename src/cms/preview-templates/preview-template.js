import React from "react"
import { ThemeProvider } from "styled-components"
import { siteTheme } from "../../utils/theme"
import GlobalStyles from "../../utils/styles/GlobalStyles"
import "typeface-source-sans-pro"
import "typeface-timmana"

const PreviewTemplate = ({ title, children }) => (
  <ThemeProvider theme={siteTheme}>
    <GlobalStyles>{children}</GlobalStyles>
  </ThemeProvider>
)

export default PreviewTemplate
