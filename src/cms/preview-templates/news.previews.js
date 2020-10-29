import React from "react"
import { getLocalFormat } from "../../utils/dateFormatter"
import { NewsPostTemplate } from "../../templates/news-post"
import PreviewTemplate from "./preview-template"

const NewsPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const author = entry.getIn(["data", "author"])
  const date = entry.getIn(["data", "date"])
  const body = widgetFor("body")

  const dateString = getLocalFormat(date)

  return (
    <PreviewTemplate title={title}>
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
