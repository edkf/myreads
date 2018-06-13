import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 200px;
  height: 3px;
  background-color: #EEE;
  position: relative;
  display: block;
`

const Progress = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #219653;
`

class ProgressBar extends Component {
  render () {
    return (
      <Container>
        <Progress />
      </Container>
    )
  }
}

export default ProgressBar