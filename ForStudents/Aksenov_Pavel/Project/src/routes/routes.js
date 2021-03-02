import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@pages/Layout';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/chat/:chatid/' render={ props => <Layout {...props}/> } />
      </Switch>
    )
  }
}
