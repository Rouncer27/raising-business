import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "./BackgroundImage"
import {
  H1White,
  BtnMain,
  B1White,
  standardWrapper,
} from "../../styles/helpers/index"

const IntroStyled = styled.section`
  position: relative;

  @media (min-width: 768px) {
    padding-top: 35rem;
    padding-bottom: 20rem;
  }

  @media (min-width: 1025px) {
    padding-top: 25vw;
    padding-bottom: 25vw;
  }

  .wrapper {
    ${standardWrapper};
  }

  .introContent {
    width: 100%;
    max-width: 50rem;
    margin-right: auto;
    margin-left: 0;
  }

  h1 {
    ${H1White};
    margin-bottom: 2.5rem;
  }

  p {
    ${B1White};
    margin-top: 0;
    margin-bottom: 2.5rem;
  }

  a {
    ${BtnMain};
  }

  .backgroundGraphic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    .mainbgImage {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 50% 0% !important;
    }
  }
`

const Intro = () => {
  return (
    <IntroStyled>
      <div className="wrapper">
        <div className="introContent">
          <h1>Everyone has a story.</h1>
          <p>
            This is a place where we will discuss what it is like to Raise a
            Business, as business owners trying to build something amazing, as a
            husband and wife team, as people strengthening relationships and
            growing as human beings.
          </p>
          <Link to="/episodes">Listen to the podcast</Link>
        </div>
      </div>
      <div className="backgroundGraphic">
        <BackgroundImage />
      </div>
    </IntroStyled>
  )
}

export default Intro
