import update from 'react-addons-update';

const storeMessages = {
    messages: [
        { name: 'bot', text: 'Hey!', style: 'message__other', chatId: 0 },
        { name: 'bot', text: 'How are you?', style: 'message__other', chatId: 0 },
    ],
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'SEND_MSG': {
            return update(store,{
                messages: { $push: [action.paramMsg] }
            });
        }
        default: {
            return store;
        }
    }
};