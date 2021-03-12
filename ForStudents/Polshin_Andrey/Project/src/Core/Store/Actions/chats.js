export const ADD_CHAT = '@@chats/ADD_CHAT';
export const addChat = (title) => ({
    type: ADD_CHAT,
    title
});

export const SEND_MESSAGE = '@@chats/SEND_MSG';
export const sendMsg = (id, sender, text, chatID) => ({
    type: SEND_MESSAGE,
    payload: {
        id,
        text,
        sender,
        ChatID
    }
});

export const IS_NEW_MSG = '@@chats/IS_NEW_MESSAGE';
export const newMsg = (chatID) => ({
    type: IS_NEW_MSG,
    chatID
});