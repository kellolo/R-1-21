import React, { Component } from 'react';
import './style.scss';
import App from '@pages/Home'
import { Switch, Route } from 'react-router-dom';

export default class Router extends Component {

    render() {
        return (
            <Switch className="router">
                <Route exact path='/' component={ App } />
                <Route
                    exact
                    path='/Chat/:chatId'
                    render={ (obj) =>
                    <App chatId={ Number(obj.match.params.chatId) } /> }
                />
            </Switch>
        );
    } 
};