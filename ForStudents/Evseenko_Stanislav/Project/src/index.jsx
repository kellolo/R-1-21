import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Core/router';

import '@styles/main.scss';

import { Provider } from 'react-redux';
import  { initStore, history } from './Core/Store'

import { ConnectedRouter } from 'connected-react-router/immutable';

const container = document.querySelector('#app');

ReactDOM.render(
  <Provider store={ initStore() }>
      <ConnectedRouter history={ history } >
        <Router />
      </ConnectedRouter>
  </Provider>,
  container
);