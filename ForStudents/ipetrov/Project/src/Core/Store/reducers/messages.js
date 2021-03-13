import update from "react-addons-update";

const storeMessages = {
    messages: [] 
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'LOAD_MSG': {
            return store;
        }

        case 'ADD_MSG_STORE': {
            const newMstStore = action.payload;
            return update(store, {
                messages: {
                    $merge: newMstStore
                }
            });
        }

        case 'LOAD_MESSAGES_SUCCESS': {
            const newMsgStore = action.payload.data;
            return update(store, { messages: { $set: newMsgStore }});
        }

        case 'SEND_MESSAGES_SUCCESS': {
            const msg = action.payload;
            return update(store, { 
                messages: { 
                        $push: [ msg ]} });
        }

        default: {
            return store;
        }
    }
};