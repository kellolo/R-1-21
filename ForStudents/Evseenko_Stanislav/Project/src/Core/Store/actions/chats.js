import { getJSON, RSAA } from 'redux-api-middleware';

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
          return { data: JSON.parse(res) };
        },
      },
      'LOAD_CHATS_FAILURE']
  }
});

export const updateChats = (chatId, messageId) => ({
  type: 'UPD_CHATS',
  chatId,
  messageId
});

export const addChat = (name, chatId) => ({
  type: 'ADD_CHAT',
  name,
  chatId
});

export const lastMessage = (chatId, text) => ({
  type: 'LAST_MSG',
  chatId,
  text
})