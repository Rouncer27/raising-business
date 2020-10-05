import React from "react"
import styled from "styled-components"
import { standardWrapper, H1LightGreen, H2White } from "../../styles/helpers"
import DarkGreenTop from "../Graphics/DarkGreenTop"
import DarkGreenBottom from "../Graphics/DarkGreenBottom"

const ListenNowStyled = styled.section`
  position: relative;
  background-color: var(--shadow);
  z-index: 15;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1LightGreen};
      margin-bottom: 2rem;
      font-weight: bold;
    }
  }

  .lattestEp {
    h3 {
      ${H2White};
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

const ListenNow = () => {
  return (
    <ListenNowStyled>
      <DarkGreenTop />
      <div className="wrapper">
        <div className="title">
          <h2>Listen and Subscribe to the Raising a Business Podcast</h2>
        </div>
        <div className="lattestEp">
          <h3>Latest Episode</h3>
        </div>
      </div>
      <DarkGreenBottom />
    </ListenNowStyled>
  )
}

export default ListenNow
