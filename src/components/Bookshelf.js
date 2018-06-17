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
`

class Bookshelf extends Component {
  render () {
    return (
      <Contanier>
        {
          this.props.books.map((book) => (
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