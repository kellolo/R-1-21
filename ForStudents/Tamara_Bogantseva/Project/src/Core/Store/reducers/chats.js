import update from 'react-addons-update';

const storeChats = {
    chats: [],
    activeChat: null
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'LOAD_CHATS_SUCCES': {
            return update(store, {
                chats: { $set: action.payload.data }
            });
        }

        case 'GET_CHAT_ID': {
            return update(store, {
                activeChat: { $set: action.payload.id }
            });
        }

        case 'ADD_CHATS_SUCCES': {
            const newChat = action.payload.data;
            return update(store, { chats: { $push: [newChat] } });
        }

        default: {
            return store;
        }
    }
};