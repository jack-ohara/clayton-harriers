export const getLocalDateFormat = (date: Date): string =>
  date?.toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

export const getLocalFormatFromString = (dateString: string): string => {
  const date = new Date(dateString)

  return getLocalDateFormat(date)
}

export function dateAreOnSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

export function getFormattedTime(date: Date) {
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`
}

export function datesCoverFullDays(startDate: Date, endDate: Date): boolean {
  return (
    startDate.getHours() === 0 &&
    startDate.getMinutes() === 0 &&
    endDate.getHours() === 23 &&
    endDate.getMinutes() === 59
  )
}
