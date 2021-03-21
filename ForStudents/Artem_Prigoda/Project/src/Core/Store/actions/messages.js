import { getJSON, RSAA } from 'redux-api-middleware';

export const loadMessages = (user, chat) => ({
	[RSAA]: {
		endpoint: `/api/messages/?user=${user}&chat=${chat}`,
       method: 'GET',
       types: [
           'LOAD_MESSAGES_REQUEST',
           {
               type: 'LOAD_MESSAGES_SUCCESS',
               payload: async (action, state, res) => {
								 const result = await getJSON(res);
								 return { data: JSON.parse(result) };
							 }
           },
           'LOAD_MESSAGES_FAILURE',
       ],
	}
});


export const sendMessage = (chatId, messageId, text, name) => ({
	type: 'SEND_MSG',
	chatId,
	messageId,
	text,
	name
});