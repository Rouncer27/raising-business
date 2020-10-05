import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BGImage from "./BGImage"
import {
  H1White,
  BtnMain,
  B1White,
  standardWrapper,
} from "../../styles/helpers/index"

const IntroStyled = styled.section`
  position: relative;
  padding-top: 30vw;
  padding-bottom: 30vw;
  background: linear-gradient(
    to bottom,
    var(--shadow) 0%,
    var(--shadow) 50%,
    var(--accent) 50%,
    var(--accent) 100%
  );

  @media (min-width: 768px) {
    padding-top: 20vw;
    padding-bottom: 25vw;
  }

  @media (min-width: 1025px) {
    padding-top: 25vw;
    padding-bottom: 25vw;
  }

  .wrapper {
    ${standardWrapper};
    max-width: 76.8rem;

    @media (min-width: 768px) {
      max-width: 90rem;
    }

    @media (min-width: 1025px) {
      max-width: 100rem;
    }

    @media (min-width: 1200px) {
      max-width: 105rem;
    }
    @media (min-width: 1600px) {
      max-width: 110rem;
    }
  }

  .introContent {
    position: relative;
    width: 100%;
    max-width: 30rem;
    margin-right: auto;
    margin-left: 0;
    z-index: 10;

    @media (min-width: 400px) {
      max-width: 35rem;
    }

    @media (min-width: 650px) {
      max-width: 40rem;
    }

    @media (min-width: 768px) {
      max-width: 50rem;
    }
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
    top: 30vw;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    @media (min-width: 768px) {
      top: -3rem;
    }

    @media (min-width: 1025px) {
      top: -2rem;
    }

    @media (min-width: 1250px) {
      top: -3vw;
    }

    @media (min-width: 1375px) {
      top: -4vw;
    }
    @media (min-width: 1700px) {
      top: -5.5vw;
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
        <BGImage />
      </div>
    </IntroStyled>
  )
}

export default Intro
