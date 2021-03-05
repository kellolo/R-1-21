
const storeUsers = {
    users: [
        { id: '0', name: 'Andrew', avatar: null },
        { id: '1', name: 'Bart', avatar: null },
        { id: '2', name: 'Tom', avatar: null },
        { id: '3', name: 'John', avatar: null },
    ],
}

export default (store = storeUsers) => {
    return store;
}