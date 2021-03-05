
const storeMessages = {
    messages: [
        {name: 'Me', text: 'Hey!', avatar: null, styleName: 'msg__user'}, 
        {name: 'two', text: 'How are you?', avatar: null, styleName: 'msg__companion'}
    ],
};

export default (store = storeMessages, action) => {
    switch(action.type) {
        case 'LOAD_MSG': {
          return store;
        }
        default: {
          return store;
        }
    }
};