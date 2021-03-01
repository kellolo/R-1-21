export const sendMessages = (name, text, style, chatId) => ({
    type: 'SEND_MSG',
    name,
    text,
    style,
    chatId,
});