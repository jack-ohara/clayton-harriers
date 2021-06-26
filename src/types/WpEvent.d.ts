import { FeaturedImage } from "./WpSharedTypes"

export interface AllWpEventsResult {
  nodes: WpEventResult[]
}

export interface WpEventResult {
  uri: string
  title: string
  content: string
  startDate: string
  endDate: string
  allDay: boolean
  excerpt: string
  linkedData: { organizer: { name: string }; location: EventLocation | null }
  author: { node: { name: string } }
  featuredImage: FeaturedImage
}

interface EventLocation {
  name: string | undefined
  address: {
    streetAddress: string | undefined
    addressLocality: string | undefined
    addressRegion: string | undefined
    postalCode: string | undefined
    addressCountry: string | undefined
  }
}
