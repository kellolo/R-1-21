import update from 'react-addons-update';

const storeChats = {
    chats: [],
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case 'LOAD_CHATS_SUCCESS': {
            console.log(action.payload.data);
        }
        default: {
            return store;
        }
    };
};