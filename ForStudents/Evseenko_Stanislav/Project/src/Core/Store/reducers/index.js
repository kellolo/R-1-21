import { combineReducers } from "redux";
import messagesReducer from './messages.js';
import chatsReducer from './chats.js';
import contactsReducer from './contacts.js';

export default combineReducers({ messagesReducer, chatsReducer, contactsReducer });