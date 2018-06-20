import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import {Context} from '../Provider'
import closeIcon from '../images/close-icon.svg'

const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition: transform .6s ease;
  transform: ${props => props.isOpened ? 'translateY(0)' : 'translateY(-106px)'};
`

const Input = styled.input`
  font-family: 'Spectral', serif;
  width: 100%;
  border: none;
  background-color: #F5F5F5;
  margin: 0;
  padding: 35px;
  font-size: 24px;

  &:focus {
    outline: none;
  }
`

const CloseButton = styled(NavLink)`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 3;
  width: 20px;
  height: 20px;
  background: url(${closeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  display: inline-block;
  cursor: pointer;
  opacity: 0.2;
`

class SearchBar extends Component {
  render () {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <Container isOpened={context.state.isSearhOpened}>
              <CloseButton
                to='/'
                onClick={context.closeSearch}
              />
              <Input
                placeholder='Search...'
                onChange={(event) => context.getSearchQuery(event.target.value)}
              />
            </Container>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SearchBar