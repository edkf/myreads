import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import myReadsLogo from '../images/logo-myreads.svg'
import Nav from './Nav'
import searchIcon from '../images/search-icon.svg'

const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid #DDD;
`

const Content = styled.div`
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.nav`
  display: flex;
  align-items: center;
`

const Right = styled.div``

const Logo = styled.img`
  margin-right: 50px;
`

const Search = styled.button`
  width: 20px;
  height: 20px;
  background: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  cursor: pointer;
`

class Header extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Left>
            <NavLink to='/'>
              <Logo src={myReadsLogo} />
            </NavLink>
            <Nav/>
          </Left>
          <Right>
            <Search />
          </Right>
        </Content>
      </Container>
    )
  }
}

export default Header