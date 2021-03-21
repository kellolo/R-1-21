import update from "react-addons-update";

const storeChats = {
    activeChats: {
    }
};

export default (store = storeChats, action) => {
    switch(action.type) {

        case 'LOAD_CHATS_SUCCESS': {
            return update(store, { activeChats: { $set: action.payload.data }});
        };

        case 'LOAD_CHT': {
            return store;
        };

        case 'HGHLGHT': {
            return update(store, {
                    activeChats: {
                        [action.payload.chatId]: {
                            styleList: {
                                backgroundColor: {
                                    $set: 'yellow'}}}}});
        };

        case 'UNHGHLGHT': {
            return update(store, {
                    activeChats: {
                        [action.payload.chatId]: {
                            styleList: {
                                backgroundColor: {
                                    $set: null}}}}});
        };

        case 'ADD_CHT': {
            const newChat = { [action.payload.chatId]: {name: action.payload.name, styleList: {}}};
            return update(store, {
                activeChats: {
                    $merge: newChat
                }
            });
        };

        case 'REM_CHT': {
            return update(store, {
                activeChats: {
                    [action.payload.chatId]: {
                        $set: null
                    }
                }
            });
        };

        default: {
            return store;
        }
    };
};