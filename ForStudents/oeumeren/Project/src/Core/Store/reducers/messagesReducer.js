import { SEND_MSG, DELETE_MSG } from "@actions/messageAction";

const initialStore = {
    messages: {
        "1": [{msgId: "1", author: "Оксана", text: "Привет чату 1!"}]
    }
};

export default function messagesReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG:
            const chat = store.messages[action.payload.chatId];
            const newMessage = {
                msgId: action.payload.msgId,
                author: action.payload.author,
                text: action.payload.text
            } ;
            let temp = chat ? chat.concat(newMessage) : [newMessage];

            return Object.assign({}, store, {
                messages: {...store.messages, [action.payload.chatId]: temp}
            });
        case DELETE_MSG:
            const newChat = store.messages[action.payload.chatId].filter(msg => msg.msgId !== action.payload.msgId);

            return Object.assign({}, store, {
                messages: {...store.messages, [action.payload.chatId]: newChat}
            });
        default:
            return store;
    }
};