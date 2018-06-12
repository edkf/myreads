import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as BooksAPI from '../BooksAPI'

import './global.js'
import Header from './Header'
import Bookshelf from './Bookshelf'

class App extends Component {

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
      <Router>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Bookshelf} />
          <Route path="/reading" component={Bookshelf} />
          <Route path="/to-read" component={Bookshelf} />
          <Route path="/completed" component={Bookshelf} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App