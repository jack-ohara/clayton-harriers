import React from "react"
import { DefaultTemplate } from "../../templates/default-template"
import PreviewTemplate from "./preview-template"

const NewsPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const body = widgetFor("body")

  return (
    <PreviewTemplate title={title}>
      <DefaultTemplate content={body} title={title} />
    </PreviewTemplate>
  )
}

export default NewsPostPreview
