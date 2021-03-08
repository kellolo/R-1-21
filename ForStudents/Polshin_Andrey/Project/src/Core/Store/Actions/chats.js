export const ADD_CHAT = '@@chats/ADD_CHAT';
export const ADD_MSG = '@@chats/SEND_MSG';

export const addChat = (title) => ({
    type: ADD_CHAT,
    title
});

export const addMsgToChat = (chatID, msgID) => ({
    type: ADD_MSG,
    chatID,
    msgID
});
