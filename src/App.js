import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './components/global.js'
import Provider from './Provider'
import {Context} from './Provider'
import Home from './components/Home'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Bookshelf from './components/Bookshelf'

class App extends Component {

  render() {
    return (
      <Provider>
        <React.Fragment>
          <SearchBar />
          <Header />
          <Context.Consumer>
            {(context) => {

              const { books, queriedBooks, query } = context.state

              const reading = books.filter((book) => book.shelf === 'currentlyReading')
              const toRead = books.filter((book) => book.shelf === 'wantToRead')
              const completed = books.filter((book) => book.shelf === 'read')

              return (
                <React.Fragment>
                  <Route exact path='/' render={(props) => <Home />} />
                  <Route exact path="/reading" render={(props) => <Bookshelf title='Reading' books={reading} />} />
                  <Route exact path="/to-read" render={(props) => <Bookshelf title='To Read' books={toRead} />} />
                  <Route exact path="/completed" render={(props) => <Bookshelf title='Completed' books={completed} />} />
                  <Route exact path="/search" render={(props) => <Bookshelf title={`Searching for ${query}`} books={queriedBooks || []} />} />
                </React.Fragment>
              )
            }}
          </Context.Consumer>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App