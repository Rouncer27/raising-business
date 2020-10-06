import React from "react"

const FormSuccess = ({ successAndClearForm }) => {
  return (
    <div>
      <div>
        <h1>FormSuccess</h1>
        <button onClick={successAndClearForm} type="button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default FormSuccess
