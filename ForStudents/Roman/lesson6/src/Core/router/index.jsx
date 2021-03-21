import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat/1" render={() => <Home name="Вася" />} />
        <Route exact path="/chat/2" render={() => <Home name="Клава" />} />
        <Route exact path="/chat/3" render={() => <Home name="Дуня" />} />
        <Route exact path="/chat/4" render={() => <Home name="Пердуня" />} />
        <Route exact path="/chat/5" render={() => <Home name="Петя" />} />
      </Switch>
    );
  }
};