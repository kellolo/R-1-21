const storeChats = {
  activeChats: [
    { name: 'Ira', id: '1' },
    { name: 'Alex', id: '2' },
    { name: 'Zo', id: '3' },
    { name: 'Mary', id: '4' }
  ]
};

export default (store = storeChats, action) => {
  switch (action.type) {
      case 'LOAD_CHATS': {
          // store.messages.push(action.par);
          // return store.messages;
          return store;
      }

      default: {
          return store;
      }
  }
};