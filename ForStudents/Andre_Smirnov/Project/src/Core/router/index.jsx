import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home name="All" />} />
        <Route exact path="/chat/0" render={() => <Home name="chatNo_1" />} />
        <Route exact path="/chat/1" render={() => <Home name="chatNo_2" />} />
        <Route exact path="/chat/2" render={() => <Home name="chatNo_3" />} />
        <Route exact path="/chat/3" render={() => <Home name="chatNo_4" />} />
        <Route exact path="/chat/4" render={() => <Home name="chatNo_5" />} />
        <Route exact path="/chat/5" render={() => <Home name="chatNo_6" />} />
        <Route exact path="/chat/6" render={() => <Home name="chatNo_7" />} />
        <Route exact path="/chat/6" render={() => <Home name="chatNo_8" />} />
        <Route exact path="/chat/6" render={() => <Home name="chatNo_9" />} />


        {/* <Route exact path="/not-home" render = { () => <div>This is not your Home. Get out!</div> } /> */}
      </Switch>
    );
  }
};