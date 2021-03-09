import update from "react-addons-update";

const storeMessages = {

    messages: {
        "0": [{ name: 'one', text: 'Hey!', chatId:'0', date: '01.01.2021' }, { name: 'one', text: 'Вася', chatId:'0', date: '01.01.2021' }],
        "1": [{ name: 'one', text: 'How are you?', chatId:'1', date: '01.01.2021' }, { name: 'one', text: 'Эдик', chatId:'1', date: '01.01.2021' }],
        "2": [{ name: 'one', text: 'Максим', chatId:'2', date: '01.01.2021' }, { name: 'one', text: 'How are you?', chatId:'2', date: '01.01.2021' }],
     }

/*
    messages: [
        { name: 'one', text: 'Hey!', date: '' }, 
        { name: 'one', text: 'How are you?', date: '' },
        { name: 'one', text: 'Вася', date: '' },
        { name: 'one', text: 'Эдик', date: '' },
        { name: 'one', text: 'Максим', date: '' },
        { name: 'one', text: 'Чокаво', date: '' },
    ]
*/

/*
    messages: {
       "0": { name: 'one', text: 'Hey!', date: '' }, 
       "1": { name: 'one', text: 'How are you?', date: '' },
       "2": { name: 'one', text: 'Вася', date: '' },
       "3": { name: 'one', text: 'Эдик', date: '' },
       "4": { name: 'one', text: 'Максим', date: '' },
       "5": { name: 'one', text: 'Чокаво', date: '' },
    }
*/
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'LOAD_MSG': {
            return store;
        }

        case 'SEND_MSG': {
            const msg = action.payload;
            return update(store, { 
                messages: { 
                    [action.payload.chatId]: {
                        $push: [ msg ]} }});
        }

        default: {
            return store;
        }
    }
};