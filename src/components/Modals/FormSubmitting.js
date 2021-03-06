import React from "react"
import styled from "styled-components"

import { BtnMain } from "../../styles/helpers"
import SpinnerAnimation from "../Loaders/SpinnerAnimation"

const SubmittingStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  z-index: 999999999;

  .submit-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .submit-content {
    align-self: center;
    max-width: 50rem;
    padding: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    text-align: center;

    .loaderAnimation {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      width: 100%;
      height: 3.5rem;
      margin: 0 auto;
    }

    button {
      ${BtnMain};
    }
  }

  .loader {
    display: inline-block;
    margin: 0 auto;
    border-color: red;
  }
`

const FormSubmitting = () => {
  return (
    <SubmittingStyled>
      <div className="submit-wrapper">
        <div className="submit-content">
          <div className="loaderAnimation">
            <SpinnerAnimation />
          </div>
          <p>Your form is being validated and submitted.</p>
          <div className="loader"></div>
        </div>
      </div>
    </SubmittingStyled>
  )
}

export default FormSubmitting
