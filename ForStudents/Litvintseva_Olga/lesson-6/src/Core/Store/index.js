import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import initReducers from './reducers';
import middleware from '@middleware';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer'],
 };
 
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const history = createBrowserHistory();

const store = createStore(
    persistReducer(persistConfig, initReducers(history)), 
    {},
    compose(applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool)
  );

const persistor = persistStore(store);

export const initStore = () => {
  return { store, persistor };
};

