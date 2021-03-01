import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './chats';
import contactsReducer from './contacts';

export default combineReducers({ messagesReducer, chatsReducer, contactsReducer });


/*
{
    'messageReducer': messageReducer,
    'chatsReducer': chatsReducer

}
*/