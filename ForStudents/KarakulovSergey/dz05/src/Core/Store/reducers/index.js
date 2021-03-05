import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatRedusers from './chat'
export default combineReducers({messagesReducer,chatRedusers});