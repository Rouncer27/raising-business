import fontRegWoff from "../assets/fonts/raleway-v18-latin-regular.woff"
import fontRegWoff2 from "../assets/fonts/raleway-v18-latin-regular.woff2"
import fontRegItWoff from "../assets/fonts/raleway-v18-latin-italic.woff"
import fontRegItWoff2 from "../assets/fonts/raleway-v18-latin-italic.woff2"

import font700Woff from "../assets/fonts/raleway-v18-latin-700.woff"
import font700Woff2 from "../assets/fonts/raleway-v18-latin-700.woff2"
import font700ItWoff from "../assets/fonts/raleway-v18-latin-700italic.woff"
import font700ItWoff2 from "../assets/fonts/raleway-v18-latin-700italic.woff2"

const PrimaryFonts = `
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('${fontRegWoff2}') format('woff2'),
        url('${fontRegWoff}') format('woff');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    src: local(''),
        url('${fontRegItWoff2}') format('woff2'),
        url('${fontRegItWoff}') format('woff');
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('${font700Woff2}') format('woff2'),
        url('${font700Woff}') format('woff');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 700;
    src: local(''),
        url('${font700ItWoff2}') format('woff2'),
        url('${font700ItWoff}') format('woff');
  }
`

export default PrimaryFonts
