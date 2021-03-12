import { createStore, compose, applyMiddleware } from 'redux';
import initReducers from './reducers';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import middleware from '@middleware';

const persistConfig = {
  key: 'geekmessanger',
  storage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['messagesReducer', 'chatsReducer'],
  };

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();

function initStore() {
  const store = createStore(
    persistReducer(persistConfig, initReducers(history)),
    {},
    compose(
      applyMiddleware(routerMiddleware(history), ...middleware),
      reduxDevTool
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
};

export default initStore;