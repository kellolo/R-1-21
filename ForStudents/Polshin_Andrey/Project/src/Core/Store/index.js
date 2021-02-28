import { createStore } from "redux";
import initReducers from './reducers';

const innitialStore = {};

export default () => {
  return createStore(initReducers, innitialStore);
};