const storeChats = {
    activeChats: [
        { name: 'Коля', id: '1' },
        { name: 'Аня', id: '2' },
        { name: 'Катя', id: '3' },
        { name: 'Тема', id: '4' },
    ],
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'LOAD_CHATS': {
            return store;
        };
        default: {
            return store;
        };
    };
};