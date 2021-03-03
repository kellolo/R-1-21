import update from 'react-addons-update';

const storeMessages = {
  messages: {
    0: { text: "Привет!", sender: 'BOT' },
    1: { text: "Здравствуйте!", sender: 'BOT' },
  }
};

export default (store = storeMessages, action) => {
  switch (action.type) {
    case 'LOAD_MSG': {
      return store;
    }
    case 'CREATE_MESSAGE': {
      return update(store, {
        messages: {
          $merge: {
            [action.id]: {
              sender: action.sender,
              text: action.text
            }
          }
        }
      });
    }
    default: {
      return store;
    }
  }

};
