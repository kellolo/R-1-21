import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = id => ({
    [RSAA]: {
        endpoint: `/api/chats/${id}`,
        method: 'GET',
        types: [
            'LOAD_CHATS_REQUEST',
            {
                type: 'LOAD_CHATS_SUCCES',
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) };
                },
            },
            'LOAD_CHATS_FAILURE'
        ]
    }
});

export const addChats = (reqBody, userId) => ({
    [RSAA]: {
        endpoint: `/api/chats/`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...reqBody, userId }),
        types: [
            'ADD_CHATS_REQUEST',
            {
                type: 'ADD_CHATS_SUCCES',
                payload: async (action, state, response) => {
                    try {
                        const res = await getJSON(response)
                        if (res.ok) {
                            return { data: reqBody }
                        }
                    }
                    catch (err) {
                        return { data: { name: '', text: 'Failure by loading new contact' } }
                    }
                },
            },
            'ADD_CHATS_FAILURE'
        ]
    }
});

export const getActiveChat = url => ({
    type: 'GET_CHAT_ID',
    payload: { id: url ? url : null }
});