import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import Router from './Core/router';
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
//    <div>
//        <App />
//    </div>,
    container
);