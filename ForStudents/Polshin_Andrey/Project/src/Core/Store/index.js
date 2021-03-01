import { createStore } from "redux";
import initReducers from './Reducers';

const innitialStore = {};

export default () => {
  return createStore(initReducers, innitialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};