import React from "react"
import styled from "styled-components"
import { BtnMain } from "../../styles/helpers"

const SuccessMessageStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary);
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

    button {
      ${BtnMain};
    }
  }
`

const FormSuccess = ({ successAndClearForm }) => {
  return (
    <SuccessMessageStyled>
      <div className="submit-wrapper">
        <div className="submit-content">
          <p>You have successfully signed up</p>
          <button type="button" onClick={successAndClearForm}>
            Done
          </button>
        </div>
      </div>
    </SuccessMessageStyled>
  )
}

export default FormSuccess
