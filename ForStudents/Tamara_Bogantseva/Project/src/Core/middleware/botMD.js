
import { sendMessage } from '@actions/messages';

export default store => next => action => {
    switch (action.type) {
        case 'SEND_MESSAGES_SUCCES': {
            console.log(store.getState());
            if (action.payload.data.name == 'Leia') {
                setTimeout(() => {
                    const user = store.getState().userReducer.user.id;
                    const chat = store.getState().chatsReducer.activeChat; //ничего лучше не придумала 
                    const payload = {
                        name: 'C-3PO',
                        text: 'I am fluent in over six million forms of communication',
                        date: new Date().toLocaleTimeString()
                    };
                    return store.dispatch(sendMessage(payload, chat, user));
                }, 500);
            }
        }
    }
    return next(action);
};