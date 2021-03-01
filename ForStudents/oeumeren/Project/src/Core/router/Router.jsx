import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from "@pages/Home";

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/chat/:chatId/' render={ (obj) =>
                <Home chatId={ obj.match.params.chatId } /> } />
        </Switch>
    )
}


export default Router;