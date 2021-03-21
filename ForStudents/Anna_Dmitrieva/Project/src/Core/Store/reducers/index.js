import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './activeChats';
import emailsReducer from './emailsContact'

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ messagesReducer, chatsReducer, emailsReducer, router: connectRouter(history) });