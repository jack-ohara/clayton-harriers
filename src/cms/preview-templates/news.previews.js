import React from "react"
import { getLocalFormat } from "../../utils/dateFormatter"
import { NewsPostTemplate } from "../../templates/news-post"
import PreviewTemplate from "./preview-template"
import Card from "../../components/card"

const NewsPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const author = entry.getIn(["data", "author"])
  const featuredImage = entry.getIn(["data", "featuredImage"])
  const date = entry.getIn(["data", "date"])
  const body = widgetFor("body")

  const dateString = getLocalFormat(date)

  const first300Chars = body?.props?.value.substr(0, 300)

  const excerpt = first300Chars
    ? `${first300Chars}${first300Chars.length === 300 ? "..." : ""}`
    : ""

  const card = (
    <Card
      featuredImage={featuredImage}
      title={title}
      author={author}
      date={date}
      excerpt={excerpt}
    />
  )

  return (
    <PreviewTemplate card={card}>
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
