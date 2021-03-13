import { sendMessage } from '@actions/messages';

export default store => next => action => { 
    switch(action.type) {
        case 'SEND_MESSAGES_SUCCESS': {
            console.log(action.payload);
            if (action.payload.name == 'You') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Bot','kek', action.payload.chatId, action.payload.userId));
                }, 500);
            }
        }
    }
    return next(action);
};