import React from "react"
import { NewsPostTemplate } from "../../templates/news-post"
import PreviewTemplate from "./preview-template"

const NewsPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const author = entry.getIn(["data", "author"])
  const date = entry.getIn(["data", "date"])
  const body = widgetFor("body")

  const dateString = date.toLocaleString("default", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

  return (
    <PreviewTemplate>
      <NewsPostTemplate
        content={body}
        title={title}
        author={author}
        date={dateString}
      />
    </PreviewTemplate>
  )
}

export default NewsPostPreview
