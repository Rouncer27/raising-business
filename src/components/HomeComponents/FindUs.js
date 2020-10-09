import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"
import Apple from "../Logos/Apple"
import Google from "../Logos/Google"
import Spotify from "../Logos/Spotify"
import Overcast from "../Logos/Overcast"
import PocketCasts from "../Logos/PocketCasts"
import Stitcher from "../Logos/Stitcher"
import RssLogo from "../Logos/RssLogo"

const FindUsStyled = styled.div`
  .wrapper {
    ${standardWrapper};
    align-items: center;
  }

  .linkLogo {
    width: calc(50% - 4rem);
    margin: 2rem;

    @media (min-width: 768px) {
      width: calc(33.33% - 8rem);
      margin: 2rem 4rem;
    }

    @media (min-width: 1025px) {
      width: calc(25% - 6rem);
      margin: 2rem 3rem;
    }

    @media (min-width: 1250px) {
      width: calc(25% - 6rem);
      margin: 2rem 3rem;
    }

    &__rss {
      padding: 0 3rem;

      a {
        display: flex;
        align-items: flex-end;

        .rssLogo {
          width: 5rem;
          height: 5rem;
        }

        p {
          margin: 0;
          margin-left: 1rem;
          color: var(--black);
          font-weight: bold;
          line-height: 1;
        }
      }
    }
  }
`

const FindUs = () => {
  return (
    <FindUsStyled>
      <div className="wrapper">
        <div className="linkLogo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://podcasts.apple.com/ca/podcast/raising-a-business-podcast/id1534965741"
          >
            <Apple />
          </a>
        </div>
        <div className="linkLogo">
          <Google />
        </div>
        <div className="linkLogo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/show/2RxPmZzJXXEYXzZEouzmr1"
          >
            <Spotify />
          </a>
        </div>
        <div className="linkLogo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.stitcher.com/podcast/raising-a-business-podcast"
          >
            <Stitcher />
          </a>
        </div>
        <div className="linkLogo">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://overcast.fm/itunes1534965741/raising-a-business-podcast"
          >
            <Overcast />
          </a>
        </div>
        <div className="linkLogo">
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://pca.st/itunes/1534965741"
          >
            
          </a> */}
          <PocketCasts />
        </div>
        <div className="linkLogo linkLogo__rss">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://feeds.buzzsprout.com/1395172.rss"
          >
            <div className="rssLogo">
              <RssLogo />
            </div>
            <p>RSS Feed</p>
          </a>
        </div>
      </div>
    </FindUsStyled>
  )
}

export default FindUs
