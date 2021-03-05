import update from 'react-addons-update';

const activeChats = {
    activeChats: [
        { name: 'Darth Vader', text: 'I am your father', id: '1', img: '../../src/resources/img/avatars/darth_vader.jpeg' },
        { name: 'Chewbacca', text: 'Arrrrw', id: '2', img: '../../src/resources/img/avatars/chewbacca.jpg' },
        { name: 'Luke Skywalker', text: 'I am Here To Rescue You.', id: '3', img: '../../src/resources/img/avatars/luke.jpg' }
    ]
};

export default (store = activeChats, action) => {
    switch (action.type) {
        case 'LOAD_CHATS': {
            return store;
        }

        case 'ADD_CHATS': {
            const newChat = action.payload;
            return update(store, { activeChats: { $push: [newChat] } });
        }

        default: {
            return store;
        }
    }
};