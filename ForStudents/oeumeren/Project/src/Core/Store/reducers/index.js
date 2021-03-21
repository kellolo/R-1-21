import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";
import contactsReducer from "./contactsReducer";

import { connectRouter } from "connected-react-router";

export default history => combineReducers({
    router: connectRouter(history),
    userReducer,
    chatReducer,
    contactsReducer,
    messagesReducer
});