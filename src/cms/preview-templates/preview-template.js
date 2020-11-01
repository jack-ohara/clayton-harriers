import React from "react"
import SEO from "../../components/seo"
import { ThemeProvider } from "styled-components"
import { siteTheme } from "../../utils/theme"
import "typeface-source-sans-pro"
import "typeface-timmana"

const PreviewTemplate = ({ title, children }) => (
  <ThemeProvider theme={siteTheme}>
    <SEO title={title} />
    {children}
  </ThemeProvider>
)

export default PreviewTemplate
