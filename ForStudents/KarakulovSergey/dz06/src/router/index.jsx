import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from '@pages/Home';
export default class Router extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" render = {() => <Home name="" />} />
                <Route exact path="/chat/1" render = {() => <Home name="User 1" />} />
                <Route exact path="/chat/2" render = {() => <Home name="User 2" />} />
                <Route exact path="/chat/3" render = {() => <Home name="User 3" />} />
                <Route exact path="/chat/4" render = {() => <Home name="User 4" />} />
                <Route exact path="/chat/5" render = {() => <Home name="User 5" />} />
                <Route exact path="/not-home" render = {() => <div>Silenth is gold!</div>} />
            </Switch>
        );
    }
}