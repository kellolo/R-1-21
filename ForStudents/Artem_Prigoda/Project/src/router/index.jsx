import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat/:chatId/" render={(obj) => <Home chatId={Number(obj.match.params.chatId)} />} />
        <Route exact path="/not-home" render={() => <div>This is not your Home. Get out!</div>} />
      </Switch>
    );
  }
};