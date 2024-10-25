import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Intro from "../components/HomeComponents/Intro"
import AboutUs from "../components/HomeComponents/AboutUs"
import MeetHosts from "../components/HomeComponents/MeetHosts"
import ListenNow from "../components/HomeComponents/ListenNow"
import FindUs from "../components/HomeComponents/FindUs"
import MobileNav from "../components/MobileNav/MobileNav"

const IndexPage = props => {
  const { latestEpisode, allEpisodes } = props.data
  // bump
  return (
    <>
      <SEO title="Raising a Business Podcast - Home Page" />
      <MobileNav />
      <Intro latestEpisode={latestEpisode.edges[0]} />
      <AboutUs />
      <MeetHosts latestEpisode={latestEpisode.edges[0]} />
      <ListenNow latestEpisode={latestEpisode} allEpisodes={allEpisodes} />
      <FindUs />
    </>
  )
}

export const homeQuery = graphql`
  {
    latestEpisode: allBuzzsproutPodcastEpisode(
      limit: 1
      filter: { private: { eq: false } }
    ) {
      edges {
        node {
          artist
          artwork_url
          audio_url
          title
          slug
        }
      }
    }
    allEpisodes: allBuzzsproutPodcastEpisode(
      sort: { order: DESC, fields: title }
      filter: { private: { eq: false } }
    ) {
      edges {
        node {
          artist
          artwork_url
          audio_url
          title
          private
          slug
          id
        }
      }
    }
  }
`

export default IndexPage
