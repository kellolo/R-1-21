export const loadMessages = () => ({
  type: 'LOAD_MSG',
});

export const sendMessage = (chatId, messageId, name, text) => ({
  type: 'SEND_MSG',
  chatId,
  messageId,
  name,
  text,
});

export const writeText = (text) => ({
  type: 'WRITE_TEXT',
  text
});

export const readText = () => ({
  type: 'READ_TEXT',
});