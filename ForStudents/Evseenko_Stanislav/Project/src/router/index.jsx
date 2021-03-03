import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@pages/Home';


export default class Router extends Component {
  
  render() {
    return (
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route 
          exact 
          path='/chat/:chatId/' 
          render = { obj => <Home name="Гена" chatId={ Number(obj.match.params.chatId) } /> } 
        />
      </Switch>
    )
  }
}