import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './activeChats';
import emailsReducer from './emailsContact'

export default combineReducers({ messagesReducer, chatsReducer, emailsReducer });