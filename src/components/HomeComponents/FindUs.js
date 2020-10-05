import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"
import Apple from "../Logos/Apple"
import Google from "../Logos/Google"
import Spotify from "../Logos/Spotify"

const FindUsStyled = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .linkLogo {
    width: 100%;

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
          <Link to="/">
            <Spotify />
          </Link>
        </div>
      </div>
    </FindUsStyled>
  )
}

export default FindUs
