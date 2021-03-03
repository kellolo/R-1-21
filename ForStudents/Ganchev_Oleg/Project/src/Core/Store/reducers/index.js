import { combineReducers } from "redux";
import chatsReducer from './chats';
import messagesReducer from './messages';
import usersReducer from './users';

export default combineReducers({ messagesReducer, chatsReducer, usersReducer });