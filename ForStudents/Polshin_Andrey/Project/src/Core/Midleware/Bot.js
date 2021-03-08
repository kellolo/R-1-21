import { SEND_MESSAGE, sendMsg } from '@actions/messages';

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.sender != 'BOT') {
                setTimeout(() => {
                    const id = action.payload.id + 1;
                    return store.dispatch(sendMsg(id, 'BOT', 'Hellow ^)', action.payload.chatID));
                }, 500);
            }
        }
    }
    return next(action);
};