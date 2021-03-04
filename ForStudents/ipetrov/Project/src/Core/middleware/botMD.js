import { sendMessage } from '@actions/messages';

export default store => next => action => { 
    switch(action.type) {
        case 'SEND_MSG': {
            if (action.payload.name == 'You') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Bot','kek'));
                }, 500);
            }

        }
    }
    return next(action);
};