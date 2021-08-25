import { ImageDataLike } from "gatsby-plugin-image"

export interface FeaturedImage {
  node: { localFile: ImageDataLike; altText: string }
}

export interface Post {
  slug: string
  featuredImage?: {
    image: IGatsbyImageData | undefined
    altText: string
  }
  title: string
  author: string
  date: string
  excerpt: string | undefined
  horizontalLayout?: boolean
}
