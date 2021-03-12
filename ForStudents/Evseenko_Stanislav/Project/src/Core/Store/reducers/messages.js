import update from 'react-addons-update';

const storeMessages = {
  messages: [],
  text: ''
};

export default (store = storeMessages, action) => {
  switch (action.type) {
    case 'LOAD_MSG': {
      return store.messages;
    }
    case 'SEND_MSG': {
      return update(store, {
        messages: { $merge: [...store.messages, {
          id: action.messageId,
          name: action.name,
          text: action.text,
          time: action.time,
          }
        ]},
      });
    }
    case 'WRITE_TEXT': {
      return update(store, {
        text: { $set: action.text }
      });
    }
    case 'READ_TXT': {
      return store.text;
    }
    default: {
      return store;
    };
  };
};