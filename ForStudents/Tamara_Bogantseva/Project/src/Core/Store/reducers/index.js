import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import messagesReducer from './messages';
import chatsReducer from './chats';
import userReducer from './user';
import contactsReducer from './contacts';

export default (history) => combineReducers({ contactsReducer, userReducer, messagesReducer, chatsReducer, router: connectRouter(history) });