const storeMessages = {
    messages: [
        { name: "Бот", text: "Привет" },
        { name: "Бот", text: "Как у тебя дела?" },
    ],
};

export default (store = storeMessages, action) => {
    switch (action.type) {
        case 'LOAD_MSG': {
            return store;
        };
        default: {
            return store;
        };
    };
};