import update from 'react-addons-update';
// import { FILTER_MSG } from '@actions/messages';

const storeMessages = {
  messages: [
    { name: 'one', text: 'Hey!', date: '' },
    { name: 'one', text: 'How are you?', date: '' }
  ],
};

export default (store = storeMessages, action) => {
  switch(action.type) {
    case 'LOAD_MSG': {
      // store.messages = [
      //   { name: 'one', text: 'Hey!' },
      //   { name: 'one', text: 'How are you?' }
      // ];
      return store;
    }

    case 'SEND_MSG': {
      const msg = action.payload;
      return update(store, { messages: { $push: [ msg ] } });
    }

    // case 'FILTER_MSG': {
    //   reg = new RegExp(action.searchWord, 'i');
    //   return store.messages.filter(msg => reg.test(msg.text));
    // }

    default: {
      return store;
    }
  }
};