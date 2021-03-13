import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Core/router';
import { BrowserRouter } from 'react-router-dom';

import '@styles/main.scss';

import { Provider } from 'react-redux';
import initStore from './Core/Store'

const container = document.querySelector('#app');

ReactDOM.render(
  <Provider store={ initStore() }>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  container
);