export const SEND_MSG = "message/SEND_MSG";
export const LOAD_MSG = "message/LOAD_MSG";

export const sendMsg = (chatId, author, text) => ({
    type: SEND_MSG,
    payload: {
        chatId,
        author,
        text
    }
});

export const loadMsg = () => ({
    type: LOAD_MSG
});