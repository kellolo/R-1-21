import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import Router from '@core/Router/';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { initStore, history } from './Core/Store';

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={initStore()}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>,
    container
);