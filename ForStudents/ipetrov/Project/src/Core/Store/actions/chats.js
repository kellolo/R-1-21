import { getJSON, RSAA } from "redux-api-middleware";


export const loadChat = () => ({
    [RSAA]: {
        endpoint: '/api/chats/',
        method: 'GET',
        types: [
            'LOAD_CHATS_REQUEST',
            {
                type: 'LOAD_CHATS_SUCCESS',
                payload: async (action, state, responce) => {
                    const res = await getJSON(responce);
                    return { data: JSON.parse(res) };
                }
            },
            'LOAD_CHATS_FAILURE'
        ]
    }
});

export const addChat = (chatId, name) => ({
    type: 'ADD_CHT',
    payload: { chatId, name }
});

export const removeChat = (chatId) => ({
    type: 'REM_CHT',
    payload: { chatId }
});

export const highlight = (name, chatId) => ({
    type: 'HGHLGHT',
    payload: { name, chatId }
});

export const unhighlight = (name, chatId) => ({
    type: 'UNHGHLGHT',
    payload: { name, chatId }


});
