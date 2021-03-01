import { ADD_CHAT } from "@actions/chatActions";

const initialStore = {
    chats: [
        {id: "1", title: 'Чат 1'},
        {id: "2", title: 'Чат 2'},
        {id: "3", title: 'Чат 3'}
    ],
};

export default function chatReducer(store = initialStore, action) {
    switch(action.type) {
        case ADD_CHAT:
            return Object.assign({}, store, {
                chats: store.chats.concat({id: `${store.chats.length + 1}`, title: action.payload.title})
            });
        default:
            return store;
    }
}