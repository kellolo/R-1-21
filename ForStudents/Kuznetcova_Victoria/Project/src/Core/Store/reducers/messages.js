const storeMessages = {
    messages: [
        { name: "one", text: "Hey!" },
        { name: "one", text: "How are you?" },
    ],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MSG': {
            // store.messages.push(action.par);
            // return store.messages;
            return store;
        }

        default: {
            return store;
        }
    }
};
