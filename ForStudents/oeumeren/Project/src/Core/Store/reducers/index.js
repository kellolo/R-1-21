import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import chatReducer from "./chatReducer";

export default combineReducers({ chatReducer, messagesReducer });