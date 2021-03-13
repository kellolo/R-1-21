import { RSAA, getJSON } from 'redux-api-middleware';

export const loadMessages = (user, chat) => ({
  [RSAA]: {
    endpoint: `/api/messages/?user=${user}&chat=${chat}`,
    method: 'GET',
    // body: { id: 1 },
    types: [
      'LOAD_MESSAGES_REQUEST', 
      {
        type: 'LOAD_MESSAGES_SUCCESS',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          return { data: JSON.parse(res) }; 
        },
      }, 
      'LOAD_MESSAGES_FAILURE'
    ]
  }
});

export const sendMessage = (name, text) => ({
  type: 'SEND_MSG',
  payload: { name, text, date: new Date() }
});

// export const filterMessages = (searchWord) => ({
//   type: 'FILTER_MSG',
//   searchWord
// });