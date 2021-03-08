import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component = { Home } />
                {/* <Route exact path="/chat/1" render = { () => <Home name="Коля" /> } />
                <Route exact path="/chat/2" render = { () => <Home name="Аня" /> } />
                <Route exact path="/chat/3" render = { () => <Home name="Катя" /> } />
                <Route exact path="/chat/4" render = { () => <Home name="Тема" /> } /> */}
                <Route exact path='/chat/:chatId' render={ (obj) =>
                    <Home chatId={ Number(obj.match.params.chatId) }/> } 
                />
            </Switch>
        );
    };
};