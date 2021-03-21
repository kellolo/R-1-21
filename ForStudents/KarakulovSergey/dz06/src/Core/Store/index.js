import { createStore, compose, applyMiddleware } from "redux";
import initReducers from './reducers';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import middleware from '@middleware';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messagesReducer', 'chatRedusers']
}

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
export const history = createBrowserHistory();
export const initStore = () => {
    const innitialStore = {};
    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        //initReducers(history), 
        innitialStore, 
        compose(
            applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool 
            
        )
        
    );
    const persistor = persistStore(store);
    return { store, persistor }
}