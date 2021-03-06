import { getJSON, RSAA } from "redux-api-middleware";

export const loadUser = () => ({
    [RSAA]: {
        endpoint: '/api/me/',
        method: 'GET',
        types: [
            'LOAD_USER_REQUEST',
            {
                type: 'LOAD_USER_SUCCESS',
                payload: async (action, state, responce) => {
                    const res = await getJSON(responce);
                    return { data: JSON.parse(res) };
                }
            },
            'LOAD_USER_FAILURE'
        ]
    }
});