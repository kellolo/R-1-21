export const loadMessages = () => ({
    type: 'LOAD_MSG',
});

export const sendMessage = (text) => ({
    type: 'SEND_MESSAGE',
    text,
});