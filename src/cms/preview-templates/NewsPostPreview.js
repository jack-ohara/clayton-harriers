import React from "react"
import { NewsPostTemplate } from "../../templates/news-post"

// type NewsPostPreviewProps = {
//   entry: any
//   widgetFor: any
// }

const NewsPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"])
  return (
    <NewsPostTemplate
      content={widgetFor("body")}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
      author={entry.getIn(["data", "author"])}
      date={entry.getIn(["data", "date"])}
    />
  )
}

export default NewsPostPreview