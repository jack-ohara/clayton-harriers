import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 815,
  },
})

export const mediaStyles = AppMedia.createMediaStyle()

export const { MediaContextProvider, Media } = AppMedia
