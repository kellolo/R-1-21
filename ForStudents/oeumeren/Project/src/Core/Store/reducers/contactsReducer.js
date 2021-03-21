const initialStore = {
    contacts: []
};

export default function contactsReducer(store = initialStore, action) {
    switch(action.type) {
        case "LOAD_CONTACTS_SUCCESS":
            return Object.assign({}, store, {
                contacts: action.payload.data
            });
        case "REMOVE_CONTACT":
            return Object.assign({}, store, {
                contacts: store.contacts.filter(contact => contact.id !== action.payload.id)
            });
        default:
            return store;
    }
}