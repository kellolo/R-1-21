import ReactDom from 'react-dom';
import React from 'react';
import '@styles/main.scss';
import Router from './Core/router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore, { history } from './Core/Store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.querySelector('#app');
const { store, persistor } = initStore();

ReactDom.render(
   <Provider store={ store }>
       <PersistGate loading={ null } persistor={ persistor }>
           <ConnectedRouter history={ history }>
                   <Router />
           </ConnectedRouter>
       </PersistGate>
   </Provider>,
   container
);