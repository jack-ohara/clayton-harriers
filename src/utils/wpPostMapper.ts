import { getImage } from "gatsby-plugin-image"
import { Post } from "../types/WpSharedTypes"
import { getLocalFormatFromString } from "./dateFormatter"

export const mapCardFields = (
  wpPost: any,
  uriPrefix?: string | undefined
): Post => {
  const post: Post = {
    slug:
      uriPrefix && !wpPost.uri.startsWith(uriPrefix)
        ? `${uriPrefix}${wpPost.uri}`
        : wpPost.uri,
    featuredImage: {
      image: getImage(wpPost.featuredImage?.node.localFile),
      altText: wpPost.featuredImage?.node.altText,
    },
    title: wpPost.title,
    author: wpPost.lastEditedBy?.node.name ?? wpPost.author.node.name,
    date: getLocalFormatFromString(wpPost.date),
    excerpt: stripHtml(wpPost.excerpt),
  }

  return post
}

export const stripHtml = (html: string): string | undefined => {
  if (typeof document !== "undefined") {
    let tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }
}
