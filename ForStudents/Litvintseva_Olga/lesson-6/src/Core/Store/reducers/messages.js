import update from 'react-addons-update';

const storeMessages = {
  messages: [
    { name: 'User', text: 'Привет!' },
    { name: 'User', text: 'Как дела?' }
  ]
};

export default (store = storeMessages, action) => {
  switch(action.type) {
    case 'LOAD_MSG': {
      return store;
    }

    case 'SEND_MSG': {
      return update(store, { messages: { $push:[ action.payload ] } });
    }

    default: {
      return store;
    }
  }
};