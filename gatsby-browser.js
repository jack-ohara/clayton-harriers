import React from "react"
import { AppWrapper } from "./src/state"

export const wrapRootElement = ({ element }) => (
  <AppWrapper>{element}</AppWrapper>
)
