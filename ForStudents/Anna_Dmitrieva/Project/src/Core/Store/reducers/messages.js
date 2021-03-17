import update from "react-addons-update";

const options = { hour: 'numeric', minute: 'numeric' };

const storeMessages = {
    messages: [
        { name: "HR", text: "Гудбай", date: new Date().toLocaleString('ru-RU', options) },
        { name: "HR", text: "Мы Вам перезвоним", date: new Date().toLocaleString('ru-RU', options)  },
    ],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MSG': {
            return store;
        };
        case 'SEND_MSG': {
            const msg = action.payload;
            return update(store, { messages: { $push: [ msg ] } } );
        };
        default: {
            return store;
        };
    };
};