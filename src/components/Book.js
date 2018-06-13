import React, { Component } from 'react'
import styled from 'styled-components'

import ProgressBar from './ProgressBar'

const Cover = styled.img`
  align-self: center;
  height: 300px;
  width: auto;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.5s ease;
`

const Container = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  align-items: center;
  text-decoration: none;
  transition: transform 0.5s ease;

  &:hover {

    transform: translateY(-5px);
    ${Cover} {
      box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.2);
    }
  }
`

const Authors = styled.ul`
  line-height: 1;
  max-width: 220px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 15px;
  text-align: center;
`

const Author = styled.li`
  color: #4F4F4F;
  display: inline-block;
  font-size: 12px;

  &:after {
    display: inline-block;
    margin-right: 5px;
    content: ','
  }

  &:last-child {
    &:after {
      content: '.';
    }
  }
`

const Title = styled.h3`
  max-width: 220px;
  font-family: Spectral;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  line-height: 1.3;
  letter-spacing: -0.03em;
  margin: 10px 0 20px 0;
  text-align: center;
`

class Book extends Component {
  render () {

    const {cover, title, authors} = this.props

    return (
      <Container href='#'>
        <Cover src={cover} />
        <Authors>
          {authors.map((author) => {
            return (
              <Author>{author}</Author>
            )
          })}
        </Authors>
        <Title>{title}</Title>
        <ProgressBar />
      </Container>
    )
  }
}

export default Book