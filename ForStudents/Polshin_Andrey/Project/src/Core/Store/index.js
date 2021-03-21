import initReducers from './Reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '@midlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };
const innitialStore = {};

export const history = createBrowserHistory();

const persistConfig = {
  key: 'geekmessanger',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['messagesReducer', 'chatsReducer'],
};


export const initStore = () => {
  const store = createStore(
    persistReducer(persistConfig, initReducers(history)),
    innitialStore,
    compose(applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default initStore;
