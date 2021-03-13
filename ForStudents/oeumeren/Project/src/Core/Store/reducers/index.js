import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import chatReducer from "./chatReducer";

import { connectRouter } from "connected-react-router";

export default history => combineReducers({
    router: connectRouter(history),
    chatReducer,
    messagesReducer
});