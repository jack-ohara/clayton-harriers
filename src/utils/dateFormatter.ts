export const getLocalDateFormat = (
  date: Date,
  includeCurrentYear = true
): string =>
  date?.toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year:
      date.getFullYear() !== new Date().getFullYear() || includeCurrentYear
        ? "numeric"
        : undefined,
  })

export const getLocalFormatFromString = (dateString: string): string => {
  const date = new Date(dateString)

  return getLocalDateFormat(date)
}

function dateAreOnSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

function getFormattedTime(date: Date) {
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`
}

export function getEventDate(
  startDate: Date,
  endDate: Date,
  eventIsAllDay: boolean
) {
  if (dateAreOnSameDay(startDate, endDate)) {
    return eventIsAllDay
      ? getLocalDateFormat(startDate, false)
      : `${getLocalDateFormat(startDate, false)} ${getFormattedTime(
          startDate
        )} - ${getFormattedTime(endDate)}`
  }

  return eventIsAllDay
    ? `${getLocalDateFormat(startDate, false)} - ${getLocalDateFormat(
        endDate,
        false
      )}`
    : `${getLocalDateFormat(startDate, false)} ${getFormattedTime(
        startDate
      )} - ${getLocalDateFormat(endDate, false)} ${getFormattedTime(endDate)}`
}
