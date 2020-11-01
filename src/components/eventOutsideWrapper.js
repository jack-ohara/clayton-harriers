import React, { useRef, useEffect } from "react"

const useOutsideAlerter = (ref, events, handle) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handle()
      }
    }

    events.forEach(e => document.addEventListener(e, handleClickOutside))

    return () => {
      events.forEach(e => document.removeEventListener(e, handleClickOutside))
    }
    // eslint-disable-next-line
  }, [ref])
}

const OutsideAlerter = ({ children, events, handleEvent }) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, events, handleEvent)

  return <div ref={wrapperRef}>{children}</div>
}

export default OutsideAlerter
