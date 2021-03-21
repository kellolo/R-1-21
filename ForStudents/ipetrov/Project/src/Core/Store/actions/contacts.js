import { getJSON, RSAA } from "redux-api-middleware";


export const loadContacts = (id) => ({
    [RSAA]: {
        endpoint: `/api/contacts/${id}`,
        method: 'GET',
        types: [
            'LOAD_CONTACTS_REQUEST',
            {
                type: 'LOAD_CONTACTS_SUCCESS',
                payload: async (action, state, responce) => {
                    const res = await getJSON(responce);
                    return { data: JSON.parse(res) };
                }
            },
            'LOAD_CONTACTS_FAILURE'
        ]
    }
});


export const removeContact = (chatId) => ({
    type: 'REMOVE_CTC',
    payload: { chatId }
});

export const addContact = (chatId, name) => ({
    type: 'ADD_CTC',
    payload: { chatId, name }
});