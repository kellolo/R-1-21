
const storeChats = {
    chats: [
        { title: 'Chat with Admin', userId: 0 },
    ],
}

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'ADD_CHAT': {
            return ({
                chats: [...store.chats, {
                    title: action.title,
                    userId: action.userId
                }],
            });
        }
        default: {
            return store;
        }
    }
 };