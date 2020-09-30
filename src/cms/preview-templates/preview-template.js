const { ThemeProvider } = require("styled-components")
const { siteTheme } = require("../../utils/theme")

const PreviewTemplate = ({ children }) => {
  ;<ThemeProvider theme={siteTheme}>{children}</ThemeProvider>
}

export default PreviewTemplate
