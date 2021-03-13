export const loadMessages = () => ({
  type: 'LOAD_MSG',
});

export const sendMessage = (messageId, name, text, time) => ({
  type: 'SEND_MSG',
  messageId,
  name,
  text,
  time,
});

export const writeText = (text) => ({
  type: 'WRITE_TEXT',
  text
});

export const readText = () => ({
  type: 'READ_TEXT',
});