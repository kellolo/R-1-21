import update from 'react-addons-update';
import { LOAD_MESSAGE, SEND_MESSAGE } from '@actions/messages';

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
    case SEND_MESSAGE: {
      return update(store, {
        messages: {
          $merge: {
            [action.payload.id]: {
              sender: action.payload.sender,
              text: action.payload.text,
              date: new Date()
            }
          }
        }
      });
    }
    default: {
      return store;
    }
  };
};
