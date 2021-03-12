
import update from 'react-addons-update';

const storeMessages = {
    messages: [
        { name: 'one', text: 'Hey!', date: '' },
        { name: 'one', text: 'How are you?', date: '' }
    ],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MSG': {
            // store.messages = [
            //     { name: 'one', text: 'Hey!' },
            //     { name: 'one', text: 'How are you?' }
            // ]
            return store;
        }
        default: {
            return store;
        }
        case 'SEND_MSG': {
            return update(storer, { messages: { $push: [action.payload] } });
        }
    }
};