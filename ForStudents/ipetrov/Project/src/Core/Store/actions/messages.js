export const loadMessages = () => ({
    type: 'LOAD_MSG'
});

export const sendMessage = (name, text, chatId) => ({
    type: 'SEND_MSG',
    payload: { name, text, chatId, date: new Date().toLocaleDateString() }
});