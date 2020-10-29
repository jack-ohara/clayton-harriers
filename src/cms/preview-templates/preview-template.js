import React from "react"
import SEO from "../../components/seo"
const { ThemeProvider } = require("styled-components")
const { siteTheme } = require("../../utils/theme")

const PreviewTemplate = ({ title, children }) => (
  <ThemeProvider theme={siteTheme}>
    <SEO title={title} />
    {children}
  </ThemeProvider>
)

export default PreviewTemplate
