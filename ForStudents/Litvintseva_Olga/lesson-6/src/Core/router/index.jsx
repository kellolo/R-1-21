import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/chat/7" render = { () => <Home name="Оля Попова" /> } />
        <Route exact path="/chat/8" render = { () => <Home name="Женя Смирнов" /> } />
        <Route exact path="/chat/9" render = { () => <Home name="Таня Морозова" /> } />
        <Route exact path="/chat/10" render = { () => <Home name="Ваня Кукушкин" /> } />
      </Switch>
    );
  }
};