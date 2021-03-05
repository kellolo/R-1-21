export const ADD_CHAT = "chat/ADD_CHAT";
export const HIGHLIGHT_CHAT = "chat/HIGHLIGHT_CHAT";

export const addChat = (title) => ({
    type: ADD_CHAT,
    payload: {
        title
    }
});

export const highlightChat = (chatId, isHighlighted) => ({
    type: HIGHLIGHT_CHAT,
    payload: {
        chatId,
        isHighlighted
    }
});