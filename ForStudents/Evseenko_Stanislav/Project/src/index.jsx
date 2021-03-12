import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Core/router';

import '@styles/main.scss';

import { Provider } from 'react-redux';
import initStore, { history } from './Core/Store'

import { ConnectedRouter } from 'connected-react-router/immutable';

import { PersistGate } from 'redux-persist/integration/react';
const { store, persistor } = initStore();

const container = document.querySelector('#app');

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <ConnectedRouter history={ history } >
        <Router />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  container
);