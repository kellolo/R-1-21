import initReducers from './Reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '@midlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };
const innitialStore = {};

export const history = createBrowserHistory();


export const initStore = () => {
  return createStore(
    initReducers(history),
    innitialStore,
    compose(applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool)
  );
};

export default initStore;
