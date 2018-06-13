import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import {Context} from './Provider'

const StyledLink = styled(NavLink)`
  padding: 40px 12px;
  display: inline-block;
  color: #4F4F4F
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 0.3s ease;
  border-bottom: 2px solid transparent;
  
  &.active {
    opacity: 1;
    border-bottom: 2px solid #000;
  }

  &:hover {
    opacity: 1;
  }
`

const Counter = styled.span`
  font-size: 10px;
  font-weight: 600;
  display: inline-block;
  padding: 3px;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.1);
  line-height: 1;
  opacity: 1;
`

const Container = styled.nav``

class Nav extends Component {
  render () {
    return (
      <Container>
        <Context.Consumer>
          {(context) => {

            const {reading, toRead, completed, books} = context.state

            return (
              <React.Fragment>
                <StyledLink to='/'>All <Counter>{books.length}</Counter></StyledLink>
                <StyledLink to='/reading'>Reading <Counter>{reading.length}</Counter></StyledLink>
                <StyledLink to='/to-read'>To Read <Counter>{toRead.length}</Counter></StyledLink>
                <StyledLink to='/completed'>Completed <Counter>{completed.length}</Counter></StyledLink>
              </React.Fragment>
            )
          }}
        </Context.Consumer>
      </Container>
    )
  }
}

export default Nav