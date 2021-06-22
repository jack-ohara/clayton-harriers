import { FeaturedImage } from "./WpSharedTypes"

export interface AllWpEventsResult {
  nodes: WpEventResult[]
}

export interface WpEventResult {
  uri: string
  title: string
  startDate: string
  endDate: string
  excerpt: string
  linkedData: { organizer: { name: string } }
  author: { node: { name: string } }
  featuredImage: FeaturedImage
}
