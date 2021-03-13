import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = id => ({
    [RSAA]: {
        endpoint: '/api/app' + id,
        method: 'GET',
        types: [
            'LOAD_CHATS_REQUEST',
            {
                type: 'LOAD_CHATS_SUCCESS',
                payload: async (action, state, responce) => {
                    const res = await getJSON(responce);
                    console.log(res);
                    return { data: res };
                },
            },
            'LOAD_CHATS_FAILURE'
        ]
    }
});