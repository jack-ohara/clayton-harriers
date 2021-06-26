import { ImageDataLike } from "gatsby-plugin-image"

export interface FeaturedImage {
  node: { localFile: ImageDataLike; altText: string }
}
