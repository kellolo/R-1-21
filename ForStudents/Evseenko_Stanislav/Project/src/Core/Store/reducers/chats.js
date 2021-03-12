import update from 'react-addons-update';

const storeChats = {
  chats: {
    1: { title: 'Чат 1', messageList: [] },
    2: { title: 'Чат 2', messageList: [] },
    3: { title: 'Чат 3', messageList: [] },
    4: { title: 'Чат 4', messageList: [] },
    5: { title: 'Чат 5', messageList: [] },
    6: { title: 'Чат 6', messageList: [] },
  },
  activeChats: [
    {
      name: 'Гена',
      id: '1',
      text: 'Начните чат c Геной',
      avatar: 'src/resources/img/avatar.jpg'
    },
    {
      name: 'Чебурашка',
      id: '2',
      text: 'Начните чат c Чебурашкой',
      avatar: 'src/resources/img/avatar2.jpg'
    },
    {
      name: 'Шапокляк',
      id: '3',
      text: 'Начните чат c Шапокляк',
      avatar: 'src/resources/img/avatar3.jpg'
    }
  ]
};

export default (store = storeChats, action) => {
  switch (action.type) {
    case 'LOAD_CHATS': {
      return store.chats;
    }
    case 'UPD_CHATS': {
      return update(store, {
        chats: { $merge: {...store.chats,
          [action.chatId]: {...store.chats[action.chatId],
            messageList: [...store.chats[action.chatId]['messageList'], action.messageId]
          }
        }} 
      });
    }
    case 'ADD_CHAT': {
      return update(store, {
        activeChats: { $merge: [...store.activeChats,
          {
            name: action.name,
            id: `${ action.chatId }`,
            text: `Начните чат c ${ action.name }`,
            avatar: ''
          }
        ]}
      });
    }
    case 'LAST_MSG': {
      let chatIndex = null;
      store.activeChats.forEach((element, i) => {
        if(element.id == action.chatId) {
          chatIndex = i;
        }
      });
      return update(store, {
        activeChats: {
          [chatIndex]: {
            text: { $set: action.text }
          }
        }
      });
    }
    default: {
      return store;
    };
  };
};