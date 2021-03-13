export const SEND_MSG = "message/SEND_MSG";
export const LOAD_MSG = "message/LOAD_MSG";
export const DELETE_MSG = "message/DELETE_MSG";

export const sendMsg = (chatId, msgId, author, text) => ({
    type: SEND_MSG,
    payload: {
        chatId,
        msgId,
        author,
        text
    }
});

export const deleteMsg = (chatId, msgId) => ({
    type: DELETE_MSG,
    payload: { chatId, msgId }
});

export const loadMsg = () => ({
    type: LOAD_MSG
});