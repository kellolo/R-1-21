import { sendMessage } from '@actions/messages';

export default store => next => action => {
    switch (action.type) {
        case 'SEND_MSG': {
            if (action.payload.name == 'Анна') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('HR', 'gg'));
                }, 400);
            };
        };
    };
    return next(action);
};