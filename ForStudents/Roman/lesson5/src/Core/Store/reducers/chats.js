const storeChats = {
    activeChats: [
        { name: 'Вася', id: '1' },
        { name: 'Клава', id: '2' },
        { name: 'Дуня', id: '3' },
        { name: 'Пердуня', id: '4' },
        { name: 'Петя', id: '5' }
    ]
  };
  
  export default (store = storeChats, action) => {
    switch(action.type) {
      case 'LOAD_CHATS': {
        return store;
      }
  
      default: {
        return store;
      }
    }
  };