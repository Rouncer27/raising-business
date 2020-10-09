import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import LogoFooter from "../Logos/LogoFooter"
import Instagram from "../Icon/Instagram"
import Twitter from "../Icon/Twitter"
import { H2Pine } from "../../styles/helpers"

const NavDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  transform: translateX(${props => (props.isOpen ? "0%" : "-100%")});
  background: var(--accent);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: ${props => (props.isOpen ? 9999999 : -9999999)};
  overflow-y: scroll;

  @media (min-width: 768px) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .mobileLogo {
    width: 100%;
    max-width: 20rem;
    margin: 2rem auto;
  }

  .mobileSocial {
    width: 100%;
    padding: 2rem 4rem;

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
    }

    li {
      width: 3.5rem;
      margin-right: 2rem;

      a {
        display: block;

        .gatsby-image-wrapper {
          transition: all 0.3s ease-out;
        }

        &:hover {
          .gatsby-image-wrapper {
            opacity: 0.5;
          }
        }
      }
    }
  }
`

const MobileNavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 4rem;

  a {
    ${H2Pine};
    width: 100%;
    margin-bottom: 2rem;
    font-weight: bold;
    text-align: left;
  }
`

const MobileNavDrawer = ({ isOpen, location }) => {
  return (
    <NavDrawer isOpen={isOpen}>
      <div className="wrapper">
        <div className="mobileLogo">
          <LogoFooter />
        </div>
        <MobileNavStyled>
          <Link to="/">Home</Link>
          <Link to="/episodes">Episodes</Link>
          <Link
            className="callToAct"
            to="/episodes/rab-001-introduction-what-to-expect"
          >
            Listen To The Podcast
          </Link>
        </MobileNavStyled>
        <div className="mobileSocial">
          <ul>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/raisingabiz/"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/raisingabiz?lang=en"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavDrawer>
  )
}

export default MobileNavDrawer
