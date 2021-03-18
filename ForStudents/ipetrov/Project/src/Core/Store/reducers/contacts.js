import update from "react-addons-update";

const storeContacts = {
    inactiveChats: {
    }
};

export default (store = storeContacts, action) => {
    switch(action.type) {
        case 'LOAD_CTC': {
            return store;
        }

        case 'LOAD_CONTACTS_SUCCESS': {
            return update(store, { inactiveChats: { $set: action.payload.data }});
        }   

        case 'REMOVE_CTC': {
            return update(store, {
                inactiveChats: {
                    [action.payload.chatId]: {
                        $set: null
                    }
                }
            });
        }

        case 'ADD_CTC': {
            const newChat = { [action.payload.chatId]: {name: action.payload.name, styleList: {}}};
            return update(store, {
                inactiveChats: {
                    $merge: newChat
                }
            });
        }

        default: {
            return store;
        }
    };
};