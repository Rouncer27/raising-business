import React from "react"
import styled from "styled-components"
import { H1Brown, B1Pine, standardWrapper } from "../../styles/helpers"
import SuzyTrevor from "./SuzyTrevor"

const AboutUsStyled = styled.section`
  padding: 5rem 0;
  background-color: var(--accent);

  .wrapper {
    ${standardWrapper};
    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  .aboutContent {
    width: calc(50% - 4rem);
    h2 {
      ${H1Brown};
      font-weight: 700;

      span {
        display: block;
      }
    }

    p {
      ${B1Pine};
    }
  }

  .aboutImage {
    width: calc(50% - 8rem);
    margin-right: 8rem;
    border-radius: 50%;
    overflow: hidden;
  }
`

const AboutUs = () => {
  return (
    <AboutUsStyled>
      <div className="wrapper">
        <div className="aboutContent">
          <h2>
            <span>Building a business is tough.</span>
            <span>But we can navigate it</span>
            <span>together.</span>
          </h2>
          <p>
            We are here to share ways to grow your business, level up, market,
            pivot and fail forward. We want to share our challenges, triumphs
            and perspectives that we’ve had along the way. We will bring in
            experts that are really good at what they do to hear their stories.
            Because everyone has a story!
          </p>
        </div>
        <div className="aboutImage">
          <SuzyTrevor />
        </div>
      </div>
    </AboutUsStyled>
  )
}

export default AboutUs
