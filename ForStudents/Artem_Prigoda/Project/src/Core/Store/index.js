import { createStore } from 'redux';
import initRedusers from './reducers';


export default () => {



	return createStore(initRedusers, {});
};