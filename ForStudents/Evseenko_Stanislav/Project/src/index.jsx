import React from 'react';
import ReactDOM from 'react-dom';

import '@styles/main.scss';

import App from '@pages/Home';

import { StylesProvider } from '@material-ui/core/styles';

const container = document.querySelector('#app');

ReactDOM.render(
  <StylesProvider>
    <App />
  </StylesProvider>,
  container
);