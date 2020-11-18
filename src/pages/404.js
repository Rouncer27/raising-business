import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MobileNav from "../components/MobileNav/MobileNav"
import { BtnMain, standardWrapper } from "../styles/helpers"

const NotFoundPageStyled = styled.div`
  ${standardWrapper};

  a {
    ${BtnMain};
  }
`

const NotFoundPage = () => {
  return (
    <>
      <MobileNav />
      <NotFoundPageStyled>
        <div>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/">Home</Link>
        </div>
      </NotFoundPageStyled>
    </>
  )
}

export default NotFoundPage
