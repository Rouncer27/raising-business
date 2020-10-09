import React from "react"
import styled from "styled-components"
import {
  standardWrapper,
  H1LightGreen,
  H2White,
  B1Pine,
} from "../../styles/helpers"
import DarkGreenTop from "../Graphics/DarkGreenTop"
import DarkGreenBottom from "../Graphics/DarkGreenBottom"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { Link } from "gatsby"

const ListenNowStyled = styled.section`
  position: relative;
  background-color: var(--shadow);
  z-index: 15;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1LightGreen};
      margin-bottom: 2rem;
      font-weight: bold;
    }
  }

  .lattestEp {
    width: 100%;

    &__title {
      width: 100%;
      text-align: center;
    }

    h3 {
      ${H2White};
      font-weight: bold;
      text-transform: uppercase;
    }

    &__player {
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
  }

  .epList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    &__title {
      width: 100%;
      margin-top: 5rem;
      margin-bottom: 1.5rem;
      text-align: center;

      h2 {
        ${H2White};
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`

const EpisodeCard = styled(Link)`
  width: 100%;
  margin: 2.5rem auto;
  border-radius: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    width: calc(50% -5rem);
    margin: 2.5rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.33% - 4rem);
    margin: 2rem;
  }
`

const ListenNow = ({ latestEpisode, allEpisodes }) => {
  const lateEp = latestEpisode?.edges[0]?.node
  return (
    <ListenNowStyled>
      <DarkGreenTop />
      <div className="wrapper">
        <div className="title">
          <h2>Listen and Subscribe to the Raising a Business Podcast</h2>
        </div>

        <div className="lattestEp">
          <div className="lattestEp__title">
            <h3>Latest Episode</h3>
            <a href={lateEp.audio_url} title="Download MP3" target="_download">
              Download
            </a>
          </div>
          <div className="lattestEp__player">
            <div className="lattestEp__player--image">
              <div className="epImage">
                <img src={lateEp.artwork_url} alt={lateEp.title} />
              </div>
            </div>
            <div className="lattestEp__player--meta">
              <div className="epTitle">
                <h3>{lateEp.title}</h3>
              </div>
              <AudioPlayer controls src={lateEp.audio_url} />
            </div>
          </div>
        </div>

        <div className="epList">
          <div className="epList__title">
            <h2>More Episodes</h2>
          </div>
          {allEpisodes.edges.map(episode => {
            return (
              <EpisodeCard
                key={episode.node.id}
                to={`/episodes/${episode.node.slug}`}
              >
                <div>
                  <img
                    src={episode.node.artwork_url}
                    alt={episode.node.title}
                  />
                </div>
              </EpisodeCard>
            )
          })}
        </div>
      </div>
      <DarkGreenBottom />
    </ListenNowStyled>
  )
}

export default ListenNow
