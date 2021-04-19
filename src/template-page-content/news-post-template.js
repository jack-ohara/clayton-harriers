import React from "react"
import Content from "../components/content"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

const NewsPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  author,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ""}
      <div>
        <h1>{title}</h1>
        <h4>
          {author} <br />
          {date}
        </h4>
        <HorizontalRule />
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default NewsPostTemplate
