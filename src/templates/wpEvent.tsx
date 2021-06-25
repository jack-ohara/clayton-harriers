import React from "react"
import SEO from "../components/seo"
import HorizontalRule from "../utils/styles/HorizontalRule.js"
import styled from "styled-components"
import Layout, { PageHeader } from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { getEventDate } from "../utils/dateFormatter"
import { WpEventResult } from "../types/WpEvent"

interface QueryResult {
  data: {
    wpEvent: WpEventResult
  }
}

const PageHead = styled.div`
  margin-bottom: 0.5rem;
`

const EventDetails = styled.div``

const EventDate = styled.div`
  opacity: 0.925;
`

const EventPageHeader = styled(PageHeader)`
  text-align: left;
  margin-bottom: 0.5rem;
`

const ContactIntro = styled.p`
  margin: 0;
  opacity: 0.925;
`

const ContactName = styled.p`
  margin: 0;
`

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 1.45rem;
`

function getContact(organizerName: string, authorName: string) {
  return (
    <div>
      <ContactIntro>
        {organizerName ? "Organised by" : "Created by"}
      </ContactIntro>
      <ContactName>
        <strong>{organizerName ? organizerName : authorName}</strong>
      </ContactName>
    </div>
  )
}

export default function WpEvent({ data: { wpEvent: event } }: QueryResult) {
  const featuredImage = event.featuredImage?.node?.localFile
    ? getImage(event.featuredImage.node.localFile)
    : undefined

  return (
    <Layout>
      <SEO title={event.title} />

      <PageHead>
        <EventDate>
          {getEventDate(
            new Date(event.startDate),
            new Date(event.endDate),
            event.allDay
          )}
        </EventDate>

        <EventPageHeader>{event.title}</EventPageHeader>

        {getContact(event.linkedData.organizer?.name, event.author.node.name)}

        <HorizontalRule />
      </PageHead>

      <EventDetails>
        {featuredImage && (
          <FeaturedImage
            image={featuredImage}
            alt={event.featuredImage.node.altText}
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: event.content }} />
      </EventDetails>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpEvent(id: { eq: $id }) {
      title
      content
      startDate
      endDate
      allDay
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
`
