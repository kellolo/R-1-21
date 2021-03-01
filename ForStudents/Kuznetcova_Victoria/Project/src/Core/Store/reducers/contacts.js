const storeContacts = {
  contacts: [
    'User01@gmail.com',
    'User02@gmail.com', 
    'User03@gmail.com'
  ]
};

export default (store = storeContacts, action) => {
  switch (action.type) {
      case 'LOAD_CONTACTS': {
          // store.messages.push(action.par);
          // return store.messages;
          return store;
      }

      default: {
          return store;
      }
  }
};