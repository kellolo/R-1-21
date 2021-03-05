export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title, userId) => ({
    type: ADD_CHAT,
    paramChat: {title, userId},
});
