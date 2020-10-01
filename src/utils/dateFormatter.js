export const getLocalFormat = date =>
  date.toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

export const getLocalFormatFromString = dateString => {
  const date = new Date(dateString)

  return getLocalFormat(date)
}
