import React from "react"
import styled from "styled-components"

const LoadingModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 999999;

  .background-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  .innerLoading {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    background-color: #fff;
    width: 30rem;
    margin: 0 auto;
    padding: 1rem 0 0 0;
    border-radius: 1rem;
    text-align: center;
    z-index: 10;

    @media (min-width: 768px) {
      width: 40rem;
    }

    .close-button {
      position: absolute;
      top: 2rem;
      right: 2rem;

      button {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #000;
        color: #fff;
        border: 0.1rem solid #fff;
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
          background-color: #000;
        }
      }
    }

    p {
      color: #fff;
      width: 100%;
      margin: 0;
      padding: 5rem 2rem;
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      background-color: #fff;
    }

    a {
      color: #fff;
    }

    &__spinner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      width: 15rem;
      margin: 0 auto;
    }
  }
`

const SuccessModal = ({ handleSuccessModalClose }) => {
  return (
    <LoadingModal>
      <div className="innerLoading">
        <p>Your form has been successfully sent.</p>
        <div className="close-button">
          <button onClick={() => handleSuccessModalClose()} type="button">
            &#x2715;
          </button>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="background-modal"
        onClick={() => handleSuccessModalClose()}
        onKeyDown={() => handleSuccessModalClose()}
      >
        <span className="visuallyhidden">Close Modal</span>
      </div>
    </LoadingModal>
  )
}

export default SuccessModal
