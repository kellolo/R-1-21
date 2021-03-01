import {SEND_MSG} from "@actions/messageAction";

const initialStore = {
    messages: {
        "1": [{author: "Оксана", text: "Привет чату 1!"}]
    }
};

export default function messagesReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG:
            const chat = store.messages[action.payload.chatId];
            const newMessage = {
                author: action.payload.author,
                text: action.payload.text
            } ;
            let temp = chat ? chat.concat(newMessage) : [newMessage];

            return Object.assign({}, store, {
                messages: {...store.messages, [action.payload.chatId]: temp}
            });
        default:
            return store;
    }
};