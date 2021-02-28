import React from 'react';
import ReactDOM from 'react-dom';

import '@style/main.scss';
import App from '@pages/Home';

import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
   <StylesProvider>
      <App />
   </StylesProvider>,
   document.getElementById('root')
);
