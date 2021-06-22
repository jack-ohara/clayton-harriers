import { getImage } from "gatsby-plugin-image"
import { CardProps } from "../components/card/card"
import { getLocalFormatFromString } from "./dateFormatter"

export const mapCardFields = (wpPost): CardProps => {
  const post: CardProps = {
    slug: wpPost.uri,
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
