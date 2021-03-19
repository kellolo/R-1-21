import { combineReducers } from 'redux';
import messagesReducer from './messages';
import chatsReducer from './chats';
import userReducer from './user';
import contactsReducer from './contacts';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({	
	messagesReducer, 
	chatsReducer,
	userReducer,
	contactsReducer,
	router: connectRouter(history),
 });