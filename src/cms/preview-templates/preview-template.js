import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../../utils/styles/GlobalStyles"
import { siteTheme } from "../../utils/theme"
import "typeface-source-sans-pro"
import "typeface-timmana"

const PreviewTemplate = ({ children }) => (
  <ThemeProvider theme={siteTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default PreviewTemplate
