import update from 'react-addons-update';

const storeMessages = {
    messages: []
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MESSAGES_SUCCES': {
            return update(store, {
                messages: { $set: action.payload.data }
            });
        }

        case 'SEND_MESSAGES_SUCCES': {
            const msg = action.payload.data;
            return update(store, { messages: { $push: [msg] } });
        }

        case 'DELETE_MSG': {
            return update(store, { messages: { $set: [] } }) ////если будет время переделать
        }

        default: {
            return store;
        }
    }
};