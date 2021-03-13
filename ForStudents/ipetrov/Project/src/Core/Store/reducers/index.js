import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './chats';
import contactsReducer from './contacts';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ messagesReducer, chatsReducer, contactsReducer, router: connectRouter(history) });


/*
{
    'messageReducer': messageReducer,
    'chatsReducer': chatsReducer

}
*/