import { getJSON, RSAA } from 'redux-api-middleware';

export const loadMessages = () => ({
	[RSAA]: {
		endpoint: '/api/messages/',
       method: 'GET',
       types: [
           'START_MESSAGES_LOADING',
           {
               type: 'SUCCESS_MESSAGES_LOADING',
               payload: async (action, state, res) => {
								 const result = await getJSON(res);
								 return { data: result };
							 }
           },
           'ERROR_MESSAGES_LOADING',
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