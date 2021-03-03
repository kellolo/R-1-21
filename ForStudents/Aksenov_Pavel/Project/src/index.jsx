import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import '@style/main.scss';
import { StylesProvider } from '@material-ui/core/styles';

import Router from './routes/routes';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer, compose(
   applyMiddleware(),
   window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
 ));

const app = (
   <Provider store={ store }>
      <BrowserRouter>
         <StylesProvider>
            <Router />
         </StylesProvider>
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
