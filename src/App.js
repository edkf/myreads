import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, IndexLink } from 'react-router-dom'

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

                const { books, reading, completed, toRead } = context.state

                return (
                  <Switch>
                    <Route to='/' render={(props) => <Bookshelf books={books} />} />
                    <Route path="/reading" render={(props) => <Bookshelf books={reading} />} />
                    <Route path="/to-read" render={(props) => <Bookshelf books={toRead} />} />
                    <Route path="/completed" render={(props) => <Bookshelf books={completed} />} />
                  </Switch>
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