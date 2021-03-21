const initialStore = {
    user: {}
};

export default function userReducer(store = initialStore, action) {
    switch(action.type) {
        case "LOAD_USER_SUCCESS":
            return Object.assign({}, store, {
                user: action.payload.data
            });
        default:
            return store;
    }
}