import update from 'react-addons-update';

const storeChats = {
    chats: [
        { name: 'Оля Попова', id: '7' },
        { name: 'Женя Смирнов', id: '8' },
        { name: 'Таня Морозова', id: '9' },
        { name: 'Ваня Кукушкин', id: '10' }
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