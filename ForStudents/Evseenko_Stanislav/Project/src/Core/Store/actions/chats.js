export const loadChats = () => ({
  type: 'LOAD_CHATS',
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