import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import Router from './router/';
import { Provider } from 'react-redux';
import { history, initStore } from './Core/Store';

import { ConnectedRouter } from 'connected-react-router';

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ initStore() }>
        
            <ConnectedRouter history = { history }>
                <Router />
            </ConnectedRouter>
       
    </Provider>,
    container
);