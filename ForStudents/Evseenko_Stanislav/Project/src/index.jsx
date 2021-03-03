import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

import '@styles/main.scss';

const container = document.querySelector('#app');

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  container
);