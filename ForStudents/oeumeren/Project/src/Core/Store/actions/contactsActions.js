import { RSAA, getJSON } from "redux-api-middleware";

export const removeContact = (id) => ({
    type: "REMOVE_CONTACT",
    payload: {
        id
    }
});

export const loadContacts = (userId) => ({
    [RSAA]: {
        endpoint: `/api/contacts/${userId}`,
        method: "GET",
        types: [
            "LOAD_CONTACTS_REQUEST",
            {
                type: "LOAD_CONTACTS_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return {data: JSON.parse(res)};
                }
            },
            "LOAD_CONTACTS_FAILURE"
        ]
    }
});