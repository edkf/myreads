import React, { Component } from 'react'
import styled from 'styled-components'

const Contanier = styled.div`
  width: 100%;
  min-height: calc(100vh - 106px);
  display: flex;
  justify-content: center;
  align-items: center;
`

class Bookshelf extends Component {
  render () {
    return (
      <Contanier>
        Boolshelf
      </Contanier>
    )
  }
}

export default Bookshelf