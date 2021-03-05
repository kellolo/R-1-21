const storeChats = {
    chats: [
        { name: 'Andrew', id: '1' },
        { name: 'Bart', id: '2' },
        { name: 'Tom', id: '3' },
        { name: 'John', id: '4' },
    ]
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'ADD_CHAT': {
            return store;
        }

        default: {
            return store;
        }
    }
}; 