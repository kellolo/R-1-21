import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatRedusers from './chat';

import { connectRouter } from 'connected-react-router';
export default history => combineReducers({ messagesReducer, chatRedusers, router:connectRouter(history) });