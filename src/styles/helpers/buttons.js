import { fontSizer } from "./index"

const Btn1Base = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  display: inline-block;
  padding: 0.75rem 4rem;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  font-family: 'Raleway';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.11;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const BtnMain = `
  ${Btn1Base};
  background: var(--primary);
  color: var(--white);

  &:hover {
    background: var(--secondary);
  }
`

export const BtnMainAlt = `
  ${Btn1Base};
  background: var(--secondary);
  color: var(--brown);

  &:hover {
    background: var(--secondary);
    color: var(--white);
  }
`
