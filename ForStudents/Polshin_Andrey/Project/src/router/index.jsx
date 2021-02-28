import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/chat/0" render={() => <Home chatId="0" />} />
                <Route exact path="/chat/1" render={() => <Home chatId="1" />} />
                <Route exact path="/chat/2" render={() => <Home chatId="2" />} />
                <Route exact path="/chat/3" render={() => <Home chatId="3" />} />
                <Route exact path="/chat/4" render={() => <Home chatId="4" />} />
                <Route exact path="/chat/5" render={() => <Home chatId="5" />} />
                <Route exact path="/chat/6" render={() => <Home chatId="6" />} />
                <Route exact path="/chat/7" render={() => <Home chatId="7" />} />
                <Route exact path="/chat/8" render={() => <Home chatId="8" />} />
                <Route exact path="/chat/9" render={() => <Home chatId="9" />} />
                <Route exact path="/not-home" render={() => <div>This is not your Home. Get out!</div>} />
            </Switch>
        );
    }
};