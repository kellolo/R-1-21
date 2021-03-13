import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import Router from '@core/Router/';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { initStore, history } from './Core/Store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.querySelector('#app');

const { store, persistor } = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    container
);