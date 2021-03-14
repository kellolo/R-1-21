import { combineReducers } from 'redux';
import messagesReducer from './messages';
import chatsReducer from './chats';
import userReducer from './user';
import contactsReducer from './contacts';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({
	router: connectRouter(history),
	messagesReducer, 
	chatsReducer,
	userReducer,
	contactsReducer,
 });