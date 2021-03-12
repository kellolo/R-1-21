const storeEmails = {
    emails: ['Игорь', 'Мария', 'Валя', 2323],
};

export default (store = storeEmails, action) => {
    switch (action.type) {
        case 'LOAD_EMAILS': {
            return store;
        };
        default: {
            return store;
        };
    };
};