import {
    SET_CONTACTS,
    SET_CHATS,
    SET_ACTIVE_USER,
    ADD_MESSAGE,
    ADD_CONTACT_TO_CHAT
} from './actions';

const initialState = {
  contacts: [],
  chats: [],
  messages: [],
  active_user: 0
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload }

    case SET_CHATS:
        return { ...state, chats: action.payload }

    case SET_ACTIVE_USER:
      return { ...state, active_user: action.payload }

    case ADD_MESSAGE:
      const arr_messages_result = state.messages.concat([action.payload]);
      return { ...state, messages: arr_messages_result }

    case ADD_CONTACT_TO_CHAT:
      const contact_modal = state.contacts.filter(f => f.id != action.payload);
      const contact_current = state.contacts.filter(f => f.id == action.payload);
      const chat_active = state.chats.concat(contact_current);

      return { ...state, contacts: contact_modal, chats: chat_active }

  default:
    return state
  }
};
