export const sendMessage = (chatId, messageId, text, name) => ({
	type: 'SEND_MSG',
	chatId,
	messageId,
	text,
	name
});