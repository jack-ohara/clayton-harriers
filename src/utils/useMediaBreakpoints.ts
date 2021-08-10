import { createMedia } from "@artsy/fresnel"

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 815,
  },
})

export { MediaContextProvider, Media }
