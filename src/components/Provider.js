import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

export const MyContext = React.createContext()

class Provider extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      books: [],
      reading: [],
      completed: [],
      toRead: [],
    }

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
      <MyContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default Provider