import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './global.js'
import Provider from './Provider'
import Header from './Header'
import Bookshelf from './Bookshelf'

class App extends Component {

  render() {
    return (
      <Router>
        <Provider>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Bookshelf} />
              <Route path="/reading" component={Bookshelf} />
              <Route path="/to-read" component={Bookshelf} />
              <Route path="/completed" component={Bookshelf} />
            </Switch>
          </React.Fragment>
        </Provider>
      </Router>
    )
  }
}

export default App