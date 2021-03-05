
const storeMessages = {
  messages: [
    { name: 'user', text: 'Hello!', style: 'message__user' },
    { name: 'user', text: 'May be start?', style: 'message__user' }
  ]
};

export default (store = storeMessages, action) => {
  switch (action.type) {
    case 'LOAD_MSG': {
      return store;
    }

    default: {
      return store;
    }
  }
};