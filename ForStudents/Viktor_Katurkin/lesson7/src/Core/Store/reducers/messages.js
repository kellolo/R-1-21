import update from 'react-addons-update';

const storeMessages = {
  messages: [
    { name: 'one', text: 'Hey!' },
    { name: 'one', text: 'How are you?' }
  ]
};

export default (store = storeMessages, action) => {
  switch(action.type) {
    case 'LOAD_MSG': {
      return store;
    }

    case 'SEND_MSG': {
      const msg = action.payload;
      return update(store, { messages: { $push: [ msg ] } });
    }

    default: {
      return store;
    }
  }
};