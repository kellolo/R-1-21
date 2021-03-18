import { RSAA, getJSON } from 'redux-api-middleware';

export const loadMessages = (user, chat) => ({
    [RSAA]: {
        endpoint: `/api/messages/?user=${user}&chat=${chat}`,
        method: 'GET',
        types: [
            'LOAD_MESSAGES_REQUEST',
            {
                type: 'LOAD_MESSAGES_SUCCES',
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return { data: JSON.parse(res) };
                },
            },
            'LOAD_MESSAGES_FAILURE'
        ]
    }
});

export const sendMessage = (reqBody, chat, user) => ({
    [RSAA]: {
        endpoint: `/api/messages`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...reqBody, chat, user }),
        types: [
            'SEND_MESSAGES_REQUEST',
            {
                type: 'SEND_MESSAGES_SUCCES',
                payload: async (action, state, response) => {
                    try {
                        const res = await getJSON(response);
                        if (res.ok) {
                            return { data: reqBody };
                        }
                    }
                    catch (err) {
                        return { data: { name: 'System', text: 'Failure by sending message' } }
                    }
                },
            },
            'SEND_MESSAGES_FAILURE'
        ]
    }
});

//если будет время доделать 
export const deleteMessages = () => ({
    type: 'DELETE_MSG',
    payload: {}
});