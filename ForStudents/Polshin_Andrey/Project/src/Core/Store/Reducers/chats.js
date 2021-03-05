import update from 'react-addons-update';
import { ADD_CHAT, ADD_MSG } from '@actions/chats';

const storeChats = {
    chats: {
        0: { id: '0', title: 'Чат 0', messageList: [0] },
        1: { id: '1', title: 'Чат 1', messageList: [1] },
        2: { id: '2', title: 'Чат 2', messageList: [1] }
    }
};

export default (store = storeChats, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const id = (Object.keys(store.chats).length + 1).toString();
            return update(store, {
                chats: {
                    $merge: {
                        [id]: {
                            id: id,
                            title: action.title,
                            messageList: [0]
                        }
                    }
                }
            });
        }
        case ADD_MSG: {
            return update(store, {
                chats: {
                    [action.chatID]: {
                        messageList: {
                            $push: [action.msgID]
                        }
                    }
                }
            });
        }
        default: {
            return store;
        }
    }
}
