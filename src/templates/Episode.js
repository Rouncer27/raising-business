import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { standardWrapper, H2Pine, B1Pine } from "../styles/helpers"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import MobileNav from "../components/MobileNav/MobileNav"

const EpisodeStyled = styled.div`
  margin-top: 7.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }

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
    width: 100%;
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

  .shownotes {
    width: 100%;
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
    max-width: 40rem;
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
  const { episode, showNotes } = props.data

  return (
    <>
      <MobileNav />
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
          {showNotes && (
            <div
              className="shownotes"
              dangerouslySetInnerHTML={{
                __html: showNotes.episodeShowNotes.showNotes,
              }}
            />
          )}
        </div>
      </EpisodeStyled>
    </>
  )
}

export const episodePageQuery = graphql`
  query episodePagePage($id: String!, $slug: String!) {
    episode: buzzsproutPodcastEpisode(id: { eq: $id }) {
      description
      episode_number
      title
      artwork_url
      audio_url
      artist
    }

    showNotes: wpEpisode(slug: { eq: $slug }) {
      title
      episodeShowNotes {
        showNotes
      }
    }
  }
`

export default Episode
