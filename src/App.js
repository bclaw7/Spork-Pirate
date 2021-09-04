import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/gallery' component={Gallery} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
