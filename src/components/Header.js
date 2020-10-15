import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logos/Logo"
import { medWrapper, B2LightGreen, BtnMainAlt } from "../styles/helpers/index"
import HeaderAlt from "./Graphics/HeaderAlt"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeaderStyled = styled.header`
  position: ${props => (props.absPosition ? "absolute" : "relative")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .wrapper {
    ${medWrapper};
    position: ${props => (props.absPosition ? "relative" : "absolute")};
    align-items: flex-end;
    z-index: 5;

    @media (min-width: 768px) {
      align-items: center;
    }

    @media (min-width: 1025px) {
      align-items: flex-end;
      max-width: 130rem;
    }

    @media (min-width: 1450px) {
      max-width: 140rem;
    }

    @media (min-width: 1600px) {
      max-width: 155rem;
    }
  }

  .backgroundImage {
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
      top: -3rem;
    }

    @media (min-width: 1025px) {
      top: -2rem;
    }

    @media (min-width: 1250px) {
      top: -2.5vw;
    }

    @media (min-width: 1375px) {
      top: -4vw;
    }
    @media (min-width: 1700px) {
      top: -5.5vw;
    }
  }

  .logo {
    width: calc(100%);
    max-width: 25rem;
    margin: 2rem auto;

    @media (min-width: 768px) {
      width: calc(20% - 2rem);
      margin-left: 2rem;
    }

    span {
      position: absolute;
      top: 0;
      left: -999%;
    }
  }

  .mainNav {
    display: none;
    justify-content: flex-end;
    width: calc(100%);

    @media (min-width: 768px) {
      display: flex;
      width: calc(80%);
    }

    @media (min-width: 1025px) {
      margin-bottom: 5vw;
    }

    a,
    button {
      ${B2LightGreen};
      margin: auto 3rem;
      padding: 0 2rem;
      background: transparent;
      border: none;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: none;
      }

      &:hover {
        color: var(--white);
      }
    }

    .callToAct {
      ${BtnMainAlt};
      margin: auto 0 auto 3rem;
      padding: 0.75rem 2vw;
      background-color: var(--tertiary);
      color: var(--white);

      @media (min-width: 1025px) {
        padding: 0.75rem 2vw;
      }

      @media (min-width: 1200px) {
        margin-left: 5rem;
        margin-right: 3rem;
        padding: 0.75rem 2rem;
      }

      @media (min-width: 1450px) {
        margin-left: 10rem;
        margin-right: 5rem;
      }

      &:hover {
        color: var(--tertiary);
      }
    }
  }
`

const Header = props => {
  const siteTitle = props.siteTitle
  const { latestEpisode } = props
  const absPosition = props?.location?.pathname === "/" ? true : false

  return (
    <HeaderStyled absPosition={absPosition}>
      <div className="wrapper">
        <div className="logo">
          <h1>
            <Link to="/">
              <Logo />
              <span>{siteTitle}</span>
            </Link>
          </h1>
        </div>
        <nav className="mainNav">
          <Link to="/episodes">Episodes</Link>
          <button
            type="button"
            onClick={() => {
              scrollTo(`#contactFooter`)
            }}
          >
            Contact
          </button>
          <Link
            className="callToAct"
            to={`/episodes/${latestEpisode.node.slug}`}
          >
            Listen To The Podcast
          </Link>
        </nav>
      </div>
      {!absPosition && (
        <div className="backgroundImage">
          <HeaderAlt />
        </div>
      )}
    </HeaderStyled>
  )
}
export default Header
