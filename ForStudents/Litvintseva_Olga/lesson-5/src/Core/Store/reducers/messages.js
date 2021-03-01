
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

    default: {
      return store;
    }
  }
};