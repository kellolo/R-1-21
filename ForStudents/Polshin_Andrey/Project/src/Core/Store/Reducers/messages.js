import update from 'react-addons-update';
import { LOAD_MESSAGE, CREATE_MESSAGE } from '@actions/messages';

const storeMessages = {
  messages: {
    0: { text: "Привет!", sender: 'BOT', date: new Date() },
    1: { text: "Здравствуйте!", sender: 'BOT', date: new Date() },
  }
};

export default (store = storeMessages, action) => {
  switch (action.type) {
    case LOAD_MESSAGE: {
      return store;
    }
    case CREATE_MESSAGE: {
      return craeteMsg(store, action);
    }
    default: {
      return store;
    }
  }
};

const craeteMsg = (store = storeMessages, action) => {
  return update(store, {
    messages: {
      $merge: {
        [action.id]: {
          sender: action.sender,
          text: action.text,
          date: new Date()
        }
      }
    }
  });
}