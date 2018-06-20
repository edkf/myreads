import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

export const Context = React.createContext()

class Provider extends Component {

  state = {
    books: [],
    isSearhOpened: false,
    query: '',
    queriedBooks: []
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
        getSearchQuery: (query) => {
          this.setState({
            query
          })

          BooksAPI.search(this.state.query).then((queriedBooks) => {
            queriedBooks > 0 ? this.setState({queriedBooks}) : this.setState({ queriedBooks: []})
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
            book.shelf = event
            var updatedBooks = this.state.books.filter( item => item.id !== book.id )
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