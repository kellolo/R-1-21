import { SEND_MESSAGE, sendMsg } from '@actions/messages';
import { newMsg } from '@actions/chats';

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.sender != 'BOT') {
                const timer = setInterval(() => {
                    const id = store.getState().chatsReducer.newMsg != -1 ? -1 : action.payload.chatID;
                    return store.dispatch(newMsg(id));
                }, 250);
                setTimeout(() => {
                    clearInterval(timer);
                    return store.dispatch(newMsg(-1));
                }, 2000);
            }
        }
    }
    return next(action);
};