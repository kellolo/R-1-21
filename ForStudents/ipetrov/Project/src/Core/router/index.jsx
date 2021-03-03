import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render = { () => <Home id='0' /> } />
        <Route exact path="/chat/0" render = { () => <Home id='0' /> } />
        <Route exact path="/chat/1" render = { () => <Home id='1' /> } />
        <Route exact path="/chat/2" render = { () => <Home id='2' /> } />
        <Route exact path="/chat/3" render = { () => <Home id='3' /> } />
      </Switch>
    );
  }
};