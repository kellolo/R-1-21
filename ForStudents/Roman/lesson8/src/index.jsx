import React from 'react';
import Router from './Core/router/';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router';
//import { PersistGate } from 'redux-persist/integration/react';
//import ourStore, { history } from './Core/Store';
import { history, initStore } from './Core/Store';

//const { store, persistor } = ourStore();

const container = document.querySelector('#app');

ReactDom.render(
	<Provider store={initStore()}>
		<ConnectedRouter history={history}>
			<Router />
		</ConnectedRouter>
	</Provider>,
	container
);

/* ReactDom.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConnectedRouter history={history}>
				<Router />
			</ConnectedRouter>
		</PersistGate>
	</Provider>,
	container
); */