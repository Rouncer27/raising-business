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

const FindUsStyled = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .linkLogo {
    width: calc(100% - 8rem);
    margin: 2rem 4rem;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin: 2rem 4rem;
    }

    @media (min-width: 1025px) {
      width: calc(33.33% - 8rem);
      margin: 2rem 4rem;
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
      </div>
    </FindUsStyled>
  )
}

export default FindUs
