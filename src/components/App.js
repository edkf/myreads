import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './global.js'
import Header from './Header'
import Bookshelf from './Bookshelf'

class App extends Component {
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