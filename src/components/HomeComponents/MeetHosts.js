import React from "react"
import styled from "styled-components"
import MeetBackground from "./MeetBackground"

const MeetHostsStyled = styled.section``

const MeetHosts = () => {
  return (
    <MeetHostsStyled>
      <MeetBackground />
      <div>
        <h2>Meet Trevor & Suzy</h2>
        <h3>The Hosts</h3>
      </div>
    </MeetHostsStyled>
  )
}

export default MeetHosts
