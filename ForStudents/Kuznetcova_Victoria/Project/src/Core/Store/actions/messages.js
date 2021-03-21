import { RSAA, getJSON } from 'redux-api-middleware';

export const loadMessages = (user, chat) => ({
  [RSAA]: {
    endpoint: `/api/messages/?user=${user}&chat=${chat}`,
    method: 'GET',
    types: [
      'LOAD_MESSAGES_REQUEST',
      {
        type: 'LOAD_MESSAGES_SUCCESS',
        payload: async (action, state, response) => {
          const res = await getJSON(response);
          return { data:JSON.parse(res) };
        }
      },
      'LOAD_MESSAGES_FAILURE'
    ]
  }
});

export const sendMessages = (name, text) => ({
  type: 'SEND_MSG',
  payload: { name, text, date: new Date() }
});