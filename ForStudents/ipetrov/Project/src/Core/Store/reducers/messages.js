import update from "react-addons-update";

const storeMessages = {

    messages: {
/*
        "0": [{ name: 'one', text: 'Hey!', chatId:'0', date: '01.01.2021' }, { name: 'one', text: 'Вася', chatId:'0', date: '01.01.2021' }],
        "1": [{ name: 'one', text: 'How are you?', chatId:'1', date: '01.01.2021' }, { name: 'one', text: 'Эдик', chatId:'1', date: '01.01.2021' }],
        "2": [{ name: 'one', text: 'Максим', chatId:'2', date: '01.01.2021' }, { name: 'one', text: 'How are you?', chatId:'2', date: '01.01.2021' }],
*/     
    },
     servermessages: {},
     isLoading: true
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'LOAD_MSG': {
            return store;
        };

        case 'SEND_MSG': {
            const msg = action.payload;
            return update(store, { 
                messages: { 
                    [action.payload.chatId]: {
                        $push: [ msg ]} }});
        };

        case 'ADD_MSG_STORE': {
            const newMstStore = action.payload;
            return update(store, {
                messages: {
                    $merge: newMstStore
                }
            })
        };

        case 'LOAD_MESSAGES_SUCCESS': {
            const newMsgStore =  { [action.payload.data[0].chatId]: action.payload.data};
            return update(store, { 
                                    messages: { $merge: newMsgStore },
                                  
                                    isLoading: {$set: false}})
        };

        case 'LOAD_MESSAGES_REQUEST': {
            update (store, {$set: {isLoading: true}})
        };

        default: {
            return store;
        }
    }
};