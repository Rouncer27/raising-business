import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"
import Fonts from "./Fonts"
import { fontSizer } from "./helpers/fonts"

const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
  ${Fonts};

  :root {
    --primary: #45a764;
    --secondary: #a0da9d;
    --tertiary: #276a39;
    --accent: #c5ebb7;
    --shadow: #284030;
    --brown: #454545;
    --black: #0d0d0d;
    --white: #fff;
    --grey: #e3e1e2;
  }


  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden !important;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Raleway';
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    overflow-x: hidden !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-family: 'Raleway';
    font-size: 1.8rem;
    font-weight: normal;
    line-height: 1.25;
  }

  h1 {
    ${fontSizer(3.2, 5.6, 76.8, 120)}
  }

  h2 {
    ${fontSizer(2.6, 4.6, 76.8, 120)}
    }

  h3 {
    ${fontSizer(2.2, 3.4, 76.8, 120)}
  }

  h4 {
    ${fontSizer(2, 2.8, 76.8, 120)}
  }

  h5 {
    ${fontSizer(2, 2.4, 76.8, 120)}
  }

  h6 {
    ${fontSizer(1.8, 2.2, 76.8, 120)}
  }

  p {
    ${fontSizer(1.8, 2, 76.8, 120)}
    margin: 0;
    margin-bottom: 1.5em;
    line-height: 1.4;
  }

  a {
    ${fontSizer(1.8, 2, 76.8, 120)}
    text-decoration: none;
    color: var(--primary);
    font-weight: normal;
    transition: all 0.3s ease;
  }

  a:hover {
    color: var(--primary);
  }

  span {
    font-size: 1em;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    list-style-type: none;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }


`

export default GlobalStyles
