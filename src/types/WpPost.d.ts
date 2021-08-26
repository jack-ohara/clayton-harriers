export interface WpPost {
  slug: string
  featuredImage:
    | {
        image: any
        altText: string
      }
    | undefined
  title: string
  author: string
  date: string
  excerpt: string
}
