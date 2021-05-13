import { getImage } from "gatsby-plugin-image"

export const mapCardFields = wpPost => {
  const post = {}

  post.slug = wpPost.uri
  post.featuredImage = {
    image: getImage(wpPost.featuredImage?.node.localFile),
    altText: wpPost.featuredImage?.node.altText,
  }
  post.title = wpPost.title
  post.author = wpPost.lastEditedBy?.node.name ?? wpPost.author.node.name
  post.date = wpPost.date
  post.excerpt = stripHtml(wpPost.excerpt)

  return post
}

const stripHtml = html => {
  if (typeof document !== "undefined") {
    let tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
  }
}
