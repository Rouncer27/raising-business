import React from "react"
import styled from "styled-components"
import { standardWrapper, H2Brown, B1Pine } from "../styles/helpers"
import FooterWave from "./Graphics/FooterWave"
import LogoFooter from "./Logos/LogoFooter"

const FooterStyled = styled.footer`
  background-color: var(--accent);

  .wrapper {
    ${standardWrapper};
    position: relative;
    margin-top: -5vw;
  }

  .footerContact {
    width: 100%;

    h3 {
      ${H2Brown};
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .footerGuest {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__title {
      width: 100%;
      margin-bottom: 2rem;

      h3 {
        ${H2Brown};
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &__logo {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(25%);
      }
    }

    &__social {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(75% - 8rem);
        margin-left: 8rem;
      }

      p {
        ${B1Pine};
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWave />
      <div className="wrapper">
        <div className="footerContact">
          <h3>Sign up for future guides &#8226; Worksheets</h3>
        </div>

        <div className="footerGuest">
          <div className="footerGuest__title">
            <h3>Want to be a guest or sponsor an episode?</h3>
          </div>
          <div className="footerGuest__logo">
            <LogoFooter />
          </div>
          <div className="footerGuest__social">
            <p>
              Check out our social media or email us at
              podcast@raisingabusiness.ca on why you want to be a guest on an
              upcoming episode or if you'd like to be a sponsor.
            </p>
            <ul>
              <li>instagram</li>
              <li>twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
