import React from "react"

import PropagateLoader from "react-spinners/PropagateLoader"

const SpinnerAnimation = () => {
  return (
    <>
      <PropagateLoader size={15} color={"#45a764"} loading={true} />
    </>
  )
}

export default SpinnerAnimation
