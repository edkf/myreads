import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

export const Context = React.createContext()

class Provider extends Component {

  state = {
    books: [],
    reading: [],
    completed: [],
    toRead: [],
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then((books) => {

          const reading = books.filter((book) => book.shelf === 'currentlyReading')
          const toRead = books.filter((book) => book.shelf === 'wantToRead')
          const completed = books.filter((book) => book.shelf === 'read')

        this.setState({ books, reading, toRead, completed})
      })
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        updateShelf: (event, book) => {
          BooksAPI.update(book, event.target.value).then(response =>{

            // set shelf for new or updated book
            book.shelf = event.target.value

            // get list of books without updated or new book
            var updatedBooks = this.state.books.filter( book => book.id !== book.id )

            // add book to array and set new state
            updatedBooks.push(book);
            this.setState({ books: updatedBooks })
          })
        }
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider