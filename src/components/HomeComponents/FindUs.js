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
    width: calc(50% - 2rem);
    margin: 2rem 1rem;

    @media (min-width: 768px) {
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
          <Link to="/">
            <Apple />
          </Link>
        </div>
        <div className="linkLogo">
          <Link to="/">
            <Google />
          </Link>
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
          <Link to="/">
            <Overcast />
          </Link>
        </div>
        <div className="linkLogo">
          <Link to="/">
            <PocketCasts />
          </Link>
        </div>
      </div>
    </FindUsStyled>
  )
}

export default FindUs
