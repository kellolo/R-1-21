import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import '@style/main.scss';
import Router from './routes/routes';

import { StylesProvider } from '@material-ui/core/styles';

const app = (
   <BrowserRouter>
      <StylesProvider>
         <Router />
      </StylesProvider>
   </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
