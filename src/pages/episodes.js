import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { standardWrapper, H2Pine, B1Pine } from "../styles/helpers"

const EpisodeListStyled = styled.div`
  .wrapper {
    ${standardWrapper};
  }
`

const EpisodeFull = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;

  .epImage {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin-right: 2rem;
    }
  }

  .epContent {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(75% - 2rem);
      margin-left: 2rem;
    }

    &__title {
      width: 100%;

      h2 {
        ${H2Pine};
        font-weight: bold;

        a {
          ${H2Pine};
          font-weight: bold;

          &:hover {
            color: var(--secondary);
          }
        }
      }
    }

    &__summary {
      width: 100%;

      p {
        ${B1Pine};
      }
    }
  }
`

const EpisodesPage = props => {
  const { allEpisodes } = props.data

  return (
    <>
      <div>
        <EpisodeListStyled>
          <div className="wrapper">
            {allEpisodes.edges.map(episode => {
              return (
                <EpisodeFull key={episode.node.id}>
                  <Link
                    to={`/episodes/${episode.node.slug}`}
                    className="epImage"
                  >
                    <img
                      src={episode.node.artwork_url}
                      alt={episode.node.title}
                    />
                  </Link>
                  <div className="epContent">
                    <div className="epContent__title">
                      <h2>
                        <Link to={`/episodes/${episode.node.slug}`}>
                          {episode.node.title}
                        </Link>
                      </h2>
                    </div>
                    <div className="epContent__summary">
                      <p>{episode.node.summary}</p>
                    </div>
                  </div>
                </EpisodeFull>
              )
            })}
          </div>
        </EpisodeListStyled>
      </div>
    </>
  )
}

export const homeQuery = graphql`
  {
    allEpisodes: allBuzzsproutPodcastEpisode(
      filter: { private: { eq: false } }
    ) {
      edges {
        node {
          artist
          summary
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

export default EpisodesPage
