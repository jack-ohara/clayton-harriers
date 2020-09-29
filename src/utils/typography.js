import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

const typography = new Typography(lincolnTheme)

typography.options.googleFonts = [
  {
    name: "Timmana",
    styles: ["400"],
  },
]

export const { scale, rhythm, options } = typography
export default typography
