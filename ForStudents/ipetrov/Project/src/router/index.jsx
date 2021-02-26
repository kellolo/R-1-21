import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render = { () => <Home name="Василий Петрович шиномонтаж" /> } />
        <Route exact path="/chat/1" render = { () => <Home name="Василий Петрович шиномонтаж" /> } />
        <Route exact path="/chat/2" render = { () => <Home name="Эдуард Васильевич прачечная" /> } />
        <Route exact path="/chat/3" render = { () => <Home name="Максим Евгеньевич парикмахерская" /> } />
        <Route exact path="/chat/4" render = { () => <Home name="Вась Васич" /> } />
      </Switch>
    );
  }
};