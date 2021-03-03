
const storeMessages = {
    messages: [
        { name: 'bot', text: 'Hey!', style: 'message__other', chatId: 0 },
        { name: 'bot', text: 'How are you?', style: 'message__other', chatId: 0 },
    ],
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'SEND_MSG': {
            return ({
                messages: [...store.messages, {
                    name: action.name,
                    text: action.text,
                    style: action.style,
                    chatId: action.chatId,
                }],
            });
        }
        default: {
            return store;
        }
    }
};