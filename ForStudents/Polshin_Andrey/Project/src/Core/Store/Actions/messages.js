export const LOAD_MESSAGE = '@@messages/LOAD_MSG';
export const loadMessages = () => ({
  type: LOAD_MESSAGE,
});

export const SEND_MESSAGE = '@@messages/SEND_MSG';
export const sendMsg = (id, sender, text, chatID) => ({
  type: SEND_MESSAGE,
  payload: {
    id,
    text,
    sender,
    chatID
  }
});
