import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { standardWrapper, H2White, H2Pine, B1Pine } from "../styles/helpers"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const EpisodeStyled = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .episodeTitle {
    width: 100%;
    text-align: center;
    h1 {
      ${H2Pine};
      font-weight: bold;
    }
  }

  .episodeDescription {
    max-width: 80rem;
    margin-top: 2.5rem;
    margin-right: auto;
    margin-bottom: 2.5rem;
    margin-left: auto;

    p,
    a {
      ${B1Pine};
    }

    a {
      color: var(--primary);

      &:hover {
        color: var(--accent);
      }
    }
  }
`

const EpisodePlayer = styled.div`
  width: 100%;

  .lattestEp__player {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 30rem;
    margin: 2rem auto;

    @media (min-width: 768px) {
      max-width: 100%;
    }

    &--image {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      background-color: #e3e1e2;

      @media (min-width: 768px) {
        width: 13rem;
        padding: 1rem;
      }

      .epImage {
        width: 100%;
      }
    }

    &--meta {
      width: calc(100%);
      background-color: #e3e1e2;

      @media (min-width: 768px) {
        width: calc(100% - 13rem);
      }

      .epTitle {
        padding: 1.5rem;
        h3 {
          ${B1Pine};
        }
      }
    }

    .rhap_container {
      width: calc(100%);
      background-color: #e3e1e2;
      box-shadow: none;

      .rhap_main.rhap_stacked {
        width: 100%;
      }
    }
  }
`

const Episode = props => {
  const { episode } = props.data

  console.log({ episode })

  return (
    <EpisodeStyled>
      <div className="wrapper">
        <div className="episodeTitle">
          <h1>{episode.title}</h1>
        </div>

        <EpisodePlayer className="lattestEp">
          <div className="lattestEp__player">
            <div className="lattestEp__player--image">
              <div className="epImage">
                <img src={episode.artwork_url} alt={episode.title} />
              </div>
            </div>
            <div className="lattestEp__player--meta">
              <div className="epTitle">
                <h3>{episode.title}</h3>
              </div>
              <AudioPlayer controls src={episode.audio_url} />
            </div>
          </div>
        </EpisodePlayer>

        <div
          className="episodeDescription"
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </div>
    </EpisodeStyled>
  )
}

export const episodePageQuery = graphql`
  query episodePagePage($id: String!) {
    episode: buzzsproutPodcastEpisode(id: { eq: $id }) {
      description
      episode_number
      title
      artwork_url
      audio_url
      artist
    }
  }
`

export default Episode
