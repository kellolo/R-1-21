import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/404';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/chat/:chatid/' render={ props => <Home { ...props }/> } />
        <Route exact path='/404' component={ NotFound }/>
        <Redirect to='/404' />
      </Switch>
    )
  }
};
