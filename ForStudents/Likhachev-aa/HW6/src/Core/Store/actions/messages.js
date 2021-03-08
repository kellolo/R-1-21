export const sendMessages = (name, text, style, chatId) => ({
    type: 'SEND_MSG',
    paramMsg: {name, text, style, chatId},
});