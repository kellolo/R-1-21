//import { FILTER_MSG } from '@actions/messages'
import update from 'react-addons-update';
const storeMessages = {
    messages : [
        { name: 'one', text: 'Привет', date: '' },
        { name: 'one', text: 'Привет мир', date: '' }
    ],
}

export default (store = storeMessages,action) => {
    /*
    if(action.type === 'loadMessages'){
        return store.messages;
    }
    */
   switch(action.type) {
       case 'LOAD_MSG': {
           store.messages.push(action.par);
           return store.messages;
       }
       case 'SEND_MSG': {
           //store.messages.push(action.payload);
          //return store;
          const msg = action.payload;
          return update(store, { messages: { $push: [ msg ] } });
       }
       /*
       case FILTER_MSG: {
           reg = new RegExp(action.searchWord, 'i');
           return store.messages.filter(msg => reg.test(msg.text));
       }*/
       default: {
           return store;
       }
   }
}