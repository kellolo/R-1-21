import { createStore } from 'redux';
import initReducers from './reducers';

export default() => {
  return createStore(
    initReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
  );
}