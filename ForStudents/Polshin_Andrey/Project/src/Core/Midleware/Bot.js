import { ADD_MSG, addMsgToChat } from '@actions/chats';
import { CREATE_MESSAGE, craeteMsg } from '@actions/messages';

export default store => next => action => {
    switch (action.type) {
        case ADD_MSG: {
            if (action.sender != 'BOT') {
                setTimeout(() => {
                    const id = +action.msgID + 1;
                    store.dispatch(craeteMsg(id, 'BOT', 'Hello I am Bot'));
                    return store.dispatch(addMsgToChat(action.chatID, id));
                }, 250);
            }
        }
    }
    return next(action);
};