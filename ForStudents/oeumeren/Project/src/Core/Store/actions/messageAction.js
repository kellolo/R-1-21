import {getJSON, RSAA} from "redux-api-middleware";

export const SEND_MSG = "message/SEND_MSG";
export const LOAD_MSG = "message/LOAD_MSG";
export const DELETE_MSG = "message/DELETE_MSG";

export const loadMsg = (chatId) => ({
    [RSAA]: {
        endpoint: `/api/messages/${chatId}`,
        method: "GET",
        types: [
            "LOAD_MESSAGES_REQUEST",
            {
                type: "LOAD_MESSAGES_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return {chatId, data: JSON.parse(res)};
                }
            },
            "LOAD_MESSAGES_FAILURE"
        ]
    }
});

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