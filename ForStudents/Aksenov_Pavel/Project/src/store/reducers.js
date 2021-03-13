import { combineReducers } from 'redux';
import { chatReducer } from './chats/reducers';


export const rootReducer = combineReducers({
  chatContainer: chatReducer
});
