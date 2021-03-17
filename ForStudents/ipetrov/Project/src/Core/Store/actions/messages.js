import { getJSON, RSAA } from "redux-api-middleware";


export const loadMessages = (id) => ({
    [RSAA]: {
        endpoint: `/api/messages/${id}`,
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

export const sendMessage = (name, text, chatId) => ({
    type: 'SEND_MSG',
    payload: { name, text, chatId, date: new Date().toLocaleDateString() }
});

export const addMessageStore = (chatId) => ({
    type: 'ADD_MSG_STORE',
    payload: { [chatId]: [] }
});

