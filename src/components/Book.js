import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

import getRandomNumber from '../utils/getRandomNumber'
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
  text-decoration: none;
  transition: transform 0.5s ease;

  @media (min-width: 580px) {
    &:hover {

      transform: translateY(-15px);
      ${Cover} {
        box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.2);
      }
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
  render () {

    const {imageLinks, averageRating, authors, shelf, title} = this.props.book
    const {book, pageCount} = this.props
    const fakeProgress = getRandomNumber(70)

    return (
      <Container>
        <Cover src={imageLinks ? imageLinks.thumbnail : ''} />
        {averageRating && <Rate rate={averageRating ? averageRating : ''} />}
        {authors && (
          <Authors>
            {authors.map((author) => {
              return (
                <Author key={author}>{author}</Author>
              )
            })}
          </Authors>
        )}
        <Title>{title}</Title>
        <SelectShelf
          book={book}
          value={shelf}
        />
        {shelf && shelf !== 'wantToRead' && (
          <Tooltip
            title={shelf === 'read' ? 'Finished 🤓✅' : `You read ${Math.round((fakeProgress * pageCount) / 100)} pages of the ${pageCount}.`}
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

Book.propTypes = {
  book: propTypes.object.isRequired,
  pageCount: propTypes.number
}

export default Book