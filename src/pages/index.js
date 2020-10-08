import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/HomeComponents/Intro"
import AboutUs from "../components/HomeComponents/AboutUs"
import MeetHosts from "../components/HomeComponents/MeetHosts"
import ListenNow from "../components/HomeComponents/ListenNow"
import FindUs from "../components/HomeComponents/FindUs"

const IndexPage = props => {
  const { latestEpisode, allEpisodes } = props.data

  return (
    <>
      <Intro />
      <AboutUs />
      <MeetHosts />
      <ListenNow latestEpisode={latestEpisode} allEpisodes={allEpisodes} />
      <FindUs />
    </>
  )
}

export const homeQuery = graphql`
  {
    latestEpisode: allBuzzsproutPodcastEpisode(
      limit: 1
      sort: { fields: private }
    ) {
      edges {
        node {
          artist
          artwork_url
          audio_url
          title
        }
      }
    }
    allEpisodes: allBuzzsproutPodcastEpisode(skip: 0) {
      edges {
        node {
          artist
          artwork_url
          audio_url
          title
          private
        }
      }
    }
  }
`

export default IndexPage
