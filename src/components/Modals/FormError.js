import React from "react"

const FormError = ({ fixTheFormErrors, errorMessage }) => {
  console.log({ errorMessage })
  return (
    <div>
      <div>
        <h1>FormError</h1>
        <p>{errorMessage && errorMessage}</p>
        <button onClick={fixTheFormErrors} type="button">
          Fix the error
        </button>
      </div>
    </div>
  )
}

export default FormError
