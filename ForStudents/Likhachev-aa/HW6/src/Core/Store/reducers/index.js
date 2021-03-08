import { combineReducers } from "redux";
import chatsReducer from './chats';
import messagesReducer from './messages';
import usersReducer from './users';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ messagesReducer, chatsReducer, usersReducer, router: connectRouter(history) });