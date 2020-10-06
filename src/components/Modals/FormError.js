import React from "react"
import styled from "styled-components"
import { BtnMain } from "../../styles/helpers"

const ErrorWarningStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--shadow);
  z-index: 999999999;

  .warning-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .warning-content {
    align-self: center;
    max-width: 50rem;
    padding: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    text-align: center;

    button {
      ${BtnMain};

      &:hover {
        cursor: pointer;
      }
    }
  }
`

const FormError = ({ fixTheFormErrors, errorMessage }) => {
  return (
    <ErrorWarningStyled>
      <div className="warning-wrapper">
        <div className="warning-content">
          <p>Oops!</p>
          <p dangerouslySetInnerHTML={{ __html: errorMessage }} />
          <button type="button" onClick={fixTheFormErrors}>
            Close
          </button>
        </div>
      </div>
    </ErrorWarningStyled>
  )
}

export default FormError
