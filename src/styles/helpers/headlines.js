import { fontSizer } from "./index"

// Headline Styles #1 //
export const H1Base = `
${fontSizer(3, 3.6, 76.8, 150, 2.8)};
  font-family: 'Raleway';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
`
export const H1White = `
  ${H1Base};
  color: var(--white);
`

export const H1Brown = `
  ${H1Base};
  color: var(--brown);
`

export const H1LightGreen = `
  ${H1Base};
  color: var(--accent);
`

export const H2Base = `
${fontSizer(2.4, 2.8, 76.8, 150, 2.4)};
  font-family: 'Raleway';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
`

export const H2Pine = `
  ${H2Base};
  color: var(--tertiary);
`

export const H2White = `
  ${H2Base};
  color: var(--white);
`
