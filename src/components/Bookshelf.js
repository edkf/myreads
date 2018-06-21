import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

import Book from './Book'

const Contanier = styled.div`
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0 0 0;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);    
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);    
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;    
  }
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 40px 0;
  color: #4F4F4F;
`

class Bookshelf extends Component {

  
  render () {
    
    const {books, title} = this.props

    return (
      <Contanier>
        {title && <Title>{title}</Title>}
        <List>
          {
            books && books.map((book) => (
              <Book
                key={book.id}
                book={book}
                pageCount={book.pageCount}
              />
            ))
          }
        </List>
      </Contanier>
    )
  }
}

Bookshelf.propTypes = {
  books: propTypes.array.isRequired,
  title: propTypes.string
}

export default Bookshelf