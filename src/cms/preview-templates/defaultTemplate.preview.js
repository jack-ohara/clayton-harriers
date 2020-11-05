import React from "react"
import { DefaultTemplate } from "../../templates/default-template"
import PreviewTemplate from "./preview-template"

const DefaultTemplatePreview = ({ entry, widgetFor }) => {
  console.log(entry)
  console.log(widgetFor)
  const title = entry.getIn(["data", "title"])
  const body = widgetFor("body")

  return (
    <PreviewTemplate>
      <DefaultTemplate content={body} title={title} />
    </PreviewTemplate>
  )
}

export default DefaultTemplatePreview
