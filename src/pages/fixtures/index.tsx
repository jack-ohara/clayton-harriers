import React from "react"
import Layout, { PageHeader } from "../../components/layout"
import SEO from "../../components/seo"
import CardPreviews from "../../components/card/cardPreviews"
import { graphql } from "gatsby"
import { AllWpEventsResult, WpEventResult } from "../../types/WpEvent"
import { CardProps } from "../../components/card/card"
import { getImage } from "gatsby-plugin-image"
import {
  dateAreOnSameDay,
  getFormattedTime,
  getLocalDateFormat,
  datesCoverFullDays,
} from "../../utils/dateFormatter"
import { stripHtml } from "../../utils/wpPostMapper"

interface Props {
  data: { allWpEvent: AllWpEventsResult }
}

const getEventDate = (event: WpEventResult): string => {
  const startDate = new Date(event.startDate)
  const endDate = new Date(event.endDate)

  if (dateAreOnSameDay(startDate, endDate)) {
    return datesCoverFullDays(startDate, endDate)
      ? getLocalDateFormat(startDate)
      : `${getLocalDateFormat(startDate)} ${getFormattedTime(
          startDate
        )} - ${getFormattedTime(endDate)}`
  }

  return datesCoverFullDays(startDate, endDate)
    ? `${getLocalDateFormat(startDate)} - ${getLocalDateFormat(endDate)}`
    : `${getLocalDateFormat(startDate)} ${getFormattedTime(
        startDate
      )} - ${getLocalDateFormat(endDate)} ${getFormattedTime(endDate)}`
}

const getEventOrganiser = (event: WpEventResult): string => {
  return event.linkedData?.organizer?.name ?? event.author.node.name
}

const getCards = (events: WpEventResult[]): CardProps[] => {
  return events.map(event => {
    const card: CardProps = {
      slug: event.uri,
      title: event.title,
      author: getEventOrganiser(event),
      date: getEventDate(event),
      excerpt: stripHtml(event.excerpt),
      featuredImage: {
        image: getImage(event.featuredImage?.node?.localFile),
        altText: event.featuredImage?.node?.altText,
      },
    }

    return card
  })
}

export default function FixturesPage({ data }: Props) {
  return (
    <Layout>
      <SEO title="Fixtures &amp; Results" />

      <PageHeader>Fixtures &amp; Results</PageHeader>

      <CardPreviews posts={getCards(data.allWpEvent.nodes)} />
    </Layout>
  )
}

// The 'events' page is not added to the api schema, so we have to
// construct the page ourselves from the events

export const pageQuery = graphql`
  query FixturesPageQuery {
    allWpEvent(sort: { fields: startDate }) {
      nodes {
        uri
        title
        startDate
        endDate
        excerpt
        linkedData {
          organizer {
            name
          }
        }
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP]
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                )
              }
            }
            altText
          }
        }
      }
    }
  }
`
