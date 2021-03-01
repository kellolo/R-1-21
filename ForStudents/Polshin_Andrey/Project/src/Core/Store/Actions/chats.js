
export const addChat = (title) => ({
    type: 'ADD_CHAT',
    title
});

export const addMsgToChat = (chatID, msgID) => ({
    type: 'ADD_MSG_TO_CHAT',
    chatID,
    msgID
});
