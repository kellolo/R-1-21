import { getJSON, RSAA } from "redux-api-middleware";


export const loadMessages = (userId, chatId) => ({
    [RSAA]: {
        endpoint: `/api/messages/${userId}/${chatId}`,
        method: 'GET',
        types: [
            'LOAD_MESSAGES_REQUEST',           
            {
                type: 'LOAD_MESSAGES_SUCCESS',
                payload: async (action, state, responce) => {
                    const res = await getJSON(responce);
                    return { data: JSON.parse(res) };
                }
            },
            'LOAD_MESSAGES_FAILURE'
        ]
    }
});

export const openNewChat = () => ({
    type: 'LOAD_MESSAGES_REQUEST',
    payload: {}
})

export const sendMessage = (name, text, chatId, userId) => ({
    [RSAA]: {
        endpoint: `/api/messages/${userId}/${chatId}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ name, text, chatId, date: new Date().toLocaleDateString() }),
        types: [
            'SEND_MESSAGES_REQUEST',           
            {
                type: 'SEND_MESSAGES_SUCCESS',
                payload: { name, text, chatId, date: new Date().toLocaleDateString(), userId }
            },
            'SEND_MESSAGES_FAILURE'
        ]
    }
/*
    type: 'SEND_MSG',
    payload: { name, text, chatId, date: new Date().toLocaleDateString() }
*/
});

export const addMessageStore = (chatId) => ({
    type: 'ADD_MSG_STORE',
    payload: { [chatId]: [] }
});

