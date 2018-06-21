import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

import {Context} from '../Provider'

class Home extends Component {
  render () {
    return (
      <Context.Consumer>
        {(context) => {

          const { books } = context.state

          const reading = books.filter((book) => book.shelf === 'currentlyReading')
          const toRead = books.filter((book) => book.shelf === 'wantToRead')
          const completed = books.filter((book) => book.shelf === 'read')

          return (
            <React.Fragment>
              <Bookshelf title='Reading' books={reading} />
              <Bookshelf title='To Read' books={toRead} />
              <Bookshelf title='Completed' books={completed} />
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home