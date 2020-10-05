import { fontSizer } from "./index"

// Body copy ONE //
export const B1Base = `
  ${fontSizer(1.6, 1.8, 76.8, 150, 1.8)};
  font-family: 'Raleway';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
`
export const B1Pine = `
  ${B1Base};
  color: var(--shadow);
`

export const B1White = `
  ${B1Base};
  color: var(--white);
`

const B2Base = `
${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  font-family: 'Raleway';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
`

export const B2LightGreen = `
  ${B2Base};
  color: var(--accent);
`
