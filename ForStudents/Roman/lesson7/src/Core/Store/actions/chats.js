/* export const loadChats = () => ({
    type: 'LOAD_CHATS',
  }); */

import { RSAA, getJSON } from 'redux-api-middleware';

export const loadChats = () => ({
  [RSAA]: {
    endpoint: '/api/chats/',
    method: 'GET',
    types: [
      'LOAD_CHATS_REQUEST', 
      {
        type: 'LOAD_CHATS_SUCCESS',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          console.log(res);
          return { data: JSON.parse(res) }; //reducer : action.payload.data
        },
        // pl: (action, state, responce) => getJSON(responce).then(data => ({ data }))
      }, 
      'LOAD_CHATS_FAILURE'
    ]
  }
});