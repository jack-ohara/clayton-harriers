export const mapCardFields = wpPost => {
  const post = {}

  console.log(wpPost)

  post.slug = wpPost.uri
  post.featuredImage = {
    src: wpPost.featuredImage?.node.localFile.publicURL,
    altText: wpPost.featuredImage?.node.altText,
  }
  post.title = wpPost.title
  post.author = wpPost.lastEditedBy?.node.name ?? wpPost.author.node.name
  post.date = wpPost.modified
  post.excerpt =
    "Mollit est anim irure mollit amet laborum et consequat non ad laborum. Irure veniam reprehenderit aliquip nisi nisi amet cupidatat do."

  console.log(post)

  return post
}
