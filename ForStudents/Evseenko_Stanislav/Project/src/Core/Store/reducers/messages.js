import update from 'react-addons-update';

const storeMessages = {
  messages: [],
  text: ''
};

export default (store = storeMessages, action) => {
  switch (action.type) {
    case 'LOAD_MSG': {
      return store.messages;
    }
    case 'SEND_MSG': {
      const currentTime = () => {
        const curDate = new Date();
        const curHours = curDate.getHours() < 10 ? "0" + curDate.getHours() : curDate.getHours();
        const curMinutes = curDate.getMinutes() < 10 ? "0" + curDate.getMinutes() : curDate.getMinutes();
        return `${ curHours }:${ curMinutes }`;
      };

      return update(store, {
        messages: { $merge: [...store.messages, {
          id: action.messageId,
          name: action.name,
          text: action.text,
          time: currentTime(),
          }
        ]}
      });
    }
    case 'WRITE_TEXT': {
      return update(store, {
        text: { $set: action.text }
      });
    }
    case 'READ_TXT': {
      return store.text;
    }
    default: {
      return store;
    };
  };
};