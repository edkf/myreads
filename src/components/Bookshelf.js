import React, { Component } from 'react'
import styled from 'styled-components'

import Book from './Book'

const Contanier = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 7vh 0;

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

class Bookshelf extends Component {

  
  render () {
    
    const {books} = this.props

    return (
      <Contanier>
        {
          books && books.map((book) => (
            <Book
              book={book}
              key={book.id}
              id={book.id}
              cover={book.imageLinks.thumbnail}
              authors={book.authors}
              title={book.title}
              pageCount={book.pageCount}
              shelf={book.shelf}
              rate={book.averageRating}
            />
          ))
        }
      </Contanier>
    )
  }
}

export default Bookshelf