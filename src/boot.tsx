import React from "react"
import { MediaContextProvider } from "./utils/useMediaBreakpoints"

export const Boot = ({ element }) => {
  return <MediaContextProvider>{element}</MediaContextProvider>
}
