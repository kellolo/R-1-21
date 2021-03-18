import { RSAA, getJSON } from "redux-api-middleware";

export const loadUser = () => ({
    [RSAA]: {
        endpoint: "/api/users/1",
        method: "GET",
        types: [
            "LOAD_USER_REQUEST",
            {
                type: "LOAD_USER_SUCCESS",
                payload: async (action, state, response) => {
                    const res = await getJSON(response);
                    return {data: JSON.parse(res)};
                }
            },
            "LOAD_USER_FAILURE"
        ]
    }
});