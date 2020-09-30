import React, { FunctionComponent } from "react"

type ContentProps = {
  content: any
  className?: string
}

export const HTMLContent: FunctionComponent<ContentProps> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: FunctionComponent<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

HTMLContent.propTypes = Content.propTypes

export default Content
