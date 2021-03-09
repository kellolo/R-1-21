import update from "react-addons-update";

const storeContacts = {
    inactiveChats: {
        "4": {name:'Вась Васич'}, 
        "5": {name:'Оль Олич'}, 
        "6": {name:'Дим Димыч'}, 
        "7": {name:'Халк Халкыч'}
    }
};

export default (store = storeContacts, action) => {
    switch(action.type) {
        case 'LOAD_CTC': {
            return store;
        };

        case 'REMOVE_CTC': {
            return update(store, {
                inactiveChats: {
                    [action.payload.chatId]: {
                        $set: null
                    }
                }
            })
        };

        case 'ADD_CTC': {
            const newChat = { [action.payload.chatId]: {name: action.payload.name, styleList: {}}};
            return update(store, {
                inactiveChats: {
                    $merge: newChat
                }
            })
        };

        default: {
            return store;
        };
    };
};