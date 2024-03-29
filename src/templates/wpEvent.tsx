import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import LocationPinIcon from "../images/location-pin.svg"
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
  margin-block: 0.5rem;
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

const StyledLocationPin = styled(LocationPinIcon)`
  height: 2rem;
`

const LocationInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin-left: 1rem;

    p {
      margin: 0;
    }
  }
`

const Dot = styled.span`
  border-radius: 50%;
  height: 0.5em;
  width: 0.5rem;
  background: black;
  display: inline-block;
`

const BottomInfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

function getLocation(event: WpEventResult) {
  if (event.linkedData.location) {
    return (
      <LocationInfo>
        <StyledLocationPin />

        <div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${event.linkedData.location.name}, ${event.linkedData.location.address.streetAddress}, ${event.linkedData.location.address.addressLocality}`
            )}`}
            target="_blank"
          >
            {event.linkedData.location.name}
          </a>
          <p>
            {event.linkedData.location.address.streetAddress} <Dot />{" "}
            {event.linkedData.location.address.addressLocality}
          </p>
        </div>
      </LocationInfo>
    )
  }

  return null
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
            new Date(event.startDate.replace(/-/g, "/")),
            new Date(event.endDate.replace(/-/g, "/")),
            event.allDay
          )}
        </EventDate>

        <EventPageHeader>{event.title}</EventPageHeader>

        <BottomInfoLine>
          {getContact(event.linkedData.organizer?.name, event.author.node.name)}
          {getLocation(event)}
        </BottomInfoLine>
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
        location {
          name
          description
          address {
            addressCountry
            addressLocality
            addressRegion
            postalCode
            streetAddress
          }
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
