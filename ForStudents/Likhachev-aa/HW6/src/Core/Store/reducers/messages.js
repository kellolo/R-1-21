import update from 'react-addons-update';

const storeMessages = {
    messages: [
        { name: 'bot', text: 'Hello!', style: 'message__other', chatId: 0 },
        { name: 'bot', text: 'May be start?', style: 'message__other', chatId: 0 },
    ],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'SEND_MSG': {
            return update(store, {
                messages: { $push: [action.paramMsg] }
            });
        }
        default: {
            return store;
        }
    }
};