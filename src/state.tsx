import React, { createContext, ReactNode, useContext } from "react"
import { useMediaQuery } from "react-responsive"

type AppContext = {
  isDesktopMedia: boolean
}

const defaultContext: AppContext = {
  isDesktopMedia: false,
}

const AppContext = createContext(defaultContext)

interface Props {
  children: ReactNode
}

export function AppWrapper({ children }: Props) {
  const isDesktopMedia =
    typeof window === "undefined" ||
    useMediaQuery({ query: "(min-width: 815px)" })

  const initialState = {
    isDesktopMedia,
  }

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
