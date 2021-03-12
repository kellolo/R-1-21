import { combineReducers } from 'redux';
import messagesReducer from './messages';
import chatsReducer from './chats';

import { connectRouter } from 'connected-react-router';
// export const initReducers = (history) => combineReducers({
// 		router: connectRouter(history),
// 		messagesReducer, 
// 		chatsReducer,
// 	 });
export default history => combineReducers({
	router: connectRouter(history),
	messagesReducer, 
	chatsReducer,
 });