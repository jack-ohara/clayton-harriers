import { useState, useEffect } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    setHasRun(true)
    const media = window.matchMedia(query)
    console.log(media)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return [matches, hasRun]
}

export function useIsDesktopMedia() {
  return useMediaQuery("(min-width: 815px)")
}
