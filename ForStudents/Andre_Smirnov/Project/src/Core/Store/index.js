import { createStore, compose, applyMiddleware  } from "redux";
import initReducers from './reducers';
import { routerMiddleware } from 'connected-react-router';
import middleware from '@middleware';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };

export default () => {
  return createStore(
    initReducers(history), 
    {},
    compose(applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool)
  );
};