import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/chat/1" render = { () => <Home userID="1" /> } />
        <Route exact path="/chat/2" render = { () => <Home userID="2" /> } />
        <Route exact path="/chat/7" render = { () => <Home userID="7" /> } />
      </Switch>
    );
  }
};