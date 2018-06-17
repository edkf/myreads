import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './components/global.js'
import Provider from './components/Provider'
import {Context} from './components/Provider'
import Header from './components/Header'
import Bookshelf from './components/Bookshelf'

class App extends Component {

  render() {
    return (
      <Router>
        <Provider>
          <React.Fragment>
            <Header />
            <Context.Consumer>
              {(context) => {

                const { books } = context.state

                const reading = books.filter((book) => book.shelf === 'currentlyReading')
                const toRead = books.filter((book) => book.shelf === 'wantToRead')
                const completed = books.filter((book) => book.shelf === 'read')

                return (
                  <React.Fragment>
                    <Route exact path='/' render={(props) => <Bookshelf books={books} />} />
                    <Route exact path="/reading" render={(props) => <Bookshelf books={reading} />} />
                    <Route exact path="/to-read" render={(props) => <Bookshelf books={toRead} />} />
                    <Route exact path="/completed" render={(props) => <Bookshelf books={completed} />} />
                  </React.Fragment>
                )
              }}
            </Context.Consumer>
          </React.Fragment>
        </Provider>
      </Router>
    )
  }
}

export default App