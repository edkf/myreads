import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

export const Context = React.createContext()

class Provider extends Component {

  state = {
    books: [],
    isSearhOpened: false,
    query: ''
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        getSearchQuery: (event) => {
          this.setState({
            query: event.target.value
          })
        },
        closeSearch: () => {
          this.setState({
            isSearhOpened: false
          })
        },
        openSearch: () => {
          this.setState({
            isSearhOpened: true
          })
        },
        updateShelf: (event, book) => {
          BooksAPI.update(book, event).then(response =>{
            // set shelf for new or updated book
            book.shelf = event
            // get list of books without updated or new book
            var updatedBooks = this.state.books.filter( item => item.id !== book.id )
            // add book to array and set new state
            updatedBooks.push(book)
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