import update from 'react-addons-update';

const storeContacts = {
    contacts: [],
};

export default (store = storeContacts, action) => {
    switch (action.type) {
        case "LOAD_CONTACTS_SUCCESS": {
            return update(store, {
                contacts: { $set: action.payload.data }
            });
        }
        case 'ADD_CONTACTS': {
            // todo
            return store;
        }
        default: {
            return store;
        }
    }
};




/*
const storeUsers = {
    users: [
        { id: '0', name: 'Admin', avatar: null },
        { id: '1', name: 'User1', avatar: null },
        { id: '2', name: 'User2', avatar: null },
        { id: '3', name: 'User3', avatar: null },
        { id: '4', name: 'User4', avatar: null },
        { id: '5', name: 'User5', avatar: null },
    ],
}

export default (store = storeUsers) => {
    return store;
}*/
