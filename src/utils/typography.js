import Typography from "typography"

const typography = new Typography()

typography.options.googleFonts = [
  {
    name: "Timmana",
    styles: ["400"],
  },
  {
    name: "Source Sans Pro",
    styles: ["400"],
  },
]

export const { scale, rhythm, options } = typography
export default typography
