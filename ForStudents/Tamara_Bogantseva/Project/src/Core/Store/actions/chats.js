export const loadChats = () => ({
    type: 'LOAD_CHATS',
});

export const addChats = (name) => ({
    type: 'ADD_CHATS',
    payload: { name, text: '', id: Date.now() }
});