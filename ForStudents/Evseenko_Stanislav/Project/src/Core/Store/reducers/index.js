import { combineReducers } from "redux";
import messagesReducer from './messages.js';
import chatsReducer from './chats.js';
import contactsReducer from './contacts.js';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ messagesReducer, chatsReducer, contactsReducer, router: connectRouter(history) });