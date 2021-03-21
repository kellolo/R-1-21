import { RSAA, getJSON } from 'redux-api-middleware';

export const loadUser = (login) => ({
  [RSAA]: {
    endpoint: `/api/${login}/`,
    method: 'GET',
    types: [
      'LOAD_USER_REQUEST', 
      {
        type: 'LOAD_USER',
        payload: async (action, state, response) => {
          const res = await getJSON(response);
          return { data: JSON.parse(res) };
        },
      }, 
      'LOAD_USER_FAILURE'
    ]
  }
});