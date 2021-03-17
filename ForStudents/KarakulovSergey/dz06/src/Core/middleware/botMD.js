import { sendMessage } from '@actions/messages';

export default store => next => action => {
    switch(action.type) {
        case 'SEND_MSG': {
            if(action.payload.name == 'Username'){
                setTimeout(() => {
                    return store.dispatch(sendMessage('bot', 'я бот'));
                }, 500);
            }
        }
    }
    return next(action);
}