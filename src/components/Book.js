import React, { Component } from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

import Rate from './Rate'
import SelectShelf from './SelectShelf'
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

    transform: translateY(-15px);
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
  margin: 10px 0;
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
  margin: 0;
  text-align: center;
`

class Book extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      shelf: this.props.shelf
    }
  }
  

  render () {

    const {book, id, shelf, cover, title, authors, pageCount, rate} = this.props

    const getRandomProgress = Math.floor(Math.random() * 70) + 1
    const fakeProgress = getRandomProgress
    const pagesRead = (fakeProgress * pageCount) / 100

    const toolTipMessage = shelf === 'read' ? 'Finished 🤓✅' : `You read ${Math.round(pagesRead)} pages of the ${pageCount}.`


    return (
      <Container href='#'>
        <Cover src={cover} />
        <Rate rate={rate} />
        <Authors>
          {authors.map((author) => {
            return (
              <Author key={author}>{author}</Author>
            )
          })}
        </Authors>
        <Title>{title}</Title>
        <SelectShelf
          book={book}
          value={shelf}
        />
        {shelf !== 'wantToRead' && (
          <Tooltip
            title={toolTipMessage}
            position='bottom'
            trigger='mouseenter'
            animation='fade'
            arrow
            style={{
              padding: '10px 0'
            }}
            >
            <ProgressBar shelf={shelf} progress={fakeProgress} />
          </Tooltip>
        )}
      </Container>
    )
  }
}

export default Book