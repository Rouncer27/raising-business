import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  medWrapper,
  H1Brown,
  H2Pine,
  B1Pine,
  BtnMain,
} from "../../styles/helpers"
import MeetBackground from "./MeetBackground"
import WhitePineBackground from "../Graphics/WhitePineBackground"
import Suzy from "../Images/Suzy"
import Trevor from "../Images/Trevor"

const MeetHostsStyled = styled.section`
  position: relative;
  margin-bottom: 5rem;
  .wrapper {
    ${medWrapper};
    position: relative;
    z-index: 5;
  }

  .meetBackGraph {
    position: absolute;
    top: 30vw;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    .mainbgImage {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100vw;
      height: calc(100vw * 0.64);
    }
  }

  .meetTitle {
    position: relative;
    margin-top: -5vw;
    text-align: center;

    h2 {
      ${H1Brown};
      margin-bottom: 0;
      font-weight: bold;
    }

    h3 {
      ${H2Pine};
      margin-top: 0;
      font-weight: bold;
    }
  }

  .meetHosts {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 10rem;

    .meetHost {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(50% - 6rem);
      }

      &__image {
        position: relative;
        margin-top: 5rem;
        margin-bottom: 5rem;

        &--inner {
          position: relative;
          max-width: 25rem;
          max-height: 25rem;
          margin: auto;
          z-index: 5;
        }

        &--bg {
          position: absolute;
          top: -1rem;
          right: -3rem;
          width: 25rem;
          height: 25rem;
          background-color: var(--primary);
          border-radius: 50%;
          z-index: -1;
        }
      }

      h3 {
        ${B1Pine};
        margin-bottom: 0;
      }

      p {
        ${B1Pine};
        margin-top: 0;
      }
    }

    .meetTrev {
      @media (min-width: 768px) {
        margin-right: 6rem;
      }
    }

    .meetSuzy {
      @media (min-width: 768px) {
        margin-left: 6rem;
      }

      .meetHost__image--bg {
        right: auto;
        left: -2rem;
      }
    }
  }

  .meetTogether {
    p {
      ${B1Pine};
    }

    &__link {
      margin-top: 10rem;
      text-align: center;

      a {
        ${BtnMain};
      }
    }
  }
`

const MeetHosts = () => {
  return (
    <MeetHostsStyled>
      <MeetBackground />
      <div className="wrapper">
        <div className="meetTitle">
          <h2>Meet Trevor & Suzy</h2>
          <h3>The Hosts</h3>
        </div>
        <div className="meetHosts">
          <div className="meetHost meetTrev">
            <div className="meetHost__image">
              <div className="meetHost__image--inner">
                <Trevor />
                <div className="meetHost__image--bg" />
              </div>
            </div>
            <div>
              <h3>Trevor Rounce</h3>
              <p>
                I’ve worn many hats and done many different things in my life,
                but helping businesses thrive with great web design and
                development is where my passion lies. I love to learn and stay
                up-to-date with the ever changing web world. You miss a moment
                and you miss a lot! Same is true in business and in life.
                Bringing a vision to life for the first time as a thrill you
                can’t match.
              </p>
            </div>
          </div>
          <div className="meetHost meetSuzy">
            <div className="meetHost__image">
              <div className="meetHost__image--inner">
                <Suzy />
                <div className="meetHost__image--bg" />
              </div>
            </div>
            <div>
              <h3>Suzy Rounce</h3>
              <p>
                I’m a visual designer by training and can’t imagine doing
                anything else. I’m passionate about many things but in the end
                it’s all about the people we meet and the dreams we are all
                building. We get to meet amazing business owners and share in
                their journey. I wouldn’t change a thing!
              </p>
            </div>
          </div>
        </div>
        <div className="meetTogether">
          <p>
            <span>Together we are</span> Business and life partners that have
            created a digital agency that has worked with more than 250 clients,
            in 7 years and grown companies from just small start ups to full
            blown multi-million dollar success stories. We have 20+ years
            marketing, branding, operations and web experience - we want to
            share everything with you.{" "}
          </p>
          <div className="meetTogether__link">
            <Link to="/episodes/rab-002-why-is-storytelling-so-important">
              Listen to the podcast
            </Link>
          </div>
        </div>
      </div>
      <div className="meetBackGraph">
        <WhitePineBackground />
      </div>
    </MeetHostsStyled>
  )
}

export default MeetHosts
