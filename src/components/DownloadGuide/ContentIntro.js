import React from "react"
import styled from "styled-components"
import { B1Pine, H1Brown, H2Brown, medWrapper } from "../../styles/helpers"

import DownloadGuideImage from "../Images/DownloadGuideImage"

const ContentIntroStyled = styled.section`
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }

  @media (min-width: 1025px) {
    margin-top: 0;
  }

  .wrapper {
    ${medWrapper};
  }

  .contentSec {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(60%);
    }

    @media (min-width: 1025px) {
      width: calc(60%);
    }

    h2 {
      ${H1Brown};
      margin-bottom: 0;
      font-weight: bold;
    }

    h3 {
      ${H2Brown};
      text-transform: uppercase;
      font-weight: bold;
    }

    p {
      ${B1Pine};
    }

    p:last-of-type {
      font-weight: bold;
    }

    ul {
      margin-bottom: 3rem;
      list-style-position: inside;

      li {
        ${B1Pine};
        list-style: disc;
        list-style-position: inside;
      }
    }
  }

  .imageSec {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(40%);
    }
    @media (min-width: 1025px) {
      width: calc(40%);
    }
  }
`

const ContentIntro = () => {
  return (
    <ContentIntroStyled>
      <div className="wrapper">
        <div className="contentSec">
          <div>
            <h2>Free Guide: 5 Ways to Drive your Business</h2>
            <h3>Your guide to selling with more stories.</h3>
          </div>
          <div>
            <p>
              Learn how to drive your business profits to the next level by
              doing these 5 things.
            </p>
            <p>
              Imagine if every morning you checked your calendar and it was
              chalk full of customer meetings and tasks that you knew were
              really making a different in your client’s lives. Imagine the
              profitability that comes with it. All of this can be done through
              great storytelling, but how do you do that?
            </p>
            <ul>
              <li>How to make your customer the hero</li>
              <li>Map out the hero’s journey</li>
              <li>How to connect your business in the community</li>
              <li>Build experience based mome</li>
            </ul>
            <p>
              Put these into action this week and you’ll be surprised by the
              impact it has on your bottom line.
            </p>
            <p>
              Download guide to learn are 5 ways to drive your business by
              telling stories.
            </p>
          </div>
        </div>
        <div className="imageSec">
          <DownloadGuideImage />
        </div>
      </div>
    </ContentIntroStyled>
  )
}

export default ContentIntro
