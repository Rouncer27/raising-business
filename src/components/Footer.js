import React from "react"
import styled from "styled-components"
import { standardWrapper, H2Brown } from "../styles/helpers"
import FooterWave from "./Graphics/FooterWave"

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
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWave />
      <div className="wrapper">
        <div className="footerContact">
          <h3>Sign up for future guides &#8226; Worksheets</h3>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
