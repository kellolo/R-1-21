import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@pages/Home';


export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
            </Switch>
        );
    }
};