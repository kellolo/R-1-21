export const SET_CONTACTS = 'SET_CONTACTS';
export const SET_CHATS = 'SET_CHATS';
export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_CONTACT_TO_CHAT = 'ADD_CONTACT_TO_CHAT';

export function getContacts(data) {
    // получение данных 
    // .then()
    return {
      type: SET_CONTACTS,
      payload: data
    }
  };
  
  export function getChats(data) {
    // получение данных 
    // .then()
    return {
      type: SET_CHATS,
      payload: data
    }
  };
  
  export function addMessage(data) {
    return {
      type: ADD_MESSAGE,
      payload: data
    }
  };
  
  export function setActiveUser(id) {
    return {
      type: SET_ACTIVE_USER,
      payload: id
    }
  };
  
  export function addContactToChat(id) {
    return {
      type: ADD_CONTACT_TO_CHAT,
      payload: id
    }
  };
  