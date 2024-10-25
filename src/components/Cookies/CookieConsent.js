import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BtnMain } from "../../styles/helpers"

const CookieConsentStyled = styled.div`
  .cookie-banner-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;

    &.hidden {
      display: none;
    }

    .cookie-banner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(197, 235, 183, 0.75);
      z-index: 1;
    }
  }

  .cookie-banner-container {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 65rem;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background-color: #276a39;
    border-radius: 0.5rem;
    text-align: center;
    z-index: 100000000;

    p {
      @extend .p-one;
      color: #fff;
    }

    a {
      @extend .p-one;
      color: #fff;

      &:hover {
        color: #45a764;
      }
    }

    button {
      ${BtnMain};

      &:nth-of-type(2) {
        margin-left: 1rem;
      }
    }
  }
`

const CookieConsent = () => {
  const [cookies, setCookies] = useState("unk")
  const [isMounted, setIsMounted] = useState(false)
  const isBrowser = typeof window !== "undefined"

  const handleAccept = () => {
    if (!isBrowser) {
      return
    }
    setCookies("granted")
    // // accepted cookie lasts for a year
    let d = new Date()
    let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate())
    document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/"
    window.consentGranted()
  }

  const handleDecline = () => {
    if (!isBrowser) {
      return
    }
    setCookies("denied")
    // declined cookie only lasts for the session
    document.cookie = "cookie-consent=denied; path=/"
  }

  useEffect(() => {
    if (!isBrowser) {
      return
    }
    setIsMounted(true)
    // get cookie approval after component is mounted
    setCookies(window.getCookieConsent())
  }, [])

  const banner = isMounted ? (
    <CookieConsentStyled>
      <div
        className={`${
          cookies === "granted" || cookies === "denied" ? "hidden" : ""
        } cookie-banner-wrapper`}
      >
        <div id="cookie-banner" className={`cookie-banner-container`}>
          <div className="">
            <p className="">
              We use cookies to analyze our website and make your experience
              even better. To learn more, see our{" "}
              <a className="" href="/privacy">
                Privacy Policy.
              </a>
            </p>

            <div className="">
              <button className="" onClick={handleAccept}>
                Accept
              </button>
              <button className="" onClick={handleDecline}>
                Decline
              </button>
            </div>
          </div>
        </div>
        <div className="cookie-banner-overlay"></div>
      </div>
    </CookieConsentStyled>
  ) : null

  return banner
}

export default CookieConsent
