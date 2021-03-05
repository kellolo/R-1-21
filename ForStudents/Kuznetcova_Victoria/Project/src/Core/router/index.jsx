import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Header from '@components/Header';

export default class Router extends Component {
    render() {
        return (
            <Switch> 
                <Route exact path="/" component = { Home } />
                <Route exact path="/chat/1" render = { ()=> <Home name="Irra" /> } />
                <Route exact path="/chat/2" render = { ()=> <Home name="Alex" /> } />
                <Route exact path="/chat/3" render = { ()=> <Home name="Zo" /> } />
                <Route exact path="/chat/4" render = { ()=> <Home name="Mary" /> } />
                <Route exact path="/profile" render = { ()=> <div>profile</div> } />
                {/* <Route exact path="/" component = { Home } /> */}
            </Switch>
        );
    }
}