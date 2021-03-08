import { createStore } from 'redux';
import initReducers from './reducers';

export default () => {
    const initStore = {
        a: 100
    };

    return createStore(initReducers, initStore);
};