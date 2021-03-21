import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import { BrowserRouter } from 'react-router-dom';
import Router from './Core/router';
import { Provider } from 'react-redux';
import initStore, { history } from './Core/Store';
import { PersistGate } from 'redux-persist/integration/react';


import { ConnectedRouter } from 'connected-react-router';

const { store, persistor } = initStore();

const container = document.querySelector('#app');

ReactDom.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history = { history }>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
//    <div>
//        <App />
//    </div>,
    container
);