import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '/api/chats/',
        method: 'GET',
        types: [
            "LOAD_CHATS_REQUEST",
            {
                type: "LOAD_CHATS_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    console.log(res);
                    return { data: JSON.parse(res) }; // reducer : action.payload.data
                },
            },
            "LOAD_CHATS_FAILURE"
        ]
    }

});

export const addChat = (title, userId) => ({
    type: 'ADD_CHAT',
    paramChat: {title, userId},
});

/* хранение данных в Redux store
export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title, userId) => ({
    type: ADD_CHAT,
    paramChat: {title, userId},
});
*/