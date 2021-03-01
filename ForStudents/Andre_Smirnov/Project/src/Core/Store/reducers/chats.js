const storeChats = {
    chats: [
        { id: '0', userName: 'user_1', lastMessage: { name: 'user_1', text: 'Hey!' } },
        { id: '1', userName: 'user_2', lastMessage: { name: 'user_2', text: 'How are you?' } },
        { id: '2', userName: 'user_3', lastMessage: { name: 'user_3', text: 'How are you?' } },
        { id: '3', userName: 'user_4', lastMessage: { name: 'user_4', text: 'How are you?' } }
    ]
  };
  
  export default (store = storeChats, action) => {
    switch(action.type) {
      case 'LOAD_CHT': {
        // store.messages = [
        //   { name: 'one', text: 'Hey!' },
        //   { name: 'one', text: 'How are you?' }
        // ];
        return store;
      }
  
      
  
      default: {
        return store;
      }
    }
  };