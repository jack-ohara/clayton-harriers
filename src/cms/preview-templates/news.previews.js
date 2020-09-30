import React from "react"
import { NewsPostTemplate } from "../../templates/news-post"

const NewsPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const author = entry.getIn(["data", "author"])
  const date = entry.getIn(["data", "date"])
  const body = widgetFor("body")

  return (
    <NewsPostTemplate
      content={body}
      title={title}
      author={author}
      date={date.toString("MMMM DD, YYYY")}
    />
  )
}

export default NewsPostPreview
