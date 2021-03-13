import { highlight, unhighlight } from '@actions/chats';

export default store => next => action => { 
    if (action.type == 'SEND_MESSAGES_SUCCESS') {
        store.dispatch(highlight(action.payload.name, action.payload.chatId));
        setTimeout(() => {
            store.dispatch(unhighlight(action.payload.name, action.payload.chatId)); 
        }, 1000);
    }
    

/*    
    switch(action.type) {
        case 'SEND_MSG': {
            if (action.payload.name != 'You') {
                return store.dispatch(highlight(action.payload.name, action.payload.chatId)); 
            }
        };

        case 'SEND_MSG': {
            if (action.payload.name != 'You') {
                return setTimeout(() => {
                    store.dispatch(unhighlight(action.payload.name, action.payload.chatId)); 
                }, 1000);
            }
        }

    }
*/
    return next(action);
};