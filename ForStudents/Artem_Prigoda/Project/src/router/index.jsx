import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat/1" render={(obj) => <Home name="User1" chatId={Number(obj.match.params.chatId)} />} />
        <Route exact path="/chat/2" render={(obj) => <Home name="User2" chatId={Number(obj.match.params.chatId)} />} />
        <Route exact path="/chat/3" render={(obj) => <Home name="User3" chatId={Number(obj.match.params.chatId)} />} />
        <Route exact path="/not-home" render={() => <div>This is not your Home. Get out!</div>} />
      </Switch>
    );
  }
};