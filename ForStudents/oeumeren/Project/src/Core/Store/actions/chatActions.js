import { RSAA, getJSON } from "redux-api-middleware";

export const ADD_CHAT = "chat/ADD_CHAT";
export const HIGHLIGHT_CHAT = "chat/HIGHLIGHT_CHAT";

export const addChat = (title) => ({
    type: ADD_CHAT,
    payload: {
        title
    }
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: "/api/chats/",
        method: "GET",
        types: [
            "LOAD_CHATS_REQUEST",
            {
                type: "LOAD_CHATS_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return {data: JSON.parse(res)};
                }
            },
            "LOAD_CHATS_FAILURE"
        ]
    }
});

export const highlightChat = (chatId, isHighlighted) => ({
    type: HIGHLIGHT_CHAT,
    payload: {
        chatId,
        isHighlighted
    }
});