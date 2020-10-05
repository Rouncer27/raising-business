import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { medWrapper, B2LightGreen, BtnMainAlt } from "../styles/helpers/index"

const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .wrapper {
    ${medWrapper};
    align-items: flex-end;

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

  .logo {
    width: calc(100%);

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
    display: flex;
    justify-content: flex-end;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80%);
    }

    @media (min-width: 1025px) {
      margin-bottom: 1vw;
    }

    @media (min-width: 1300px) {
      margin-bottom: 1vw;
    }

    a {
      ${B2LightGreen};
      margin: auto 3rem;
      padding: 0 2rem;
      text-transform: uppercase;

      &:hover {
        color: var(--white);
      }
    }

    .callToAct {
      ${BtnMainAlt};
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
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
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
        <Link to="/contact">Contact</Link>
        <Link className="callToAct" to="/">
          Listen To The Podcast
        </Link>
      </nav>
    </div>
  </HeaderStyled>
)

export default Header
