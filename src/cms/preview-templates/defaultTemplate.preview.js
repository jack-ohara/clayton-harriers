import React from "react"
import Card from "../../components/card"
import DefaultTemplateContent from "../../template-page-content/default-page-template"
import PreviewTemplate from "./preview-template"

const DefaultTemplatePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const date = entry.getIn(["data", "date"])
  const body = widgetFor("body")

  const first300Chars = body?.props?.value.substr(0, 300)

  const excerpt = first300Chars
    ? `${first300Chars}${first300Chars.length === 300 ? "..." : ""}`
    : ""

  const card = <Card title={title} date={date} excerpt={excerpt} />

  return (
    <PreviewTemplate card={card}>
      <DefaultTemplateContent content={body} title={title} />
    </PreviewTemplate>
  )
}

export default DefaultTemplatePreview
