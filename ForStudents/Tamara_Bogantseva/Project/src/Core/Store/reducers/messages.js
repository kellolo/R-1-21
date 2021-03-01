const storeMessages = {
    messages: [
        { name: 'Bot', text: 'Hey!' },
        { name: 'Bot', text: 'How are you?' }
    ]
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MSG': {
            return store;
        }

        case 'SEND_MESSAGE': {
            return store.messages.push(text);
        }

        default: {
            return store;
        }
    }
};